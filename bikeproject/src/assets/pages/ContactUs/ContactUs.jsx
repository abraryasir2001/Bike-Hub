import Footer from "../../../components/Shared/Footer";
import Navbar from "../../../components/Shared/Navbar";
import ContactForm from "./ContactForm";
function ContactUs()
{
    return (
        <div>
            <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <ContactForm></ContactForm>
        </div>
        <Footer></Footer>
        </div>
    )
}

export default ContactUs;