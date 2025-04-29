
import { useDispatch, useSelector } from "react-redux"

export const Ezor=()=>{
    const currentUser = useSelector(s => s.dataUser.currentuser)//
    let shopping = useSelector(k => k.datashopping.arrshpping)//
    const ezSh = shopping.filter(x => x.codeuser == currentUser.userCode)
    const mydispatch = useDispatch()
    let sum = 0
    return <div className="container">
        <h1 style={{color:"#ada186"}}>Hello {currentUser.name}</h1>
        <table className="table">
            <thead>
            <tr style={{ color: "#ada186", fontSize: "20px", fontFamily: "initial" }}>
                    <th>shopping code</th>
                    <th>custumer code</th>
                    <th>date</th>
                    <th>name</th>
                    <th>count</th>
                </tr>
            </thead>
            <tbody>
                {ezSh.map((y) => <>
                    {y.arr.map((x) => <tr>
                        <td>{y.code}</td>
                        <td>{y.codeuser}</td>
                        <td>{y.data}</td>
                        <td>{x.name}</td>
                        <td>{x.count}</td>
                    </tr>)}
                   
<br></br>
<br></br>
                </>
                )}
            </tbody>
        </table>
    </div>
}


       



   