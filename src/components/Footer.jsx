import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{width:'100%',height:'300px',backgroundColor:'greenyellow'}} className='d-flex align-items-center justify-content-center flex-column'>
    <div className="footer d-flex align-items-center justify-content-evenly w-100">
    <div className="website"style={{width:'400px'}}>
        <h4> <i class="fa-brands fa-stack-overflow"></i> {' '}
Project Fair</h4>
 <h6>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, eum est. Ipsa, fuga, aut quia, ullam libero temporibus delectus reprehenderit sint repudiandae soluta omnis odio animi ratione quasi. Id, tempora.</h6>
    </div>
    <div className="link d-flex flex-column">
        <h4>Links</h4>
        <Link to={'/'}style={{textDecoration:'none',color:'black'}}>Home Page</Link>
        <Link to={'/login'} style={{textDecoration:'none',color:'black'}}>Login Page</Link>
        <Link to={'/register'}style={{textDecoration:'none',color:'black'}}>Register Page</Link>
    </div>
    <div className="guides d-flex flex-column">
        <h4>Guides</h4>
        <Link to={'https://react.dev/'} style={{textDecoration:'none',color:'black'}}>React</Link>
        <Link to={'https://react-bootstrap.netlify.app/'}style={{textDecoration:'none',color:'black'}}>React Bootstrap</Link>
        <Link to={'https://bootswatch.com/'}style={{textDecoration:'none',color:'black'}}>Bootswatch</Link>
    </div>
    <div className="contact ">
        <h4>Contact Us</h4>
        <div className='d-flex mb-3'>
            <input type="text" className='form-control' placeholder='Enter your Email ID'/>
            <button className='btn btn-dark text-white ms-2'>Subscribe</button>
        </div>
        <div className='d-flex justify-content-evenly'>
       <Link to={'https://instagram.com/albuuuuu_on?igshid=MTM2OG1pNGZzeTl1Ng=='}style={{textDecoration:'none',color:'red'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
       <Link to={'https://www.facebook.com/profile.php?id=100076331562917&mibextid=ZbWKwL'}style={{textDecoration:'none',color:'blue'}}><i class="fa-brands fa-twitter fa-2x "></i></Link>
       <Link to={'www.linkedin.com/in/muhammed-shameer-t-34884b268'}style={{textDecoration:'none',color:'blue'}}><i class="fa-brands fa-linkedin fa-2x "></i></Link>
       <Link to={'https://www.facebook.com/profile.php?id=100076331562917&mibextid=ZbWKwL'}style={{textDecoration:'none',color:'blue'}}><i class="fa-brands fa-facebook fa-2x "></i></Link>

        </div>
    </div>
    </div>
    <p className='mt-5'>Copyright @ 2023 Project Fair.Built with React</p>
</div>
  )
}

export default Footer