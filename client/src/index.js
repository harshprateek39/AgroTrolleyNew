import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import News from './components/News';
import Products from './components/Products';
import Contacts from './components/Contacts';
import About from './components/About';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';


const Layout = ({ children }) => {
  return (
   <>
    <Header />
    {children}
    <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/> ,
    children:[
      {
        path:"/",
        element:<App/>,
      
      },
      {
        path:'/products',
        element:<Products/>,
       

      },
      {
        path:'/news',
        element:<News/>,
        children:[{ index:true, 
          element:<Footer/>}]
         
      },
      {
        path:'/contacts',
        element:<Contacts/>,
      
      },
      {
        path:'/about',
        element:<About/>,
       
      },
      {
        path:'/card',
        element:<ProductPage/>,

      }
      
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
   <PersistGate persistor={persistor}>
   <RouterProvider router={router}/></PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
