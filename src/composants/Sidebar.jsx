import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Sidebar({ title, items }) {
  return (
    <aside className="app-sidebar">
      <div className="sidebar-brand">
        <span>{title}</span>
      </div>
      <Nav className="flex-column sidebar-nav">
        {items.map((item) => (
          <Nav.Link
            as={Link}
            to={item.path}
            key={item.path}
            className="sidebar-link"
          >
            {item.label}
          </Nav.Link>
        ))}
      </Nav>
    </aside>
  );
}

export default Sidebar;
