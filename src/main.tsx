import React from 'react'
import {RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client'
import routes from './Routes.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
