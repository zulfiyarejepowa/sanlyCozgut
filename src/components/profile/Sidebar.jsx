import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import userImg from "../../assets/icons/user.jpg";
import { faAngleRight, faBook, faHeart, faHomeAlt, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Sidebar = () => {

    const [user, setUser] = useState()

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${import.meta.env.VITE_API_FETCH}/user/single`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            }).then((res) => {
                setUser(res.data.user)
            })
        }
        fetchData()
    }, [])

    return (
        <>
            <div className="bg-light position-relative mt-5 pt-5" style={{ height: "94vh" }}>
                <div className="d-flex pt-5 flex-column justify-content-center align-items-center">
                    <img src={userImg} alt="" className="img-fluid rounded-circle position-relative border border-5 border-light" style={{ width: "190px", zIndex: "10" }} />
                    <div className="position-relative d-flex w-100 flex-column justify-content-start align-items-center" style={{ height: "80px", zIndex: "10" }}>
                        <div className="h5 mt-2">{user?.username} {user?.surname}</div>
                        <small>Jess Designs</small>
                    </div>
                    <div className="bg-primary position-absolute top-0 start-0 end-0 w-100" style={{ zIndex: "1", height: "22%", bottom: "auto" }}></div>
                </div>

                <div className="pt-3">
                    <NavLink activeclassname="active" to='/profile' className='text-decoration-none d-block d-flex align-items-center position-relative w-100 px-3 justify-content-between' style={{ height: "65px", color: "black" }}>
                        <div className="d-flex align-items-center ms-3">
                            <FontAwesomeIcon icon={faHomeAlt} className="me-2" />
                            <div>Profile</div>
                        </div>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </NavLink>
                    <NavLink activeclassname="active" to='/profile-document' className='text-decoration-none d-block d-flex align-items-center position-relative w-100 px-3 justify-content-between' style={{ height: "65px", color: "black" }}>
                        <div className="d-flex align-items-center ms-3">
                            <FontAwesomeIcon icon={faUserAlt} className="me-2" />
                            <div>Hasaba durmak</div>
                        </div>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </NavLink>
                    <NavLink activeclassname="active" to='/' className='text-decoration-none d-block d-flex align-items-center position-relative w-100 px-3 justify-content-between' style={{ height: "65px", color: "black" }}>
                        <div className="d-flex align-items-center ms-3">
                            <FontAwesomeIcon icon={faBook} className="me-2" />
                            <div>Arhiwim</div>
                        </div>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </NavLink>
                    <NavLink activeclassname="active" to='/' className='text-decoration-none d-block d-flex align-items-center position-relative w-100 px-3 justify-content-between' style={{ height: "65px", color: "black" }}>
                        <div className="d-flex align-items-center ms-3">
                            <FontAwesomeIcon icon={faHeart} className="me-2" />
                            <div>Balarym</div>
                        </div>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Sidebar