import { Toaster } from "./components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import Index from "./pages/index";
// import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();


export const App = () => {
  return (
    <ThemeProvider>
      <Toaster />
      <Index />
    </ThemeProvider>
  )
}
