import NavBar from '../Components/Navbar';
import ContactComponent from '../Components/ContactComponent';
import useDocumentTitle from '../Hooks/useDocumentTitle';

function Contact() {
    useDocumentTitle("Contact", false);
    return (
        <>
            <NavBar />
            <ContactComponent />
        </>
    );
}

export default Contact;