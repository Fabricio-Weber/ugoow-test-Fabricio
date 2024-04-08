import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

import { Pedidos } from './pages/pedidos';
import { Index } from './pages';
import { Mesas } from './pages/mesas';
import { PDV } from './pages/pdv';


const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Index />,
    errorElement: <h1>Sorry we dontfouned</h1>,
    children: [
      {
        path: "/dashboard/pedidos",
        element: <Pedidos />,
      },
      {
        path: "/dashboard/mesas",
        element: <Mesas />
      },
      {
        path: "/dashboard/pdv",
        element: <PDV/>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
