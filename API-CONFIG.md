# API Configuration for Zeal AI Frontend

This file shows how to configure the API endpoints for the questionnaire system.

## Environment Variables

Create a `.env` file in the root directory:

```bash
# Local development
VITE_API_URL=http://localhost:8000

# Production
# VITE_API_URL=https://your-api-domain.com
```

## API Types

Add these TypeScript types to your frontend (`src/types/api.ts`):

```typescript
export interface Answer {
  questionId: number;
  value: string;
}

export interface QuestionnaireRequest {
  answers: Answer[];
  timestamp: string;
  sessionId: string;
}

export interface AIInsight {
  category: string;
  insight: string;
  confidence: number;
}

export interface QuestionnaireResponse {
  success: boolean;
  insights?: AIInsight[];
  recommendations?: string[];
  error?: string;
}
```

## Updated API Function

Replace the mock function in `QuestionnaireFlow.tsx` with this production-ready version:

```typescript
import { QuestionnaireRequest, QuestionnaireResponse } from '../types/api';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export const submitQuestionnaire = async (answers: Answer[]): Promise<QuestionnaireResponse> => {
  const requestData: QuestionnaireRequest = {
    answers,
    timestamp: new Date().toISOString(),
    sessionId: crypto.randomUUID()
  };

  try {
    const response = await fetch(`${API_URL}/api/questionnaire`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Add authentication if needed:
        // 'Authorization': `Bearer ${getAuthToken()}`
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP ${response.status}: ${errorText}`);
    }

    const data: QuestionnaireResponse = await response.json();
    return data;

  } catch (error) {
    console.error('API Error:', error);
    
    // Return a user-friendly error
    return {
      success: false,
      error: error instanceof Error 
        ? `Connection failed: ${error.message}` 
        : 'Network error. Please check your connection and try again.'
    };
  }
};
```

## Health Check Endpoint

Add a health check to verify your backend connection:

```typescript
export const healthCheck = async (): Promise<boolean> => {
  try {
    const response = await fetch(`${API_URL}/health`);
    return response.ok;
  } catch {
    return false;
  }
};
```

## Error Handling

The frontend handles these error scenarios:
- Network connectivity issues
- Server errors (500, 502, etc.)
- Timeout errors
- JSON parsing errors
- Authentication failures

## Security Considerations

1. **HTTPS**: Always use HTTPS in production
2. **CORS**: Configure proper CORS headers on your backend
3. **Rate Limiting**: Implement rate limiting to prevent abuse
4. **Input Validation**: Validate all inputs on the backend
5. **Authentication**: Add API keys or JWT tokens if needed

## Testing

You can test the API integration using curl:

```bash
curl -X POST ${API_URL}/api/questionnaire \
  -H "Content-Type: application/json" \
  -d '{
    "answers": [
      {"questionId": 1, "value": "Test User"},
      {"questionId": 2, "value": "test@example.com"}
    ],
    "timestamp": "2024-01-01T00:00:00Z",
    "sessionId": "test-session-123"
  }'
```