import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Shop } from './components/Pages/Shop';
import { ShopCategory } from './components/Pages/ShopCategory';
import { Product } from './components/Pages/Product';
import { Cart } from './components/Pages/Cart';
import { LoginSignup } from './components/Pages/LoginSignup';
import { Footer } from './components/Footer/Footer';
import ficban from './components/Assests/banner-fic.jpg';
import kid from './components/Assests/kid.jpg';
import nonfic from './components/Assests/nonfic.jpg';
import novels from './components/Assests/novels.jpg'
import FetchData from './components/Context/FetchData';
import Address from './components/Pages/Address';
import Payment from './components/Pages/Payment';
import Checkout from './components/Pages/Checkout';


function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
     <Routes>
<Route path='/' element={<Shop/>}/>
<Route path='/fetchdatafromlink' element={FetchData}/>
<Route path='/fiction' element={<ShopCategory banner={ficban} category="fiction"/>}/>
<Route path='/nonfic' element={<ShopCategory banner ={nonfic}category="nonfic"/>}/>
<Route path='/novels' element={<ShopCategory banner={novels} category="novels"/>}/>
<Route path='/kids' element={<ShopCategory banner={kid} category="kids"/>}/>
<Route path="product" element={<Product/>}>
  <Route path=':productId' element={<Product/>}/>
</Route>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<LoginSignup/>}/>
<Route path='/address' element={<Address/>}/>
<Route path='/pay' element={<Payment/>}/>
<Route path='/checkout'element={<Checkout/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
