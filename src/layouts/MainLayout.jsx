import { Outlet } from 'react-router-dom'
import ScrollToTop from '../components/global/ScrollToTop'
import Footer from '../components/includes/Footer'
import Navbar from '../components/includes/Navbar'

export default function MainLayout() {
  return (
    <div className="site">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="site__main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
