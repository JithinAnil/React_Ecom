const NavBar = () => {
    return ( 
    <nav>
        <div className="container">
            <div className="logo">
                <img src="./imgs/NikeLogoPNGImage.png" alt="..."/>
            </div>
            <div className="links">
                <a href="#home">Home</a>
                <a href="#men-section">MEN</a>
                <a href="#women-section">WOMEN</a>
                <a href="#kids-section">KIDS</a>

                <a href="#contact">Contact US</a>
            </div>
            <div className="search">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </nav>
     );
}
 
export default NavBar;