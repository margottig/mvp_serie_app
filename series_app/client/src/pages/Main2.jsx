import axios from "../lib/axiosConfig";
import { useEffect, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { isLogged } from "../utils/sessionUtils";


function Main2() {
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

 useEffect(() => {
        isLogged(setLoaded, navigate)
        .then((res) =>{
            console.log(res, " QUE NOS RETORNA isLogged?")
            console.log(loaded, "YA SETEO???????")
        }).catch((error)=>{
            console.log(error)
        });

      }, []);

  //  useEffect(()=>{
  //       axios.get('http://localhost:8000/api/isLogged', {withCredentials:true})
  //       .then((res)=>{
  //           console.log(res.data.active)
  //           setLoaded(res.data.active)
  //       }).catch((err)=>{
  //           console.log(err)
  //       })
  //   }, [])

//   useEffect(() => {
//     isLogged(setLoaded, navigate);

//     axios
//       .get("/api/others/")
//       .then(({ data }) => {
//         setOthers(data.others);
//       })
//       .catch((err) => {
//         console.log("Not authorized!");
//       });
//   }, []);


  return (
    <>
      <div className="flex flex-row justify-between w-60">
        <Link to={`/new`}>
          <span className="text-blue-600 underline">Add Other</span>{" "}
        </Link>
      </div>
      <span>Other Web Page </span>
      {/* {loaded ? "hola" : "chao"} */}
  </>
  );
}

export default Main2;
