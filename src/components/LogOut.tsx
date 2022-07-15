import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logOutReducer } from '../state/logInSlice';
import { RootState } from '../store';

interface ILogOutProps {
}

const LogOut: React.FunctionComponent<ILogOutProps> = (props) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {user} = useSelector((state:RootState)=>state.logged)

    useEffect(()=>{
        if(user===false){
            navigate('/logIn')
        }
    })

    const logOutFunction=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{     
        e.preventDefault()  
        dispatch(logOutReducer())
        navigate("/logIn")
    }
  return (    
         <button onClick={(e)=> logOutFunction(e)} className="theButton2"><b>Log Out</b></button>    
  )
};

export default LogOut;
