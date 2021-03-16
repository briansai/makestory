import { Col, Card } from 'react-bootstrap';
// import { Card, Button } from 'react-bootstrap';
const Column = ({ column }) => {
  const { title, key } = column;
  return (
    <Col id={key} key={key} className="column">
      <Card>
        <Card.Header className="text-center">{title}</Card.Header>
      </Card>
    </Col>
  );
};
export default Column;
