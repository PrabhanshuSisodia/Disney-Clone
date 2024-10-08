import logo from "../assets/logo.png"

function Header() {
  return (
    <div>
      <img src={logo} alt="" className="w-[80px] md:w-[115px] object-cover" />
    </div>
  )
}

export default Header
