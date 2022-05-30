import DashboardCss from "./dashboard.module.css";
import Nav from "../../../components/Nav/nav.jsx";
import TopBar from "../../../components/TopBar/topBar";
import Firebase from "../../../config/firebase"



function Dashboard() {
    console.log(Firebase.auth().currentUser.uid)
    let items = [
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        },
        {
            image: "https://images.unsplash.com/photo-1413708617479-50918bc877eb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXRlbXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
            name: "Item Name",
            qty: "23415 pcs"
        }
    ]
    return (
        <div className={DashboardCss.main}>
            <div className={DashboardCss.subMain}>
                <Nav screen="dashboard" />
                <div className={DashboardCss.subMain2}>
                    <TopBar />
                    <div className={DashboardCss.topSelling}>
                        <div className={DashboardCss.topSellingHeader}>
                            <p>Top Selling Items</p>
                            <select name="topSelling" className={DashboardCss.dropdown}>
                                <option value="day">This Day</option>
                                <option value="week">This Week</option>
                                <option value="month">This Month</option>
                            </select>
                        </div>
                        <div className={DashboardCss.cards}>
                            {items.map((v, i) => {
                                return (
                                    <div key = {i} className={DashboardCss.card}>
                                        <img src={v.image} alt="" width="100px" height="70px" />
                                        <div>
                                            <p className = {DashboardCss.itemName}>
                                                {v.name}
                                            </p>
                                            <p className = {DashboardCss.qty}>
                                                {v.qty}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className = {DashboardCss.graphDiv}>
                        <div className = {DashboardCss.graphCard}>
                        <div className={DashboardCss.incomeHeader}>
                            <p>Income</p>
                            <select name="income" className={DashboardCss.incomeDropdown}>
                                <option value="day">This Day</option>
                                <option value="week">This Week</option>
                                <option value="month">This Month</option>
                            </select>
                        </div>
                        <div className = {DashboardCss.amount}>
                            <span>$</span>40,600k
                        </div>

                        </div>
                        <div className = {DashboardCss.graphCard}>
                        <div className={DashboardCss.incomeHeader}>
                            <p>Expenses</p>
                            <select name="income" className={DashboardCss.incomeDropdown}>
                                <option value="day">This Day</option>
                                <option value="week">This Week</option>
                                <option value="month">This Month</option>
                            </select>
                        </div>
                        <div className = {DashboardCss.amount}>
                            <span>$</span>10,450k
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;