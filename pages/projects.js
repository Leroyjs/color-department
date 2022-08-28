import "styles/global.style";
import { ProjectCards, PhotoStartScreen, RunningLine, Header, Footer } from "components";
import { colors } from "styles";

const Projects = () => {

    return (
        <>
            <Header></Header>
            <PhotoStartScreen arrayOfImages={[]}/>
            <main style={{ backgroundColor: colors.black }}>
                <ProjectCards />
                <RunningLine outline mt="xlg" />
            </main>
            <Footer pt="xlg"></Footer>
        </>
    );
};

export default Projects;
