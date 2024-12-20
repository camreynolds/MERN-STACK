import {useState} from 'react'
import {useAuthContext} from './useAuthContext'

export const useSignup = () =>{
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const {dispatch} = useAuthContext()

  const signup = async (email,password)=>{
    setIsLoading(true)
    setError(null)

    const response = await fetch('/api/users/signup',{
      method: 'POST',
      body: JSON.stringify({email,password}),
      headers:{
        'Content-Type': 'application/json'
      }
    })

    const json = await response.json()

    if(!response.ok){
      setIsLoading(false)
      setError(json.error)
    }

    if(response.ok){
      setIsLoading(false)
      setError(null)
      localStorage.setItem('user', JSON.stringify(json))
      dispatch({type:'LOGIN', payload:json})
    }
  }
  
  return {signup,error,isLoading}
}