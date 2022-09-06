import React from 'react'
import { useSelector } from 'react-redux';
import {Navigate} from "react-router-dom"
export const RequireAuth = ({children}) => {
  const {isAuth} = useSelector((state)=>state.authReducer)
  if(!isAuth){
      return <Navigate to="/signin" replace={true}/>
  }
  return children
}