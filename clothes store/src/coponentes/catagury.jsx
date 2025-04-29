import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { change_list_catagury } from "../store/dataAcition"
import { ChangeCatagury } from "./changcatagury"

export const Catagury = () => {
    const [isadd, setisadd] = useState(false)
    const [isedite, setisedite] = useState(false)
    const [data, setdata] = useState({})
    const listcatagury = useSelector(s => s.dataCategory.arrcategory)
    const dispatch = useDispatch()

    const f_delete = (code) => {
        let y = listcatagury.filter(o => o.code != code)
        dispatch(change_list_catagury(y))

    }
    const f_sreach = (x) => {
        setisedite(true)
        setdata(x)
    }
    return <div className="container">
        <h2 style={{ color: "#ada186" }}>Hello manager</h2>
        <h4 style={{ color: "#ada186" }}>Categorys in the Stor</h4>
        <table className="table table-striped">
            <thead>
                <tr style={{ color: "#ada186" ,fontSize:"20px",fontFamily:"initial"}}>
                    <td>code catagory</td>
                    <td>name catagory</td>

                </tr>
            </thead>
            <tbody>{
                listcatagury.map((x) =>
                (<tr style={{ backgroundColor: "whitesmoke" }}  >
                    <td>{x.code}</td>
                    <td>{x.catagor}</td><br></br>
                    <button style={{   border:"none",margin: "5px" , backgroundColor: "#ada186" ,width:"50px",height:"30px"}} onClick={() => f_delete(x.code)}>delete</button>
                    <button  style={{ border:"none", backgroundColor: "#ada186"  ,width:"50px",height:"30px"}}onClick={() => f_sreach(x)}>edit</button>


                </tr>
                ))
            }
                <tr></tr>
            </tbody>
        </table>
        <button  style={{ border:"none", backgroundColor: "#ada186" ,width:"200px",height:"50px"}} onClick={() => setisadd(!isadd)}>add catagory</button>
        {isadd && <ChangeCatagury set={setisadd}></ChangeCatagury>}
        {isedite && <ChangeCatagury set={setisedite} data={data}  ></ChangeCatagury>}

    </div>
}
