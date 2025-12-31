import "./global.css";

import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SecondPage from "../pages/SecondPage";
import ThirdPage from "../pages/ThirdPage";
import FourthPage from "../pages/FourthPage";
import FifthPage from "../pages/FifthPage";
import SixthPage from "../pages/SixthPage";
import SeventhPage from "../pages/SeventhPage";
import EightPage from "../pages/EightPage";

import MainLayout from "../layouts/MainLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout/>}>
          <Route path="/" element={<Index />} />
          <Route path="/second-page" element={<SecondPage />} />
          <Route path="/third-page" element={<ThirdPage />} />
          <Route path="/fourth-page" element={<FourthPage />} />
          <Route path="/fifth-page" element={<FifthPage />} />
          <Route path="/Sixth-page" element={<SixthPage />} />
          <Route path="/seventh-page" element={<SeventhPage />} />
          <Route path="/eight-page" element={<EightPage />} />
          
          </Route>
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;