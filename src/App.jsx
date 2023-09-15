import { useState } from 'react'
import './App.css'
import Cards from './assets/Components/Heading/Cards/Cards'
import Heading from './assets/Components/Heading/Heading'
import Courses from './assets/Components/Courses/Courses'

function App() {
  const [courses, setCourses] = useState([])
  const handleSelect = card => {
    const newCourses = [...courses, card];
    setCourses(newCourses);
  }

  return (
    <>
      <div className='bg-slate-200 px-8 lg:px-28 py-8'>
        <Heading></Heading>
        <div className='flex'>
          <Cards handleSelect={handleSelect}></Cards>
          <Courses courses={courses}></Courses>
        </div>
      </div>
    </>
  )
}

export default App
