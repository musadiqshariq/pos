import ProductCss from "./productInventory.module.css";
import Nav from "../../../components/Nav/nav.jsx";
import TopBar from "../../../components/TopBar/topBar";
import electronics from "../../../assits/electronics.jpg";
import grocery from "../../../assits/grocery.jpg";
import cosmetics from "../../../assits/cosmetics.jpg";
import clothing from "../../../assits/clothing.jpg";
import frozen from "../../../assits/frozen.jpg";
import perfumes from "../../../assits/perfumes.jpg";
import dairy from "../../../assits/dairy.jpg";
import shoes from "../../../assits/shoes.jpg";
import watches from "../../../assits/watches.jpg";
import snacks from "../../../assits/snacks.jpg";
import AddCard from "../../../components/AddCard/addCard";
import {useHistory} from "react-router-dom";


function ProductInventory() {
    const history = useHistory()
    let Categories = [
        {
            name: "Electronics",
            image: electronics
        },
        {
            name: "Grocery",
            image: grocery
        },
        {
            name: "Cosmetics",
            image: cosmetics
        },
        {
            name: "Clothing",
            image: clothing
        },
        {
            name: "Frozen Food",
            image: frozen
        },
        {
            name: "Perfumes",
            image: perfumes
        },
        {
            name: "Snacks",
            image: snacks
        },
        {
            name: "Dairy",
            image: dairy
        },
        {
            name: "Shoes",
            image: shoes
        },
        {
            name: "Watches",
            image: watches
        }
    ]
    return (
        <div className={ProductCss.main}>
            <div className={ProductCss.subMain}>
                <Nav screen="products" />
                <div className={ProductCss.subMain2}>
                    <TopBar />
                    <div className={ProductCss.categoryTitle}>
                        Categories
                    </div>
                    <div className={ProductCss.categoryDiv}>
                        <AddCard name = "Add Product" onClick = {() => history.push("/AddProduct")} />
                        {Categories.map((v, i) => {
                            console.log(v.image)
                            return (
                                <div onClick = {() => history.push("/ProductScreen", {name : v.name})} key={i} className={ProductCss.categoryCard}>
                                    <img src={v.image} alt="" width="200px" height="100px" />
                                    <p>{v.name}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductInventory;