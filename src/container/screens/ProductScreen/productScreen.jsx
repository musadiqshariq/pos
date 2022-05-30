import SearchOutlined from '@material-ui/icons/SearchOutlined';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import ProductScreenCss from "./productScreen.module.css";
import {useLocation, useHistory} from "react-router-dom";

function ProductScreen() {
    const history = useHistory()
    const location = useLocation()  
    return (
        <div className={ProductScreenCss.main}>
            <div className={ProductScreenCss.subMain}>
                <div className={ProductScreenCss.subMain2}>
                    <div className={ProductScreenCss.categoryTitle}>
                        <ArrowBackIos onClick = {() => history.goBack() } className={ProductScreenCss.back} fontSize = "large" />
                        {location.state.name}
                    </div>
                        <div className={ProductScreenCss.inpDiv}>
                            <input type="text" className={ProductScreenCss.inp} placeholder="Search Product" />
                            <SearchOutlined className={ProductScreenCss.searchIcon}  />
                        </div>

                    <div className={ProductScreenCss.categoryDiv}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductScreen;