import instance from "../lib/axiosConfig";

// const isLogged2 =  (navigate) => {
//     instance.get("/api/isLogged")
//      .then((data) => {
// //       console.log("AUTORIZADO!!", data)
//        return data.data.active
//       })
//     .catch((err) => {
//       if (err.response.status === 401) {
//         navigate("/login/error");
//       }
//     });
// };


const isLogged2 = async (navigate) => {
    try{
        const response = await instance.get("/api/isLogged")
        // console.log(response.data, "RESPUESTA")
        return response.data.active
    }catch(error){
        console.log(error)
        if (error.response.status === 401) {
            navigate("/login/error");
        }
    }
}


const isLogged = async (setLoaded, navigate) => {
    try{
        const response = await instance.get("/api/isLogged")
        setLoaded(true)
        // console.log(response.data, "RESPUESTA")
        return response.data.active
    }catch(error){
        console.log(error)
        if (error.response.status === 401) {
            navigate("/login/error");
        }
    }
}

export {isLogged, isLogged2}



// export const isLogged = async (setLoaded, navigate) => {
//     try{
//         // get response from server
//         const response = await instance.get("/api/isLogged");
//         // axios convert response data to json automatically, the next line will be wrong
//         // const json = await response.json()
//         // set state with true
//         console.log("llego por try")
//         // const resultado = await setLoaded(true)
//         return true

//     } catch(err){
//         // if (err.response.status === 401) {
//         //     navigate("/login/error");
//         //   }
//         console.log("sigue sin setear load", err)
//     }
// };
