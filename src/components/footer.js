const Footer = () => {
    return (
        <footer>
            <div className="row bg-dark">
                <div className="col-12 d-flex justify-content-center">
                    <span className="text-white">Thanks to <a className="text-white" style={{'text-decoration': 'none'}} href="https://www.swapi.tech/">SWAPI</a> </span>
                </div>
            </div>
            <div className="row pt-1 bg-dark ">
                <div className="col-12 d-flex justify-content-center">
                    <span className="text-white ">for sharing this information </span>
                </div>
                
            </div>
        </footer>
    );
}
export default Footer;