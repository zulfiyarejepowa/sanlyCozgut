import { Link, NavLink, useNavigate } from "react-router-dom";
import footerImg from "../../../assets/bg/auth.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import toast from "react-hot-toast";
import axios from "axios";
import logo from '../../../assets/logo/logo1.png'

const Register = () => {

    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [phone_num, setPhone_num] = useState("")
    const [password, setPassword] = useState("")
    const [cPassword, setCPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = { username: username, phone_num: phone_num, password: password }

        if (!username) {
            toast.error("Adyňyzy ýazyň!")
        }
        else if (!phone_num) {
            toast.error("Telefon belginizi ýazyň!")
        }
        else if (phone_num.length < 8) {
            toast.error("Telefon belgiňizi dogry ýazyň")
        }
        else if (phone_num.length > 8) {
            toast.error("Telefon belgiňizi dogry ýazyň")
        }
        else if (!password) {
            toast.error("Açar sözüňizi ýazyň!")
        }
        else if (!cPassword) {
            toast.error("Açar sözüňizi gaýtadan ýazyň!")
        }
        else if (cPassword !== password) {
            toast.error("Açar sözüňiz gabat gelenok !")
        }
        else if (password.length < 8) {
            toast.error("Açar sözüňiz 8-den uly bolmaly")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/auth/register`, data).then((res) => {
                if (res.data.error) {
                    toast.error(res.data.error)
                } else {
                    localStorage.setItem("accessToken", res.data.token)
                    setAuthState({
                        username: res.data.username,
                        phone_num: res.data.phone_num,
                        id: res.data.id,
                        status: true,
                        role: res.data.role,
                    });
                    toast.success(res.data.success)
                    navigate("/")
                    window.location.reload()
                }
            })
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-transparent navbar-light">
                <div className="container">
                    <NavLink to='/' className="navbar-brand">
                        <img src={ logo } alt="logo" />
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
                        <form className="d-flex">
                            <NavLink to='/agza-bolmak' className="btn text-white py-3 px-5 rounded-5 fs-18 ms-5" type="submit" id="button">Agza Bol</NavLink>
                        </form>
                    </div>
                </div>
            </nav>

            <div className="container">
                <div className="row justify-content-center align-items-center" style={{ height: "70vh" }}>
                    <div className="col-xl-7">
                        <form className="row rounded-5 py-4 px-5 shadow-sm" onSubmit={handleSubmit}>
                            <div className="col-xl-12">
                                <div className="display-4 mb-5 text-center">Agza bolmak</div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                <label className="form-label fw-semibold ms-2" htmlFor="username">Ady</label>
                                <input value={username} onChange={(e) => setUsername(e.target.value)} id="username" name="username" type="text" className="form-control rounded-4" placeholder="Kemal" autoComplete="off" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                <label className="form-label fw-semibold ms-2" htmlFor="phone_num">Telefon belgisi</label>
                                <div className="input-group mb-3">
                                    <span className="input-group-text rounded-start-5" id="basic-addon1">+993</span>
                                    <input value={phone_num} onChange={(e) => setPhone_num(e.target.value)} id="phone_num" name="phone_num" min="60000000" max="71999999" type="number" className="form-control rounded-end-5" placeholder="65 12-34-56" autoComplete="off" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                <label className="form-label fw-semibold ms-2" htmlFor="password">Açar sözi</label>
                                <input value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" className="form-control rounded-4" placeholder="************" autoComplete="off" />
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                <label className="form-label fw-semibold ms-2" htmlFor="password1">Açar sözini gaýtala</label>
                                <input value={cPassword} onChange={(e) => setCPassword(e.target.value)} id="password1" name="password1" type="password" className="form-control rounded-4" placeholder="************" autoComplete="off" />
                            </div>
                            <div className="col-xl-12 mb-4">
                                Meniň öň hem agza boldym! <Link to='/giris-etmek' className="text-decoration-none">Giriş et</Link>
                            </div>
                            <div className="col-xl-12 mb-4 text-center">
                                <button className="btn px-5 rounded-5" type="submit" id="contactButton">Ugrat</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-xl-12 text-center position-absolute bottom-0">
                        <img src={footerImg} alt="" className="img-fluid w-100" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register