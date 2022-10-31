import "./NavBar.css";

export default function NavBar () {

    return (
        <>
            <ul className="nav justify-content-center" style={{padding:"1% 0"}}>
                <li className="nav-item" >
                    <a className="nav-link active"  href={"/#/homepage"} style={{color: "orange"}}>Homepage</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">Sights</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                </li>
            </ul>


            <div className={"app-fotos row"} style={{ height: "300px"}}>
                <img className={"col-6 p-0"} src={"/images/main_page/hamburg1.jpeg"} alt={"Logo Hamburg 1"} />
                <img className={"col-6 p-0"} src={process.env.PUBLIC_URL + "/images/main_page/hamburg2.jpeg"} alt={"Logo Hamburg 2"} />
                <div className="willkommen"  ><h1>Herzlich willkommen in Hamburg!</h1></div>
            </div>
         </>
    )
}

