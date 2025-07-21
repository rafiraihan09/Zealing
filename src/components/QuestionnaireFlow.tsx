import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

// Sample questions - you can replace these with your own
const questions = [
  {
    id: 1,
    type: "text",
    question: "What's your name?",
    placeholder: "Enter your full name",
    required: true,
  },
  {
    id: 2,
    type: "email",
    question: "What's your email address?",
    placeholder: "example@email.com",
    required: true,
  },
  {
    id: 3,
    type: "radio",
    question: "What industry do you work in?",
    options: [
      "Technology",
      "Healthcare",
      "Finance",
      "Education",
      "Retail",
      "Manufacturing",
      "Other",
    ],
    required: true,
  },
  {
    id: 4,
    type: "radio",
    question: "How familiar are you with AI/ML?",
    options: [
      "Complete beginner",
      "Some experience",
      "Intermediate",
      "Advanced",
      "Expert",
    ],
    required: true,
  },
  {
    id: 5,
    type: "textarea",
    question: "What specific AI challenges are you looking to solve?",
    placeholder: "Describe your use case in detail...",
    required: false,
  },
];

interface Answer {
  questionId: number;
  value: string;
}

interface AIInsight {
  category: string;
  insight: string;
  confidence: number;
}

interface APIResponse {
  success: boolean;
  insights?: AIInsight[];
  recommendations?: string[];
  error?: string;
}

// Simulated API call - replace with your actual backend endpoint
const submitQuestionnaire = async (answers: Answer[]): Promise<APIResponse> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Simulate random success/failure for demo purposes
  if (Math.random() > 0.1) {
    return {
      success: true,
      insights: [
        {
          category: "Industry Analysis",
          insight: "Based on your industry background, you have high potential for AI automation in customer service and data analysis.",
          confidence: 92
        },
        {
          category: "Experience Level",
          insight: "Your current AI knowledge level suggests you're ready for intermediate implementations with guided support.",
          confidence: 88
        },
        {
          category: "Use Case Potential",
          insight: "The challenges you described align well with our natural language processing capabilities.",
          confidence: 95
        }
      ],
      recommendations: [
        "Start with a pilot project in customer support automation",
        "Consider our API integration for existing systems",
        "Schedule a consultation for custom model development"
      ]
    };
  } else {
    return {
      success: false,
      error: "Network error. Please try again."
    };
  }
};

