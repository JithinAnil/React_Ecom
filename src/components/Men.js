const Men = () => {
    return ( 
        <section id="men-section" style={{backroundColor:'rgb(226, 226, 226)'}}>
        <div className="men-content">
            <h2 style={{fontFamily: 'Courier New, Courier, monospace' }}>Men's Collection</h2>
            <div className="shoe-item">
                <img src="./imgs/shoes11.jpg" width="20%" height="20%" alt="Shoe 11"/>
                <h4>Nike Air Force 1 Low EVO</h4>
                <p>Comfortable, durable and timeless—it's number 1 for a reason. Cutaway details expose a premium
                    textile Swoosh logo and full-length Air units in the outsole, revealing the Air Force 1 in a new
                    way. The classic '80s construction pairs with bold details for style that tracks whether you're on
                    court or on the go.</p>
                
                <button>View Details</button>
            </div>
            <div className="shoe-item">
                <img src="./imgs/shoe4.jpg" width="20%"  height="20%" alt="Men's Shoe 2"/>
                <h4>Nike Air Force 1 Shadow</h4>
                <p>Unmatched cushioning with every step.</p>
                <button>View Details</button>
            </div>
            <div className="shoe-item">
                <img src="./imgs/shoes10.jpg" width="20%"  height="20%" alt="Shoe 10"/>
                <h4>Nike Zoom Vomero 5 SE</h4>
                <p>The Zoom Vomero 5 SE takes early-2000s running to modern heights. A combination of breathable and
                    durable materials stands ready for the rigours of your day, while Zoom Air cushioning delivers a
                    smooth ride.</p>

                <button>View Details</button>
            </div>
            <div className="shoe-item">
                <img src="./imgs/shoe3.jpg" width="20%"  height="20%" alt= "Shoe 3"/>
                <h4>Nike Streakfly</h4>
                <p>Classic style combined with modern comfort.</p>
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
 
export default Men;