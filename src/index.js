import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WidgetForm from './components/WidgetForm'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "add-widget/:id?",
    element: <WidgetForm />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
