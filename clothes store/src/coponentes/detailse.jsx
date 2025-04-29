import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
export const Detailes = () => {
    let params = useParams()
    let object = useSelector(x => x.dataClothes.arrClothes.find(k => k.nameitem == params.nameitem))

    return <div className="container">
        <h1 style={{color:"#ada186"}}>{params.nameitem} </h1>
        <h5>price: {object.price}</h5>
        <h5>size: {object.size}</h5>
        <h5>color: {object.color}</h5>
        <h5>count: {object.count}</h5>

    </div>

}