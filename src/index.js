import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import About from './components/About.js';
import ErrorPage from './components/error-page.jsx';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//im not able to use react router how its supposed to,i want to make the navbar permanent and change between the text form or about page but i have used props for navbar in app.js and the dark mode code is also in app.js,i cant figure out how i can route it so that navbar will be permanent and only the textform or about.js will change,
//maybe what i can do is change navbar so that it isnt dependent on app.js,then makae it a parent route and add textform and about as its children,i will try to solve it later
//other than that i have somehow managed to route app and about,so now if i click on about button in navbar it will load the about page(without navbar)
//the home button doesnt work...

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/About",
    element: <About />,
   }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
