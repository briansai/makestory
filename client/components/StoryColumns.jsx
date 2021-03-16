import { Container, Row } from 'react-bootstrap';
import { storyColumns } from '../utils/Constants';
import Column from './Column';
import Tabs from './Tabs';

const StoryColumns = () => (
  <Container fluid className="story-container">
    <Tabs />
    <Row className="row flex-nowrap">
      {storyColumns.map((column) => (
        <Column column={column} />
      ))}
    </Row>
  </Container>
);

export default StoryColumns;
