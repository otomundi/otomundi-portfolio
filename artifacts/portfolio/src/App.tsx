import { Switch, Route, Router as WouterRouter } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import Landing from "@/pages/Landing";
import Bio from "@/pages/Bio";
import Works from "@/pages/Works";
import WorkDetail from "@/pages/WorkDetail";
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
  return (
    <AnimatePresence mode="wait">
      <Switch key={location} location={location}>
        <Route path="/">
          <PageTransition><Landing /></PageTransition>
        </Route>
        <Route path="/bio">
          <PageTransition><Bio /></PageTransition>
        </Route>
        <Route path="/works">
          <PageTransition><Works /></PageTransition>
        </Route>
        <Route path="/works/:id">
          <PageTransition><WorkDetail /></PageTransition>
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
