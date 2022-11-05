import React from "react";


export default function Homepage () {

    return (
        <div>
            <h1>Hallo! Besuch mal</h1>
            <div>
                <a href={"/"} style={{color: "rgb(255 163 1)", textDecoration: "none"}}><h1>10 beste Sehenswürdigkeiten</h1></a>
            </div>


            <div className="shadow p-3 mb-5 bg-white rounded">
                <div>
                    <iframe src="https://www.youtube.com/embed/aw28hc4ktGM"
                            width="1100" height="600" style={{border: "0"}}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <iframe src="https://www.youtube.com/embed/HPmz6c5I6b4"
                            width="1100" height="600" style={{border: "0"}}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>
                <div>
                    <iframe src="https://www.youtube.com/embed/cKFPlAuOJ6c"
                            width="1100" height="600" style={{border: "0"}}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>

                </div>
                <div>
                    <iframe src="https://www.youtube.com/embed/8et9C-QVtXk"
                            width="1100" height="600" style={{border: "0"}}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                    </iframe>
                </div>







            </div>
        </div>
    )
}