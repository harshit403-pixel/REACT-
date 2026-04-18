import { useNavigate} from "react-router"


export let useNavigates = ()=>{
    let navigate = useNavigate()
    return {navigate}
}

