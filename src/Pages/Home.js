import NavBar from '../Components/Navbar';
import Hero from '../Components/Hero';
import useDocumentTitle from '../Hooks/useDocumentTitle';
import Education from '../Components/Education';

function Home() {
    useDocumentTitle("Landing", false);

    return (
        <>
            <NavBar />
            <Hero />
            <Education />
        </>
    );
}


export default Home;