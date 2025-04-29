
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { add, change_user, now_user } from "../store/dataAcition"

export const Join = () => {
    const [newr, setnewr] = useState({})
    let d = useDispatch()
    let navigate = useNavigate()
    const dispatch = useDispatch()

    const f_adduser = () => {
        d(add(newr))
        d(now_user(newr))
        dispatch(change_user(true))
        navigate('/home')
        
    }
    return <div className="form">
        <h2 style={{margin:"3%",color:"#ada186"}}>Join</h2>
        <fieldset>
            <input placeholder="code" type={"number"} style={{ width: "200px", height: "30px" }} onBlur={(e) => { setnewr({ ...newr, code: e.target.value }) }}></input><br></br><br></br>
            <input placeholder="name" type={"text"} style={{ width: "200px", height: "30px" }} onBlur={(e) => { setnewr({ ...newr, name: e.target.value }) }}></input><br></br><br></br>
            <input placeholder="password" type={"password"} style={{ width: "200px", height: "30px" }} maxLength={'8'} onBlur={(e) => { setnewr({ ...newr, pass: e.target.value }) }}></input><br></br><br></br>
            <input placeholder="details crditcard" style={{ width: "200px", height: "30px" }} onBlur={(e) => { setnewr({ ...newr, crditcard: e.target.value }) }}></input><br></br><br></br>
            <button  style={{ width: "80px", height: "30px", marginLeft: "50px", backgroundColor: "#ada186" }}  onClick={() => f_adduser()}>ok</button>
        </fieldset></div>
}  
