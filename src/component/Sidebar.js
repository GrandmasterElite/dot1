import './css/styles.css';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
function Sidebar(){
    return(
        <div>
            
            <div id="body-pd">
                <header className="header" id="header">
                    <div className="header__toggle"></div>                    
                    <div className="admin"><Link to="/Dashboard"><b>Dashboard</b></Link> </div>
                    <div className="admin"><Link to="/Dashboard"><b>House</b></Link></div>
                    <div className="admin"><Link to="/Dashboard"><b>House Categories</b></Link></div>
                    <div className="admin"><Link to="/Dashboard"><b>Tenants</b></Link></div>
                    <div className="admin"><Link to="/Dashboard"><b>Payments</b></Link></div>
                    <div className="admin"><Link to="/Dashboard"><b>Reports</b></Link></div>
                    <div className="admin"><Link to="/Dashboard"><b>Logout</b></Link></div>
                </header>
                {/* <div className="l-navbar" id="nav-bar">
                    <nav className="nav">
                    <div>
                        <a href="#" className="nav__logo" />
                        <div className="nav__list">
                        <a href="#" className="nav__link active">
                            
                            <span className="nav__name">Dashboard</span>
                        </a>
                        <a href="#" className="nav__link">
                            <i className="bx bx-list-ul nav__icon" />
                            <span className="nav__name">House Categories</span>
                        </a>
                        <a href="#" className="nav__link">
                            <i className="bx bxs-home nav__icon" />
                            <span className="nav__name">Houses</span>
                        </a>
                        <a href="#" className="nav__link">
                            <i className="bx bxs-user nav__icon" />
                            <span className="nav__name">Tenants</span>
                        </a>
                        <a href="#" className="nav__link">
                            <i className="bx bxs-wallet nav__icon" />
                            <span className="nav__name">Payments</span>
                        </a>
                        <a href="#" className="nav__link">
                            <i className="bx bxs-report nav__icon" />
                            <span className="nav__name">Reports</span>
                        </a>
                        </div>
                    </div>
                    <a href="#" className="nav__link">
                        <i className="bx bx-log-out nav__icon" />
                        <span className="nav__name">Log Out</span>
                    </a>
                    </nav>
                </div> */}
            </div>
        </div>
    )
}
export default Sidebar