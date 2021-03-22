import { Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

const TopMenu = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="shadow nav">
      <Navbar.Brand href="#home" className="brand">
        {isTabletOrMobile ? 'M' : 'MakeStory'}
      </Navbar.Brand>
      <Form className="mx-auto search-container">
        <FormControl type="text" placeholder="Search" className="sm-2 search" />
        <Button variant="outline-light" className="search-button">
          <i className="bi bi-search"></i>
        </Button>
      </Form>
    </Navbar>
  );
};

export default TopMenu;
