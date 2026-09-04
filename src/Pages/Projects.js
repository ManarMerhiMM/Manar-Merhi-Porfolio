import NavBar from '../Components/Navbar';
import ProjectsComponent from '../Components/ProjectsComponent';
import useDocumentTitle from '../Hooks/useDocumentTitle';



function Projects() {
    useDocumentTitle("Projects", false);
    return (
        <>
            <NavBar />
            <ProjectsComponent />
        </>
    );
}


export default Projects;