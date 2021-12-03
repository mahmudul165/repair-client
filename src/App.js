import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar/Navbar";
import Footer from "./Pages/Shared/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ExploreServices from "./Pages/Home/ExploreServices/ExploreServices";
import Services from "./Pages/Home/Services/Services";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Admin from "./Pages/Admin/Admin";
import Pay from "./Pages/Dashboard/Pay/Pay";
import MyOrder from "./Pages/Dashboard/MyOrder/MyOrder";
import Review from "./Pages/Dashboard/Review/Review";
import AllOrder from "./Pages/Admin/AllOrder/AllOrder";
import CreateAdmin from "./Pages/Admin/CreateAdmin/CreateAdmin";
import AddProduct from "./Pages/Admin/AddProduct/AddProduct";
import ManageProduct from "./Pages/Admin/ManageProduct/ManageProduct";
import About from "./Pages/Home/About/About";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/exploreServices">
          <ExploreServices />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/pay">
          <Pay />
        </Route>
        <Route path="/myOrder">
          <MyOrder />
        </Route>
        <Route path="/review">
          <Review />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/allOrderStatus">
          <AllOrder />
        </Route>
        <Route path="/addProduct">
          <AddProduct />
        </Route>
        <Route path="/createAdmin">
          <CreateAdmin />
        </Route>
        <Route path="/manageProduct">
          <ManageProduct />
        </Route>
        <Route path="/logout">
          <Admin />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
