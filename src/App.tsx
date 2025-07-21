import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Sparkles, Zap, Target, Users, Shield, Clock, BarChart3, Globe, Smartphone, LogIn, UserPlus, Moon, Sun, Mail, Lock, User, ArrowLeft } from "lucide-react";

type Page = "home" | "about" | "features" | "questionnaire" | "contact" | "login" | "signup";

// Header Component
function Header({ onLogoClick, currentPage = "home", onNavigate, onLogin, onSignUp }: any) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const navigation = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Features", id: "features" },
    { name: "Questionnaire", id: "questionnaire" },
    { name: "Contact", id: "contact" },
  ];

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={onLogoClick}
        >
          <img src="/logo.png" alt="Zealing" className="h-10 w-auto" />
        </div>
        
        <nav className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Button
              key={item.id}
              variant={currentPage === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onNavigate?.(item.id)}
              className="text-sm"
            >
              {item.name}
            </Button>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={onLogin}
            className="text-sm gap-2"
          >
            <LogIn className="h-4 w-4" />
            Login
          </Button>
          <Button
            size="sm"
            onClick={onSignUp}
            className="text-sm gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
          >
            <UserPlus className="h-4 w-4" />
            Sign Up
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
          >
            {theme === "light" ? (
              <Moon className="h-4 w-4" />
            ) : (
              <Sun className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}

// HomePage Component
function HomePage({ onStartQuestionnaire }: any) {
  return (
    <div className="min-h-screen pt-16">
      <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/10,transparent)]" />
        
        <main className="container relative z-10 flex max-w-6xl flex-col items-center justify-center gap-12 px-4 py-16 text-center">
          <div className="mb-8 animate-pulse">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full animate-pulse" />
              <div className="relative bg-background/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="h-16 w-16 bg-gradient-to-br from-primary to-primary/60 rounded-xl flex items-center justify-center">
                    <Zap className="h-10 w-10 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                      Zealing
                    </h2>
                    <p className="text-sm text-muted-foreground">Intelligent Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              Unlock{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                AI Insights
              </span>
              <br />with Zealing
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground md:text-2xl leading-relaxed">
              Experience our intelligent questionnaire system that adapts to your needs and delivers personalized AI-driven insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 space-y-3 hover:bg-card/80 hover:scale-105 transition-all duration-300 cursor-pointer">
              <Zap className="h-8 w-8 text-primary mx-auto animate-bounce" />
              <h3 className="font-semibold text-lg">Smart Questions</h3>
              <p className="text-muted-foreground text-sm">Dynamic questionnaire that adapts based on your responses</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 space-y-3 hover:bg-card/80 hover:scale-105 transition-all duration-300 cursor-pointer">
              <Brain className="h-8 w-8 text-primary mx-auto animate-bounce" style={{ animationDelay: '0.5s' }} />
              <h3 className="font-semibold text-lg">AI Analysis</h3>
              <p className="text-muted-foreground text-sm">Advanced machine learning models process your data</p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 space-y-3 hover:bg-card/80 hover:scale-105 transition-all duration-300 cursor-pointer">
              <Sparkles className="h-8 w-8 text-primary mx-auto animate-bounce" style={{ animationDelay: '1s' }} />
              <h3 className="font-semibold text-lg">Personalized Results</h3>
              <p className="text-muted-foreground text-sm">Get customized insights tailored to your specific needs</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button 
              size="lg" 
              className="group text-lg px-8 py-6 h-auto shadow-lg hover:shadow-xl transition-all"
              onClick={onStartQuestionnaire}
            >
              <span>Start Questionnaire</span>
              <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="backdrop-blur-sm text-lg px-8 py-6 h-auto"
              onClick={onStartQuestionnaire}
            >
              Learn More
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}

// Login Component
function Login({ onBack, onSignUpClick }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Login attempt:", { email, password });
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
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

// SignUp Component
function SignUp({ onBack, onLoginClick }: any) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    setIsLoading(true);
    console.log("Signup attempt:", formData);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
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
            <CardTitle className="text-2xl text-center">Create an account</CardTitle>
            <CardDescription className="text-center">
              Enter your information to get started with Zealing
            </CardDescription>
          </CardHeader>
          <CardContent>
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

// AboutPage Component
function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/10,transparent)]" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Zealing
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're revolutionizing how businesses gather insights through intelligent questionnaires powered by advanced machine learning algorithms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Zealing, we believe that every interaction should be meaningful and every question should lead to actionable insights. Our platform combines the simplicity of modern design with the power of artificial intelligence to create questionnaires that adapt, learn, and provide value.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're building the future of data collection - one that's more engaging, more intelligent, and more valuable for both businesses and their customers.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 flex items-center justify-center shadow-lg">
            <Brain className="h-32 w-32 text-primary animate-pulse" />
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 text-center space-y-4 hover:bg-card/80 hover:scale-105 transition-all duration-300">
              <Target className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Precision</h3>
              <p className="text-muted-foreground">
                Every algorithm is fine-tuned to deliver accurate, reliable insights that drive real business value.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 text-center space-y-4 hover:bg-card/80 hover:scale-105 transition-all duration-300">
              <Users className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">User-Centric</h3>
              <p className="text-muted-foreground">
                We design experiences that respect users' time while gathering meaningful data for businesses.
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 text-center space-y-4 hover:bg-card/80 hover:scale-105 transition-all duration-300">
              <Shield className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Privacy First</h3>
              <p className="text-muted-foreground">
                Data security and user privacy are at the core of everything we build and deploy.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Our Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-background/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Machine Learning Core
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Advanced natural language processing
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Adaptive question routing algorithms
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Real-time sentiment analysis
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Predictive response modeling
                </li>
              </ul>
            </div>
            <div className="bg-background/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Platform Features
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Responsive, modern interface design
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Real-time data processing
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Enterprise-grade security
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Seamless API integration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// FeaturesPage Component
function FeaturesPage() {
  const features = [
    {
      icon: Zap,
      title: "Smart Question Flow",
      description: "Dynamic questionnaires that adapt based on user responses, ensuring relevant questions every time.",
      color: "text-yellow-500"
    },
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze responses to provide deep insights and patterns.",
      color: "text-primary"
    },
    {
      icon: Sparkles,
      title: "Personalized Experience",
      description: "Each user gets a tailored experience with questions and flows optimized for their profile.",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level encryption and security protocols protect all user data and responses.",
      color: "text-green-500"
    },
    {
      icon: Clock,
      title: "Real-Time Processing",
      description: "Instant response analysis and feedback with millisecond processing speeds.",
      color: "text-blue-500"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards and reports with actionable insights and trends.",
      color: "text-orange-500"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Support for 50+ languages with automatic translation and localization.",
      color: "text-indigo-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Perfect experience across all devices with responsive design and touch optimization.",
      color: "text-pink-500"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/10,transparent)]" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Powerful{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Features
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the cutting-edge features that make Zealing the most advanced questionnaire platform available today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={feature.title}
                className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 space-y-4 hover:bg-card/80 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className={`absolute -inset-2 ${feature.color} opacity-20 blur-xl rounded-full`} />
                  <Icon className={`relative h-10 w-10 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-primary/5 backdrop-blur-sm border border-primary/10 rounded-2xl p-8 mb-16 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Technical Specifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-background/30 rounded-lg p-4 text-center hover:bg-background/50 transition-colors">
              <div className="text-3xl font-bold text-primary animate-pulse">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
            <div className="bg-background/30 rounded-lg p-4 text-center hover:bg-background/50 transition-colors">
              <div className="text-3xl font-bold text-primary animate-pulse" style={{ animationDelay: '0.5s' }}>&lt;100ms</div>
              <div className="text-muted-foreground">Response Time</div>
            </div>
            <div className="bg-background/30 rounded-lg p-4 text-center hover:bg-background/50 transition-colors">
              <div className="text-3xl font-bold text-primary animate-pulse" style={{ animationDelay: '1s' }}>50+</div>
              <div className="text-muted-foreground">Languages</div>
            </div>
            <div className="bg-background/30 rounded-lg p-4 text-center hover:bg-background/50 transition-colors">
              <div className="text-3xl font-bold text-primary animate-pulse" style={{ animationDelay: '1.5s' }}>256-bit</div>
              <div className="text-muted-foreground">Encryption</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Easy Integration</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Connect Zealing to your existing systems with our comprehensive API and SDK support. 
            Get started in minutes with our developer-friendly documentation.
          </p>
          <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-6 max-w-2xl mx-auto shadow-lg hover:bg-card/70 transition-colors">
            <pre className="text-sm overflow-x-auto">
              <code className="text-muted-foreground">
{`// Simple API integration
const response = await fetch('/api/questionnaire', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ answers })
});
const insights = await response.json();`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

// ContactPage Component
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // Add your contact form logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/10,transparent)]" />
      
      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get in{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about Zealing? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-card/50 backdrop-blur-sm border shadow-lg">
              <CardHeader>
                <CardTitle>Send us a message</CardTitle>
                <CardDescription>
                  Fill out the form and our team will get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <textarea
                      id="message"
                      className="w-full min-h-[120px] px-3 py-2 text-sm rounded-md border bg-background"
                      placeholder="Tell us how we can help..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur-sm border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">support@zealing.com</p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Office</h3>
                <p className="text-muted-foreground">
                  123 AI Street<br />
                  Tech Valley, CA 94000<br />
                  United States
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur-sm border">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-2">Hours</h3>
                <p className="text-muted-foreground">
                  Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                  Saturday - Sunday: Closed
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

// QuestionnaireFlow Component
function QuestionnaireFlow() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; value: string }[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiResponse, setApiResponse] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

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

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  const submitQuestionnaire = async (answers: any[]) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
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

  const handleNext = async () => {
    if (currentQuestion.required && !currentAnswer.trim()) return;

    const newAnswers = answers.filter(a => a.questionId !== currentQuestion.id);
    newAnswers.push({ questionId: currentQuestion.id, value: currentAnswer });
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      const existingAnswer = newAnswers.find(a => a.questionId === questions[currentQuestionIndex + 1].id);
      setCurrentAnswer(existingAnswer?.value || "");
    } else {
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
            <Globe className="h-16 w-16 text-primary mx-auto animate-pulse" />
            <h2 className="text-4xl font-bold text-foreground">AI Analysis Complete!</h2>
            <p className="text-xl text-muted-foreground">
              Our machine learning models have analyzed your responses. Here are your personalized insights:
            </p>
          </div>
          
          {apiResponse.insights && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {apiResponse.insights.map((insight: any, index: number) => (
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

          {apiResponse.recommendations && (
            <div className="bg-card border rounded-lg p-6 text-left space-y-4">
              <h3 className="text-xl font-semibold">Recommended Next Steps:</h3>
              <ul className="space-y-2">
                {apiResponse.recommendations.map((rec: string, index: number) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

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

  if (isSubmitting) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="text-center space-y-6 fade-in-up">
          <Brain className="h-16 w-16 text-primary mx-auto animate-spin" />
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
        <div className="mb-12">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round(progress)}% complete
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {error && (
          <Card className="mb-6 border-destructive">
            <CardContent className="flex items-center gap-2 p-4">
              <Shield className="h-4 w-4 text-destructive" />
              <span className="text-sm">{error}</span>
              <Button 
                variant="outline" 
                size="sm" 
                className="ml-auto" 
                onClick={retrySubmission}
              >
                Try Again
              </Button>
            </CardContent>
          </Card>
        )}

        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-foreground leading-tight">
              {currentQuestion.question}
            </h2>
            {currentQuestion.required && (
              <p className="text-sm text-muted-foreground">* Required</p>
            )}
          </div>

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
              <textarea
                placeholder={currentQuestion.placeholder}
                value={currentAnswer}
                onChange={(e) => setCurrentAnswer(e.target.value)}
                className="w-full text-lg p-4 min-h-[120px] rounded-md border bg-background"
                autoFocus
              />
            ) : currentQuestion.type === "radio" ? (
              <div className="space-y-3">
                {currentQuestion.options?.map((option) => (
                  <label key={option} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent/50 transition-colors cursor-pointer">
                    <input
                      type="radio"
                      name="option"
                      value={option}
                      checked={currentAnswer === option}
                      onChange={(e) => setCurrentAnswer(e.target.value)}
                      className="h-4 w-4"
                    />
                    <span className="text-lg">{option}</span>
                  </label>
                ))}
              </div>
            ) : null}
          </div>

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

// Main App Component
export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const handleNavigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const handleStartQuestionnaire = () => {
    setCurrentPage("questionnaire");
  };

  const handleLogoClick = () => {
    setCurrentPage("home");
  };

  const handleLogin = () => {
    setCurrentPage("login");
  };

  const handleSignUp = () => {
    setCurrentPage("signup");
  };

  const handleBackToMain = () => {
    setCurrentPage("home");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage onStartQuestionnaire={handleStartQuestionnaire} />;
      case "about":
        return <AboutPage />;
      case "features":
        return <FeaturesPage />;
      case "contact":
        return <ContactPage />;
      case "questionnaire":
        return (
          <div className="pt-20">
            <QuestionnaireFlow />
          </div>
        );
      case "login":
        return (
          <Login 
            onBack={handleBackToMain}
            onSignUpClick={handleSignUp}
          />
        );
      case "signup":
        return (
          <SignUp 
            onBack={handleBackToMain}
            onLoginClick={handleLogin}
          />
        );
      default:
        return <HomePage onStartQuestionnaire={handleStartQuestionnaire} />;
    }
  };

  const showHeader = currentPage !== "login" && currentPage !== "signup";

  return (
    <div className="min-h-screen">
      {showHeader && (
        <Header 
          onLogoClick={handleLogoClick}
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onLogin={handleLogin}
          onSignUp={handleSignUp}
        />
      )}
      {renderPage()}
    </div>
  );
}