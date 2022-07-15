import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { logInReducer } from '../state/logInSlice';
import { RootState } from '../store';

interface ILogInProps {
}

const LogIn: React.FunctionComponent<ILogInProps> = (props) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector((state:RootState)=>state.logged)

    useEffect(() => {
        if(user!==false){
            navigate("/")
        }
    }, [])

    const logInFunction=(e: React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        const user = true;
        dispatch(logInReducer(user))
        navigate("/")
    }

  return (
    <div >
        <button  onClick={(e)=> logInFunction(e)} className="theButton2"><b>Log In</b></button>
    </div>
  )
};

export default LogIn;
