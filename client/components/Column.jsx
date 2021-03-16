import { Col, Card } from 'react-bootstrap';
// import { Card, Button } from 'react-bootstrap';
const Column = ({ column }) => {
  return (
    <Col className="column">
      <Card>
        <Card.Header className="text-center">{column}</Card.Header>
      </Card>
    </Col>
    // <Card className="column">
    //   <Card.Body>
    //     <Card.Title>Special title treatment</Card.Title>
    //     <Card.Text>
    //       With supporting text below as a natural lead-in to additional content.
    //     </Card.Text>
    //     <Button variant="primary">Go somewhere</Button>
    //   </Card.Body>
    // </Card>
  );
};
export default Column;
