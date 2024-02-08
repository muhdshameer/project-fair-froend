import React, { useContext, useEffect, useState } from 'react'
import AddProjects from './AddProjects'
import { allUserProject, deleteProjectApi } from '../services/allAPI'
import { addProjectResponseContext, editProjectResponseContext } from '../Contexts/ContextShare'
import EditProject from './EditProject'
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 



function Myprojects() {

  const {addProjectResponse , setAddProjectResponse} = useContext(addProjectResponseContext)
  const {editProjectResponse , setEditProjectResponse} = useContext(editProjectResponseContext)

const [userProject,setUserProject]=useState([])

  const getUserProject = async()=>{

    const token =sessionStorage.getItem("token")


  const reqHeader ={
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  
   }
  


    const result = await allUserProject(reqHeader)
console.log(result.data);
setUserProject(result.data)
}

useEffect(()=>{
getUserProject()
},[addProjectResponse,editProjectResponse])


const handleDelete = async(id)=>{
  const token = sessionStorage.getItem("token")

  const reqHeader ={
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  
   }
const result = await deleteProjectApi(id,reqHeader)
console.log(result);
if(result.status ===200){
  getUserProject()
}
else{
  alert(result.response.data)
}
}

  return (
    <div className='card shadow p-5 ms-3 me-3 mb-5'>
        <div className='d-flex'>
        <h3 className='text-success ms-3'>My Projects</h3>
   <div className='ms-auto'>
    <AddProjects/>
</div>
</div>


<div className="mt-5">
   {userProject?.length>0?
   userProject?.map((item)=>(  
     <div className="border d-flex align-items-center rounded p-2 mb-3"> 
   <h5>{item.title}</h5>
   <div className="ms-auto d-flex">

       <EditProject project = {item}/>

       <a href={item.github} target='_blank' className='btn'><i class="fa-brands fa-github text-success"></i></a>
    
    <button onClick={()=>handleDelete(item._id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button>
   </div>
   </div>))
:
<p className='text-danger fw-bolder fs-4'>No Project Uploaded yet  !!</p>}

</div>
 <ToastContainer autoClose={2000} theme='colored' position='top-center'/> 
    </div>
  
  )
}

export default Myprojects