import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Page/Home/Home';
import Footer from './Page/Shared/Footer/Footer';
import Offers from './Page/Offers/Offers';
import About from './Page/About/About';
import Header from './Page/Shared/Header/Header';
import Register from './Page/Register/Register';
import Login from './Page/Login/Login';
import Error from './Page/Error/Error';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Private/PrivateRoute';
import PlaceOrder from './Page/PlaceOrder/PlaceOrder';
import ManageOrders from './Page/ManageOrders/ManageOrders';
import MyOrder from './Page/MyOrder/MyOrder';
import AddOrder from './Page/AddOrder/AddOrder';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header/>
            <Switch>
              <Route exact path='/'>
                <Home/>
              </Route>    
              <Route path='/home'>
                <Home/>
              </Route>        
              <Route path='/offers'>
                <Offers/>
              </Route>    
              <PrivateRoute path='/placeorder/:bookId'>
                <PlaceOrder/>
              </PrivateRoute>    
              <Route path='/myOrders'>
                <MyOrder/>
              </Route>    
              <Route path='/manageOrders'>
                <ManageOrders/>
              </Route>
              <Route path='/about'>
                <About/>
              </Route>    
              <Route path='/addorder'>
                <AddOrder/>
              </Route>    
              <Route path='/register'>
                <Register/>
              </Route>    
              <Route path='/login'>
                <Login/>
              </Route>    
              <Route path='*'>
                <Error/>
              </Route>    
            </Switch>
            <Footer/>    
        </Router> 
        </AuthProvider>
    </div>
  );
}

export default App;
