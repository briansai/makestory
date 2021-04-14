import { Modal, Button, Form, FormControl, Row, Col } from 'react-bootstrap';
import { storyColumns, severity } from '../utils/constants';

const StoryModal = ({ modal, setModal }) => {
  return (
    <Modal show={modal} onHide={() => setModal(false)} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>
          <Form>
            <FormControl
              className="title"
              required
              placeholder="Title"
              aria-label="Title"
              aria-describedby="title"
              size="lg"
            />
          </Form>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="pl-4 pr-4">
        <Row>
          <Col>
            <Form className="mb-3">
              <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control as="textarea" rows={4} className="input-group" />
              </Form.Group>
            </Form>
            <Form className="mb-3">
              <Form.Group controlId="comments">
                <Form.Label>Comments:</Form.Label>
                <Form.Control className="input-group" as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
          <Col className="right-side" xs={6} md={4}>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Status:</Form.Label>
              <Form.Control className="input-group" as="select">
                {storyColumns.map((status) => (
                  <option>{status.title}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="severity">
              <Form.Label>Severity:</Form.Label>
              <Form.Control className="input-group" as="select">
                {severity.map((severityOption) => (
                  <option>{severityOption}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setModal(false)}>
          Save Story
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default StoryModal;
