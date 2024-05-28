import { Link, NavLink } from "react-router-dom"
import img1 from '../../assets/cards/1.jpg'
import img2 from '../../assets/cards/2.png'
import scimg from '../../assets/cards/sanly.png'
import logo from '../../assets/logo/logo1.png'
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {

    //AUTH SECTION API
    const { authState, setAuthState } = useContext(AuthContext)

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ phone_num: "", id: 0, status: false, role: "User" })
    };

    return (
        <>
            <div className="bg-home">
                <nav className="navbar navbar-expand-lg navbar-light mb-5 fixed-top" style={{ backgroundColor: "#fff", borderBottom: "#000"}}>
                    <div className="container">
                        <NavLink to='/' className="navbar-brand">
                            <img src={logo} alt="logo" />
                        </NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a href='#home' className="nav-link fw-semibold px-3">Baş sahypa</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#news' className="nav-link fw-semibold px-3">Täzelikler</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#kriteriyalar' className="nav-link fw-semibold px-3">Kriteriýalar</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#about' className="nav-link fw-semibold px-3">Biz Barada</a>
                                </li>
                                <li className="nav-item">
                                    <a href='#contact' className="nav-link fw-semibold px-3">Habarlaşmak</a>
                                </li>
                            </ul>
                            <form className="d-flex">
                                {
                                    !authState.status
                                        ?
                                        <>
                                            <NavLink to='/agza-bolmak' className="btn py-3 px-5 rounded-5 fs-18 fw-semibold ms-5" type="submit" id="button"
                                            // style={{ backgroundColor: rgb(44, 49, 140) }}
                                            >Agza Bol</NavLink>
                                        </>
                                        :
                                        <>
                                            {
                                                authState.role === "Admin"
                                                    ?
                                                    <Link to='/admin/bas-sahypa' className="btn btn-success rounded-5 py-2 px-4">
                                                        Admin
                                                    </Link>
                                                    :
                                                    <div className="dropdown ms-5">
                                                        <button className="btn btn-success dropdown-toggle rounded-5 py-2 px-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Şahsy otag
                                                        </button>
                                                        <ul className="dropdown-menu">
                                                            <li><Link to='/profile' className="dropdown-item">Profile</Link></li>
                                                            <li><Link to='/' className="dropdown-item">Hasaba durmak</Link></li>
                                                            <li><button onClick={logout} className="dropdown-item">Çykmak</button></li>
                                                        </ul>
                                                    </div>
                                            }
                                        </>
                                }
                            </form>
                        </div>
                    </div>
                </nav>

                <div className="container" id="home" style={{ paddingTop: "170px" }}>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="display-2 mb-5">
                                «Sanly çözgüt – 2024» <b>innowasion taslamalar</b> bäsleşigi
                            </div>
                            <div className="h3 fw-normal" style={{ lineHeight: "45px" }}>
                            «Türkmenaragatnaşyk» agentligi tarapyndan «Sanly çözgüt" bäsleşigi gurnalýär we geçirilýär.
                            </div>
                            <NavLink to="https://www.mincom.gov.tm/tk/" target="_blank" className="btn py-3 px-5 mt-4 rounded-5 fs-18 fw-semibold" id="button">Giňişleýin gör</NavLink>
                        </div>
                        <div className="col-xl-6">
                            <div className="position-relative">
                                {/* <img src={scimg} alt="" className="img-fluid mx-auto rounded-5"/> */}
                                <img src={img1} alt="" className="img-fluid rounded-5" />
                                <img src={img2} alt="" className="img-fluid rounded-4 position-absolute w-25" style={{ bottom: "-18%", left: "-10%" }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar