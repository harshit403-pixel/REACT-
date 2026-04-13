import { useNavigate } from "react-router";
import { useAuthContext } from "../../../shared/hooks/useAuthContext";
import { useForm } from "react-hook-form";
import { storage } from "../../../shared/utils/LocalStorage";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";


export let useAuth = () =>{
      let navigate = useNavigate()

    let{setRegisteredAdmins, registeredAdmins, setLoggedInAdmins } = useAuthContext()
  
      let { register, reset, handleSubmit, formState: { errors } } = useForm({ mode: "onchange" })
  
      let handleRegisterFormSubmit = (data) => {
  
          let arr = [...registeredAdmins , {...data , id:nanoid()} ]
          setRegisteredAdmins(arr)
          storage.set("reg admins", arr)
          toast.success("Admin Registered")
          reset()
  
  
      }
  
     
          let handleLoginFormSubmit = (data)=>{
      
              let admin = registeredAdmins.find((elem)=>{
                 return elem.email === data.email && elem.password === data.password
              })
              console.log(admin)
              if(!admin){
                  toast.error("User Not Registered")
              }
              setLoggedInAdmins(admin)
              storage.set("log admins", admin)
              toast.success("User Logged In")
              reset()
      
      
          }

          return{
            registeredAdmins, setLoggedInAdmins, setRegisteredAdmins , handleLoginFormSubmit , handleRegisterFormSubmit , errors , register , reset, navigate , handleSubmit
          }

}


      
      