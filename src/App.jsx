import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Dis from "./components/CardWithProduct"
import Category from './components/Category'
import ReturnPolicy from './components/ReturnPolicy'
import ShippingPolicy from './components/ShippingPolicy'
import Frequency from './components/Frequency'
const App =()=> {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dis/>}/>
        <Route path="/cat" element={<Category/>}/>
        <Route path="/return" element={<ReturnPolicy/>}/>
        <Route path="/shop" element={<ShippingPolicy/>}/>
        <Route path="/faq" element={<Frequency/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
