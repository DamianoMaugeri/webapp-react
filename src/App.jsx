import { useState } from 'react'

import './App.css'
import GlobalContex from './contex/GlobalContex'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import MainPage from './pages/MainPage/MainPage'
import ShowPage from './pages/ShowPage/ShowPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import ContactPage from './pages/ContactPage/ContactPage'




function App() {

  return (

    <GlobalContex.Provider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<MainPage />} />
            <Route path='/movies/:id' element={<ShowPage />} />
            <Route path='/about-us' element={<AboutUsPage />} />
            <Route path='/contacts' element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContex.Provider>


  )
}

export default App
