import styles from '../styles/Nav.module.css'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const nav = () => {
    return ( 
        <>
          
          
          {[ 'sm'].map((expand) => (
        <Navbar key={expand}  expand={expand} className= {`mb-3 ${styles.navContainer}`} >
          <Container fluid>
            <Navbar.Brand className='ms-3' href="#">
              <img className='navbar-brand' src="/logo.png"  height='35px'/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img className='navbar-brand' src="/logo.png"  height='35px'/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className={`mt-1 ${styles.menu}`}  href="/">Home</Nav.Link>
                  <Nav.Link className={`mt-1 ${styles.menu}`} href="/payments">Payments</Nav.Link>
                  <Nav.Link className={`mt-1 ${styles.menu}`} href="/">Bill Payments</Nav.Link>
                  <Nav.Link className={`mt-1 ${styles.menu}`} href="/savings">Savings</Nav.Link>
                  <Nav.Link className={`mt-1 ${styles.menu}`} href="/">Rewards</Nav.Link>
                  <Nav.Link  href=''><button className={styles.menuButton}>Get the app</button></Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      
          
        </>
    
    
    );
}
 
export default nav;