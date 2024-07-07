import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchIcon from '@mui/icons-material/Search';


const Footer = () => {
  return (
    <div>
        <div className='container'>
            <div className="row fot">
                <div className="col-lg-4 FT">
                    <h6>CONTACT US</h6><br></br>
                   <p> <LocationOnIcon/>Sapphire Retail Head Office <br></br>
1.5-Km, Defence Road, Bhobtian Chowk, Off Raiwind Road,<br></br> Opposite University of Lahore, Lahore.</p>
<p><MailOutlineIcon/>wecare@sapphireonline.pk</p>
<p><CallIcon/>+92(0)42 111-738-245</p>
                </div>
                <div className="col-lg-2 FT">
                <h6>CUSTOMER CARE</h6><br></br>
                <p>Exchanges & Returns</p>
                <p>FAQs<br></br>Contact Us</p>
                </div>
                <div className="col-lg-2 FT">
                <h6>INFORMATION</h6>
                <p>About Us
Privacy<br></br> Policy<br></br>
SafePay<br></br> Guide<br></br>
Sale<br></br> Guide<br></br>
Payments<br></br>
Store<br></br> Locator<br></br>
Fabric<br></br> Glossary<br></br>
Blogs</p>
                </div>
                <div className="col-lg-4 FT">
                <h6>NEWSLETTER SIGN UP</h6>
                <p>Subscribe to our Newsletter for Exclusive Updates</p>
                <div className='fost'>
                    <input className='input ' placeholder='Enter Your Email'></input><button className='btn'>Subscribe</button>
                </div><br></br>
                <FacebookIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>
                <SearchIcon/>
     
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Footer
