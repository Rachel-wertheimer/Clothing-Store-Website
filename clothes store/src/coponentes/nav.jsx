import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
export const Nav = () => {
  const manager = useSelector(s => s.dataUser.manager)
  const user = useSelector(s => s.dataUser.user)
  const currentuser = useSelector(s => s.dataUser.currentuser)
  
  
  return <>
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">clothes</a>
        </div>
        <ul className="nav navbar-nav">

          <li><Link to="home">Home</Link></li>
          <li><Link to="login">Log in</Link></li>
          <li><Link to="adduser">Join</Link></li>

          {user && <li><Link to="ezor">Private area</Link></li>}
          {user && <li><Link to="cart">Shopping cart</Link></li>}
          {user && <li style={{ color: "white" }}><a>{currentuser.name}</a></li>}
          {manager && <li><Link to="catagury">Categoty</Link></li>}
          {manager && <li><Link to="listclothes">List clothes</Link></li>} 
          {manager && <li style={{ color: "white" }}><a>manager</a></li>}

        </ul>
        <form className="navbar-form navbar-left">
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Search"></input>
          </div>
        </form>
      </div>
    </nav>
  </>
}