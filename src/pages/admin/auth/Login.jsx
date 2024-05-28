import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setAuthState } = useContext(AuthContext);

    const navigate = useNavigate();

    const loginUser = async (e) => {
        e.preventDefault();

        const data = { email: email, password: password }

        if (!email) {
            toast.error("E-mail adresi ýaz!")
        }
        else if (!password) {
            toast.error("Açar sözüni ýaz!")
        }
        else if (password.length < 8) {
            toast.error("Açar sözi 8-den uly bolmaly!")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/auth/rootman`, data).then((res) => {
                if (res.data.error) {
                    toast.error(res.data.error)
                } else {
                    toast.success(res.data.success)
                    localStorage.setItem("accessToken", res.data.token)
                    setAuthState({
                        email: res.data.email,
                        id: res.data.id,
                        status: true,
                        role: res.data.role,
                    });
                    navigate("/admin")
                    window.location.reload()
                }

            })
        }
    }

    return (
        <>
            <div style={{ height: "100vh" }} className='bg-white d-flex justify-content-center align-items-center'>
                <form className='card border-0 shadow p-5 rounded-5' style={{ backgroundColor: "#323c48" }} onSubmit={loginUser}>
                    <div className='h2 text-center text-white mx-5 mb-3'>Admin Panel</div>
                    <div className='h5 text-center text-secondary mx-5 mb-5'>Giriş etmek</div>
                    <div className="mb-4">
                        <input value={email} onChange={(e) => setEmail(e.target.value)} name='email' type="email" className="form-control rounded-5 border-0 text-white px-3 py-2" style={{ backgroundColor: "#3b4654" }} placeholder='Email address' />
                    </div>
                    <div className="mb-5">
                        <input value={password} onChange={(e) => setPassword(e.target.value)} name='password' type="password" className="form-control rounded-5 border-0 text-white px-3 py-2" style={{ backgroundColor: "#3b4654" }} placeholder='Password' />
                    </div>
                    <button type="submit" className="btn btn-primary rounded-5">Giriş</button>
                </form>
            </div>
        </>
    )
}

export default Login