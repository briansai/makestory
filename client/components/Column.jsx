import { Col, Card, Button } from 'react-bootstrap';

const Column = ({ column }) => {
  const { title, key, value } = column;

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
        <Button className="add-button" variant="primary" size="lg" block>
          +
        </Button>
      </Card>
    </Col>
  );
};
export default Column;
