import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import {
  Button,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Container,
  Offcanvas,
} from 'react-bootstrap';
import { useHistory } from 'react-router';
import { BlogContext } from '../context/BlogContext';
import axios from 'axios';

const Header = () => {
  const logout = () => {
    axios.post('http://127.0.0.1:8000/user/auth/logout/').then((res) => {
      setislogin(false);
      setlogininfo('');
    });
  };
  const { islogin, setislogin, setlogininfo } = useContext(BlogContext);
  const history = useHistory();

  return (
    <div>
      <Navbar
        className='p-0 rounded shadow-lg'
        bg={islogin ? 'warning' : 'info'}
        expand={false}
      >
        <Container fluid>
          <Navbar.Brand className='btn' onClick={() => history.push('/')}>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8BesHH8ZbGzV44dSJ3_t03hOd1Uy5YmOPcs06BdH5HlRdzsxhWKwhPU9PQaO_yHQn7ZU&usqp=CAU'
              width='90'
              height='50'
              className='d-inline-block align-top rounded-circle'
              alt='Blog logo'
            />{' '}
          </Navbar.Brand>
          <h3 className='lora fw-bold text-primary'>
            {' '}
            Blog Project (Django/React){' '}
          </h3>
          <Navbar.Toggle aria-controls='offcanvasNavbar' />
          <Navbar.Offcanvas
            id='offcanvasNavbar'
            aria-labelledby='offcanvasNavbarLabel'
            placement='end'
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id='offcanvasNavbarLabel'>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                
                  <Nav.Link onClick={() => history.push('/login')}>
                    <i class='bi bi-person-circle' /> Login
                  </Nav.Link>
                
                {islogin ? (
                  <Nav.Link onClick={() => history.push('/newblog')}>
                    <i class='bi bi-plus-circle-fill' /> New Blog
                  </Nav.Link>
                ) : null}
                {islogin ? (
                  <Nav.Link
                    onClick={() => {
                      logout();
                      history.push('/');
                    }}
                  >
                    <i class='bi bi-box-arrow-right' /> Logout
                  </Nav.Link>
                ) : null}
              </Nav>
              <Form className='d-flex'>
                <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                <Button variant='outline-success'>Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
