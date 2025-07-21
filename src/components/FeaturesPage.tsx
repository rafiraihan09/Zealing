// import { Zap, Brain, Sparkles, Shield, Clock, BarChart3, Globe, Smartphone } from "lucide-react";

// export function FeaturesPage() {
//   const features = [
//     {
//       icon: Zap,
//       title: "Smart Question Flow",
//       description: "Dynamic questionnaires that adapt based on user responses, ensuring relevant questions every time.",
//       color: "text-yellow-500"
//     },
//     {
//       icon: Brain,
//       title: "AI-Powered Analysis",
//       description: "Advanced machine learning algorithms analyze responses to provide deep insights and patterns.",
//       color: "text-primary"
//     },
//     {
//       icon: Sparkles,
//       title: "Personalized Experience",
//       description: "Each user gets a tailored experience with questions and flows optimized for their profile.",
//       color: "text-purple-500"
//     },
//     {
//       icon: Shield,
//       title: "Enterprise Security",
//       description: "Bank-level encryption and security protocols protect all user data and responses.",
//       color: "text-green-500"
//     },
//     {
//       icon: Clock,
//       title: "Real-Time Processing",
//       description: "Instant response analysis and feedback with millisecond processing speeds.",
//       color: "text-blue-500"
//     },
//     {
//       icon: BarChart3,
//       title: "Advanced Analytics",
//       description: "Comprehensive dashboards and reports with actionable insights and trends.",
//       color: "text-orange-500"
//     },
//     {
//       icon: Globe,
//       title: "Multi-Language Support",
//       description: "Support for 50+ languages with automatic translation and localization.",
//       color: "text-indigo-500"
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile Optimized",
//       description: "Perfect experience across all devices with responsive design and touch optimization.",
//       color: "text-pink-500"
//     }
//   ];

//   return (
//     <div className="min-h-screen pt-24 pb-16">
//       <div className="container mx-auto px-4 max-w-6xl">
//         {/* Hero Section */}
//         <div className="text-center mb-16 fade-in-up">
//           <h1 className="text-5xl font-bold mb-6">
//             Powerful{" "}
//             <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
//               Features
//             </span>
//           </h1>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//             Discover the cutting-edge features that make Zealing the most advanced questionnaire platform available today.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {features.map((feature, index) => {
//             const Icon = feature.icon;
//             return (
//               <div 
//                 key={feature.title}
//                 className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 space-y-4 hover:bg-card/80 hover:scale-105 transition-all duration-300 cursor-pointer fade-in-up"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <Icon className={`h-10 w-10 ${feature.color}`} />
//                 <h3 className="text-xl font-semibold">{feature.title}</h3>
//                 <p className="text-muted-foreground leading-relaxed">
//                   {feature.description}
//                 </p>
//               </div>
//             );
//           })}
//         </div>

//         {/* Technical Specs */}
//         <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 mb-16">
//           <h2 className="text-3xl font-bold text-center mb-8">Technical Specifications</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary">99.9%</div>
//               <div className="text-muted-foreground">Uptime</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary">&lt;100ms</div>
//               <div className="text-muted-foreground">Response Time</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary">50+</div>
//               <div className="text-muted-foreground">Languages</div>
//             </div>
//             <div className="text-center">
//               <div className="text-3xl font-bold text-primary">256-bit</div>
//               <div className="text-muted-foreground">Encryption</div>
//             </div>
//           </div>
//         </div>

//         {/* Integration Section */}
//         <div className="text-center">
//           <h2 className="text-3xl font-bold mb-6">Easy Integration</h2>
//           <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
//             Connect Zeal AI to your existing systems with our comprehensive API and SDK support. 
//             Get started in minutes with our developer-friendly documentation.
//           </p>
//           <div className="bg-card border rounded-lg p-6 max-w-2xl mx-auto">
//             <code className="text-sm text-muted-foreground">
//               {`// Simple API integration
// fetch('/api/questionnaire', {
//   method: 'POST',
//   body: JSON.stringify({ answers })
// }).then(response => response.json())`}
//             </code>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import { Zap, Brain, Sparkles, Shield, Clock, BarChart3, Globe, Smartphone } from "lucide-react";

export function FeaturesPage() {
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
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--primary)/10,transparent)]" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Hero Section */}
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

        {/* Features Grid */}
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

        {/* Technical Specs */}
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

        {/* Integration Section */}
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