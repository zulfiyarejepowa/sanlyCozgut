import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/logo/logo1.png'
import Home from "../../pages/interface/main/Home"

const Footer = () => {
    return (
        <>
            <div className="footer container mt-5">
                <div className="row justify-content-between">
                    <div className="col-xl-3">
                        {/* <div className="h4 mb-4">Sanly Çözgüt</div> */}
                        <img src={logo} alt="logo" className="mx-auto" />
                        {/* <p>Berkarar döwletimiziň bagtyýarlyk döwründe, Hormatly Prezidentimiziň parasatly başlangyçlary bilen ýurdumyzyň ykdysadyýetine sanly ulgamy ornaşdyrmak boýunça maksatnamalaýyn işler durmuşa geçirilýär.</p> */}
                    </div>
                    <div className="col-xl-2">
                        <div className="h5 mb-4">Gipersalgylanmalar</div>
                        <NavLink to='#home' className="text-decoration-none mb-3 d-block text-secondary">Baş sahypa</NavLink>
                        <NavLink to='#news' className="text-decoration-none mb-3 d-block text-secondary">Täzelikler</NavLink>
                        <NavLink to='#kriteriyalar' className="text-decoration-none mb-3 d-block text-secondary">Bölümler</NavLink>
                        <NavLink to='#about' className="text-decoration-none mb-3 d-block text-secondary">Biz barada</NavLink>
                        <NavLink to='#contact' className="text-decoration-none mb-3 d-block text-secondary">Habarlaşmak</NavLink>
                        <NavLink to='/agza-bolmak' className="text-decoration-none mb-3 d-block text-secondary">Agza bolmak</NavLink>
                    </div>
                    <div className="col-xl-2">
                        <div className="h5 mb-4">Habarlaşmak</div>
                        <div className="fs-18 fw-semibold">Email</div>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">info@sanlychozgut.com</Link>
                        <div className="fs-18 fw-semibold">Telefon belgi</div>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">+99364555252</Link>
                        <div className="fs-18 fw-semibold">Salgysy</div>
                        <Link to='' className="text-decoration-none mb-3 d-block text-secondary">Aşgabat şäheri, Oguzhan 13</Link>
                    </div>
                </div>
                <div className="border-top py-3 mt-3">
                    <div className="text-center">
                        © {new Date().toLocaleDateString(undefined, { year: "numeric" })}
                        <Link to="https://it.net.tm/" target="_blank" className='text-decoration-none fw-semibold me-1'> Sanly Çözgüt IT meýdança</Link>
                        tarapyndan ähli hukuklar goragly.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer