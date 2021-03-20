import { Col, Card } from 'react-bootstrap';

const Column = ({ column }) => {
  const { title, key } = column;

  return (
    <Col key={key} id={key} className="column">
      <Card>
        <Card.Header className="text-center">{title}</Card.Header>
      </Card>
    </Col>
  );
};
export default Column;
