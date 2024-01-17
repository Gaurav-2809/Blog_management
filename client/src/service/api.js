import axios from 'axios';

const API_URL='http://localhost:8000';
const axiosInstance=axios.create({
    baseURL: API_URL,
    timeout: 10000,
    headers:{
        "content-type":"application/json" 
    }
})

axiosInstance.interceptors.request.use(
    function(config){
        return config;
    },
    function(error){
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    function(response){
        return processResponse(resposne);
    },
    function(error){
        return Promise.reject(processError(error));
    }
)

const processResponse=(response)=>{
    if(response?.status===200){
        return {isSuccess: true, data:response.data}
    }else{
        return {
            isFailure: true,
            status: response?.status,
            msg: response?.msg,
            code: response?.code
        }
    }
}

const processError=(error)=>{
    if(error.response){

    }else if(error.request){

    }else{
        
    }
}