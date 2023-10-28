import "./Header.css"
import { useNavigate } from "react-router-dom";
export default function Header(){
    const navigate = useNavigate()
    return <>
    <div className="header"> 
    <button className="logo" onClick={() => {navigate("/")}}>TWITER:)</button>

    <button className="newpostbutton" onClick={() => {navigate("/newpost")}}>+ POST</button>
    <button className="profileButton" onClick={() => {navigate("/me")}}>Profile</button>
    </div>
    </>
}