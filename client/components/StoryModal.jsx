import { useEffect, useRef, useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import {
  storyColumns,
  severityList,
  typeList,
  inputList,
} from '../utils/constants';

const StoryModal = ({ modal, setModal }) => {
  const [
    { title, description, comments, project, type, status, severity, owner },
    setState,
  ] = useState(inputList);
  const [customSelected, setCustomSelected] = useState(false);
  const customRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(false);
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    value === 'Custom' && setCustomSelected(true);
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  useEffect(() => {
    customSelected && customRef.current.focus();
  });

  return (
    <Modal show={modal} onHide={() => setModal(false)} size="lg" centered>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Form.Control
              type="text"
              className="title"
              required
              placeholder="Title"
              aria-label="title"
              aria-describedby="title"
              size="lg"
              name="title"
              onChange={handleInputChange}
            />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pl-4 pr-4">
          <Row>
            <Col>
              <Form.Group controlId="description">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={7}
                  className="input-group"
                  name="description"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="comments">
                <Form.Label>Comments:</Form.Label>
                <Form.Control
                  className="input-group"
                  as="textarea"
                  rows={7}
                  name="comments"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
            <Col className="right-side" xs={6} md={4}>
              <Form.Group>
                <Form.Label className="font-sm">Project:</Form.Label>
                <Form.Control
                  required
                  placeholder="Project Name"
                  aria-label="project"
                  aria-describedby="project"
                  className="input-group"
                  type="text"
                  name="project"
                  onChange={handleInputChange}
                />
              </Form.Group>
              <Form.Group controlId="type">
                <Form.Label className="font-sm">Type:</Form.Label>
                {!customSelected ? (
                  <Form.Control
                    onChange={handleInputChange}
                    className="input-group"
                    as="select"
                    name="type"
                  >
                    {typeList.map((type) => (
                      <option key={type}>{type}</option>
                    ))}
                  </Form.Control>
                ) : (
                  <Form.Control
                    ref={customRef}
                    required
                    placeholder="Custom Type"
                    aria-label="custom type"
                    aria-describedby="custom type"
                    className="input-group"
                    type="text"
                    name="type"
                    onChange={handleInputChange}
                  />
                )}
              </Form.Group>
              <Form.Group controlId="status">
                <Form.Label className="font-sm">Status:</Form.Label>
                <Form.Control
                  className="input-group"
                  as="select"
                  name="status"
                  onChange={handleInputChange}
                >
                  {storyColumns.map((status) => {
                    const { title, key } = status;
                    return <option key={key}>{title}</option>;
                  })}
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="severity">
                <Form.Label className="font-sm">Severity:</Form.Label>
                <Form.Control
                  className="input-group"
                  as="select"
                  name="severity"
                  onChange={handleInputChange}
                >
                  {severityList.map((severityOption) => (
                    <option key={severityOption}>{severityOption}</option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-sm">Owner:</Form.Label>
                <Form.Control
                  required
                  placeholder="Owner"
                  aria-label="owner"
                  aria-describedby="owner"
                  className="input-group"
                  type="text"
                  name="owner"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModal(false)}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Save Story
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};

export default StoryModal;
