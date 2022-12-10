import "./HeaderMenu.css"
import HeaderMenuButton from "./HeaderMenuButton/HeaderMenuButton"
import HeaderMenuList from "./HeaderMenuList/HeaderMenuList"

export default function HeaderMenu() {
  return (
    <div>
    <div className="HeaderMenuChild">
          <div className="HeaderMenuListParent">
            <HeaderMenuList/>
          </div>
          <div className="HeaderMenuButtonParent">
            <HeaderMenuButton/>
          </div>
    </div>
    <div className="HeaderMenuLine"></div>
    </div>
  )
}
