import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import toast from "react-hot-toast"

const Contact = () => {

    //CATEGORY GET
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${import.meta.env.VITE_API_FETCH}/contact`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                }
            }).then((res) => {
                setContacts(res.data.contacts)
            })
        }
        fetchData()
    }, [])

    //CATEGORY DELETE
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_FETCH}/contact/delete/${id}`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
            toast.success(data.success)
            const afterDelete = contacts.filter((data) => {
                return data.id !== id
            })
            setContacts(afterDelete)
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
                            Habarlaşmak bölümi
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">#</th>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Ady</td>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">E-mail adresi</td>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Temasy</td>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Mazmuny</td>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Pozmak</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts?.map((data, index) => (
                                    <tr key={index}>
                                        <th className="ps-5 py-3" scope="row">{index + 1}</th>
                                        <td className="ps-5 py-3">{data.name}</td>
                                        <td className="ps-5 py-3">{data.email}</td>
                                        <td className="ps-5 py-3">{data.subject}</td>
                                        <td className="ps-5 py-3">{data.comment}</td>
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

export default Contact