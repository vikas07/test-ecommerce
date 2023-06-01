import ContactDetails from "./ContactDetailis.compopnent";
import "./ContactUs.styles.scss"
import ContactForm from "./ContactUsForm.component";

const ContactUs = () =>{

return(
    <div className="contactus-container">
        <ContactDetails/>
        <ContactForm/>
    </div>
)
}

export default ContactUs;