import {Box, Typography} from '@mui/material'
import {useParams} from 'react-router-dom'
import { useState, useEffect,useContext } from 'react';
import {DataContext} from '../../context/DataProvider'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import {API} from '../../service/api'

const DetailView=()=>{

    const {id}=useParams();

    const [post, setPost]=useState({})
    const {account}=useContext(DataContext)

    const url= post.picture?post.picture:'https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80'

    useEffect(()=>{
        const fetchData= async ()=>{
            let response=await API.getPostById(id);
            if(response.isSuccess){
                setPost(response.data);
            }
        }
        fetchData();
    },[])

    return (   
        <>
            <Box textAlign={'center'}>
                <img src={url} alt="banner"/>
            </Box>
            <Typography textAlign={'center'}>{post.title}</Typography>
            <Box textAlign={'center'}>
                <Typography>{post.username}</Typography>
                <Typography>{new Date(post.createdDate).toDateString()}</Typography>
            </Box>
            <Typography textAlign={'center'}>{post.description}</Typography>
            <Box textAlign={'center'}>
                {
                    account.username === post.username &&
                    <>
                        <EditIcon style={{margin:"1rem"}}color='primary'/>
                        <DeleteIcon color='error'/>
                    </>
                }
                
            </Box>
        </>
        
    )
}

export default DetailView;