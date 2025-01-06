import "../src/App.css"
import  { FC, ReactNode } from "react"
import { Link } from "react-router-dom"
interface Header {
  children: ReactNode
}
const Header:FC<Header> = ({ children })=> {
 return (
  <>
    <div id="header">
      <nav>
        <Link to="/">Поздравление</Link>
        <Link to="/send-to-SantaClaus">Письмо Деду Морозу</Link>
      </nav>
        <h1>{children}</h1>
    </div>
  </>
 )
}
export default Header;