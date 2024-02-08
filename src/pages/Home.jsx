import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import titleImage from '../Assets/pngtree-business-strategy-planning-project-management-png-image_6231955.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'
import { homeProjectAPI } from '../services/allAPI'

function Home() {
//state to store token

const [islogin , setIsLogin] = useState(false)


const [homeProject,setHomeProject]=useState([])

const getHomeProject = async()=>{
  const result= await homeProjectAPI()
  console.log(result);
  setHomeProject(result.data)
}

useEffect(()=>{
  if(sessionStorage.getItem("token")){
    setIsLogin(sessionStorage.getItem("token"))
  }
  else{
    setIsLogin("")
  }
},[])

useEffect(()=>{
getHomeProject()
},[])

console.log(islogin);

  return (
    <>
    <div style={{width:'100%',height:'100vh',backgroundColor:'greenyellow'}} className='mb-5'>
      <div className="container-fluid rounded">
        <Row className='align-items-center p-5'>
          <Col sm={12} md={6}>
            <h1 className='text-dark mb-4' style={{fontSize:'80px'}}>Project Fair</h1>
            <p> One stop destination for all software development Projects</p>

        { islogin?
           <Link to={'/dashboard'}> <button className='btn btn-primary rounded'>Manage Project <i class="fa-solid fa-arrow-right"></i></button></Link> :

          <Link to={'/login'}> <button className='btn btn-primary rounded'>Get Started <i class="fa-solid fa-arrow-right"></i></button></Link> }
          </Col>

          <Col sm={12} md={6} style={{marginTop:'100px'}}>
          <img className='w-75 ms-5' src={titleImage} alt="no image" />
          </Col>
        </Row>

      </div>

    </div>

    {/* section for all projects */}

<div className='all-project mt-5 mb-5'>
  <div className="text-center">
    <h1>Explore Our Projects</h1>

    <marquee scrollAmount={20} className="mt-5">

    <div className='d-flex'>

     {homeProject?.length>0?
     homeProject.map((item)=>( <div className='ms-5' style={{width:'500px'}}>
     <ProjectCard project ={item}/>
      </div>))
     : null
      }

    

    </div>
    </marquee>
<div className='text-center mt-5'>
<h6><Link to={'/project'}>See More Projects</Link></h6>

</div>

  </div>
</div>

    </>
  )
}

export default Home