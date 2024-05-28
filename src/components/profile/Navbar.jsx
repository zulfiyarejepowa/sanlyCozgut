import { NavLink } from "react-router-dom"

const narvbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
                <div className="container">
                    <NavLink to='/' className="navbar-brand">
                        <img src="/src/assets/logo/logo1.png" alt="" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link fw-semibold px-3">Baş sahypa</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link fw-semibold px-3">Täzelikler</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link fw-semibold px-3">Biz Barada</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/' className="nav-link fw-semibold px-3">Habarlaşmak</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default narvbar