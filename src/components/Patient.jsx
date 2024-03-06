import { Container } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { MdRadioButtonUnchecked, MdCheckCircle } from "react-icons/md";
import { useState } from "react";


const Patient = ({ appointment, setAppointment,show,drName }) => {
    console.log(appointment);
    const [patientName, setPatientName] = useState("")
    const [date, setDate] = useState("")


    const deleteAppointment = (remove) => {
        
        //^ 1. yol
        // const filteredList = appointment.filter((item) => item.id !== remove);
        // setAppointment(filteredList);
        // localStorage.setItem("list", JSON.stringify(filteredList));

        if (window.confirm(`Appointment will be deleted, are you sure?`)){
 //^ 2. yol
        localStorage.setItem("list",
        JSON.stringify(appointment=appointment.filter((appointment)=> appointment.id !== remove)))
        setAppointment(JSON.parse(localStorage.getItem("list")))
        }

       
    }

    const styleStorage = (x) => {
        const newList = appointment.map((a)=> a.id === x.id ? {...a, isDone: !a.isDone} : a)
        setAppointment(newList)
        localStorage.setItem("list", JSON.stringify(newList))
    }

    return (
        <Container className='card-container appointment p-3 '>
        <h1 style={{color:"red"}}>APPOINTMENT LIST</h1>
            {appointment.map((person, i) => {
                return (
                    <div key={i} className="appointment-div">
                        <div className={person.isDone ? "checked" : "unchecked"}>
                            <h3>{person.text}</h3>
                            <h6>{person.day}</h6>
                            <h5>{person.doctor}</h5>
                        </div>
                        <div className="icons">
                            <div className="radio-icon" onClick={() => styleStorage (person)}>
                                {person.isDone ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}
                            </div>
                            <div>
                                <FaTrashAlt className="trash-icon" onClick={() => deleteAppointment(person.id)} style={{ color: "red" }} />
                            </div>
                        </div>
                    </div>
                )
            })}

        </Container>
    )
}

export default Patient