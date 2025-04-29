import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { add_ctagor, edit_ctagor } from "../store/dataAcition"


export const ChangeCatagury = ({ data, set }) => {
    const counter = useSelector(s => s.dataCategory.counter)
    const [newcatagury, setnewcatagury] = useState({ code: counter })
    const dispatch = useDispatch()

    useEffect(() => {
        if (data != undefined)
            setnewcatagury({ code: data.code, catagor: data.catagor })
        else
            setnewcatagury({ ...newcatagury, catagor: "enter name catagory" })

    }, [])

    const who_click = (newcatagury,set) => {
        if (data == undefined)
            dispatch(add_ctagor(newcatagury))
        else
            dispatch(edit_ctagor(newcatagury.code, newcatagury.catagor))
        set(false)
    }


    return <div className="form-group">
        name catagory:<input className="form-control" placeholder={newcatagury.catagor} onBlur={(e) => setnewcatagury({ ...newcatagury, catagor: e.target.value })}></input><br></br>
        <button    style={{  border:"none",backgroundColor: "#ada186"  ,width:"50px",height:"30px"}} className="btn btn-default"  onClick={() => who_click(newcatagury,set)}>ok</button>

    </div>

}