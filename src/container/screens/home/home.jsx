import pos from "../../../assits/pos2.png";
import { useHistory } from "react-router-dom";
import HomeCss from "./home.module.css";


function Home() {
    const history = useHistory()
    return (
        <div className={HomeCss.main_div}>
            <div className={HomeCss.div2}>
                <div className={HomeCss.img}>
                    <img src={pos} alt="" width="100%" height="100%" />
                </div>
                <div className={HomeCss.img}>
                    <h1 className={HomeCss.des_heading}>Grow your retail with our POS software</h1>
                    <p className={HomeCss.des_description}>Effortlessly sell, manage, report and grow your retail bussiness in every way with our unmatched POS and inventory management system.</p>
                    <div className={HomeCss.btnDiv} >
                        <button onClick = {() => history.push("/Dashboard")} className={HomeCss.btn}>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;