import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, User, ArrowLeft, AlertCircle, CheckCircle } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface SignUpProps {
  onBack?: () => void;
  onLoginClick?: () => void;
}

export function SignUpWithSupabase({ onBack, onLoginClick }: SignUpProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const { signUp } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match!");
      return;
    }
    
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    const { error } = await signUp(formData.email, formData.password, formData.name);
    
    if (error) {
      setError(error.message);
      setIsLoading(false);
    } else {
      setSuccess(true);
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  if (success) {
    return (
      <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/10,transparent)]" />
        
        <div className="container mx-auto px-4 max-w-md relative z-10">
          <Card className="bg-card/50 backdrop-blur-sm border shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
                <h2 className="text-2xl font-bold">Check your email!</h2>
                <p className="text-center text-muted-foreground">
                  We've sent you a confirmation link to {formData.email}. 
                  Please check your email and click the link to verify your account.
                </p>
                <Button onClick={onLoginClick} className="mt-4">
                  Go to Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/10,transparent)]" />
      
      <div className="container mx-auto px-4 max-w-md relative z-10">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-8 gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Button>
        
        <Card className="bg-card/50 backdrop-blur-sm border shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Create an account</CardTitle>
            <CardDescription className="text-center">
              Enter your information to get started with Zealing
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                    className="pl-10"
                  />
                </div>
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                disabled={isLoading}
              >
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground mx-auto">
              Already have an account?{" "}
              <Button
                variant="link"
                onClick={onLoginClick}
                className="p-0 h-auto font-semibold"
              >
                Sign in
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}