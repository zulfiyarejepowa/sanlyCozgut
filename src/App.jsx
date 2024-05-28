import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import './App.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from './context/AuthContext';

//COMPONENTS
import { AdminNavbar, AdminSidebar, Footer, Navbar, ProfileNavbar, ProfileSidebar, ScrollToTop } from './components';
//PAGES
import { Home, Login, Profile, ProfileDocument, Register } from './pages/interface';
//ADMIN
import { Admin, AdminCategories, AdminContact, AdminDocument, AdminLogin, AdminUsers } from './pages/admin';

function App() {

    const [authState, setAuthState] = useState({
        username: "",
        phone_num: "",
        id: 0,
        status: false,
        role: "User",
    });

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_API_FETCH}/auth/current_user`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
            .then((res) => {
                if (res.data.error) {
                    setAuthState({ ...authState, status: false, role: "User" });
                } else {
                    setAuthState({
                        username: res.data.username,
                        phone_num: res.data.phone_num,
                        id: res.data.id,
                        status: true,
                        role: res.data.role,
                    });
                }
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <AuthContext.Provider value={{ authState, setAuthState }}>
                <Router>
                    <ScrollToTop />
                    <Toaster />
                    <Routes>
                        <Route path="/" element={<HomeLayout />}>
                            <Route path="/" element={<Home />} />
                        </Route>

                        {authState.status && (
                            <Route path="/" element={<ProfileLayout />}>
                                <Route path="/profile" element={<Profile />} />
                                <Route path="/profile-document" element={<ProfileDocument />} />
                            </Route>
                        )}

                        {authState.role === "Admin" && (
                            <Route path="/admin" element={<AdminLayout />}>
                                <Route path="" element={<Admin />} />
                                <Route path="bas-sahypa" element={<Admin />} />

                                <Route path="kategoriyalar" element={<AdminCategories />} />

                                <Route path="ulanyjylar" element={<AdminUsers />} />

                                <Route path="yarysa-gatnasycylar" element={<AdminDocument />} />

                                <Route path="habarlasmak" element={<AdminContact />} />
                            </Route>
                        )}

                        {!authState.status && (
                            <>
                                <Route path="/giris-etmek" element={<Login />} />
                                <Route path="/agza-bolmak" element={<Register />} />

                                <Route path="/admin/login" element={<AdminLogin />} />
                            </>
                        )}

                    </Routes>
                </Router>
            </AuthContext.Provider>
        </>
    )
}

const HomeLayout = () => {
    return (
        <>
            <Navbar />

            <Outlet />

            <Footer />
        </>
    );
};

const ProfileLayout = () => {
    return (
        <>
            <ProfileNavbar />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-2 p-0">
                        <ProfileSidebar />
                    </div>
                    <div className="col-xl-10 p-0">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};


const AdminLayout = () => {
    return (
        <>
            <div className='position-fixed top-0 bottom-0 d-block'>
                <AdminSidebar />
            </div>

            <div style={{ marginLeft: "280px" }}>
                <AdminNavbar />

                <Outlet />
            </div>
        </>
    );
};


export default App
