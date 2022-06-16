
import { Navbar } from './components/Navbar';
import { Homepage } from './pages/Homepage';
import { Stack } from '@chakra-ui/react';
import {Routes ,Route} from 'react-router-dom'
import { ProductList } from './pages/ProductList';
import { SignIn } from "./pages/SignIn.jsx";    
import { Cart } from './pages/Cart';
import { Checkout } from './pages/Checkout';
import { Successful } from './pages/Successful';
import { Footer } from './pages/Footer';

function App() {
  return (
    <Stack w="95%" m="auto">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/product_list" element={<ProductList/>}></Route>
        <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/checkout" element={<Checkout/>}></Route>
        <Route path="/successful" element={<Successful/>}></Route>
      </Routes>
      <Footer/>
    </Stack>
  );
}

export default App;
