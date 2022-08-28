import { ProjectCards, RunningLine, Header, Footer } from "components";

const Projects = () => {

    return (
        <>
            <Header/>
            <main>
                <ProjectCards />
                <RunningLine outline mt="xlg" />
            </main>
            <Footer pt="xlg"></Footer>
        </>
    );
};

export default Projects;
