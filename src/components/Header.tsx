// import { ThemeToggle } from "./ThemeToggle";
// import { Button } from "@/components/ui/button";

// interface HeaderProps {
//   onLogoClick?: () => void;
//   currentPage?: string;
//   onNavigate?: (page: string) => void;
// }

// type NavigationItem = {
//   name: string;
//   id: string;
// };

// const navigation: NavigationItem[] = [
//   { name: "Home", id: "home" },
//   { name: "About", id: "about" },
//   { name: "Features", id: "features" },
//   { name: "Questionnaire", id: "questionnaire" },
//   { name: "Contact", id: "contact" },
// ];

// export function Header({ onLogoClick, currentPage = "home", onNavigate }: HeaderProps) {
//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
//       <div className="container mx-auto px-4 py-4 flex items-center justify-between">
//         <div 
//           className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" 
//           onClick={onLogoClick}
//         >
//           <img src="/logo.png" alt="Zeal AI" className="h-8 w-auto" />
//           <div>
//             <h1 className="text-xl font-bold text-foreground">Zealing</h1>
//             <p className="text-xs text-muted-foreground">Intelligent Solutions</p>
//           </div>
//         </div>
        
//         {/* Navigation */}
//         <nav className="hidden md:flex items-center gap-1">
//           {navigation.map((item) => (
//             <Button
//               key={item.id}
//               variant={currentPage === item.id ? "default" : "ghost"}
//               size="sm"
//               onClick={() => onNavigate?.(item.id)}
//               className="text-sm"
//             >
//               {item.name}
//             </Button>
//           ))}
//         </nav>
        
//         {/* Mobile Navigation */}
//         <div className="md:hidden flex items-center gap-2">
//           <select 
//             className="bg-background border rounded px-2 py-1 text-sm"
//             value={currentPage}
//             onChange={(e) => onNavigate?.(e.target.value)}
//           >
//             {navigation.map((item) => (
//               <option key={item.id} value={item.id}>
//                 {item.name}
//               </option>
//             ))}
//           </select>
//         </div>
        
//         <ThemeToggle />
//       </div>
//     </header>
//   );
// }

import { Button } from "@/components/ui/button";
import { LogIn, UserPlus, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

interface HeaderProps {
  onLogoClick?: () => void;
  currentPage?: string;
  onNavigate?: (page: string) => void;
  onLogin?: () => void;
  onSignUp?: () => void;
}

type NavigationItem = {
  name: string;
  id: string;
};

const navigation: NavigationItem[] = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Features", id: "features" },
  { name: "Questionnaire", id: "questionnaire" },
  { name: "Contact", id: "contact" },
];

export function Header({ onLogoClick, currentPage = "home", onNavigate, onLogin, onSignUp }: HeaderProps) {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check if user has a theme preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity" 
          onClick={onLogoClick}
        >
          <img src="/logo.png" alt="Zealing" className="h-8 w-auto" />
          <div>
            <h1 className="text-xl font-bold text-foreground">Zealing</h1>
            <p className="text-xs text-muted-foreground">Intelligent Solutions</p>
          </div>
        </div>
        
        {/* Desktop Navigation */}
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
        
        {/* Desktop Auth Buttons */}
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
        
        {/* Mobile Menu */}
        <div className="flex md:hidden items-center gap-2">
          <select 
            className="bg-background border rounded px-2 py-1 text-sm"
            value={currentPage}
            onChange={(e) => onNavigate?.(e.target.value)}
          >
            {navigation.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
          
          {/* Mobile Auth Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={onLogin}
              className="h-8 w-8"
            >
              <LogIn className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              onClick={onSignUp}
              className="h-8 w-8 bg-gradient-to-r from-primary to-primary/80"
            >
              <UserPlus className="h-4 w-4" />
            </Button>
          </div>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-8 w-8"
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