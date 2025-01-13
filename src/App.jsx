import { useEffect, useState } from 'react'

import './App.css'
import GlobalContex from './contex/GlobalContex'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import MainPage from './pages/MainPage/MainPage'
import ShowPage from './pages/ShowPage/ShowPage'
import AboutUsPage from './pages/AboutUsPage/AboutUsPage'
import ContactPage from './pages/ContactPage/ContactPage'
import { BASE_URI } from './config'
import axios from 'axios'




function App() {

  const [movies, setMovies] = useState([])

  function fetchMovies() {
    axios.get(`${BASE_URI}/api/movies/`)
      .then(res => {
        setMovies(res.data)
      })
      .catch(err => console.error(err))
  }

  useEffect(() => {
    fetchMovies()
  }, [])


  return (

    <GlobalContex.Provider value={{ fetchMovies, movies }}>
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
