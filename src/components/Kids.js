const Kids = () => {
    return ( 
        <section id="kids-section" style={{backroundColor:'rgb(226, 226, 226)'}}>
        <div className="men-content">
            <h2 style={{fontFamily: 'Courier New, Courier, monospace' }}>Kid's Collection</h2>
            <div className="shoe-item">
                <img src="./imgs/shoes7.jpg" width="30%" height="30%" alt= "Shoe 3"/>
                <h4>Nike Air Max Plus</h4>
                <p>Who says kids don' t deserve big cushioning? Not us. Get a taste of our legendary Tuned Air
                    technology with the Nike Air Max Plus. From the school playground to your back garden, these comfy
                    kicks are ready to play with breathable mesh fabric up top and a durable rubber sole underfoot.
                    Plus, wavy design lines and iconic plastic accents celebrate bold style.</p>
                <button>View Details</button>
            </div>
            <div className="shoe-item">
                <img src="./imgs/shoes8.jpg" width="30%"  height="30%" alt="Men's Shoe 2"/>
                <h4>Nike Air Max 270 SE</h4>
                <p>Known for its bouncy cushioning, the Nike Air Max 270 gets its name from an extra-large Max Air unit
                    in the heel that gives you a 270-degree view of one of our favourite innovations. Plus, the
                    sock-like fit of the stretchy inner sleeve helps your feet feel secure and comfortable as you play.
                </p>

                <button>View Details</button>
            </div><br/>
            <p>
            <h1 style={{fontFamily:'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'}}>Other shoes are out of
                stock!</h1>
            </p>


        </div>
    </section>
     );
}
 
export default Kids;