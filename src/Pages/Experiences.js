import ExperiencesComponent from '../Components/ExperiencesComponent';
import NavBar from '../Components/Navbar';
import useDocumentTitle from '../Hooks/useDocumentTitle';


function Experiences() {
    useDocumentTitle("Expriences", false);
    return <>
        <NavBar />
        <ExperiencesComponent />
    </>
}


export default Experiences;