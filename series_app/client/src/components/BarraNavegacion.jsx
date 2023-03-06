import axios from 'axios'
import { NavLink, useNavigate} from 'react-router-dom'

const BarraNavegacion = () => {
  const navigate = useNavigate();

  const logout = () => {
    axios.get("http://localhost:8000/api/logout", {withCredentials:true})
    .then((res) => {
      console.log(res)
      navigate("/");
    });
  };
  return (
    <div className='bg-dark'>
        <h1 className='text-info mb-3'> Series Animadas DB</h1>
        <NavLink to="/nuevaserie" className='me-2'> Formulario Serie</NavLink>
        <span className='text-white'> | </span>
        <NavLink to="/todasseries"className='ms-2'> Home</NavLink>
        <button type='button' className='btn btn-danger ms-5' onClick={logout}> Logout</button>
    </div>
  )
}

export default BarraNavegacion