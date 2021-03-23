import { Navbar, Nav } from 'react-bootstrap';

const SideBarMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="side-navbar">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="flex-column bg-dark sidebar" defaultActiveKey="/home">
          <Nav.Link eventKey="link-1" className="text-white text-center link">
            <div>
              <i width="32" height="32" className="bi bi-journal-text" />
            </div>
            <div>Stories</div>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SideBarMenu;
