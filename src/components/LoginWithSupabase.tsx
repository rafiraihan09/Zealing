import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Lock, ArrowLeft, AlertCircle } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface LoginProps {
  onBack?: () => void;
  onSignUpClick?: () => void;
  onSuccess?: () => void;
}

export function LoginWithSupabase({ onBack, onSignUpClick, onSuccess }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    const { error } = await signIn(email, password);
    
    if (error) {
      setError(error.message);
      setIsLoading(false);
    } else {
      // Successfully logged in
      if (onSuccess) onSuccess();
    }
  };

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
            <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
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
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button variant="link" className="text-sm text-muted-foreground">
              Forgot your password?
            </Button>
            <div className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Button
                variant="link"
                onClick={onSignUpClick}
                className="p-0 h-auto font-semibold"
              >
                Sign up
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}