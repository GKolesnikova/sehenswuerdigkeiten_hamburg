import React from "react";


export default function Homepage () {

    return (
            <div>
                <h1>Hallo! Besuch mal</h1>
                <div>
                    <a href={"/"} style={{color: "rgb(255 163 1)", textDecoration: "none"}}><h1>10 beste Sehenswürdigkeiten</h1></a>
                </div>

                <div className="shadow p-3 mb-5 bg-white rounded">

                    <div className="container">
                        <div className="row" style={{ padding: "0 3em"}}>
                            <div className="col-sm-12 col-md-6" >
                                <iframe className="col-12" src="https://www.youtube.com/embed/aw28hc4ktGM"
                                         height="350" style={{border: "5px solid rgb(108 249 249)", margin: "2%"}}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <iframe className="col-12" src="https://www.youtube.com/embed/HPmz6c5I6b4"
                                         height="350" style={{border: "5px solid rgb(108 249 249)", margin: "2%"}}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <iframe className="col-12" src="https://www.youtube.com/embed/cKFPlAuOJ6c"
                                         height="350" style={{border: "5px solid rgb(108 249 249)", margin: "2%"}}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>

                            </div>
                            <div className="col-sm-12 col-md-6">
                                <iframe className="col-12" src="https://www.youtube.com/embed/8et9C-QVtXk"
                                          height="350" style={{border: "5px solid rgb(108 249 249)", margin: "2%"}}
                                        title="YouTube video player"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}