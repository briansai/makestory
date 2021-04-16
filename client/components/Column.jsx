import { useState } from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import StoryModal from './StoryModal';

const Column = ({ column }) => {
  const { title, key, value } = column;
  const [modal, setModal] = useState(false);
  const addStory = (e, category) => {
    e.preventDefault();
    setModal(!modal);
  };

  return (
    <Col key={key} id={key} className="column">
      <Card>
        <Card.Header className="text-center">{title}</Card.Header>
        {value.length ? (
          value.map((item, idx) => {
            const { description } = item;
            return <div key={`${description}-${idx}`}>{description}</div>;
          })
        ) : (
          <div className="no-item">
            <div className="no-item-text">No items added at the moment.</div>
          </div>
        )}
        <Button
          onClick={(e) => addStory(e, title)}
          className="add-button"
          variant="primary"
          size="lg"
          block
        >
          +
        </Button>
      </Card>
      <StoryModal modal={modal} setModal={setModal} />
    </Col>
  );
};
export default Column;
