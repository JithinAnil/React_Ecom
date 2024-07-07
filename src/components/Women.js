const Women = () => {
    return ( 
        <section id="women-section" style={{backroundColor:'rgb(226, 226, 226)'}}>
        <div class="men-content">
            <h2 style={{fontFamily: 'Courier New, Courier, monospace' }}>WOMEN's Collection</h2>
            <div class="shoe-item">
                <img src="./imgs/shoes5.png" width="30%"
                    height="30%" alt="Men's Shoe 2"/>
                <h4>Nike Revolution 7</h4>
                <p>We loaded the Revolution 7 with the sort of soft cushioning and support that might change your running world. Stylish as ever, comfortable when the rubber meets the road and performance-driven for your desired pace, it'
                    s an evolution of a fan favourite that offers a soft, smooth ride.</p>
                <button>View Details</button>
            </div>
            <div class="shoe-item">
                <img src="./imgs/shoes6.jpeg" width="30%" height="30%" alt="Men's Shoe 2"/>
                <h4>Nike Structure 25</h4>
                <p>The supportive cushioning provides steadiness for everyday runs. Experience a stable platform without
                    sacrificing performance with a combination of Cushlon 3.0 foam and a Zoom Air unit. Plus, a higher
                    stack height makes it more comfortable, stable and supportive than ever.</p>

                <button>View Details</button>
            </div><br/>
            <p>
            <h1 style={{fontFamily:'Franklin Gothic Medium, Arial Narrow, Arial, sans-serif'}}>Other shoes are out of stock!</h1>
            </p>


        </div>
    </section>
     );
}
 
export default Women;