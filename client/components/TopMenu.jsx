import { Navbar, Form, FormControl, Button } from 'react-bootstrap';

const TopMenu = () => (
  <Navbar bg="dark" variant="dark" className="shadow nav">
    <Navbar.Brand href="#home">MakeStory</Navbar.Brand>
    <Form inline className="mx-auto">
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2 search"
      />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
);

export default TopMenu;
