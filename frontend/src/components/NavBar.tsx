import "./NavBar.css";

export default function NavBar () {

    return (
        <div   >
            <ul className="nav justify-content-center" style={{padding:"1% 0"}}>
                <li className="nav-item" >
                    <a className="nav-link active"  href={"/#/homepage"} style={{color: "#0d6efd", fontSize:"1.2em"}}>Homepage</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/" style={{color: "#0d6efd", fontSize:"1.2em"}}>Sights</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#" style={{color: "#0d6efd", fontSize:"1.2em"}}>Link</a>
                </li>
            </ul>


            <div className={"app-fotos row"} style={{height: "370px", border: "10px solid #fffb50"}} >
                <img className={"col-6 p-0"} src={"/images/main_page/hamburg1.jpeg"} alt={"Logo Hamburg 1"} style={{height: "inherit"}} />
                <img className={"col-6 p-0"} src={process.env.PUBLIC_URL + "/images/main_page/hamburg2.jpeg"} alt={"Logo Hamburg 2"} style={{height: "inherit"}}/>
            </div>
            <div className="willkommen"  ><h1>Herzlich willkommen in Hamburg!</h1></div>


        </div>
    )
}

