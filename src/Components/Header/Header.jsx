import HeaderMenu from "./HeaderMenu/HeaderMenu"
import "./Header.css"
import HeaderLang from "./HeaderLang/HeaderLang"
import HeaderLogo from "./HeaderLogo/HeaderLogo"
import HeaderTitle from "./HeaderTitle/HeaderTitle"

export default function Header() {
  return (
    <div className="HeaderChild">
        <HeaderMenu/>
        <div className="headerContainer">
            <HeaderLogo/>          
            <HeaderLang/>
        </div>
        <HeaderTitle/>
    </div>
  )
}
