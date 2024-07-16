import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import Register from './components/Register.tsx';
import Login from './components/Login.tsx';
import { Provider, useSelector } from 'react-redux';
import { store } from './store/store.ts';

const getUser = () => {
  //get token from local storage and return it if exists
  const token = localStorage.getItem('token');
  console.log('from getUser', token)
  return token;
  //implement it later
}

const protectLoader = async () => {
  const user = await getUser();
  if(!user){
    return redirect('/login');
  }

  return null;
}

const unauthorizedUser = async () => {
  const user = await getUser();
  if(user){
    return redirect('/');
  }

  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: protectLoader
  }, 
  {
    path: "/register",
    element: <Register />, 
    loader: unauthorizedUser
  }, 
  {
    path: "/login", 
    element: <Login />,
    loader: unauthorizedUser
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='bg-white'>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    </div>
  </React.StrictMode>,
)
