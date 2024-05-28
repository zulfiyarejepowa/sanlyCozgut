import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import toast from "react-hot-toast"

const Users = () => {

    //CATEGORY GET
    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${import.meta.env.VITE_API_FETCH}/user`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                }
            }).then((res) => {
                setUsers(res.data.users)
            })
        }
        fetchData()
    }, [])

    //CATEGORY DELETE
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_FETCH}/user/delete/${id}`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
            toast.success(data.success)
            const afterDelete = users.filter((data) => {
                return data.id !== id
            })
            setUsers(afterDelete)
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="container-fluid px-5">
                <div className="bg-white rounded-2 shadow">
                    <div className="d-flex align-items-center justify-content-between px-5 py-4">
                        <div className="h5">
                            Ulanyjylar bolumi
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">#</th>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Suraty</td>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Ady</td>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Familýasy</td>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">E-mail adresi</td>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Telefon belgisi</td>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Pozmak</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((data, index) => (
                                    <tr key={index}>
                                        <th className="ps-5 py-3" scope="row">{index + 1}</th>
                                        <td className="ps-5 py-3"><img src={data.profile_img} className="rounded-circle border" alt="" style={{ width: "50px", height: "50px", objectFit: "cover" }} /></td>
                                        <td className="ps-5 py-3">{data.username}</td>
                                        <td className="ps-5 py-3">{data.surname}</td>
                                        <td className="ps-5 py-3">{data.email}</td>
                                        <td className="ps-5 py-3">+993 {data.phone_num}</td>
                                        <td className="ps-5 py-3">
                                            <FontAwesomeIcon icon={faTrash} onClick={() => handleDelete(data.id)} className="text-danger mx-4" style={{ cursor: "pointer" }} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Users