import { faBook, faEnvelope, faHomeAlt, faUsers, faWindowClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, NavLink } from "react-router-dom"

const Sidebar = () => {
    return (
        <>
            <div style={{ height: "100vh" }}>
                <div className="d-flex flex-column flex-shrink-0 p-3 bg-light h-100" style={{ width: "280px" }}>
                    <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                        <span className="fs-4">Sidebar</span>
                    </Link>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item mb-2">
                            <NavLink to="/admin/bas-sahypa" className="nav-link text-dark">
                                <FontAwesomeIcon icon={faHomeAlt} className="me-2 text-dark" />
                                Baş sahypa
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/admin/ulanyjylar" className="nav-link text-dark">
                                <FontAwesomeIcon icon={faUsers} className="me-2 text-dark" />
                                Ulanyjylar
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/admin/kategoriyalar" className="nav-link text-dark">
                                <FontAwesomeIcon icon={faWindowClose} className="me-2 text-dark" />
                                Kategoriýalar
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/admin/yarysa-gatnasycylar" className="nav-link text-dark">
                                <FontAwesomeIcon icon={faBook} className="me-2 text-dark" />
                                Ýaryşa gatnaşyjylar
                            </NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/admin/habarlasmak" className="nav-link text-dark">
                                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-dark" />
                                Habarlaşmak
                            </NavLink>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <Link to="/" className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                            <strong>mdo</strong>
                        </Link>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar