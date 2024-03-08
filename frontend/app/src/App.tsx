import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './routes/error';
import Id from './routes/Id';
import Layout from './layout/Layout';
import Language from './routes/Language';
import Gender from './routes/Gender';
import Elenco from './routes/Elenco';
import Login from './routes/Login';
import Item from './routes/Item';
import Article from './routes/Article';
import Client from './routes/Client';
import Employee from './routes/Employee';
const router = createBrowserRouter([
  {
    path: "/id",
    element: <Id/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/Language",
    element: <Language/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/Gender",
    element: <Gender/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/Elenco",
    element: <Elenco/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/item",
    element: <Item/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/Login",
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/Article",
    element: <Article/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/Client",
    element: <Client/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/Employee",
    element: <Employee/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/",
    element: <Login/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "*",
    element: <ErrorPage/>
  
  }
]);
function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );  
}

export default App;