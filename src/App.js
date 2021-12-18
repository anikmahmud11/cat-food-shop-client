import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import AuthProvider from "./context/AuthProvider";
import AddProduct from "./Pages/Addproduct/AddProduct";
import Home from './Pages/Home/Home/Home';
import Shipping from "./Pages/Home/Shipping/Shipping";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import ManageOrder from "./Pages/ManageOrder/ManageOrder";
import MyOrder from "./Pages/MyOrder/MyOrder";
import NotFound from "./Pages/Notfound/NotFound";
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
          <Route path="/myorder" element={<PrivateRoute><MyOrder></MyOrder></PrivateRoute>}/> 
          <Route path="/review" element={<PrivateRoute><UserReview></UserReview></PrivateRoute>}/> 
          <Route path="/makeadmin" element={<PrivateRoute><MakeAdmin></MakeAdmin></PrivateRoute>}/> 
          <Route path="/manageorder" element={<PrivateRoute><ManageOrder></ManageOrder></PrivateRoute>}/> 
          <Route path="/addproduct" element={<PrivateRoute><AddProduct></AddProduct></PrivateRoute>}/> 
          <Route path="/shipping/:serviceId" element={<PrivateRoute><Shipping></Shipping></PrivateRoute>}/> 
          <Route  path="*" element ={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
     </AuthProvider>
      
    </div>
  );
}

export default App;
