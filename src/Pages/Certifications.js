import useDocumentTitle from "../Hooks/useDocumentTitle";
import NavBar from "../Components/Navbar";
import CertificationsComponent from "../Components/CertificationsComponent";

function Certifications() {
    useDocumentTitle("Certifications", false);
    return (
        <>
            <NavBar />
            <CertificationsComponent />
        </>
    );
}


export default Certifications;