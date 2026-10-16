import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Listings from "./pages/Listings";
import ItemDetail from "./pages/ItemDetail";
import Login from "./pages/Login";
import CreateListing from "./pages/CreateListing";
import SwapRequest from "./pages/SwapRequest";
import UserDashboard from "./pages/UserDashboard";
import Chat from "./pages/Chat";
import Negotiation from "./pages/Negotiation";
import AdminPanel from "./pages/AdminPanel";
import ClothingDetails from "./pages/ClothingDetails";
import UserDetails from "./pages/UserDetails";
import SwapRequestDetails from"./pages/SwapRequestDetails";
import NegotiationDetails from "./pages/NegotiationDetails";
import ChatDetails from "./pages/ChatDetails";
import AvailabilityDetails from "./pages/AvailabilityDetails";
import About from "./pages/About";
import SwapValuesCalculator from "./components/SwapValuesCalculator";





function App(){

  return ( 
    
    <BrowserRouter>
    <Routes>
      <Route path='/Home' element= {<Home />}/>
      <Route path='/' element={<Home />}/>  
       <Route path='/Listings' element={<Listings />}/>  
    <Route path='/item/:id' element={<ItemDetail />}/>
    <Route path='/Login'  element={<Login />}/>
    <Route path='/CreateListing' element={<CreateListing />}/>
    <Route path='/SwapRequest' element={<SwapRequest/>}/>
    <Route path='/UserDashboard' element={<UserDashboard />}/>
    <Route path='/Chat' element={<Chat />}/>
    <Route path='/Negotiation' element={<Negotiation />}/>
    <Route path='/AdminPanel' element={<AdminPanel />}/>
    <Route path='/ClothingDetails' element={<ClothingDetails />}/>
    <Route path='/UserDetails' element={<UserDetails />}/>
    <Route path='/SwapRequestDetails' element={<SwapRequestDetails />}/>
    <Route path='/NegotiationDetails' element={<NegotiationDetails />}/>
    <Route path='/ChatDetails' element={<ChatDetails />}/>
    <Route path='/AvailabilityDetails' element={<AvailabilityDetails />}/>
    <Route path='/About' element={<About />}/>
    <Route path='/SwapValuesCalculator' element={<SwapValuesCalculator />}/>
    </Routes>
    </BrowserRouter>
  
  );
}
export default App;