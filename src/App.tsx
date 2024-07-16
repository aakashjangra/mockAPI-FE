import React, { useState } from "react"
import Header from "./components/Header"
import Docs from "./components/Docs"
import Test from "./components/Test"
import { BrowserRouter, Route, Routes } from "react-router-dom"

export default function App() {
  const [currentPage, setCurrentPage] = useState('docs');

  const changePage = (page) => { 
    setCurrentPage(page);
  }
  return (
    <>
 
    <Header currentPage changePage={changePage} />
   
      {

        (currentPage === 'docs') 
        ? <Docs />
        : <Test />
      }
      

    </>
  )
}