import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ScrollToHash from '../components/ScrollToHash'

function SiteLayout() {
    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <ScrollToHash />
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default SiteLayout