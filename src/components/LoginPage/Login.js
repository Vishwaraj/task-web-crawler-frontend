import { Button, TextField } from '@mui/material';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { store } from '../../App';
import style from './Login.module.css';

export default function Login() {

    const {setList} = useContext(store);

    const loginDetails = {
        email: '',
        password: ''
    }

    const [data, setData] = useState(loginDetails);


    // const backendAPI = 'http://localhost:4000'
    const backendAPI = 'https://task-web-crawler.herokuapp.com'
    

    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            const result = await fetch(`${backendAPI}/login`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json"
                }
            });

            const apiData = await result.json();

            console.log(apiData);

            setList(apiData.result);

            if(apiData.result) {
                navigate('/connections')
            }

        } catch (error) {
            console.log(error);
        }
    }




  return (
    <>
        <div className={style.container} >
        <img src='https://cdn.cdnlogo.com/logos/l/74/linkedin.svg'  alt='linkedin' />
        <form className={style.form} >
            <TextField onChange={(e)=>setData({...data, email: e.target.value})} value={data.email} size='small' label='E-mail' />
            <TextField onChange={(e)=>setData({...data, password: e.target.value})} value={data.password} size='small' label='password' />
            <Button onClick={()=>handleSubmit()} variant='contained' color='secondary' >Log In</Button>
        </form>
        </div>
    </>
  )
}  
