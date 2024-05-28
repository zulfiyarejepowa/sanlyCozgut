import { faArrowUp, faUsers } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Home = () => {
    return (
        <>
            <div className="container-fluid px-5">
                <div className="row">
                    <div className="col-xl-3 col-md-6 mb-5">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="card-title small text-uppercase text-muted mb-0">Ulanyjy sany</div>
                                        <div className="h4 font-weight-bold mb-0 mt-1">350,897</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-white rounded-circle shadow bg-danger d-flex justify-content-center align-items-center" style={{ width: "50px", height: "50px" }}>
                                            <FontAwesomeIcon icon={faUsers} />
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-3 mb-0 text-sm">
                                    <span className="text-success mr-2 fw-semibold me-3"><FontAwesomeIcon icon={faArrowUp} /> 3.48%</span>
                                    <span className="text-secondary">Since last month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-5">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="card-title small text-uppercase text-muted mb-0">Ulanyjy sany</div>
                                        <div className="h4 font-weight-bold mb-0 mt-1">350,897</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-white rounded-circle shadow bg-success d-flex justify-content-center align-items-center" style={{ width: "50px", height: "50px" }}>
                                            <FontAwesomeIcon icon={faUsers} />
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-3 mb-0 text-sm">
                                    <span className="text-success mr-2 fw-semibold me-3"><FontAwesomeIcon icon={faArrowUp} /> 3.48%</span>
                                    <span className="text-secondary">Since last month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-5">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="card-title small text-uppercase text-muted mb-0">Ulanyjy sany</div>
                                        <div className="h4 font-weight-bold mb-0 mt-1">350,897</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-white rounded-circle shadow bg-warning d-flex justify-content-center align-items-center" style={{ width: "50px", height: "50px" }}>
                                            <FontAwesomeIcon icon={faUsers} />
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-3 mb-0 text-sm">
                                    <span className="text-success mr-2 fw-semibold me-3"><FontAwesomeIcon icon={faArrowUp} /> 3.48%</span>
                                    <span className="text-secondary">Since last month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-md-6 mb-5">
                        <div className="card border-0 shadow">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <div className="card-title small text-uppercase text-muted mb-0">Ulanyjy sany</div>
                                        <div className="h4 font-weight-bold mb-0 mt-1">350,897</div>
                                    </div>
                                    <div className="col-auto">
                                        <div className="text-white rounded-circle shadow bg-info d-flex justify-content-center align-items-center" style={{ width: "50px", height: "50px" }}>
                                            <FontAwesomeIcon icon={faUsers} />
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-3 mb-0 text-sm">
                                    <span className="text-success mr-2 fw-semibold me-3"><FontAwesomeIcon icon={faArrowUp} /> 3.48%</span>
                                    <span className="text-secondary">Since last month</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home