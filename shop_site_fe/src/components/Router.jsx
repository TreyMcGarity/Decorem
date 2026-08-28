import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Splash from './pages/Splash';
import LoginPatron from './pages/login/LoginPatron';
import LoginVendor from './pages/login/LoginVendor';
import RegisterPatron from './pages/register/RegisterPatron';
import RegisterVendor from './pages/register/RegisterVendor';
import Home from './pages/patron-pages/Home';
import Products from './pages/patron-pages/Products';
import Dashboard from './pages/vendor-pages/Dashboard';
import ProductManager from './pages/vendor-pages/ProductManager';
import OrderManager from './pages/vendor-pages/OrderManager';
import UserManager from './pages/vendor-pages/UserManager';
// import PrivateRoute from '../utils/PrivateRoute';
import '../styles/router.scss';

function Routing() {
  return (
    <Router className="router">
        <Routes>
            <Route exact path="/" element={<Splash />} />
            {/*  Auth  Routes */}
            <Route path="/register" element={ <RegisterPatron />} />
            <Route path="/craft" element={ <RegisterVendor />} />
            <Route path="/login" element={<LoginPatron />} />
            <Route path="/gate" element={ <LoginVendor />} />
            {/* Page Routes (need to be private when auth working) */}
            <Route path="/home" element={ <Home />} />
            <Route path='/browsing' element={ <Products />} />
            <Route path="/dashboard" element={ <Dashboard />} />
            <Route path="/product-manager" element={ <ProductManager />} />
            <Route path="/order-manager" element={ <OrderManager />} />
            <Route path="/user-manager" element={ <UserManager />} />
        </Routes>
    </Router> 
  );
}

export default Routing;
