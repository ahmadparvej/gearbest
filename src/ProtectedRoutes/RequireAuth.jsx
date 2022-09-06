import React from 'react'
import { useSelector } from 'react-redux';
import {Navigate} from "react-router-dom";

export const RequireAuth = ({children}) => {
  const { token } = useSelector((state)=>state.authReducer)
  if(token===""){
    return <Navigate to="/login" replace={true}/>
  }
  return children
}