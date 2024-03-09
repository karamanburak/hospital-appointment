
import { Container, Card} from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { MdRadioButtonUnchecked, MdCheckCircle } from "react-icons/md";


const PatientList = ({ appointment, setAppointment, doctors}) => {

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
    <Container
      className='card-container'>
      <h2 className="mt-5">Appointment List</h2>

      {appointment.map((patient) => (
        <div key={patient.id}>
          {doctors.map((dr) => (
            dr.name == patient.doctor &&

            (<Card key={patient.id} className="appointment-div my-2 mx-2">
              <Card.Body className={patient.isDone ? "checked" : "unchecked"} style={{ height: "180px" }}>
                <Card.Header className="fw-bold fs-4 rounded-2" style={{ background: patient.isDone ? "skyblue" : "lightgreen", color: !patient.isDone && " rgb(20, 74, 224)" }}>{patient.patientName}</Card.Header>
                  <h6 className="my-3">{patient.day}</h6>
                  <h5>{patient.doctor}</h5>
              </Card.Body>
              <div className="icons">
                <div className="radio-icon" onClick={() => styleStorage(patient)}>
                  {patient.isDone ? <MdCheckCircle /> : <MdRadioButtonUnchecked />}
                </div>
                <div>
                  <FaTrashAlt className="trash-icon" onClick={() => deleteAppointment(patient.id)} style={{ color: "red" }} />
                </div>
              </div>
            </Card>)

          ))}

        </div>

      ))}
    </Container>

  )
}

export default PatientList

