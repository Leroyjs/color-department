import {
    Footer,
    Header,
    PhotoStartScreen,
    Preloader,
    ProjectCards,
    RunningLineLink,
} from "components";
import {colors} from "styles";
import {getCasesPreviews, getContent, getsColourists} from "../utils";

const Projects = ({data, casesPreviews, projects = [], categories = [], genres = [], colourists = []}) => {
    console.log(colourists)
    return (
        <>
            <Preloader/>
            <Header/>
            <PhotoStartScreen arrayOfImages={casesPreviews} title={["projects"]}/>
            <main style={{backgroundColor: colors.black}}>
                <ProjectCards projects={projects} categories={categories} genres={genres} colourists={colourists}/>
                <RunningLineLink
                    mt="xlg"
                    outline={"true"}
                    link={"/order"}
                    titles={["LET’S TALK", "LET’S TALK", "LET’S TALK"]}
                />
            </main>
            <Footer pt="xlg"/>
        </>
    );
};

export async function getServerSideProps(context) {
    const res = await getContent('projects') || null;
    const data = res?.data || {};

    const projects = data?.projects;
    const categories = data?.categories || [];
    const genres = data?.genres || [];
    const colourists = getsColourists(data?.projects);
    const casesPreviews = getCasesPreviews(data?.projects);

    return {
        props: {data, casesPreviews, projects, categories, genres, colourists}, // will be passed to the page component as props
    }
}

export default Projects;
