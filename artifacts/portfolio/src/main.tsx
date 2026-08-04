import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";

// Import your page components (adjust paths to match your file structure)
// Assuming you have files like src/pages/Bio.tsx, src/pages/Works.tsx, etc.
import Bio from "./pages/Bio"; 
import Works from "./pages/Works";
import Music from "./pages/Music";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Your main Home component
  },
  {
    path: "/bio",
    element: <Bio />,
  },
  {
    path: "/works",
    element: <Works />,
  },
  {
    path: "/music",
    element: <Music />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/landing",
    element: <Home />,
  },
  
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);   