import { ShopSection, RunningLineLink, Footer, Header } from "components";

const Projects = () => {
  return (
    <>
      <Header></Header>
      <main>
        <ShopSection />
        <RunningLineLink
          mt="md"
          outline={"true"}
          target={"_blank"}
          link={"https://vimeo.com/showcase/7646686"}
        />
      </main>
      <Footer pt="xlg"></Footer>
    </>
  );
};

export default Projects;
