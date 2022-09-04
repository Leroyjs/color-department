import { Footer, Header, RunningLineLink, ShopSection } from "components";

const Projects = () => {
  return (
    <>
      <Header></Header>
      <main>
        <ShopSection />
        <RunningLineLink
          mt="md"
          outline={"true"}
          link={"/order"}
          titles={["LET’S TALK", "LET’S TALK", "LET’S TALK"]}
        />
      </main>
      <Footer pt="xlg"></Footer>
    </>
  );
};

export default Projects;
