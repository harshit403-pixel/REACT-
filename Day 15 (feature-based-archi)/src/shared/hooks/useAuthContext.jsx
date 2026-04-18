import { useContext } from "react";
import { Auth } from "../../context/AuthContext";
import { useNavigate } from "react-router";

export let useAuthContext = ()=> useContext(Auth)

export let naviagte = ()=> useNavigate()