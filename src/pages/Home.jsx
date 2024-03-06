import { Container } from 'react-bootstrap';
import {appointmentData} from '../helper/data'
import Doctors from '../components/Doctors';
import { useState } from 'react';
import Patient from '../components/Patient';




const Home = () => {
  const [appointment, setAppointment] = useState(JSON.parse(localStorage.getItem("list")) || [...appointmentData])
  const [display, setDisplay] = useState(true);


   const handleAdd = (newAppointment) => {
    setAppointment([ newAppointment,...appointment ]);
    localStorage.setItem(
      "list",
      JSON.stringify([newAppointment,...appointment ])
    );
  };


  return (
    <Container>
      <Doctors 
      appointment={appointment} 
      setAppointment={setAppointment} 
      handleAdd={handleAdd} 
      display={display} 
      setDisplay={setDisplay}/>
      <Patient 
      appointment={appointment} 
      setAppointment={setAppointment} 
      display={display} 
      setDisplay={setDisplay} />
      
    </Container>
  )
}

export default Home