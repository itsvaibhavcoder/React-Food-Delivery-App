import React from 'react';
import { createElement, createRoot } from 'react-dom/client';
//import logo from './Images/Food Fire Logo.png';
import './App.css';
import Header from './src/components/Header';
import Footer from './src/components/Footer';
import Body from './src/components/Body';

/*
My food structure will like
      1) Header
         -Logo
         -Nav Items (right side)
         -Cart
      2) Body
        - Search bar
        - Restaurants List
            - Restaurant card
                -Image
                -Name
                -Rating
      3) Footer
        -Links
        -Copyrights
*/

//AppLayout component to show : Header, Body, Footer

const AppLayout =()=>{
    return(
      <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
      </React.Fragment>
    );
  };

const root = createRoot(document.getElementById("root"));

root.render(<AppLayout/>);