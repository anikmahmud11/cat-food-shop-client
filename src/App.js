import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import Home from './Pages/Home/Home/Home';
import Shipping from "./Pages/Home/Shipping/Shipping";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import MyOrder from "./Pages/MyOrder/MyOrder";
import PlaceOrder from "./Pages/PlaceOrder/PlaceOrder";
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Shop from "./Pages/Shop/Shop";
import UserReview from "./Pages/UserReview/UserReview";

function App() {
  return (
    <div className="App">

     <AuthProvider>
     <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop></Shop>} />
          <Route path="/placeOrder/:serviceId" element={<PlaceOrder></PlaceOrder>}/> 
          <Route path="/login" element={<Login></Login>}/> 
          <Route path="/myorder" element={<MyOrder></MyOrder>}/> 
          <Route path="/review" element={<UserReview></UserReview>}/> 
          <Route path="/makeadmin" element={<MakeAdmin></MakeAdmin>}/> 
          <Route path="/shipping/:serviceId" element={<PrivateRoute><Shipping></Shipping></PrivateRoute>}/> 
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
      
    </div>
  );
}

export default App;
