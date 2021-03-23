import { Container, Row, Col } from 'react-bootstrap';
import TopMenu from '../components/TopMenu';
import SideBarMenu from '../components/SideBarMenu';
import StoryColumns from '../components/StoryColumns';

const Index = () => (
  <div>
    <TopMenu />
    <Container fluid className="main">
      <Row noGutters className="main-row">
        <Col xs={12} sm={1}>
          <SideBarMenu />
        </Col>
        <Col sm={10} className="main-column">
          <StoryColumns />
        </Col>
      </Row>
    </Container>
  </div>
);
export default Index;
