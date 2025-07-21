// import { Button } from "@/components/ui/button";
// import { ArrowRight, Brain, Sparkles, Zap } from "lucide-react";

// interface HomePageProps {
//   onStartQuestionnaire: () => void;
// }

// export function HomePage({ onStartQuestionnaire }: HomePageProps) {
//   return (
//     <div className="min-h-screen pt-16">
//       {/* Hero Section */}
//       <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
//         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/10,transparent)]" />
        
//         <main className="container relative z-10 flex max-w-6xl flex-col items-center justify-center gap-12 px-4 py-16 text-center fade-in-up">

          

//           {/* Main Content */}
//           <div className="space-y-8">
//             <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
//               Unlock{" "}
//               <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
//                 AI Insights
//               </span>
//               <br />with Zealing
//             </h1>
//             <p className="mx-auto max-w-2xl text-xl text-muted-foreground md:text-2xl leading-relaxed">
//               Experience our intelligent questionnaire system that adapts to your needs and delivers personalized AI-driven insights.
//             </p>
//           </div>

//           {/* Features */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl w-full">
//             <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 space-y-3 hover:bg-card/80 hover:scale-105 transition-all duration-300 cursor-pointer">
//               <Zap className="h-8 w-8 text-primary mx-auto float" />
//               <h3 className="font-semibold text-lg">Smart Questions</h3>
//               <p className="text-muted-foreground text-sm">Dynamic questionnaire that adapts based on your responses</p>
//             </div>
//             <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 space-y-3 hover:bg-card/80 hover:scale-105 transition-all duration-300 cursor-pointer">
//               <Brain className="h-8 w-8 text-primary mx-auto float" style={{ animationDelay: '1s' }} />
//               <h3 className="font-semibold text-lg">AI Analysis</h3>
//               <p className="text-muted-foreground text-sm">Advanced machine learning models process your data</p>
//             </div>
//             <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 space-y-3 hover:bg-card/80 hover:scale-105 transition-all duration-300 cursor-pointer">
//               <Sparkles className="h-8 w-8 text-primary mx-auto float" style={{ animationDelay: '2s' }} />
//               <h3 className="font-semibold text-lg">Personalized Results</h3>
//               <p className="text-muted-foreground text-sm">Get customized insights tailored to your specific needs</p>
//             </div>
//           </div>

//           {/* CTA */}
//           <div className="flex flex-col gap-4 sm:flex-row">
//             <Button 
//               size="lg" 
//               className="group text-lg px-8 py-6 h-auto"
//               onClick={onStartQuestionnaire}
//             >
//               <span>Start Questionnaire</span>
//               <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
//             </Button>
//             <Button 
//               variant="outline" 
//               size="lg" 
//               className="backdrop-blur-sm text-lg px-8 py-6 h-auto"
//               onClick={onStartQuestionnaire}
//             >
//               Learn More
//             </Button>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles, Zap } from "lucide-react";

interface HomePageProps {
  onStartQuestionnaire: () => void;
}

export function HomePage({ onStartQuestionnaire }: HomePageProps) {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/10,transparent)]" />
        
        <main className="container relative z-10 flex max-w-6xl flex-col items-center justify-center gap-12 px-4 py-16 text-center fade-in-up">
          
          {/* Logo Section */}
          <div className="mb-8 animate-pulse">
            {/* Replace this with your actual logo */}
            <div className="relative">
              {/* Logo background glow effect */}
              <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full animate-pulse" />
              
              {/* Logo container */}
              <div className="relative bg-background/50 backdrop-blur-sm border-2 border-primary/20 rounded-2xl p-8 shadow-2xl">
                {/* If you have an image logo, use: */}
                {/* <img src="/logo.png" alt="Zealing" className="h-24 w-auto" /> */}
                
                {/* Text-based logo placeholder */}
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

          {/* Main Content */}
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

          {/* Features */}
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

          {/* CTA */}
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