import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { TiDelete } from "react-icons/ti";

const AppointmentList = ({ appointments,handleDelete,handleDoubleClick  }) => {
  return (
    <Container>
      <h3 className="text-center mt-4 appointment-title">Appointment List</h3>
      {appointments.length === 0 && (
        <img src="../../img/appointment.jpg" alt="" width="70%" />
      )}
      {appointments.map(({ id, patient, consulted, doctor, day }) => (
        <div key={id} role="button" className={consulted ? "appointments consulted" : "appointments"}
        onDoubleClick={()=>handleDoubleClick(id)}>
          <Row className="justify-content-between align-items-center">
            <Col>
              <h4>{patient}</h4>
              <h5>{doctor}</h5>
            </Col>
            <Col>
              <h5>Date: {new Date(day).toLocaleDateString("tr")} </h5>
              <h6>Time: {new Date(day).toLocaleTimeString("tr")} </h6>
            </Col>
            <Col>
            <TiDelete className="text-danger fs-1 " type="button" onClick={()=> handleDelete(id)} />
            </Col>
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AppointmentList;
