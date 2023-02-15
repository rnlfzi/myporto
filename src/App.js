import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import OtherPage from './pages/OtherPage'
import PicturePage from './pages/PicturePage'
import ProjectPage from './pages/ProjectPage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/project' element={<ProjectPage />} />
        <Route path='/pictures' element={<PicturePage />} />
        <Route path='/certificate' element={<OtherPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
