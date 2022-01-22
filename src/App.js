import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Pages/Login/Login/Login";
import Registration from "./Pages/Login/Registration/Registration";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import CarsDetails from "./Pages/Cars/CarsDeatils/CarsDetails";
import AddNewCar from "./Pages/AddNewCar/AddNewCar";
import BuyNow from "./Pages/BuyNow/BuyNow/BuyNow";
import MakeAdmin from "./Admin/MakeAdmin/MakeAdmin";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import MyOrders from "./Pages/BuyNow/Orders/MyOrders/MyOrders";
import AdminDashboard from "./Admin/AdminDashboard/AdminDashboard";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Registration />
            </Route>
            <Route path="/myOrders">
              <MyOrders />
            </Route>
            <AdminRoute path="/addNewCar">
              <AddNewCar />
            </AdminRoute>
            <AdminRoute path="/adminDashboard">
              <AdminDashboard />
            </AdminRoute>
            <Route path="/details/:id">
              <CarsDetails />
            </Route>
            <PrivateRoute path="/buyNow/:id">
              <BuyNow />
            </PrivateRoute>
            <AdminRoute path="/makeAdmin">
              <MakeAdmin />
            </AdminRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
