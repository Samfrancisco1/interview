import ContactBg from '../../assets/images/contact-image.jpg';
function Contact() {
  return (
    <section className="contact">
        <h2>CONTACT</h2>
        <div className="contact-container">
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Name" className="contact__input" required  />

                <input type="email" placeholder="Email " className="contact__input" required />

                <input type="password" placeholder="Password" className="contact__input" required  />
                
                <button className="contact__button">SEND</button>
              </form>
            </div>

            <div className="contact-image">
                <img src={ContactBg} alt="contact" />
            </div>
        </div>
    </section>
  );
}

export default Contact;
