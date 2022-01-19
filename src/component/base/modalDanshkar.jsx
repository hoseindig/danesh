import { Button, Modal, Table, Row, Col } from "react-bootstrap";
import SearchInput from "../search";
const ModalDanshkar = ({ show, toggleModal }) => {
  console.log("showModal", show);
  return (
    <>
      <Modal
        show={show}
        onHide={toggleModal}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row>
              <Col md={4}>
                <SearchInput label="جستجوی نام" />
              </Col>
              <Col md={4}>
                <SearchInput  label="جستجوی نام خانوادگی"/>
              </Col>
              <Col md={4}>
                <SearchInput  label="جستجوی کد پرسنلی"/>
              </Col>
            </Row>
            <Row>
              <Col>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Username</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            خروج
          </Button>
          <Button variant="primary">تایید</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDanshkar;
