import React from 'react';
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import toast from 'react-hot-toast';

const Login = () => {

    const [error, setError] = useState('');

    const { googleSignIn, githubSignIn, signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast.success('Login Successful', {
                    position: "top-right"
                });
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
                toast.success('Login Successful', {
                    position: "top-right"
                });
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                navigate(from, { replace: true });
                toast.success('Login Successful', {
                    position: "top-right"
                });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
                form.reset();
            })
    }



    return (
        <div className='login-cotainer mt-3 mb-1'>
            <h4 className='text-success fw-bold text-center'>Please log in:</h4>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form>
            <p>Don't Have an Accout? <Link to='/register'> Register here</Link></p>

            <hr />
            <div className='d-flex flex-column align-items-center justify-content-center'>
                <Button onClick={handleGoogleSignIn} className='px-5'> <FaGoogle></FaGoogle> Login with Google</Button>
                <br />
                <Button onClick={handleGithubSignIn} variant="outline-dark" className='px-5'> <FaGithub></FaGithub> Login with Github</Button>
            </div>
        </div >
    );
};

export default Login;