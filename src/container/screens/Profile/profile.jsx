import ArrowBackIos from '@material-ui/icons/ArrowBackIos';
import Css from "./profile.module.css";
import { useHistory } from "react-router-dom";

function Profile() {
    const history = useHistory()
    return (
        <div className={Css.main}>
            <div className={Css.subMain}>
                <div className={Css.subMain2}>
                    <div className={Css.categoryTitle}>
                        <ArrowBackIos onClick={() => history.goBack()} className={Css.back} fontSize="large" />
                        Profile
                    </div>
                    <div className={Css.addUserDiv}>
                        <button onClick = {() => history.push("/Signup")} className={Css.addUser}>Create User</button>
                    </div>

                    <div className={Css.categoryDiv}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;