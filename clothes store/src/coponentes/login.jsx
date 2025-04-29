import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { change_manager, change_user, currrent_user, now_user } from "../store/dataAcition"
export const Login = () => {
    const [login, setLogin] = useState({})//user
    const listuser = useSelector(s => s.dataUser.arruser)
    const [manager, setmanager] = useState(useSelector(s => s.dataUser.manager))
    const [user, setuser] = useState(useSelector(s => s.dataUser.user))
    const dispatch = useDispatch()
    const myNavigate = useNavigate()

    const cheak = () => {
        if (listuser.find((h => h.name == login.name) && (h => h.pass == login.pass))) {
            dispatch(currrent_user(true))
            dispatch(change_user(true))
            dispatch(now_user(login))
            myNavigate('/home')
        }
        else if (login.name == "manager" && login.pass == "789") {
            // setmanager(true)
            dispatch(change_manager(true))
            myNavigate('/home')
        }
        else
            myNavigate('/adduser')
    }
    return <div  className="container">
        <h2 style={{ color: "#ada186"}}>Log in </h2>
        enter name:<input  style={{ width: "800px", height: "35px", marginLeft: "50px" }} className="form-control" placeholder="enter name" onBlur={(e) => (setLogin({ ...login, name: e.target.value }))}></input>
        enter pass word<input   style={{ width: "800px", height: "35px", marginLeft: "50px" }} className="form-control" type={"password"} placeholder="enter passWord" onBlur={(k) => (setLogin({ ...login, pass: k.target.value }))}></input><br></br>
        <button  style={{ width: "120px", height: "35px", marginLeft: "50px", backgroundColor: "#ada186" }} className="btn btn-default" onClick={() => cheak()}>Log in</button>
    </div>
}
