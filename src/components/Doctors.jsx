import { useState } from "react";
import { doctorData } from "../helper/data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modals from "./Modals";


const Doctors = ({handleAdd}) => {
    const [show, setShow] = useState(false);
    const [drName, setDrName] = useState("")
    const handleShow = (name) => {
      setShow(true)
    setDrName(name)}
    const handleClose = () => setShow(false);
  return (
    <Container>
      <Row>
        {doctorData.map(({ id, name, dep, img }) => (
          <Col key={id} md={4} lg={3} className="text-center doctor">
          <img src={img} alt={name} onClick={()=>handleShow(name)} className="img-thumbnail" />
          <h4>{name}</h4>
          <h5>{dep}</h5>
          </Col>
        ))}
      </Row>
      <Modals handleClose = {handleClose} show={show} drName={drName} handleAdd={handleAdd} />
    </Container>
  );
};

export default Doctors;
