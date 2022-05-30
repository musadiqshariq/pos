import ProductCss from "./productInventory.module.css";
import {useHistory} from "react-router-dom";
// import Firebase from "../../../config/firebase";

function AddProduct(){
    const  history = useHistory()
    return (
        <div className={ProductCss.main_2}>
            <div>
                <h1 className={ProductCss.login}>Add Product</h1>
            </div>
            <div className={ProductCss.form}>
                <div className={ProductCss.d1}>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className={`form-label ${ProductCss.xyz}`}>Product Name</label>
                        <input type="text" className={`form-control ${ProductCss.inp} ${ProductCss.inp2}`} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className={`form-label ${ProductCss.xyz}`}>Brand</label>
                        <input type="text" className={`form-control ${ProductCss.inp} ${ProductCss.inp2}`} id="exampleInputPassword1" />
                    </div>
                </div>
                <div className={ProductCss.d1}>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className={`form-label ${ProductCss.xyz}`}>Supply Price</label>
                        <input type="number" className={`form-control ${ProductCss.inp} ${ProductCss.inp2}`} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className={`form-label ${ProductCss.xyz}`}>Sale Price</label>
                        <input type="number" className={`form-control ${ProductCss.inp} ${ProductCss.inp2}`} id="exampleInputPassword1" />
                    </div>
                </div>
                <div>
                    <div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className={`form-label ${ProductCss.xyz}`}>Supplier</label>
                            <input type="text" className={`form-control ${ProductCss.inp}`} id="exampleInputPassword1" />
                        </div>
                    </div>
                    <div className={ProductCss.d1}>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className={`form-label ${ProductCss.xyz}`}>Category</label>
                            <br />
                            <select name="Category" id="" className={ProductCss.sel}>
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
                        <div className="mb-3">
                        <label for="exampleInputPassword1" className={`form-label ${ProductCss.xyz}`}>Quantity</label>
                        <input type="number" className={`form-control ${ProductCss.inp} ${ProductCss.inp2}`} id="exampleInputPassword1" />
                    </div>
                    </div>
                </div>
                <div className={ProductCss.hr}>
                </div>
                <div className={ProductCss.btn_div}>
                    <button className={`btn btn-primary ${ProductCss.button}`}>Add Product</button>
                </div>
                <div className={ProductCss.btn_div2}>
                    <button onClick={() => history.goBack()} className={`btn btn-primary ${ProductCss.button2}`}>Back</button>
                </div>
            </div>
        </div>
    )
}

export default AddProduct;