// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { ArrowRight, Brain, Sparkles, Zap, Target, Users, Shield } from "lucide-react";

// export function AboutPage() {
//   return (
//     <div className="min-h-screen pt-24 pb-16">
//       <div className="container mx-auto px-4 max-w-6xl">
//         {/* Hero Section */}
//         <div className="text-center mb-16 fade-in-up">
//           <h1 className="text-5xl font-bold mb-6">
//             About{" "}
//             <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
//               Zealing
//             </span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             We're revolutionizing how businesses gather insights through intelligent questionnaires powered by advanced machine learning algorithms.
//           </p>
//         </div>

//         {/* Mission Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
//           <div className="space-y-6">
//             <h2 className="text-3xl font-bold">Our Mission</h2>
//             <p className="text-muted-foreground leading-relaxed">
//               At Zealing, we believe that every interaction should be meaningful and every question should lead to actionable insights. Our platform combines the simplicity of modern design with the power of artificial intelligence to create questionnaires that adapt, learn, and provide value.
//             </p>
//             <p className="text-muted-foreground leading-relaxed">
//               We're building the future of data collection - one that's more engaging, more intelligent, and more valuable for both businesses and their customers.
//             </p>
//           </div>
//           <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 flex items-center justify-center">
//             <Brain className="h-32 w-32 text-primary float" />
//           </div>
//         </div>

//         {/* Values Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             <div className="text-center space-y-4">
//               <Target className="h-12 w-12 text-primary mx-auto" />
//               <h3 className="text-xl font-semibold">Precision</h3>
//               <p className="text-muted-foreground">
//                 Every algorithm is fine-tuned to deliver accurate, reliable insights that drive real business value.
//               </p>
//             </div>
//             <div className="text-center space-y-4">
//               <Users className="h-12 w-12 text-primary mx-auto" />
//               <h3 className="text-xl font-semibold">User-Centric</h3>
//               <p className="text-muted-foreground">
//                 We design experiences that respect users' time while gathering meaningful data for businesses.
//               </p>
//             </div>
//             <div className="text-center space-y-4">
//               <Shield className="h-12 w-12 text-primary mx-auto" />
//               <h3 className="text-xl font-semibold">Privacy First</h3>
//               <p className="text-muted-foreground">
//                 Data security and user privacy are at the core of everything we build and deploy.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Technology Section */}
//         <div className="bg-card/50 rounded-2xl p-8 border">
//           <h2 className="text-3xl font-bold text-center mb-8">Our Technology</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Machine Learning Core</h3>
//               <ul className="space-y-2 text-muted-foreground">
//                 <li>• Advanced natural language processing</li>
//                 <li>• Adaptive question routing algorithms</li>
//                 <li>• Real-time sentiment analysis</li>
//                 <li>• Predictive response modeling</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-xl font-semibold mb-4">Platform Features</h3>
//               <ul className="space-y-2 text-muted-foreground">
//                 <li>• Responsive, modern interface design</li>
//                 <li>• Real-time data processing</li>
//                 <li>• Enterprise-grade security</li>
//                 <li>• Seamless API integration</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, Sparkles, Zap, Target, Users, Shield } from "lucide-react";

export function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/10,transparent)]" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Hero Section */}
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

        {/* Mission Section */}
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

        {/* Values Section */}
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

        {/* Technology Section */}
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