# Backend Integration Guide

## Current Implementation

The questionnaire currently includes a **simulated backend integration** in `QuestionnaireFlow.tsx`. Here's how to connect it to your Python ML backend:

## 1. Replace the Mock API

Find this function in `src/components/QuestionnaireFlow.tsx`:

```typescript
// Simulated API call - replace with your actual backend endpoint
const submitQuestionnaire = async (answers: Answer[]): Promise<APIResponse> => {
  // Replace this entire function with:
  
  try {
    const response = await fetch('/api/questionnaire', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add any auth headers if needed
        // 'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        answers: answers,
        timestamp: new Date().toISOString(),
        sessionId: crypto.randomUUID() // Generate unique session ID
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Error:', error);
    return {
      success: false,
      error: 'Failed to connect to server. Please try again.'
    };
  }
};
```

## 2. Expected API Response Format

Your Python backend should return JSON in this format:

```json
{
  "success": true,
  "insights": [
    {
      "category": "Industry Analysis",
      "insight": "Based on your industry background, you have high potential for AI automation in customer service and data analysis.",
      "confidence": 92
    },
    {
      "category": "Experience Level", 
      "insight": "Your current AI knowledge level suggests you're ready for intermediate implementations with guided support.",
      "confidence": 88
    }
  ],
  "recommendations": [
    "Start with a pilot project in customer support automation",
    "Consider our API integration for existing systems",
    "Schedule a consultation for custom model development"
  ]
}
```

For errors:
```json
{
  "success": false,
  "error": "Error message here"
}
```

## 3. Python Flask/FastAPI Example

### FastAPI Example:

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import uuid
from datetime import datetime

app = FastAPI()

class Answer(BaseModel):
    questionId: int
    value: str

class QuestionnaireRequest(BaseModel):
    answers: List[Answer]
    timestamp: str
    sessionId: str

class AIInsight(BaseModel):
    category: str
    insight: str
    confidence: int

class QuestionnaireResponse(BaseModel):
    success: bool
    insights: Optional[List[AIInsight]] = None
    recommendations: Optional[List[str]] = None
    error: Optional[str] = None

@app.post(\"/api/questionnaire\", response_model=QuestionnaireResponse)
async def process_questionnaire(request: QuestionnaireRequest):\n    try:\n        # Extract answers for ML processing\n        answers_dict = {answer.questionId: answer.value for answer in request.answers}\n        \n        # Your ML model processing here\n        insights = analyze_with_ml_model(answers_dict)\n        recommendations = generate_recommendations(insights)\n        \n        return QuestionnaireResponse(\n            success=True,\n            insights=insights,\n            recommendations=recommendations\n        )\n    except Exception as e:\n        return QuestionnaireResponse(\n            success=False,\n            error=str(e)\n        )\n\ndef analyze_with_ml_model(answers):\n    # Your ML model logic here\n    # This is where you'd process the answers with your trained model\n    pass\n\ndef generate_recommendations(insights):\n    # Generate recommendations based on insights\n    pass\n```

### Flask Example:

```python
from flask import Flask, request, jsonify
from flask_cors import CORS\nimport uuid\nfrom datetime import datetime\n\napp = Flask(__name__)\nCORS(app)  # Enable CORS for frontend\n\n@app.route('/api/questionnaire', methods=['POST'])\ndef process_questionnaire():\n    try:\n        data = request.get_json()\n        answers = data.get('answers', [])\n        \n        # Convert to dict for easier processing\n        answers_dict = {answer['questionId']: answer['value'] for answer in answers}\n        \n        # Your ML model processing\n        insights = analyze_with_ml_model(answers_dict)\n        recommendations = generate_recommendations(insights)\n        \n        return jsonify({\n            'success': True,\n            'insights': insights,\n            'recommendations': recommendations\n        })\n    except Exception as e:\n        return jsonify({\n            'success': False,\n            'error': str(e)\n        }), 500\n\ndef analyze_with_ml_model(answers):\n    # Your ML model logic here\n    return [\n        {\n            'category': 'Industry Analysis',\n            'insight': 'Based on your responses, we detected high automation potential.',\n            'confidence': 92\n        }\n    ]\n\ndef generate_recommendations(insights):\n    return [\n        'Consider implementing automated workflows',\n        'Start with a pilot project'\n    ]\n\nif __name__ == '__main__':\n    app.run(debug=True)\n```

## 4. Environment Configuration

Add to your `.env` file:

```env\nVITE_API_URL=http://localhost:8000\n# or your production API URL\n# VITE_API_URL=https://your-api.com\n```

Then update the fetch URL in the frontend:

```typescript\nconst response = await fetch(`${import.meta.env.VITE_API_URL}/api/questionnaire`, {\n  // ... rest of the config\n});\n```

## 5. Question Data Structure\n\nYour ML model will receive answers in this format:\n\n```python\n# answers_dict will look like:\n{\n    1: \"John Doe\",           # Name\n    2: \"john@example.com\",   # Email  \n    3: \"Technology\",         # Industry\n    4: \"Intermediate\",       # AI Experience\n    5: \"I want to automate customer service with chatbots\"  # Challenges\n}\n```\n\n## 6. CORS Configuration\n\nMake sure your backend allows requests from your frontend domain:\n\n**FastAPI:**\n```python\nfrom fastapi.middleware.cors import CORSMiddleware\n\napp.add_middleware(\n    CORSMiddleware,\n    allow_origins=[\"http://localhost:5173\", \"https://your-frontend.com\"],\n    allow_credentials=True,\n    allow_methods=[\"*\"],\n    allow_headers=[\"*\"],\n)\n```\n\n**Flask:**\n```python\nfrom flask_cors import CORS\nCORS(app, origins=[\"http://localhost:5173\", \"https://your-frontend.com\"])\n```\n\n## 7. Testing the Integration\n\n1. Start your Python backend server\n2. Update the API URL in the frontend\n3. Test the questionnaire flow\n4. Check browser developer tools for any CORS or network errors\n\n## 8. Production Deployment\n\n- Deploy your Python backend to a cloud service (AWS, GCP, Azure, etc.)\n- Update the `VITE_API_URL` environment variable to your production API URL\n- Ensure HTTPS is enabled for both frontend and backend\n- Add proper error logging and monitoring\n\nThe frontend is now ready to integrate with your Python ML backend! 🚀