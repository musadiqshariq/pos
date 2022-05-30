import NavCss from "./nav.module.css";
import { useDispatch } from "react-redux";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import { signout } from "../../store/auth/authAction";
import LogoutIcon from '@mui/icons-material/Logout';
import { useHistory } from "react-router-dom";

function Nav({ screen }) {
    const history = useHistory()
    const dispatch = useDispatch()

    const Sign_out = (hist) => {
        dispatch(signout(hist))
    }
    return (
        <div className={NavCss.main}>
            <div className={NavCss.inv}>
                <p>Inventory.</p>
            </div>
            <div className={NavCss.optDiv}>
                {screen == "dashboard" ?
                    <div className={NavCss.selectedOpt}>
                        <DashboardOutlinedIcon />
                        <name className={NavCss.name}>Dashboard</name>
                    </div> :
                    <div onClick={() => history.push("/Dashboard")} className={NavCss.opt}>
                        <DashboardOutlinedIcon />
                        <name className={NavCss.name}>Dashboard</name>
                    </div>
                }
                {screen == "suppliers" ?
                    <div className={NavCss.selectedOpt}>
                        <SupervisorAccountOutlinedIcon />
                        <name className={NavCss.name}>Suppliers</name>
                    </div> :
                    <div onClick={() => history.push("/SuppliersScreen")} className={NavCss.opt}>
                        <SupervisorAccountOutlinedIcon />
                        <name className={NavCss.name}>Suppliers</name>
                    </div>
                }
                {screen == "products" ?
                    <div className={NavCss.selectedOpt}>
                        <StorefrontOutlinedIcon />
                        <name className={NavCss.name}>Products</name>
                    </div> :
                    <div onClick={() => history.push("/ProductInventory")} className={NavCss.opt}>
                        <StorefrontOutlinedIcon />
                        <name className={NavCss.name}>Products</name>
                    </div>
                }
                {screen == "employees" ?
                    <div className={NavCss.selectedOpt}>
                        <PersonOutlineOutlinedIcon />
                        <name className={NavCss.name}>Employees</name>
                    </div> :
                    <div onClick={() => history.push("/EmployeesManagement")} className={NavCss.opt}>
                        <PersonOutlineOutlinedIcon />
                        <name className={NavCss.name}>Employees</name>
                    </div>
                }

                <div onClick = {() => Sign_out(history)} className={NavCss.logoutOpt}>
                    <LogoutIcon />
                    <name className={NavCss.name}>Logout</name>
                </div>
            </div>
        </div>
    )
}

export default Nav;