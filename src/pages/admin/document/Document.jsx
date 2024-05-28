import { faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import { Link } from "react-router-dom"

const Document = () => {

    //CATEGORY GET
    const [documents, setDocuments] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${import.meta.env.VITE_API_FETCH}/document`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                }
            }).then((res) => {
                setDocuments(res.data.document)
                console.log(res.data);
            })
        }
        fetchData()
    }, [])

    //CATEGORY DELETE
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_FETCH}/document/delete/${id}`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
            toast.success(data.success)
            const afterDelete = documents.filter((data) => {
                return data.id !== id
            })
            setDocuments(afterDelete)
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
                            Yarysa gatnasyjylar bölümi
                        </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">#</th>
                                    <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">F.A.A</td>
                                    <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">E-mail adresi</td>
                                    <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Telefon belgisi</td>
                                    <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Proyektin ady</td>
                                    <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Proyektin Mazmuny</td>
                                    <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Kategoriyasy</td>
                                    <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Ulanyjy maglumaty</td>
                                    <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">PDF</td>
                                    <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Pozmak</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    documents?.map((data, index) => (
                                        <tr key={index}>
                                            <th className="ps-5 py-3" scope="row">{index + 1}</th>
                                            <td className="ps-5 py-3">{data.username}</td>
                                            <td className="ps-5 py-3">{data.email}</td>
                                            <td className="ps-5 py-3">+993 {data.phone_num}</td>
                                            <td className="ps-5 py-3">{data.title}</td>
                                            <td className="ps-5 py-3" title={data.description}>{data.description.substring(0, 50)}...</td>
                                            <td className="ps-5 py-3">{data.categoryId}</td>
                                            <td className="ps-5 py-3">{data.userId}</td>
                                            <td className="ps-5 py-3"><Link target="_blank" to={`http://localhost:3001/api/file/passport_pdf/${data.passport_pdf}`}>PDF gor</Link></td>
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
            </div>
        </>
    )
}

export default Document