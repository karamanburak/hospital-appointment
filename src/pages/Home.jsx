import { Container } from 'react-bootstrap';
import AddPatient from '../components/AddPatient';
import {appointmentData} from '../helper/data'
import Doctors from '../components/Doctors';
import { useState } from 'react';
import Patient from '../components/Patient';


const Home = () => {
  const [appointment, setAppointment] = useState(JSON.parse(localStorage.getItem("list")) || [...appointmentData])

  const handleAdd = (newAppointment) => {
    setAppointment([newAppointment, ...appointment]);
    localStorage.setItem(
      "list",
      JSON.stringify([newAppointment, ...appointment])
    );
  };


  return (
    <Container>
      <Doctors appointment={appointment} setAppointment={setAppointment} handleAdd={handleAdd} />
     <AddPatient/>
     <Patient appointment={appointment} setAppointment={setAppointment}/>
    </Container>
  )
}

export default Home