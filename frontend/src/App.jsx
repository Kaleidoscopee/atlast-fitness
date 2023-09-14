import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import WorkoutList from './pages/WorkoutList'

function App() {

  return (
    <>
      <div className='App'>
        <BrowserRouter>
        <Navbar />
          <div className="pages">
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login />}/>
              <Route path="/register" element={<Register />}/>
              <Route path="/workouts" element={<WorkoutList />}/>
              <Route path="/workouts/add" element={<AddWorkout />}/>
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
