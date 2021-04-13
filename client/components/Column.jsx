import { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import AddModal from './AddModal';

const Column = ({ column }) => {
  const { title, key, value } = column;
  const [modal, setModal] = useState(false);
  const [selectedKey, setSelectedKey] = useState('');
  const addStory = (e, key) => {
    e.preventDefault();
    setModal(!modal);
    setSelectedKey(key);
  };

  return (
    <Col key={key} id={key} className="column">
      <Card>
        <Card.Header className="text-center">{title}</Card.Header>
        {value.length ? (
          value.map((item) => {
            return <div>{item}</div>;
          })
        ) : (
          <div className="no-item">
            <div className="no-item-text">No items added at the moment.</div>
          </div>
        )}
        <Button
          onClick={(e) => addStory(e, key)}
          className="add-button"
          variant="primary"
          size="lg"
          block
        >
          +
        </Button>
      </Card>
      <AddModal modal={modal} setModal={setModal} />
    </Col>
  );
};
export default Column;
