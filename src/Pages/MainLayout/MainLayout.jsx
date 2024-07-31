import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import NavBar from '../../components/NavBar/NavBar'
import AppFooter from '../../components/AppFooter/AppFooter'
export default function MainLayout() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <AppFooter/>
      <Footer/>
    </div>
  )
}
