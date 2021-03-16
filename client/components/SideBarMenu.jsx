import { Nav } from 'react-bootstrap';

const SideBarMenu = () => {
  return (
    <Nav className="flex-column bg-dark sidebar" defaultActiveKey="/home">
      <Nav.Link eventKey="link-1" className="text-white text-center link">
        <div>
          <i width="32" height="32" className="bi bi-journal-text" />
        </div>
        <div>Stories</div>
      </Nav.Link>
    </Nav>
  );
};

export default SideBarMenu;
