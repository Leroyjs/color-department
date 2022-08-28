import "styles/global.style";
import { ProjectCards, PhotoStartScreen, RunningLineLink, Header, Footer } from "components";
import { colors } from "styles";

const Projects = () => {
    return (
        <>
            <Header/>
            <PhotoStartScreen arrayOfImages={[]}/>
            <main style={{ backgroundColor: colors.black }}>
                <ProjectCards />
                <RunningLineLink mt="md" outline={'true'} target={'_blank'} link={'https://cs9.pikabu.ru/post_img/big/2017/01/29/1/1485643541171113411.jpg'}/>
            </main>
            <Footer pt="xlg"/>
        </>
    );
};

export default Projects;