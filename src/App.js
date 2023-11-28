import { Route, Routes } from 'react-router-dom';
import './App.css';

import ProductLayout from './components/Layout/ProductLayout/index';
import AdminLayout from './components/Layout/AdminLayout/index';
import MypageLayout from './components/Layout/MypageLayout/index';
import MainPage from './pages/MainPage';
import AdminCategory from './pages/Admin/AdminCategory/AdminCategory';
import AdminOrder from './pages/Admin/AdminOrder/AdminOrder';
import AdminProduct from './pages/Admin/AdminProduct/AdminProduct';
import AdminUser from './pages/Admin/AdminUser/AdminUser';
import Cart from './pages/Cart/Cart';
import OrderCheck from './pages/Order/OrderCheck/OrderCheck';
import OrderCompleted from './pages/Order/OrderCompleted/OderCompleted';
import Ordering from './pages/Order/Ordering/Ordering';
import ProductDetail from './pages/Product/ProductDetail/ProductDetail';
import ProductsByCategory from './pages/Product/ProductsByCategory/ProductsByCategory';
import ChangeUserInformation from './pages/User/ChangeUserInformation/ChangeUserInformation';
import Login from './pages/User/Login/Login';
import Join from './pages/User/Join/Join';
import UserInformation from './pages/User/UserInformation/UserInformation';



function App() {
  return (
    <Routes>
      <Route path='/' element={<ProductLayout />}>
        <Route path='/' element={<MainPage />} />
        <Route path='/product' element={<ProductsByCategory />} />
        <Route path='/product/detail' element={<ProductDetail />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/join' element={<Join />} />
      <Route path='/ordering' element={<Ordering />} />
      <Route path='/orderCompleted' element={<OrderCompleted />} />

      <Route path='/mypage' element={<MypageLayout />}>
        <Route path='/mypage' element={<UserInformation />} />
        <Route path='/mypage/changeInformation' element={<ChangeUserInformation />} />
        <Route path='/mypage/cart' element={<Cart />} />
        <Route path='/mypage/orderCheck' element={<OrderCheck />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />}>
        <Route path='/admin' element={<AdminProduct />} />
        <Route path='/admin/category' element={<AdminCategory />} />
        <Route path='/admin/user' element={<AdminUser />} />
        <Route path='/admin/order' element={<AdminOrder />} />
      </Route>

    </Routes>
  );
}

export default App;
