import { Button, Card, CardFooter, Container, Row } from "react-bootstrap"
import logo from '../helper/logo.png'
import connection from '../helper/heart-beat.jpg'
import { FaUserDoctor } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { doctorData } from "../helper/data"
import { useState } from "react";
import AddPatient from "./AddPatient";




const Doctors = ({ handleAdd }) => {
    const [show, setShow] = useState(false);
    const [drName, setDrName] = useState("");
    const [display, setDisplay] = useState(true)
    console.log(display);

    const handleClose = () => setShow(false);
    const handleShow = (name) => {
        setShow(true);
        setDrName(name);
    };


    return (
        <Container className='card-container header-div p-3 '>
            <div className="header">
                <img className="logo" src={logo} alt="" width="150px" />
                <h1 className="text-danger text-center fw-bold"> AleXianer Hospital
                </h1>
            </div>
            <Row className='g-3 justify-content-center m-auto card-row' md={6} lg={4} xl={3}
            >

                {doctorData.map(({ img, name,dep,id }) => {
                    return (
                        <Card key={id} className="doctor mx-1">
                            <img src={img} 
                            onClick={() => setDisplay(!display)}
                            />
                            <CardFooter className="text-center">
                                <Card.Title><FaPhoneAlt /> <CiMail /> <h4 className="mt-2">{name}</h4> </Card.Title>
                                <Card.Text style={{ color: "red" }}><FaUserDoctor style={{ color: "blue" }} />  {dep}</Card.Text>
                                <Button
                                    variant="outline-success"
                                    onClick={() => handleShow(name)}
                                >
                                    Appointment
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                })}
            </Row>
            <img className="connection rounded-4" src={connection} />
            <AddPatient
                handleAdd={handleAdd}
                handleClose={handleClose}
                drName={drName}
                show={show}
            />
        </Container>

    )
}

export default Doctors