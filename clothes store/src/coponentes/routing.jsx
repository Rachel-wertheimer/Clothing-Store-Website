
import { Route, Routes } from "react-router-dom"
import { Login } from "./login"
import { Home } from "./home"
import { Ezor } from "./ezor"
import { Catagury } from "./catagury"
import { Cart } from "./cart"
import { Listclothes } from "./Listclothes"
import { Detailes } from "./detailse"
import { Join } from "./join"
import { Screen } from "./screen"

export const Routing = () => {

    return <>
        <Routes>
            <Route path="login" element={<Login></Login>}></Route>
            <Route path="home" element={<Home></Home>}>
                <Route path="det/:nameitem" element={<Detailes></Detailes>}></Route>
            </Route>
            <Route path="/" element={<Screen></Screen>}></Route>
            <Route path="ezor" element={<Ezor></Ezor>}></Route>
            <Route path="catagury" element={<Catagury></Catagury>}></Route>
            <Route path="adduser" element={<Join></Join>}></Route>
            <Route path="listclothes" element={<Listclothes></Listclothes>}></Route>
            <Route path="cart" element={<Cart></Cart>}></Route>
        </Routes>
    </>
}
