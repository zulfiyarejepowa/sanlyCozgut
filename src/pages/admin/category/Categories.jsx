import { faPencil, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import Modal from 'react-bootstrap/Modal';

const Categories = () => {

    //CATEGORY GET
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${import.meta.env.VITE_API_FETCH}/category`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                }
            }).then((res) => {
                setCategories(res.data.category)
            })
        }
        fetchData()
    }, [])

    //CATEGORY DELETE
    const handleDelete = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_FETCH}/category/delete/${id}`, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
            toast.success(data.success)
            const afterDelete = categories.filter((data) => {
                return data.id !== id
            })
            setCategories(afterDelete)
        } catch (err) {
            console.log(err);
        }
    }

    //MODAL SETTINGS
    const [show, setShow] = useState(false);

    const handleOpen = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    //CATEGORY CREATE
    const [category, setCategory] = useState({
        name_tm: "",
    })

    const handleChange = (e) => {
        setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleCreate = async (e) => {
        e.preventDefault()

        if (!category.name_tm) {
            toast.error("Adyny ýazyň (TM)")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/category/create`, category, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            }).then((res) => {
                handleClose()
                toast.success(res.data.success)
                const updatedList = [...categories, category];
                setCategories(updatedList);
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    //INPUT SETTING
    const [text, setText] = useState("");

    const [inputShow, setInputShow] = useState(false);

    const handleInputOpen = (data) => {
        setInputShow(data.id);
        setText(data.name_tm)
    };

    const handleInputClose = () => {
        setInputShow(false);
    }

    //CATEGORY EDIT 
    const handleEdit = async (id) => {

        if (!text) {
            toast.error("Adyny ýazyň (TM)")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/category/edit/${id}`, { name_tm: text }, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            }).then((res) => {
                handleInputClose();
                toast.success(res.data.success)
                const newList = categories.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            name_tm: text,
                        };
                    }
                    return item;
                });
                setCategories(newList);
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <>
            <div className="container-fluid px-5">
                <div className="bg-white rounded-2 shadow">
                    <div className="d-flex align-items-center justify-content-between px-5 py-4">
                        <div className="h5">
                            Kategoriyalar bolumi
                        </div>
                        <div style={{ cursor: "pointer" }} className="text-decoration-none text-primary h5" onClick={handleOpen}>
                            <FontAwesomeIcon icon={faPlus} className="border rounded-circle" style={{ padding: "5px 8px" }} />
                        </div>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">#</th>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Ady</td>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Pozmak</td>
                                <td className="bg-light text-secondary border-top border-bottom ps-5 small" scope="col">Üýtgetmek</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                categories?.map((data, index) => (
                                    <tr key={index}>
                                        <th className="ps-5 py-3" scope="row">{index + 1}</th>
                                        <td className="ps-5 py-3">
                                            {
                                                inputShow === data.id ?
                                                    <div className="input-group w-50">
                                                        <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="form-control rounded-start-5 fs-14 py-1" aria-describedby="basic-addon1" />
                                                        <button onClick={() => handleEdit(data.id)} className="input-group-text bg-primary text-white rounded-end-5 py-1" id="basic-addon1">Uytget</button>
                                                    </div>
                                                    :
                                                    data.name_tm
                                            }
                                        </td>
                                        <td className="ps-5 py-3">
                                            <FontAwesomeIcon icon={faPencil} onClick={() => handleInputOpen(data)} className='text-warning text-decoration-none mx-3' style={{ cursor: "pointer" }} />
                                        </td>
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

            {/* Category Create */}
            <Modal show={show} onHide={handleClose} className="modal-dialog-centered" centered>
                <form onSubmit={handleCreate}>
                    <Modal.Header closeButton>
                        <Modal.Title>Kategoriya gosmak</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="py-5">
                        <label className="form-label fw-bold ms-2">Ady <small className="fw-normal">(TM)</small></label>
                        <input name='name_tm' onChange={handleChange} type="text" className="form-control rounded-5" autoComplete="off" placeholder="Robototehnika" />
                    </Modal.Body>
                    <Modal.Footer>
                        <button type="submit" className="btn btn-primary rounded-5 px-4">Gosmak</button>
                    </Modal.Footer>
                </form>
            </Modal>
            {/* Category Create */}

        </>
    )
}

export default Categories