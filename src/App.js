import { Route, Routes } from 'react-router-dom';
import './App.css';

import * as routerPath from './pages/index';

function App() {
  return (
    <Routes>
      <Route path='/' element={<routerPath.MainLayout />}>
        <Route path='/' element={<routerPath.MainPage />} />
      </Route>

      <Route path='/product' element={<routerPath.ProductLayout />}>
        <Route path='/product' element={<routerPath.ProductByCategory />} />
        <Route path='/product/detail' element={<routerPath.ProductDetail />} />
      </Route>

      <Route path='/login' element={<routerPath.Login />} />
      <Route path='/join' element={<routerPath.Join />} />
      <Route path='/ordering' element={<routerPath.Ordering />} />
      <Route path='/orderCompleted' element={<routerPath.OrderCompleted />} />

      <Route path='/mypage' element={<routerPath.MypageLayout />}>
        <Route path='/mypage' element={<routerPath.UserInformation />} />
        <Route path='/mypage/changeInformation' element={<routerPath.ChangeUserInformation />} />
        <Route path='/mypage/cart' element={<routerPath.Cart />} />
        <Route path='/mypage/orderCheck' element={<routerPath.OrderCheck />} />
      </Route>

      <Route path='/admin' element={<routerPath.AdminLayout />}>
        <Route path='/admin' element={<routerPath.AdminProduct />} />
        <Route path='/admin/category' element={<routerPath.AdminCategory />} />
        <Route path='/admin/user' element={<routerPath.AdminUser />} />
        <Route path='/admin/order' element={<routerPath.AdminOrder />} />
      </Route>

    </Routes>
  );
}

export default App;
