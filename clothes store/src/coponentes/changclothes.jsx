import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add_clothes, edit_clothes } from "../store/dataAcition"

export const Changclothes = ({ data, set }) => {
    const counter = useSelector(s => s.dataClothes.counter)
    const [newclothes, setnewclothes] = useState({ code: counter })
    const dispatch = useDispatch()

    useEffect(() => {
        if (data != undefined)
            setnewclothes(data)
        else
            setnewclothes({
                ...newclothes, nameitem: "enter code name item",
                codeC: "enter coode catagory",
                namecatgory: "enter name catagoty",
                price: "enter price",
                color: "enter color",
                size: "enter size",
                count: "enter count"

            })
    }, [])

    const who_click = (newclothes) => {
        if (data == undefined)
            dispatch(add_clothes(newclothes))
        else
            dispatch(edit_clothes(newclothes))
        set(false)
    }
    return <div className="form-group">
        name item:<input className="form-control" placeholder={newclothes.nameitem} onBlur={(e) => setnewclothes({ ...newclothes, nameitem: e.target.value })}></input>
        code Catgoty:<input className="form-control" placeholder={newclothes.codeC} onBlur={(v) => setnewclothes({ ...newclothes, codeC: v.target.value })}></input>
        name Catgory:<input className="form-control" placeholder={newclothes.namecatgory} onBlur={(k) => setnewclothes({ ...newclothes, namecatgory: k.target.value })}></input>
        price:<input className="form-control" placeholder={newclothes.price} onBlur={(b) => setnewclothes({ ...newclothes, price: b.target.value })}></input>
        color:<input className="form-control" placeholder={newclothes.color} onBlur={(l) => setnewclothes({ ...newclothes, color: l.target.value })}></input>
        size:<input className="form-control" placeholder={newclothes.size} onBlur={(p) => setnewclothes({ ...newclothes, size: p.target.value })}></input>
        count:<input className="form-control" placeholder={newclothes.count} onBlur={(t) => setnewclothes({ ...newclothes, count: t.target.value })}></input><br></br>
        <button    style={{  border:"none",backgroundColor: "#ada186"  ,width:"50px",height:"30px"}} className="btn btn-black" onClick={() => who_click(newclothes)}>ok</button>

    </div>


}





