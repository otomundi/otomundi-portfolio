import { Switch, Route, Router as WouterRouter } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import Home from "@/pages/Home";
import Bio from "@/pages/Bio";
import Works from "@/pages/Works";
import EUVIM from "@/pages/Projects/EUVIM";
import SKY from "@/pages/Projects/SKY";
import TIGRE from "@/pages/Projects/TIGRE";
import DESNUDO from "@/pages/Projects/DESNUDO";
import PIENSAENMI from "@/pages/Projects/PIENSAENMI";
import Music from "@/pages/Music";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";
import { useLocation } from "wouter";

const queryClient = new QueryClient();

function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}

function Router() {
  const [location] = useLocation();

  useEffect(() => {
    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Switch key={location} location={location}>
        <Route path="/">
          <PageTransition><Home /></PageTransition>
        </Route>
        <Route path="/bio">
          <PageTransition><Bio /></PageTransition>
        </Route>
        <Route path="/works">
          <PageTransition><Works /></PageTransition>
        </Route>
        <Route path="/works/euvim">
          <PageTransition><EUVIM /></PageTransition>
        </Route>
        <Route path="/works/piensaenmi">
          <PageTransition><PIENSAENMI /></PageTransition>
        </Route>
        <Route path="/works/sky">
          <PageTransition><SKY /></PageTransition>
        </Route>
        <Route path="/works/tigre">
          <PageTransition><TIGRE /></PageTransition>
        </Route>
        <Route path="/works/desnudo">
          <PageTransition><DESNUDO /></PageTransition>
        </Route>
        <Route path="/works/:id">
          <PageTransition><NotFound /></PageTransition>
        </Route>
        <Route path="/music">
          <PageTransition><Music /></PageTransition>
        </Route>
        <Route path="/contact">
          <PageTransition><Contact /></PageTransition>
        </Route>
        <Route>
          <PageTransition><NotFound /></PageTransition>
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="bg-void min-h-screen text-white">
            <Navbar />
            <Router />
          </div>
          <Toaster />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
