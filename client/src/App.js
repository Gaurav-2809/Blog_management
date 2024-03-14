import './App.css';
import Login from './components/accounts/login';
import DataProvider from './context/DataProvider';
import Home from  './components/home/homepage'
import {BrowserRouter, Routes, Route, Outlet, Navigate} from 'react-router-dom';
import Header from './components/Header/header';
import {useState} from 'react';

const PrivateRoute=({isAuthenticated, ...props})=>{
  return isAuthenticated?
  <>
    <Outlet />
  </>
  : <Navigate replace to='/login'/>
}
function App() {

  const [isAuthenticated, isUserAuthenticated]=useState(false);

  return (
    <DataProvider>
      <BrowserRouter>
      <Header/>
      <div style={{marginTop:64}}/>
        <Routes>
          <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated}/>} />
          <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated}/>} >
            <Route path='/' element={<Home/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
