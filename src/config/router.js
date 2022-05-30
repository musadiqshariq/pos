import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Login from "../container/screens/login/login";
import Signup from "../container/screens/signup/signup";
import Home from "../container/screens/home/home";
import SalesManagement from "../container/screens/sales management/saleManagement";
import ExpenseManagement from "../container/screens/expense management/expenseManagement";
import EmployeesManagement from "../container/screens/employees management/employeesManagement";
import ProductInventory from "../container/screens/product inventory/productInventory";
import SuppliersScreen from "../container/screens/suppliers Screen/suppliersScreens";
import AddSuppliersScreen from "../container/screens/suppliers Screen/addSupliersScreen";
import AddProduct from "../container/screens/product inventory/addProduct";
import Dashboard from "../container/screens/Dashboard/dashboard";
import ProductScreen from "../container/screens/ProductScreen/productScreen";
import Profile from "../container/screens/Profile/profile";
import SpecificCategorySupplier from "../container/screens/SpecificCategorySupplier/specificCategorySupplier";
import {useState, useEffect} from "react";
import Firebase from "./firebase";

function AppRouter() {
    // Set an initializing state whilst Firebase connects
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState();

    // Handle user state changes
    function onAuthStateChanged(user) {
        setUser(user);
        if (initializing) setInitializing(false);
    }

    useEffect(() => {
        const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; // unsubscribe on unmount
    }, []);

    if (initializing) return null;
    return (
        <Router>
            {user ?
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/Dashboard" component={Dashboard} />
                    <Route exact path="/SalesManagement" component={SalesManagement} />
                    <Route exact path="/ExpenseManagement" component={ExpenseManagement} />
                    <Route exact path="/EmployeesManagement" component={EmployeesManagement} />
                    <Route exact path="/ProductInventory" component={ProductInventory} />
                    <Route exact path="/SuppliersScreen" component={SuppliersScreen} />
                    <Route exact path="/AddSuppliersScreen" component={AddSuppliersScreen} />
                    <Route exact path="/AddProduct" component={AddProduct} />
                    <Route exact path="/ProductScreen" component={ProductScreen} />
                    <Route exact path="/SpecificCategorySupplier" component={SpecificCategorySupplier} />
                    <Route exact path="/Profile" component={Profile} />
                    <Route exact path="/signup" component={Signup} />
                </Switch> :
                <Switch>
                    <Route exact path="/" component={Login} />
                </Switch>
            }

        </Router>)
}

export default AppRouter;