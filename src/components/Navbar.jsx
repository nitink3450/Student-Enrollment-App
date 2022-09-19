import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

function JustifiedExample() {
  return (
    <Nav className='navbar' justify variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Link className='textNone' to="/">Home</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='textNone' to="/Student">Student</Link>
      </Nav.Item>
      <Nav.Item>
        <Link className='textNone' to="/Contact">Contact Us</Link>
      </Nav.Item>
    </Nav>
  );
}

export default JustifiedExample;