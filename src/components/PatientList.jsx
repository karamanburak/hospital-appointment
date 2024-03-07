
import { Container } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { MdRadioButtonUnchecked, MdCheckCircle } from "react-icons/md";

const PatientList = ({ appointment, setAppointment, doctors }) => {
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

  };

  //& SET ISDONE STATUS PERMANENTLY (LOCAL STORAGE)\\
  const styleStorage = (x) => {
    //^ localstorage ye isDone statusu degismis olanlari eklemek icin
    const newList = appointment.map((a) => a.id === x.id ? { ...a, isDone: !a.isDone } : a)
    setAppointment(newList)
    localStorage.setItem("list", JSON.stringify(newList))
  }

  return (
    <Container className='card-container appointment p-3 '>
      <h2 style={{ color: "red" }}>APPOINTMENT LIST</h2>
      {appointment.map((patient, i) => (
        <div>
          {doctors.map((dr) => (
            dr.name == patient.doctor &&

            (<div key={i} className="appointment-div">
              <div className= {patient.isDone ? "checked" : "unchecked"}>
                <h3>{patient.patientName}</h3>
                <h6>{patient.day}</h6>
                <h5>{patient.doctor}</h5>
              </div>
              <div className="icons">
                <div className="radio-icon" onClick={() => styleStorage(patient)}>
                  {patient.isDone ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}
                </div>
                <div>
                  <FaTrashAlt className="trash-icon" onClick={() => deleteAppointment(patient.id)} style={{ color: "red" }} />
                </div>
              </div>
            </div>)


          ))}

        </div>
      ))}

    </Container>
  )
}

export default PatientList