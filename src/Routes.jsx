import { createBrowserRouter } from "react-router-dom";
import { routerLandingPage } from "./Pages/routes/routerLandingPage";
import App from "./App";
import { routerFacts } from "./modules/facts/routes/routerFacts";
import { routerBreeds } from "./modules/Breeds/routes/routerBreeds";

export const router = createBrowserRouter([
    {
      path: "/test-tkram",
      element: <App />,
      children: [ 
           ...routerLandingPage,
           ...routerFacts,
           ...routerBreeds
            
        ]
    },
  ]);