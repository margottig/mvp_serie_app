import React from 'react'
import { useNavigate, Outlet, redirect} from "react-router-dom";
import { useState, useEffect } from "react";
import { isLogged, isLogged2 } from "../utils/sessionUtils";

// customHook
async function useAuth(resultado){
   const result = await resultado.then((res)=>{
    console.log(res, "RESTESETRE")
    return res
  }).catch((err)=>{
    console.log(err, "resultado")
    return redirect("/login")
  })
  return result
  
  // const [active, setActive] = useState(false)
  // useEffect(() => {
  //   isLogged2(navigate)
  //   .then((response)=>{
  //     console.log(response, " KIUBOLE")
  //     setActive(true) 
  //     return active
  //   }).catch((error)=>{
  //     console.log(error)
  //   })
  // },[active])
  //   return active;

     
    // isLogged2(navigate)
    // .then((res)=>{
    // console.log(res, " KIUBOLE")
    // return res;
    // }).catch((err)=>{
    //   console.log(err)
    // })

}

const PrivateRoute = ({children, loaded, setLoaded}) => {

  const navigate = useNavigate();
  const isAuth = useAuth(isLogged2(navigate));
  console.log(isAuth, " AQUI NO MAS")
  isAuth.then((res)=>{
    console.log(res, "snoopDog")
    setLoaded(true)
   }).catch((err)=>{
    console.log("welcome")
    return redirect("/login")
   })
  //   const resultado = isAuth.then((res)=>{return res})
  //   console.log(resultado, " IS AUTH")
    
    
    // useEffect(() => {
    //     isLogged()
    //     .then((res) =>{
    //         console.log(res, " QUE NOS RETORNA isLogged?")
    //         setLoaded(true)
    //         console.log(loaded, "YA SETEO???????")
    //     }).catch((error)=>{
    //         console.log(error)
    //     });

    //   }, []);



    // useEffect(()=>{
    //     axios.get('http://localhost:8000/api/isLogged', {withCredentials:true})
    //     .then((res)=>{
    //         console.log(res.data.active)
    //         setLoaded(res.data.active)
    //     }).catch((err)=>{
    //         console.log(err)
    //     })
    // }, [])

    // setLoaded(true)


  return (
    <>
    {isAuth ? <Outlet/>:"bajan"}
    {isAuth ? children: "spinetta"}
    {/* <Outlet/> */}
    </>
  )
}

export default PrivateRoute