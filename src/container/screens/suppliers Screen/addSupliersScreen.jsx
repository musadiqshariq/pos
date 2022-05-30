import SupplierCss from "./suppliersScreen.module.css";
import { useHistory } from "react-router-dom";
function AddSuppliersScreen() {
    const history = useHistory()
    return (
        <div className={SupplierCss.main_2}>
            <div>
                <h1 className={SupplierCss.login}>New Supplier</h1>
            </div>
            <div className={SupplierCss.form}>
                <div className={SupplierCss.d1}>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className={`form-label ${SupplierCss.xyz}`}>Company Name</label>
                        <input type="text" className={`form-control ${SupplierCss.inp} ${SupplierCss.inp1}`} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className={`form-label ${SupplierCss.xyz}`}>First Name</label>
                        <input type="text" className={`form-control ${SupplierCss.inp} ${SupplierCss.inp1}`} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className={`form-label ${SupplierCss.xyz}`}>Last Name</label>
                        <input type="text" className={`form-control ${SupplierCss.inp} ${SupplierCss.inp1}`} id="exampleInputPassword1" />
                    </div>
                </div>
                <div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className={`form-label ${SupplierCss.xyz}`}>Mail Address</label>
                        <input type="text" className={`form-control ${SupplierCss.inp}`} id="exampleInputPassword1" />
                    </div>
                </div>
                <div className={SupplierCss.d1}>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className={`form-label ${SupplierCss.xyz}`}>CNIC</label>
                        <input type="number" className={`form-control ${SupplierCss.inp} ${SupplierCss.inp2}`} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className={`form-label ${SupplierCss.xyz}`}>Phone</label>
                        <input type="number" className={`form-control ${SupplierCss.inp} ${SupplierCss.inp2}`} id="exampleInputPassword1" />
                    </div>
                </div>
                <div>
                    <div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className={`form-label ${SupplierCss.xyz}`}>Address</label>
                            <input type="text" className={`form-control ${SupplierCss.inp}`} id="exampleInputPassword1" />
                        </div>
                    </div>
                    <div className="d1">
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className={`form-label ${SupplierCss.xyz}`}>Category</label>
                            <br />
                            <select name="Category" id="" className={SupplierCss.sel}>
                                <option value="selectCategory">Select Category</option>
                                <option value="electronics">Electronics</option>
                                <option value="grocery">Grocery</option>
                                <option value="cosmetics">Cosmetics</option>
                                <option value="clothing">Clothing</option>
                                <option value="frozenFood">Frozen Food</option>
                                <option value="perfumes">Perfumes</option>
                                <option value="snacks">Snacks</option>
                                <option value="dairy">Dairy</option>
                                <option value="shoes">Shoes</option>
                                <option value="watches">Watches</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={SupplierCss.hr}>
                </div>
                <div className={SupplierCss.btn_div}>
                    <button className={`btn btn-primary ${SupplierCss.button}`}>Add Supplier</button>
                </div>
                <div className={SupplierCss.btn_div2}>
                    <button onClick={() => history.goBack()} className={`btn btn-primary ${SupplierCss.button2}`}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default AddSuppliersScreen;