import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage, ServicesPage, ContactPage, AboutPage, WebDevelopmentPage, VideoEditingPage, GraphicDesigningPage, AssignmentsPage, PhotographyPage, SeoPage } from "./pages/index.js"
import { HelmetProvider } from "react-helmet-async"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/about",
        element: <AboutPage />
      },
      {
        path: "/services",
        element: <ServicesPage />
      },
      {
        path: "/services/web-development",
        element: <WebDevelopmentPage />
      },
      {
        path: "/services/video-editing",
        element: <VideoEditingPage />
      },
      {
        path: "/services/graphic-designing",
        element: <GraphicDesigningPage />
      },
      {
        path: "/services/photography",
        element: <PhotographyPage />
      },
      {
        path: "/services/seo",
        element: <SeoPage />
      },
      {
        path: "/services/assignments",
        element: <AssignmentsPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
