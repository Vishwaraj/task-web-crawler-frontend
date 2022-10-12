import { Button } from '@mui/material';
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { store } from '../../App';
import style from './List.module.css';

export default function List() {

    const {list} = useContext(store);

    console.log('reached here', list);

    const connections = list.map((string) => {
        let temp = string.split("\n");
        return temp;
    })


    console.log(connections);

    const buttonStyle = {
        marginLeft: '25rem',
        marginBottom: '2rem',
        marginTop: '7rem'
    }

    const navigate = useNavigate();

  return (
    <> 
        <Button onClick={()=>navigate('/')} style={buttonStyle} color='secondary' variant='contained' size='small'>Back</Button>
        <div className={style.container} >
         {connections.map((connection) => {
            return <Connection connection={connection} />
         })}
        </div>
    </>
  )
}


function Connection({connection}) {
    return (
        <>
            <div className={style.connectionBody} >
           <p>{connection[1]}</p>
           <p>{connection[3]}</p>
            </div>
        </>
    )
}