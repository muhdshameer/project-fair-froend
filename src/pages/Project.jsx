import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import ProjectCard from '../components/ProjectCard'
import { allProjectApi } from '../services/allAPI'

function Project() {

  const [allproject,setAllProject] = useState([])
  const [searchKey,setsearchKey]= useState("")
  

const getAllProject = async()=>{
 
  if(sessionStorage.getItem("token")){

const token = sessionStorage.getItem("token")

 const reqHeader ={
  "Content-Type":"application/json",
  "Authorization":`Bearer ${token}`

 }

    const result = await allProjectApi(searchKey,reqHeader)
console.log(result);
setAllProject(result.data)

  }

  }
console.log(searchKey);

useEffect(()=>{
  getAllProject()
},[searchKey])

  return (
    <>
    <Header/>

     <div className='d-flex justify-content-center align-items-center flex-column mt-5'>
      <h1>  All project</h1>
      <div className='d-flex mt-5 w-25'>
        <input type="text" className='form-control' value={searchKey} onChange={e=>setsearchKey(e.target.value)} placeholder='search the projects using technologies' />
        <i style={{marginLeft:'-45px', color:'gray'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
      </div>
     </div>

      <Row className=' mt-5 mb-5 container-fluid'>
      {allproject?.length>0?
      allproject.map((item)=>(   <Col className='mb-5' sm={12} md={6} lg={4}>
        <ProjectCard project={item}/> 
         </Col>))
     :<p>Nothing to Display</p>}
      </Row>
    </>
   
  )
}

export default Project