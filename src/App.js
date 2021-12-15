import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      
    </Routes>
  </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
