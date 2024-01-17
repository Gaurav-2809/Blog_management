import {React,useState} from 'react'
import './login.css'
const Login=()=>{
    const [accounts, signup]=useState('login');
    const togglesignup=()=>{
        accounts==='login'?signup('signup'):signup('login')
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
                                    <input type='text' className='form-control' id='name' name='name' placeholder='Enter your name'></input>
                                </div>
                                <div className='form-group' style={{marginTop:'1.5rem'}}>
                                    <label for='email'>Email:</label>
                                    <input type='text' className='form-control' id='email' name='email' placeholder='Enter your email'></input>
                                </div>
                                <div className='form-group' style={{marginTop:'1.5rem'}}>
                                    <label for='password'>Password:</label>
                                    <input type='password' className='form-control' id='pass' name='pass' placeholder='Enter your Password'></input>
                                </div>
                                <div className='btn form-control btn1' style={{backgroundColor: 'orange', marginTop:'1.5rem'}}>Sign Up</div>
                                <div className='or' style={{marginTop:'1rem', marginBottom:'1rem', textAlign:'center'}}>OR</div>
                                <div onClick={()=>togglesignup()} className='btn form-control btn2'>Login</div>
                            </form>
                    }
                </div>
            </div>
            <div className='col-sm-4'></div>
        </div>
    )
}

export default Login;