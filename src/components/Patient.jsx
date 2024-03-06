import { Container } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { MdRadioButtonUnchecked, MdCheckCircle } from "react-icons/md";
import { useState } from "react";


const Patient = ({ appointment, setAppointment}) => {
    // console.log(appointment);
    //& DELETE APPOINTMENT (PERMANENTLY)\\
    const deleteAppointment = (remove) => {

        if (window.confirm(`Appointment will be deleted, are you sure?`)) {
            //^ localstorage de kalici olarak silmenin 1. yolu
            // const filteredList = appointment.filter((item) => item.id !== remove);
            // setAppointment(filteredList);
            // localStorage.setItem("list", JSON.stringify(filteredList));

            //^  localstorage de kalici olarak silmenin 2. yolu
            localStorage.setItem("list",
                JSON.stringify(appointment = appointment.filter((appointment) => appointment.id !== remove)))
            setAppointment(JSON.parse(localStorage.getItem("list")))
        }

    }

    //& SET ISDONE STATUS PERMANENTLY (LOCAL STORAGE)\\
    const styleStorage = (x) => {
        //^ localstorage ye isDone statusu degismis olanlari eklemek icin
        const newList = appointment.map((a) => a.id === x.id ? { ...a, isDone: !a.isDone } : a)
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