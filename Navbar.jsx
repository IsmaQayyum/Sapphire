



import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';



function NavBar() {
  return (
<>

{/* UPPER SIDE */}


    <p className='slide'><marquee behavior="" direction="left-right" >Sale orders will be delivereds within 15 working days. Standard shipping charges apply to all sales orders.</marquee></p>
    <Navbar expand="lg" className="">
      <Container fluid>
        <Navbar.Brand>
          <img src="https://cdn.shopify.com/s/files/1/1592/0041/files/NEW_LOGO_-_Black.svg?v=1675150363" alt=""
           style={{    width: "250px", height: "30px"}} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="FIND YOU FAVOURITES"
              className="me-2 input"
              aria-label="Search"
              style={{ width: "600px", height: "45px" }}
            />
            </Form>
          </Nav>
          
          <PermIdentityIcon className='account' style={{ width: "35px", height: "35px" }} fontSize="inherit"/>
            <ShoppingBagOutlinedIcon className='cart'style={{ width: "30px", height: "28px" }} fontSize="inherit"/>
          
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    <hr />
    <Nav className="justify-content-center">
        
    
        <Nav.Item>
        <LinkContainer to="/sale">    
          <Nav.Link className='sale'>SALE</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        
        
        
        <Nav.Item>
        <LinkContainer to="/womens">
          <Nav.Link className='pages'>WOMAN</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        

        
        <Nav.Item>
        <LinkContainer to="/men">
          <Nav.Link className='pages'>MAN</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        

        
        <Nav.Item>
        <LinkContainer to="/kids">
          <Nav.Link className='pages' >KIDS</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        

        
        <Nav.Item>
        <LinkContainer to="/beauty">
          <Nav.Link className='pages'>BEAUTY</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        

        
        <Nav.Item>
        <LinkContainer to="/accessories">
          <Nav.Link className='pages'>ACCESSORIES</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        

        
        <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link className='pages'>HOME</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        
      
      </Nav>
    </>
  );
}

export default NavBar;