export function QuestionnaireFlow() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState<APIResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const handleNext = async () => {
    if (currentQuestion.required && !currentAnswer.trim()) return;

    // Save the current answer
    const newAnswers = answers.filter(a => a.questionId !== currentQuestion.id);
    newAnswers.push({ questionId: currentQuestion.id, value: currentAnswer });
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Load existing answer for next question
      const existingAnswer = newAnswers.find(a => a.questionId === questions[currentQuestionIndex + 1].id);
      setCurrentAnswer(existingAnswer?.value || "");
    } else {
      // Submit to backend
      setIsSubmitting(true);
      setError(null);
      
      try {
        const response = await submitQuestionnaire(newAnswers);
        setApiResponse(response);
        
        if (response.success) {
          setIsCompleted(true);
        } else {
          setError(response.error || "An error occurred while processing your responses.");
        }
      } catch (err) {
        setError("Network error. Please check your connection and try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const existingAnswer = answers.find(a => a.questionId === questions[currentQuestionIndex - 1].id);
      setCurrentAnswer(existingAnswer?.value || "");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && currentQuestion.type !== "textarea" && !isSubmitting) {
      handleNext();
    }
  };

  const resetQuestionnaire = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setCurrentAnswer("");
    setIsCompleted(false);
    setIsSubmitting(false);
    setApiResponse(null);
    setError(null);
  };

  const retrySubmission = () => {
    setError(null);
    handleNext();
  };

  if (isCompleted && apiResponse?.success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="max-w-4xl mx-auto text-center space-y-8 p-8 fade-in-up">
          <div className="space-y-4">
            <CheckCircle className="h-16 w-16 text-primary mx-auto float" />
            <h2 className="text-4xl font-bold text-foreground">AI Analysis Complete!</h2>
            <p className="text-xl text-muted-foreground">
              Our machine learning models have analyzed your responses. Here are your personalized insights:
            </p>
          </div>
          
          {/* AI Insights */}
          {apiResponse.insights && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {apiResponse.insights.map((insight, index) => (
                <div key={index} className="bg-card border rounded-lg p-6 text-left space-y-3">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg">{insight.category}</h3>
                    <span className="text-sm bg-primary/10 text-primary px-2 py-1 rounded">
                      {insight.confidence}% confidence
                    </span>
                  </div>
                  <p className="text-muted-foreground">{insight.insight}</p>
                </div>
              ))}
            </div>
          )}

          {/* Recommendations */}
          {apiResponse.recommendations && (
            <div className="bg-card border rounded-lg p-6 text-left space-y-4">
              <h3 className="text-xl font-semibold">Recommended Next Steps:</h3>
              <ul className="space-y-2">
                {apiResponse.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Your Responses */}
          <div className="bg-card border rounded-lg p-6 space-y-4">
            <h3 className="text-lg font-semibold">Your Responses:</h3>
            <div className="space-y-3 text-left">
              {answers.map((answer, index) => {
                const question = questions.find(q => q.id === answer.questionId);
                return (
                  <div key={answer.questionId} className="border-b pb-2">
                    <p className="text-sm text-muted-foreground">{index + 1}. {question?.question}</p>
                    <p className="font-medium">{answer.value}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <Button onClick={resetQuestionnaire} variant="outline" size="lg">
            Start Over
          </Button>
        </div>
      </div>
    );
  }

  // Show submission loading state
  if (isSubmitting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="text-center space-y-6 fade-in-up">
          <Loader2 className="h-16 w-16 text-primary mx-auto animate-spin" />
          <h2 className="text-3xl font-bold">Analyzing Your Responses</h2>
          <p className="text-muted-foreground max-w-md">
            Our AI models are processing your answers to generate personalized insights...
          </p>
          <div className="bg-card/50 border rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              • Running natural language processing...<br/>
              • Analyzing response patterns...<br/>
              • Generating recommendations...
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
      <div className="max-w-2xl mx-auto w-full p-8 fade-in-up">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Error Alert */}
        {error && (
          <Alert className="mb-6" variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
              {error}
              <Button 
                variant="outline" 
                size="sm" 
                className="ml-2" 
                onClick={retrySubmission}
              >
                Try Again
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {/* Question */}
        <div className="space-y-8 slide-in-right">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground leading-tight">
              {currentQuestion.question}
            </h2>
            {currentQuestion.required && (
              <p className="text-sm text-muted-foreground">* Required</p>
            )}
          </div>

          {/* Answer Input */}
          <div className="space-y-6">
            {currentQuestion.type === "text" || currentQuestion.type === "email" ? (
              <Input
                type={currentQuestion.type}
                placeholder={currentQuestion.placeholder}
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                onKeyPress={handleKeyPress}
                className="text-lg p-4 h-14"
                autoFocus
              />
            ) : currentQuestion.type === "textarea" ? (
              <Textarea
                placeholder={currentQuestion.placeholder}
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                className="text-lg p-4 min-h-32"
                autoFocus
              />
            ) : currentQuestion.type === "radio" ? (
              <RadioGroup value={currentAnswer} onValueChange={setCurrentAnswer}>
                <div className="space-y-3">
                  {currentQuestion.options?.map((option) => (
                    <div key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors">
                      <RadioGroupItem value={option} id={option} />
                      <Label htmlFor={option} className="text-lg cursor-pointer flex-1">
                        {option}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            ) : null}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={currentQuestion.required && !currentAnswer.trim()}
              className="flex items-center gap-2"
              size="lg"
            >
              {currentQuestionIndex === questions.length - 1 ? "Submit & Analyze" : "Next"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}