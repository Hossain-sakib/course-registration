import { useState } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import Cards from './assets/Components/Heading/Cards/Cards'
import Heading from './assets/Components/Heading/Heading'
import Courses from './assets/Components/Courses/Courses'

function App() {
  const [courses, setCourses] = useState([]);
  const [remainingCredits, setRemainingCredits] = useState(20);
  const [totalCredits, setTotalCredits] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelect = (card, price, credit_hour) => {
    let newCourses = [...courses, card];
    let isExist = courses.find(item => item == card);
    let creditCount = totalCredits + credit_hour;
    if (isExist) {
      toast("You can't enroll same course more than one time");
    }
    else {
      setCourses(newCourses);
      setTotalPrice(totalPrice + price);
      if (creditCount > 20) {
        toast("You can't enroll more than 20 credits");
      }
      else {
        setTotalCredits(totalCredits + credit_hour);
        setRemainingCredits(remainingCredits - credit_hour);

      }
    }

  }

  return (
    <>
      <div className='bg-slate-200 px-8 lg:px-28 py-8 '>
        <Heading></Heading>
        <div className='flex gap-10'>
          <Cards handleSelect={handleSelect}></Cards>
          <Courses
            courses={courses}
            remainingCredits={remainingCredits}
            totalCredits={totalCredits}
            totalPrice={totalPrice}
          ></Courses>
        </div>
      </div>
    </>
  )
}

export default App
