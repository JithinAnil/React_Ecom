const Contact = () => {
    return ( 
<section id="contact">
    <h2>Contact Us</h2>
    <p>Feel free to reach out to us with any questions or inquiries. We'd love to hear from you!</p>
    <form>
      <input type="text" placeholder="Your Name"/>
      <input type="email" placeholder="Your Email"/>
      <textarea placeholder="Your Message"></textarea>
      <button type="submit">Send</button>
    </form>
  </section>
     );
}
 
export default Contact;