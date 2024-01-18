import {React,useState} from 'react'
import './login.css'
import { API } from '../../service/api'
const initialSignup={
    name:'',
    email:'',
    password:''
}
const Login=()=>{
    const [accounts, signup]=useState('login');
    const [signupuser, setSignup]=useState(initialSignup);
    const [error, setError]=useState('');
    const togglesignup=()=>{
        accounts==='login'?signup('signup'):signup('login')
    }
    const inputChange=(e)=>{
       //console.log(e.target.name);
       setSignup({...signupuser,[e.target.name]:e.target.value})
    }
    const signupUser= async ()=>{
       let response=await API.userSignup(signupuser);
       if(response.isSuccess){
            setError('');
            setSignup(initialSignup);
            signup('login');
       }else{
            setError('something went wrong');
       }
    }
    const imageURL = 'https://revenuearchitects.com/wp-content/uploads/2017/02/Blog_pic-450x255.png';
    return(
        <div className="row" style={{marginTop:'2rem'}}>
            <div className='col-sm-4'></div>
            <div className='col-sm-4'>
                <div className='container'>
                    <div className='img1'>
                        <img src={imageURL} alt='Logo Sesta Blog' height={150} weight={350}/>
                    </div>
                    {
                        accounts === "login" ?
                            <form style={{marginTop: '2rem', textAlign: 'left'}}>
                                <div className='form-group'>
                                    <label for='email'>Email:</label>
                                    <input type='text' className='form-control' id='email' name='email' placeholder='Enter your name'></input>
                                </div>
                                <div className='form-group' style={{marginTop:'1.5rem'}}>
                                    <label for='password'>Password:</label>
                                    <input type='password' className='form-control' id='pass' name='pass' placeholder='Enter your Password'></input>
                                </div>
                                <div className='btn form-control btn1' style={{backgroundColor: 'orange', marginTop:'1.5rem'}}>Login</div>
                                <div className='or' style={{marginTop:'1rem', marginBottom:'1rem', textAlign:'center'}}>OR</div>
                                <div onClick={()=>togglesignup()} className='btn form-control btn2'>Create an Account</div>
                            </form>
                        :
                            <form style={{marginTop: '2rem', textAlign: 'left'}}>
                                <div className='form-group'>
                                    <label for='name'>Name:</label>
                                    <input type='text' onChange={(e)=>inputChange(e)} className='form-control' id='name' name='name' placeholder='Enter your name'></input>
                                </div>
                                <div className='form-group' onChange={(e)=>inputChange(e)} style={{marginTop:'1.5rem'}}>
                                    <label for='email'>Email:</label>
                                    <input type='text' className='form-control' id='email' name='email' placeholder='Enter your email'></input>
                                </div>
                                <div className='form-group' onChange={(e)=>inputChange(e)} style={{marginTop:'1.5rem'}}>
                                    <label for='password'>Password:</label>
                                    <input type='password' className='form-control' id='pass' name='password' placeholder='Enter your Password'></input>
                                </div>
                                {error && <div className='error'>{error}</div>}
                                <div className='btn form-control btn1' style={{backgroundColor: 'orange', marginTop:'1.5rem'}} onClick={()=>signupUser()}>Sign Up</div>
                                <div className='or' style={{marginTop:'1rem', marginBottom:'1rem', textAlign:'center'}}>OR</div>
                                <div onClick={()=>togglesignup()} className='btn form-control btn2'>Already have an account</div>
                            </form>
                    }
                </div>
            </div>
            <div className='col-sm-4'></div>
        </div>
    )
}

export default Login;