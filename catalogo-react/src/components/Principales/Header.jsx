import Logo from '../../logo512.png'; 
import Nav from './Nav'
import './Header.css'

export default function Header() {

  return (
    <>
    <header>
    <div className="logo">
    <img src={Logo} alt="" />
    </div>
    <Nav/>
    </header>
    </>
  );
}