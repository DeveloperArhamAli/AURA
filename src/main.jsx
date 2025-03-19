import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import WebDevelopmentPage from './pages/services/WebDevelopmentPage.jsx'
import VideoEditingPage from './pages/services/VideoEditingPage.jsx'
import GraphicDesigningPage from './pages/services/GraphicDesigningPage.jsx'
import AssignmentsPage from './pages/services/AssignmentsPage.jsx'
import PhotographyPage from './pages/services/PhotographyPage.jsx'
import SeoPage from "./pages/services/SeoPage.jsx"

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
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>,
)
