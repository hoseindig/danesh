import { Button, Modal, Row, Col } from "react-bootstrap";
import SearchInput from "../search";
import Table from './table'
import { Link } from "react-router-dom";
const ModalDanshkar = ({ show, toggleModal, handleChange, handleAddUserSelected, name }) => {
  console.log("showModal", show);
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'نام', width: 130 },
    { field: 'lastName', headerName: 'نام فامیل', width: 130 },
    {
      field: 'age',
      headerName: 'سن',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'نام و نام خانوادگی',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
        }`,
    },
  ];
  const rows = [
    { id: 1, lastName: 'پیوندی  ', firstName: 'حسین', age: 35 },
    { id: 2, lastName: 'تابش', firstName: 'افسون ', age: 42 },
    { id: 3, lastName: 'تبریزی', firstName: 'اهورا ', age: 45 },
    { id: 4, lastName: 'طالقانی ', firstName: 'ايرج ', age: 16 },
    { id: 5, lastName: 'صفوی', firstName: 'بابک ', age: null },
    { id: 6, lastName: 'شهیدی', firstName: "پایا", age: 150 },
    { id: 7, lastName: 'شجاعی', firstName: 'برديا ', age: 44 },
    { id: 8, lastName: 'سراج ', firstName: 'برزويه ', age: 36 },
    { id: 9, lastName: 'توفیقی', firstName: 'برمک ', age: 65 },
    { id: 9, lastName: ' جلالی', firstName: null, age: 65 },
];
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
                <SearchInput label="جستجوی نام خانوادگی" />
              </Col>
              <Col md={4}>
                <SearchInput label="جستجوی کد پرسنلی" />
              </Col>
            </Row>
            <Row>
              <Col>
                <Table rows={rows} columns={columns} handleChange={handleChange} name={name} multiSelect={false} />
                {/* <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>نام</th>
                      <th>نام خانوادگی</th>
                      <th>نام کاربری</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>حسین</td>
                      <td>حسنی</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>رضا</td>
                      <td>جعفری</td>
                      <td>@fat</td>
                    </tr>
                    
                  </tbody>
                </Table> */}
              </Col>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            خروج
          </Button>
          <Button variant="primary" onClick={handleAddUserSelected}>تایید</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDanshkar;
