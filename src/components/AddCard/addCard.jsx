import Css from "./addCard.module.css";

function AddCard(props) {
    return (
        <div onClick = {props.onClick} className={Css.addCard}>
            <div className={Css.addDiv}>
                <p className={Css.add}>+</p>
            </div>
            <p>{props.name}</p>
        </div>
    )
}

export default AddCard;