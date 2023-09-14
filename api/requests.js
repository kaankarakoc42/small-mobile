import {ToastAndroid} from 'react-native';
const baseUrl = "https://onurkarabeyoglu.xyz"


const fetchControl = (val,replacer)=>{
      return fetch(val,replacer).then(
        response=> {
              console.log("fetch control",JSON.stringify(response))
              if(response.status==401){
                 return false; 
              };
              if(response.status==403){
                return false
              }
              if(response.status==400){
                return false
              }
              if(response.status==522){
                ToastAndroid.show('server is down', ToastAndroid.SHORT);
                return false
              }
              
              return response.json()
              
        }
      ).then(json=>{
        console.log({"url":val,"response":json}); 
      return json})

}

const LoginRequest = (username,password) => {
    data =JSON.stringify({email:username,password:password})
    return fetch(`${baseUrl}/api/auth/login`,
    {
        method:"POST",
        body:data,
        headers: {
            'Content-Type': 'application/json'
        },
    }
    )
  };


const RegisterRequest = (state)=>{
    data =JSON.stringify({FirstName:state.firstName,
                          LastName:state.lastName,
                          Email:state.email,
                          Password:state.password})
    return fetch(`${baseUrl}/api/auth/register`,
    {
        method:"POST",
        body:data,
        headers: {
            'Content-Type': 'application/json'
        },
    }
    )
}

const VerifyToken = (token)=>{
    return fetchControl(`${baseUrl}/api/auth/verify`,
    {
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    }
    )
}


const RefreshToken = (token) => {
    const data = JSON.stringify({"refreshToken":token})
    return fetchControl(`${baseUrl}/api/auth/refresh-token`,
    {
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:data
    }
    )
}

const GetArticles = ()=>{
 
    return fetch(`${baseUrl}/api/articles?TopicsId=1,2&PageIndex=0&PageSize=10`,
    {
        method:"GET",
        headers: {
            'Content-Type': 'application/json',
        },

    }
    )
}

const GetProfile = (token)=>{
      return fetchControl(`${baseUrl}/api/profiles/me`,{
        method:"GET",
        headers:{
            'Content-Type':'application/json',
            'Authorization': `Bearer ${token}`
        }
      })
}


const SearchArticle = (context)=>{
      return fetchControl(`${baseUrl}/api/articles/search?SearchKeywords=${context}`,{
        method:"GET",
      })
}


const ResetPassword = (mail) =>{
    data = JSON.stringify({Email:mail})
    console.log(data)
    return fetchControl(`${baseUrl}/api/auth/forgot-password`,{
        method:"POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body:data
      })
}

const api = {LoginRequest,RegisterRequest,VerifyToken,RefreshToken,GetArticles,GetProfile,SearchArticle,ResetPassword}
export default api;

