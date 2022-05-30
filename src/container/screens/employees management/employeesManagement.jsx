
import EmployeesCss from "./employees.module.css";
import Nav from "../../../components/Nav/nav.jsx";
import TopBar from "../../../components/TopBar/topBar";


function EmployeesManagement() {
    return (
        <div className = {EmployeesCss.main}>
            <div className = {EmployeesCss.subMain}>
                <Nav screen = "employees" />
                <div className={EmployeesCss.subMain2}>
                    <TopBar />
                    <div className={EmployeesCss.categoryTitle}>
                        Employees
                    </div>
                    <div className={EmployeesCss.categoryDiv}>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeesManagement;