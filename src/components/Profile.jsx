import React, { useEffect } from 'react'
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import {BASE_URL} from '../services/baseurl'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProfileAPI } from '../services/allAPI';

function Profile() {

    const [open, setOpen] = useState(false);

    const [userProfile,setUserProfile] = useState({
      username:"",
      email:"",
      password:"",
      github:"",
      linkedin:"",
      profile:""
    })


    const [isUpdate,setUpdate] = useState(false)
//once an image uploaded then that image will be stored in existing image
   const [existingImage,setExistingImage] =useState("")
   //to hold the url of the new image 
   const [preview,setpreview]= useState("")

   useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem("existingUser"))

setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,github:user.github,linkedin:user.linkedin,profile:""})

setExistingImage(user.profile)

   },[isUpdate])

   useEffect(()=>{
    if(userProfile.profile){
      setpreview(URL.createObjectURL(userProfile.profile))
    }
    else{
      setpreview("")
    }
},[userProfile.profile])

const handleProfileUpdate = async() =>{
  const {username,email,password,github,linkedin,profile} =userProfile

  if(!github || !linkedin){
  toast.info('please fill the form completely')
}
else{
  const reqBody = new FormData()
  reqBody.append("username",username)
  reqBody.append("email",email)
  reqBody.append("password",password)
  reqBody.append("github",github)
  reqBody.append("linkedin",linkedin)
  preview?reqBody.append("profile",profile):reqBody.append("profile",existingImage)

const token = sessionStorage.getItem("token")
   if(preview){
    const reqHeader ={
      "Content-Type":"multipart/form-data",
      "Authorization":`Bearer ${token}`
    
    }
    const result = await editProfileAPI(reqBody,reqHeader)
    console.log(result);
    if(result.status ===200){
      toast.success('profile uploaded successfully')
      sessionStorage.setItem("existingUser",JSON.stringify(result.data))
      setUpdate(true)
    }
    else{
      console.log(result.response.data);
    }
   }
   else{
    const reqHeader = {
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
    const result = await editProfileAPI(reqBody,reqHeader)
    console.log(result);
    if(result.status ===200){
      toast.success('profile uploaded successfully')
      sessionStorage.setItem("existingUser",JSON.stringify(result.data))
      setUpdate(true)
    }
    else{
      console.log(result.response.data);
    
    }
   }
}
}
  return (
    <div className='card shadow p-5 mb-5'>
     <div className='d-flex justify-content-between'>
        <h1>Profile</h1>
<button  onClick={() => setOpen(!open)} className='btn btn-outline-info'><i class="fa-solid fa-arrow-down"></i></button>
 </div>

<Collapse  in={open}>

 <div className=" row justify-content-center mt-4">
 <label htmlFor="profile" className='mb-5 text-center'>
    <input id='profile' type="file"  style={{display:'none'}} onChange={(e)=>setUserProfile({...userProfile,profile:e.target.files[0]})} />
   {existingImage==""?
   <img width={'200px'} height={'200px'} src={preview?preview:"https://www.pngall.com/wp-content/uploads/5/Profile.png"} alt="no image"  className='rounded-circle' />
   : <img width={'200px'} height={'200px'} src={preview?preview:`${BASE_URL}/uploads/${existingImage}`} alt="no image"  className='rounded-circle' />}
  </label>
  <div className='mb-3'>
    <input type="text" className='form-control' placeholder='GitHub' value={userProfile.github} onChange={(e)=>setUserProfile({...userProfile,github:e.target.value})} />
  </div>

  <div className='mb-3'>
    <input type="text" className='form-control' placeholder='LinkedIn' value={userProfile.linkedin} onChange={(e)=>setUserProfile({...userProfile,linkedin:e.target.value})} />
  </div>

  <div className='mb-3 mt-3'>
   <button onClick={handleProfileUpdate} className='btn btn-warning rounded w-100'>update</button>
  </div>
 </div>

 </Collapse>


 <ToastContainer autoClose={2000} theme='colored' position='top-center'/>
     </div>
  )
}

export default Profile