import TopBarCss from "./topBar.module.css";
import SearchOutlined from '@material-ui/icons/SearchOutlined';
import {useHistory} from "react-router-dom";


function TopBar() {
    const history = useHistory()
    return (
        <div className={TopBarCss.top}>
            <div className={TopBarCss.inpDiv}>
                <input type="text" className={TopBarCss.inp} placeholder="Search" />
                <SearchOutlined className={TopBarCss.searchIcon} />
            </div>
            <div onClick = {() => history.push("/Profile") } className={TopBarCss.profile}>
                    <img className={TopBarCss.image} src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=25" alt="" width="35px" height="35px" />
                    <div className={TopBarCss.userInfo}>
                        <p className={TopBarCss.name}>Musadiq Shariq</p>
                        <p className={TopBarCss.designation}>Manager</p>
                    </div>
                </div>

        </div>
    )
}

export default TopBar;