
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { change_list } from "../store/dataAcition"
import { Changclothes } from "./changclothes"


export const Listclothes = () => {
    const [showadd, setshowadd] = useState(false)
    const [isedite, setisedite] = useState(false)
    const [data, setdata] = useState({})
    const listclothes = useSelector(s => s.dataClothes.arrClothes)
    const dispatch = useDispatch()

    const f_delete = (code) => {
        let y = listclothes.filter(o => o.code != code)
        dispatch(change_list(y))
    }

    const f_sreach = (x) => {
        setisedite(true)
        setdata(x)
    }
   
    return <div className="container">
        <h2  style={{ color: "#ada186" }}>hello manager</h2>
        <p  style={{ color: "#ada186" }}> all clothes in stor</p>
        <table className="table table-striped">
            <thead>
                <tr style={{ color: "#ada186" ,fontSize:"20px",fontFamily:"initial"}}>
                    <td>code item</td>
                    <td>name item</td>
                    <td>code category</td>
                    <td>name category</td>
                    <td>img</td>
                    <td>price</td>
                    <td>color</td>
                    <th>size</th>
                    <th>count</th>
                </tr>
            </thead>
            <tbody>{
                listclothes.map((x, i) =>
                (<tr style={{ backgroundColor: "whitesmoke" }} key={x.code}>
                    <td>{x.code}</td>
                    <td>{x.nameitem}</td>
                    <td>{x.codeC}</td>
                    <td>{x.namecatgory}</td>
                    <td><img src={x.src} alt="clothes" width="50px"></img></td>
                    <td>{x.price}</td>
                    <td>{x.color}</td>
                    <td>{x.size}</td>
                    <td>{x.count}</td><br></br>
                    <button  style={{border:"none",margin: "5px" , backgroundColor: "#ada186" ,width:"50px",height:"30px"}}onClick={() => f_delete(x.code)}>delete</button>
                    <button style={{ border:"none", backgroundColor: "#ada186"  ,width:"50px",height:"30px"}}onClick={() => f_sreach(x)}>edit</button>
                </tr>
                ))
            }
                <tr></tr>
            </tbody>
        </table>
        <button  style={{ border:"none", backgroundColor: "#ada186" ,width:"200px",height:"50px"}}onClick={() => setshowadd(!showadd)}>add clothes</button>
        {showadd && <Changclothes set={setshowadd}></Changclothes>}
        {isedite && <Changclothes set={setisedite} data={data}></Changclothes>}
    </div>


}