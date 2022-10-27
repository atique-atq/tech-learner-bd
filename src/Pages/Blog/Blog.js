import React from 'react';
import { Accordion } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-page'>
            <div className='blogs-container'>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>what is cors?</Accordion.Header>
                        <Accordion.Body>
                            CORS full meaning is Cross-Origin Resource Sharing. This is an http header based system which prevents to call the website url outside of the server. This is used when we develop urls only for our another service's use.
                            CORS depends on the system by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In this request, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request. When we need to have api interacting with our other website or system, In these instances, CORS needs to be permitted to share the api or data across other origins.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                        <Accordion.Body>
                            Firebase is a readymade library, provided by Google that is used for user management. Although firebase has many other services except that usermanagement, it is mostly porpular for usermanagement. User authentication, log in, sign out, auth sate user management etc are pretty easy here. Firebase allows users to authenticate with their phone number, email, Google, and Facebook accounts (more options can be found here).
                            Authentication is used by a server when the server needs to know exactly who is accessing their information or site.Authentication by a client usually involves the server giving a certificate to the client in which a reliable third party such as Verisign or Thawte states that the server belongs to the entity (such as a bank) that the client expects it to.
                            Alternatives to Firebase: Okta, amazon redshift, Redis enterprice cloud,
                            Auth0, MongoDB, Passport etc.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>How does the private route work?</Accordion.Header>
                        <Accordion.Body>
                            The react private route component renders child components (children) if the user is fullfilled a certain condition. It can be logged in or any other authentication. If not logged in the user is redirected to other page with the return url passed in the location state property.
                            Private Routes in React Router (also called Protected Routes) require a user being authorized to visit a route (read: page). So if a user is not authorized for a specific page, they cannot access it. The most common example is authentication in a React application where a user can only access the protected pages when they are authorized (which means in this case being authenticated). Protected routes should only be available to users that are logged in, like a dashboard or settings page
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
                        <Accordion.Body>
                            Node.js is a JavaScript runtime environment that runs low latency and high output by taking a “non-blocking” approach to serving requests. In other words, Node.js does not waste time or resources on waiting for I/O requests to give. It executes javascript code outside web browsers. This is designed to build scalable network application. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. In the typical approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead
                            It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.It runs a single-threaded event loop registered with the system to handle connections, and each new connection causes a JavaScript callback function to fire.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>

    );
};

export default Blog;