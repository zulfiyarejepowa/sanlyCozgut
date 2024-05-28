import { faArrowRightFromBracket, faHome } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import search from '../../assets/icons/search.svg'
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useHref, useNavigate } from "react-router-dom"

const Navbar = () => {

    const navigate = useNavigate()

    //AUTH SECTION API
    const { authState, setAuthState } = useContext(AuthContext)

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ phone_num: "", id: 0, status: false, role: "User" })
        navigate('/')
    };

    const href = useHref()
    const urlName = href.substring(href.lastIndexOf('/') + 1).replace("-", " ")

    return (
        <>
            <div className="bg-primary pb-5" style={{ marginBottom: "-50px", zIndex: "-10" }}>
                <div className="container-fluid px-5">
                    <nav className="navbar navbar-expand-lg pt-4">
                        <div className="collapse navbar-collapse">
                            <form className="d-flex" role="search">
                                <input className="form-control rounded-5 ps-5 text-white placeholder1" style={{ background: `url(${search}) no-repeat left`, backgroundPositionX: "20px", width: "350px" }} type="search" placeholder="Gozle" />
                            </form>
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <button className="nav-link text-white fw-semibold" onClick={logout}>Çykyş et <FontAwesomeIcon icon={faArrowRightFromBracket} className="ms-2"/></button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <hr className="border-white" />

                <div className="container-fluid px-5">
                    <div className="d-flex justify-content-between py-3 mb-5">
                        <div className="d-flex align-items-center">
                            <div className="text-white me-4 fw-semibold text-capitalize">{urlName}</div>
                            <div className="bg-white rounded-2 py-2 px-4 text-primary small">
                                <FontAwesomeIcon icon={faHome} /> /
                                <span> Baş Sahypa </span> /
                                <span className="text-secondary text-capitalize"> {urlName}</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-sm btn-outline-light me-2">New</button>
                            <button className="btn btn-sm btn-outline-light">Filters</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar