import react from "react";
import {useEffect} from "react";
import {Link} from "react-router-dom"

import {useForm} from "react-hook-form"
import axios from "axios"
import {singContext} from "../context/authContext.jsx"
import {useNavigate} from "react-router-dom"


function Register(){
	const navigate = useNavigate()
	 
const {userSing,user,isAutencade}=singContext()
    
   useEffect(()=>{
       if(isAutencade){
         navigate("/task")
       }
         
   },[isAutencade])

   const {register,handleSubmit,reset,formState:{errors}} = useForm()
  

    const envia = handleSubmit(async(data)=>{
      
      userSing(data)
      console.log(user)
      console.log(isAutencade)
       console.log(errors)
      reset()

    })
	return(
	<>
	  <form className="login" onSubmit={envia}>
    <h2>formulario</h2>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">name</label>
    <input type="text" 
    {...register("name",{required:true})}
    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  {errors.name&&(
  <p>name is require</p>
  )}

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">correo</label>
    <input type="email"
    {...register("email",{required:true})}
    className="form-control" id="exampleInputPassword1"/>
  </div>
  {errors.email&&(
  <p>email is require</p>
  )}
  <div className="mb-3">
    <label className="form-check-label" htmlFor="exampleCheck1">password</label>
    <input type="password"
    {...register("password",{required:true})}
    className="form-control" id="exampleCheck1"/>
  </div>
  {errors.password&&(
  <p>password is require</p>
  )}
  <button type="submit" className="btn btn-primary">enviar</button>
  <p className="link"><Link to="/login">entrar</Link></p>
</form>

	</>
	)
}


export default Register;