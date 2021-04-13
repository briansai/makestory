import { Modal, Button } from 'react-bootstrap';

const AddModal = ({ modal, setModal }) => {
  return (
    <Modal show={modal} onHide={() => setModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Add Story</Modal.Title>
      </Modal.Header>
      <Modal.Body></Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setModal(false)}>
          Close
        </Button>
        <Button variant="primary" onClick={() => setModal(false)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
