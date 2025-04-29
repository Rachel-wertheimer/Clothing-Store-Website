import { useDispatch, useSelector } from "react-redux"
import { minus, plus, removeItems, setCartToShopping, set_moneS } from "../store/dataAcition"
import { useState } from "react"

export const Cart = () => {
    let shopping = useSelector(s => s.dataCartReducer.arrCart)
    let user = useSelector(s => s.dataUser.currentuser.userCode)
    const mydispatch = useDispatch()
    let item
    let items = []
    let mones = useSelector(s => s.datashopping.moneShopping)
    const [flag, setFlag] = useState(true)
    let datee = new Date().toISOString().split('T')[0]
    let buy
    const f_sum = (sum) => {
        finalSum += sum
    }

    const f_pay = () => {
        debugger
        shopping.map(x => {
            item = { name: x.name, count: x.amount }
            console.log(item)
            items.push(item)
        })


        buy = { code: mones, codeuser: user, data: datee.toString(), sumprice: finalSum, arr: items }
        mydispatch(setCartToShopping(buy))
        mydispatch(set_moneS(mones + 1))
        mydispatch(removeItems(user))
    }


    const f_minus = (x) => {
        mydispatch(minus(x.amount - 1, x.itemCode))
    }
    const f_plus = (x) => {
        mydispatch(plus(x.amount + 1, x.itemCode))
    }
    let sum = 0
    let finalSum = 0
   
    return <div className="container">
     <h2 style={{color:"#ada186" ,margin:"3%"}}>shopping Cart</h2>
        {flag && <table className="table">
            <thead>
                <tr style={{ color: "#ada186", fontSize: "20px", fontFamily: "initial" }}>
                    <th>custumer code</th>
                    <th>shopping code</th>
                    <th>item code</th>
                    <th>name</th>
                    <th>count</th>
                    <th>price</th>
                    <th>final price</th>
                </tr>
            </thead>
            <tbody>

                {shopping.map((y) =>
                    y.amount > 0 && <tr>
                        {Object.keys(y).map(n => (<td>{y[n]}</td>))}
                        <td>{sum = y.amount * y.price}</td>
                        {f_sum(sum)}
                        <button onClick={() => f_plus(y)}>+</button>
                        <button onClick={() => f_minus(y)}>-</button>
                    </tr>
                )}
            </tbody>
        </table>}
        {flag && finalSum != 0 && <div>
            <p>final sum {finalSum}</p>
            <button style={{ width: "125px", height: "35px", marginLeft: "50px", backgroundColor: "#ada186" }} className="btn btn-default" onClick={() => (setFlag(!flag), f_pay())}>Pay</button>
        </div>
        }
        {
            !flag && <div>
                <h1 style={{color:"#ada186"}} >Thanks About Your Shopping</h1>
                <h3 style={{color:"#ada186"}}>You Will Get The Fee To Your Email</h3>

            </div>
        }
    </div>
}