import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"




//register api
export const registerAPI = async (user)=>{
 return  await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}


//Login API

export const loginAPI = async(user)=>{
 return   await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}

//add API

export const addProjectAPI = async(reqBody,reqHeader)=>{
    return   await commonAPI("POST",`${BASE_URL}/project/add`,reqBody,reqHeader)
   }

   //home project

   export const homeProjectAPI = async()=>{
    return   await commonAPI("GET",`${BASE_URL}/projects/home-project`,"","")
   }

   //All project
   //guery parameter = path ,? , key=value

   export const allProjectApi = async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/projects/all-project?search=${searchKey}`,"",reqHeader)
   }

   //userProject
   export const allUserProject = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-project`,"",reqHeader)
   } 

   //editUserProject

   export const editProjectAPI = async(projectId,reqBody,reqHeader)=>{
    //path paramter -:id - router
    return await commonAPI("PUT",`${BASE_URL}/project/edit/${projectId}`,reqBody,reqHeader)
   } 

   
   //delete project API

   export const deleteProjectApi = async(projectId,reqHeader)=>{
    //path paramter -:id - router
    return await commonAPI("DELETE",`${BASE_URL}/project/remove/${projectId}`,{},reqHeader)
   } 

   //edit profile
   
   export const editProfileAPI = async(reqBody,reqHeader)=>{
    //path paramter -:id - router
    return await commonAPI("PUT",`${BASE_URL}/user/edit/`,reqBody,reqHeader)
   } 
