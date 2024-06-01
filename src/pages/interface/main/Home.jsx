import { Link } from "react-router-dom"

import img3 from "../../../assets/cards/3.png";
import img4 from "../../../assets/cards/4.png";
import img5 from "../../../assets/cards/5.png";
import img6 from "../../../assets/cards/6.png";
import img8 from "../../../assets/cards/8.png";
import img9 from "../../../assets/cards/9.jpg";
import img10 from "../../../assets/cards/10.jpg";
import img11 from "../../../assets/cards/11.jpg";
import img12 from "../../../assets/cards/12.jpg";
import img13 from "../../../assets/cards/13.jpg";
import img14 from "../../../assets/cards/14.jpg";
import img15 from "../../../assets/cards/15.jpg";
import img16 from "../../../assets/cards/16.jpg";
import img17 from "../../../assets/cards/17.jpg";

import svg1 from "../../../assets/icons/mac.svg";
import svg2 from "../../../assets/icons/statiks.svg";
import checkIcon from "../../../assets/icons/check.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faEnvelope, faMapMarkedAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {

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
    const [contact, setContact] = useState({
        name: "",
        email: "",
        subject: "",
        comment: "",
    })

    const handleChange = (e) => {
        setContact((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()

        if (!contact.name) {
            toast.error("Adyňyzy ýazyň")
        }
        else if (!contact.email) {
            toast.error("E-mail adresiňizi ýazyň")
        }
        else if (!contact.subject) {
            toast.error("Temaňyzy ýazyň")
        }
        else if (!contact.comment) {
            toast.error("Teswiriňizi ýazyň")
        }
        else if (contact.comment.length < 10) {
            toast.error("Teswiriňizi 10 harpdan az bolmaly dal")
        }
        else {
            await axios.post(`${import.meta.env.VITE_API_FETCH}/contact/create`, contact, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            }).then((res) => {
                toast.success(res.data.success)
                setContact({
                    name: "",
                    email: "",
                    subject: "",
                    comment: "",
                })
            }).catch((err) => {
                console.log(err);
            });
        }
    }

    return (
        <>
            <div className="container my-5 py-5" id="news">
                <div className="row">
                    <div className="col-xl-7">
                        <div className="position-relative mb-5">
                            {/* <img src={img3} alt="" className="img-fluid position-absolute" style={{ left: "5%" }} /> */}
                            <img src={img4} alt="" className="img-fluid position-absolute" style={{ left: "100px", top: "265px" }} id="mainImg" />
                            <img src={img5} alt="" className="img-fluid position-absolute" style={{ top: "41px", right: "110px" }} id="mainImg"/>
                            {/* <img src={img6} alt="" className="img-fluid position-absolute" style={{ top: "-30px", right: "12%", zIndex: "-1" }} /> */}
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="display-4">Bäsleşigiň <br /> <b className="text-primary fw-bold">esasy</b> maksatlary</div>
                        <p className="fs-18 my-3 w-75 text-secondary" style={{ lineHeight: "30px" }}>
                            Berkarar döwletimiziň bagtyýarlyk döwründe, Hormatly Prezidentimiziň parasatly başlangyçlary bilen ýurdumyzyň ykdysadyýetine sanly ulgamy ornaşdyrmak boýunça maksatnamalaýyn işler durmuşa geçirilýär.
                        </p>
                        <div className="d-flex mt-3 align-items-center">
                            <img src={svg1} alt="" className="img-fluid rounded-circle" />
                            <div className="ms-4">
                                <div className="h3">Kanunyň kabul edilmegi</div>
                                <p className="fs-18 text-secondary" style={{ width: "60%" }}>Türkmenistanyň Prezidentiniň 2018-nji ýylyň 30-njy noýabryndaky...</p>
                            </div>
                        </div>
                        <div className="d-flex mt-3 align-items-center">
                            <img src={svg2} alt="" className="img-fluid rounded-circle" />
                            <div className="ms-4">
                                <div className="h3">Gazanylan üstünlikler</div>
                                <p className="fs-18 text-secondary" style={{ width: "60%" }}>Kabul edilen konsepsiýa laýyklykda, dünýä ylmynyň täze gazananlary esasynda taýýarlanan...</p>
                            </div>
                        </div>
                        <Link to='/' className="btn btn-lg mt-3 rounded-5 py-3 px-5" id="button">Giňişleýin gör</Link>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pt-5">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="display-4 mb-4">Bäsleşik <b className="text-primary fw-bold">7 ugur</b> boýunça geçiriler</div>
                        <p className="fs-18 my-4 w-75 text-secondary" style={{ lineHeight: "30px" }}>
                            Bäsleşige hödürlenýän taslamalary (oýlap tapyşlary) seljermek üçin, eminlik etmek maksady bilen, wagtlaýyn ýörite seljeriş topary döredilýär.
                            <br />
                            Seljeriş toparynyň düzümine umumy ýolbaşçylygy «Türkmenaragatnaşyk» agentligi tarapyndan amala aşyrylýar we ylalaşylyp düzülýär.
                        </p>
                        {
                            categories?.map((data, index) => (
                                <div key={index} className="d-flex align-items-center mb-3 mt-5">
                                    <img src={checkIcon} alt="" className="img-fluid me-2" />
                                    <div className="h5">{data.name_tm}</div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="col-xl-6">
                        <div className="bg-light rounded-5 d-flex flex-column align-items-center" style={{ padding: "50px 70px" }}>
                            <div className="display-4">Bäsleşikde <b className="text-primary fw-bold">gadagan</b> edilýän hereketler</div>
                            <img src={img8} alt="" className="img-fluid mt-5" style={{ width: "400px" }} />
                            <div className="fs-18 text-secondary">
                                <ul>
                                    <li>Jemgyýetçilik çäklerini we özüňi alyp barmak tertiplerini bozmak;</li>
                                    <li> Wirusly ýa-da howply resminamalary ýüklemek we almak;</li>
                                    <li> Iş we onuň mazmuny bäsleşige gatnaşyjylaryň we ony gurnaýjylaryň göwnine degip biljek taslamanyň görnüşini hödürlemek.</li>
                                </ul>
                            </div>
                            <Link to='/' className="btn btn-lg mt-3 rounded-5 py-3 px-5" id="button">Giňişleýin gör</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center mt-5 py-5 d-flex justify-content-center flex-column align-items-center" id="kriteriyalar">
                <div className="display-4"><b className="text-primary fw-bold">Bölümleriň</b> sanawy</div>
                <p className="mt-4 fs-18 text-secondary" style={{ width: "34%" }}>
                    Bäsleşige gatnaşyjylaryň buýurmalarynyň aňlatmalary we bölümler boýunça aňladyş göterimleri ýa-da bahalary
                </p>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-xl-4 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img9} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Bölüm 1 (30%)</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px", paddingBottom: "35px" }}>
                                Sanly ulgam bilen baglanyşykly modeli
                            </p>
                            <div className="h4 mb-3 mt-5">Bölüm 2 (20%)</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Kiberhowpsuzlyk talaplarynyň berjaý edilişi
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-8 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img10} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Bölüm 3 (10%)</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Enjamlara we beýleki maddy çeşmelere eýeçilik hukugynda ýa-da beýleki kanuny esasda, maliýe çeşmeleriniň elýeterliligini, wakalaryň mowzugy bilen baglanyşykly iş tejribesini, belli bir hünär derejesindäki hünärmenleri
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img11} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Bölüm 4 (20%)</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Taslamanyň netijeliligi
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img12} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Bölüm 5 (10%)</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Sanly özgertme maksatnamasynyň hili
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-4 mb-4">
                        <div className="bg-light rounded-5 p-5">
                            <img src={img13} alt="" className="img-fluid mb-4 rounded-5" />
                            <div className="h4 mb-3">Bölüm 6 (10%)</div>
                            <p className="text-secondary fs-18" style={{ lineHeight: "27px" }}>
                                Taslamalar (Oýlap-tapyşlar)
                            </p>
                        </div>
                    </div>
                    <div className="col-xl-12 d-flex justify-content-center">
                        <Link to='/' className="btn btn-lg mt-3 rounded-5 py-3 px-5" id="button">Giňişleýin gör</Link>
                    </div>
                </div>
            </div>

            <div className="bg-about" id="about">
                <div className="container">
                    <div className="d-flex justify-content-center">

                        <div className="w-75">
                            <div className="row align-items-center">
                                <div className="col-xl-8 mb-5">
                                    <div className="display-5">
                                        Başlangyç wagty & umumy <b>düzgünleri</b>
                                    </div>
                                </div>
                                <div className="col-xl-4 mb-5 text-end">
                                    <Link to="" className="btn btn-dark px-5 py-3 rounded-5" id="button">Giňişleýin gör</Link>
                                </div>
                                <div className="col-xl-5">
                                    <div className="bg-white rounded-5 p-4">
                                        <img src={img14} alt="" className="img-fluid rounded-5" />
                                        <div className="ms-3">
                                            <div className="my-3">
                                                <span className="btn btn-outline-primary btn-sm rounded-5">Tehnologiýa</span>
                                                <span className="btn btn-outline-primary btn-sm rounded-5 mx-3">Sept 01, 2024</span>
                                            </div>
                                            <div className="h4 mb-3">«Sanly çözgüt – 2024» innowasion taslamalar bäsleşigi</div>
                                            <p>Bäsleşigiň umumy düzgünlerini görmek üçin Giňişleýin göre basyň</p>
                                            <Link to='' className="text-decoration-none">Giňişleýin gör</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7">
                                    <div className="d-flex mb-3 align-items-center">
                                        <div className="bg-light rounded-5 p-3">
                                            <img src={img15} alt="" className="img-fluid rounded-5" style={{ width: "140px" }} />
                                        </div>
                                        <div className="ms-3">
                                            <span></span>
                                            <span>Aprel 18, 2024</span>
                                            <div className="h4 mt-4">Bäsleşigiň esasy maksatlary</div>
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3 align-items-center">
                                        <div className="bg-light rounded-5 p-3">
                                            <img src={img16} alt="" className="img-fluid rounded-5" style={{ width: "140px" }} />
                                        </div>
                                        <div className="ms-3">
                                            <span></span>
                                            <span>Aprel 18, 2024</span>
                                            <div className="h4 mt-4">Bäsleşigiň umumy düzgünleri</div>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div className="bg-light rounded-5 p-3">
                                            <img src={img17} alt="" className="img-fluid rounded-5" style={{ width: "140px" }} />
                                        </div>
                                        <div className="ms-3">
                                            <span></span>
                                            <span>Aprel 18, 2024</span>
                                            <div className="h4 mt-4">Bäsleşige gatnaşmagyň düzgünleri</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5 pt-5" id="contact">
                <div className="d-flex justify-content-center">
                    <div className="text-center display-5 w-50"><b>Sorag-jogap penjiresi</b></div>
                </div>
                <div className="bg-light rounded-5 p-5 mt-5">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-xl-6">
                            <form className="row justify-content-center" onSubmit={handleClick}>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                    <input onChange={handleChange} value={contact?.name} name="name" type="text" className="form-control rounded-4 border-0" placeholder="Adynyz" autoComplete="off" />
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-12 mb-4">
                                    <input onChange={handleChange} value={contact?.email} name="email" type="email" className="form-control rounded-4 border-0" placeholder="E-mail adresiniz" autoComplete="off" />
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-4">
                                    <input onChange={handleChange} value={contact?.subject} name="subject" type="text" className="form-control rounded-4 border-0" placeholder="Temasy" autoComplete="off" />
                                </div>
                                <div className="col-xl-12 col-lg-12 col-md-12 col-12 mb-4">
                                    <textarea onChange={handleChange} value={contact?.comment} name="comment" className="form-control rounded-4 border-0" rows="6" placeholder="Mazmuny"></textarea>
                                </div>
                                <div className="col-xl-5 mb-4 text-center">
                                    <button className="btn px-5 rounded-5" type="submit" id="contactButton">Ugrat</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-5">
                            <div className="d-flex align-items-center fs-18 mb-4">
                                <FontAwesomeIcon icon={faPhoneAlt} className="me-2 text-white p-3 rounded-circle" id="contactIcons" />
                                <div className="fw-semibold">+993 65 12-34-56</div>
                            </div>
                            <div className="d-flex align-items-center fs-18 mb-4">
                                <FontAwesomeIcon icon={faPhoneAlt} className="me-2 text-white p-3 rounded-circle" id="contactIcons"/>
                                <div className="fw-semibold">+993 65 12-34-56</div>
                            </div>
                            <div className="d-flex align-items-center fs-18 mb-4">
                                <FontAwesomeIcon icon={faMapMarkedAlt} className="me-2 text-white p-3 rounded-circle" id="contactIcons"/>
                                <div className="fw-semibold">Aşgabat ş., Oguzhan köç., 13 "A"</div>
                            </div>
                            <div className="d-flex align-items-center fs-18 mb-4">
                                <FontAwesomeIcon icon={faClock} className="me-2 text-white p-3 rounded-circle" id="contactIcons"/>
                                <div className="fw-semibold">09:00-22:00</div>
                            </div>
                            <div className="d-flex align-items-center fs-18 mb-4">
                                <FontAwesomeIcon icon={faEnvelope} className="me-2 text-white p-3 rounded-circle" id="contactIcons"/>
                                <div className="fw-semibold">it@sanly.tm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home