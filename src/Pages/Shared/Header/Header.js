import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brand from '../../../assets/brands/brand.jpg'
import './Header.css';



const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link className='text-decoration-none text-warning fs-4 fw-bolder' to='/'>
                        <img alt="" src={brand} width="50" height="40" className="d-inline-block align-top rounded-circle me-3"
                        />
                        Learning Tech BD
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ps-3">
                        <Nav.Link className='text-white' to='/courses'>Courses</Nav.Link>
                        <Nav.Link className='text-white' to='/faq'>FAQ</Nav.Link>
                        <Nav.Link className='text-white' to='/blog'>Blog</Nav.Link>
                    </Nav>

                    {/* <Nav>
        <>
            {
                user?.uid ?
                    <>
                        <span>{user?.displayName}</span>
                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                    </>
                    :
                    <>
                        <Link to='/login'>Login</Link>
                        <Link to='/register'>Register</Link>
                    </>
            }


        </>
        <Link to="/profile">
            {user?.photoURL ?
                <Image
                    style={{ height: '30px' }}
                    roundedCircle
                    src={user?.photoURL}>
                </Image>
                : <FaUser></FaUser>
            }
        </Link>
    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;