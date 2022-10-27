import React, { useContext, useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import brand from '../../../assets/brands/brand.jpg'
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(true);
    console.log(user?.photoURL);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleTheme = () => {
        let value = theme;
        setTheme(!value);
    }

    return (
        <Navbar className='navbar-container' collapseOnSelect expand="lg" bg={`${theme ? `primary` : `secondary`}`} variant="dark">
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
                        <Link className='text-white text-decoration-none p-2 ms-3 fw-semibold nav-tex' to='/courses'>Courses</Link>
                        <Link className='text-white text-decoration-none p-2 ms-3 fw-semibold nav-tex' to='/blog'>Blog</Link>
                        <Link className='text-white text-decoration-none p-2 ms-3 fw-semibold nav-tex' to='/faq'>FAQ</Link>
                    </Nav>

                    <Nav>
                        <>
                            {
                                user?.uid ?
                                    <div>
                                        <Button className='m-4' variant="outline-dark" onClick={handleLogOut}>Log out</Button>
                                    </div>
                                    :
                                    <div className='m-4'>
                                        <Link className='text-white text-decoration-none p-1 fw-semibold nav-tex' to='/login'>Login</Link>
                                        <Link className='text-white text-decoration-none p-1 fw-semibold nav-tex' to='/register'>Register</Link>
                                    </div>
                            }
                        </>

                        <Link to="/profile">
                            {
                                user?.photoURL ?
                                    <Image
                                        title={user?.displayName}
                                        style={{ height: '30px' }}
                                        className='my-4 mx-2 p-0'
                                        roundedCircle
                                        src={user?.photoURL}>
                                    </Image>
                                    : <p className='text-white my-4 mx-2 '> <FaUser></FaUser></p>
                            }
                        </Link>

                        <div>
                            <Button className='m-3' variant="light" onClick={handleTheme}>
                                Theme
                                {theme ?
                                    <span className='bg-secondary text-secondary m-2'> one</span> :
                                    <span className='bg-primary text-primary m-2'> two</span>}
                            </Button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;