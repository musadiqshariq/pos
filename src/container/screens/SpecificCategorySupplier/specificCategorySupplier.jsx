import Css from "./specificCategorySupplier.module.css";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import {useLocation, useHistory} from "react-router-dom";

function SpecificCategorySupplier() {
    const history = useHistory()
    const location = useLocation()
    return (
        <div className={Css.main}>
            <div className={Css.subMain}>
                <div className={Css.subMain2}>
                    <div className={Css.categoryTitle}>
                        <ArrowBackIos onClick = {() => history.goBack() } className={Css.back} fontSize = "large" />
                        {location.state.name}
                    </div>
                        <div className={Css.inpDiv}>
                            <input type="text" className={Css.inp} placeholder="Search Supplier" />
                            <SearchOutlined className={Css.searchIcon}  />
                        </div>

                    <div className={Css.categoryDiv}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecificCategorySupplier;