const Home = () => {
    return ( 
       <>
    <section id = 'home'>
        <div className="content">
            <div className="main-content">
                <h1 >Nike Store</h1>
                <h2 > Air Max Plus</h2>
                
                
                <h4 >MAKE THE GROUND SHAKE</h4>
                <p >Let the attitude have the edge in your Nike Air Max Plus, a Tuned Air experience that offers premium stability and unbelievable cushioning Featuring the OG's wacy design lines, TPU accents and airy mesh on the upper. It celebrates definat style.</p>
                <div className="order">
                    <h3 >20%OFF</h3>
                    <button >PRE-ORDER NOW</button>
                    
                </div>
            </div>
            <div className="image">
                <img src="./imgs/shoes.png" data-aos="zoom-in" data-aos-duration="2000" alt="..."/>
            </div>
        </div>
    </section>
    </>
     );
}
 
export default Home;