import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, Outlet, useNavigate } from "react-router-dom"
import { addToCart } from "../store/dataAcition"


export const Home = () => {
    const [add, setadd] = useState(useSelector(x => (x.dataCartReducer.InitialState)))
    let d = useDispatch()
    let item
    let user = useSelector(x => (x.dataUser.currentuser.userCode))
    let mone = useSelector(x => x.dataUser.mone)

    const f_addtocart = (x) => {
        item = { code: user, shoppingCode: mone, itemCode: x.code, name: x.nameitem, amount: 1, price: x.price }
        d(addToCart(item))

    }

    const [myarr, setmyarr] = useState(useSelector(x => (x.dataClothes.arrClothes)))
    let ca = useSelector(x => (x.dataClothes.arrClothes))
    let navigate = useNavigate()
    let arr = ["baby ", "girl", "boy", "men", "women"]

    const filter = (val) => {
        if (val == "") {
            setmyarr(ca)
        }
        else {
            let y = [...myarr]
            y = y.filter(i => i.namecatgory == val)
            setmyarr(y)
        }
    }
    const f_pass = () => {
        navigate('/cart')
    }
    return <div>
        <h2 style={{color:"#ada186"}}>welcom to shopping site</h2>
        <input style={{ width: "300px", height: "30px" }} list='category' onChange={(e) => filter(e.target.value)} placeholder={"Category"}></input>
        <datalist id='category' >
            {arr.map(o => <option key={o}>{o}</option>)}
        </datalist>
        <br></br>

        {myarr.map(x => <td style={{ display: "inline-block" }}>
            <h3 style={{color:"#ada186"}}>{x.nameitem}</h3>
            <h3>{<img src={x.src} alt="picture" style={{ margin: "38px" }} width="220px"></img>}</h3>
            <p ><Link style={{color:"#ada186"}} to={`det/${x.nameitem}`}>details</Link></p>
            <button style={{ Color: "#ada186", width: "100px", height: "30px" }}  onClick={() => f_addtocart(x)}>add to Cart</button>
        </td>)}
        <br></br>
        <br></br>
        <button style={{backgroundColor: "#ada186" ,width: "250px", height: "60px", fontSize: "20px" }} onClick={() => f_pass()}>finish shopping </button>
        <Outlet></Outlet>
    </div>
}
