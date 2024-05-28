import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"

const Document = () => {

    //CATEGORY GET
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(`${import.meta.env.VITE_API_FETCH}/category`)
                .then((res) => {
                    setCategories(res.data.category)
                })
        }
        fetchData()
    }, [])

    //CONTACT API
    const [document, setDocument] = useState({
        username: "",
        email: "",
        phone_num: "",
        title: "",
        description: "",
        categoryId: "",
    })
    const [imgPassport, setImgPassport] = useState('')

    const handleChange = (e) => {
        setDocument((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('username', document.username)
        formData.append('email', document.email)
        formData.append('phone_num', document.phone_num)
        formData.append('title', document.title)
        formData.append('description', document.description)
        formData.append('categoryId', document.categoryId)
        formData.append('passport_pdf', imgPassport)

        if (!document.username) {
            toast.error("Adyňyzy ýazyň")
        }
        else if (!document.email) {
            toast.error("E-mail adresiňizi ýazyň")
        }
        else if (!document.phone_num) {
            toast.error("phone_num ýazyň")
        }
        else if (!imgPassport) {
            toast.error("imgPassport ýazyň")
        }
        else if (!document.title) {
            toast.error("Temaňyzy ýazyň")
        }
        else if (!document.categoryId) {
            toast.error("categoryId ýazyň")
        }
        else if (!document.description) {
            toast.error("Teswiriňizi ýazyň")
        }
        else if (document.description.length < 25) {
            toast.error("Teswiriňizi 25 harpdan ybarat bolmaly")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/document/create`, formData, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            }).then((res) => {
                toast.success(res.data.success)
                setDocument({
                    username: "",
                    email: "",
                    phone_num: "",
                    title: "",
                    description: "",
                    categoryId: "",
                })
                setImgPassport('')
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <>
            <div className="container mt-5 pt-5">
                <h2 className="text-center">Dokument tabsyrmak</h2>
                <div className="row mt-5 pt-5 justify-content-center">
                    <div className="col-xl-8">
                        <form className="row" onSubmit={handleClick}>
                            <div className="col-xl-6 mb-4">
                                <label className="form-label fw-bold">F.A.A</label>
                                <input onChange={handleChange} value={document?.username} name='username' type="text" className="form-control rounded-5" autoComplete="off" />
                            </div>
                            <div className="col-xl-6 mb-4">
                                <label className="form-label fw-bold">E-mail</label>
                                <input onChange={handleChange} value={document?.email} name='email' type="email" className="form-control rounded-5" autoComplete="off" />
                            </div>
                            <div className="col-xl-6 mb-4">
                                <label className="form-label fw-bold">Telefon belgisi</label>
                                <input onChange={handleChange} value={document?.phone_num} name='phone_num' type="number" className="form-control rounded-5" autoComplete="off" />
                            </div>
                            <div className="col-xl-6 mb-4">
                                <label className="form-label fw-bold">Pasport PDF</label>
                                <input onChange={(e) => setImgPassport(e.target.files[0])} name='passport_pdf' type="file" className="form-control rounded-5" autoComplete="off" />
                            </div>
                            <div className="col-xl-6 mb-4">
                                <label className="form-label fw-bold">Proyektin ady</label>
                                <input onChange={handleChange} value={document?.title} name='title' type="text" className="form-control rounded-5" autoComplete="off" />
                            </div>
                            <div className="col-xl-6 mb-4">
                                <label className="form-label fw-bold">Kategoriya</label>
                                <select onChange={handleChange} value={document?.categoryId} name='categoryId' className="form-select rounded-5" required>
                                    <option defaultValue>Kategoriyalar</option>
                                    {categories?.map((data, index) => (
                                        <option key={index} value={data.id}>
                                            {data.name_tm}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-xl-12 mb-4">
                                <label className="form-label fw-bold">Mazmuny</label>
                                <textarea onChange={handleChange} value={document?.description} name='description' rows={5} className="form-control rounded-5"></textarea>
                            </div>
                            <div className="col-xl-12 d-grid mt-4">
                                <button className="btn btn-primary px-5 py-2 rounded-5" type="submit">Ugrat</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Document