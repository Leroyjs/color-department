import { Footer, Header, RunningLineLink, ShopSection } from "components";

const Projects = () => {
  return (
    <>
      <Header/>
      <main>
        <ShopSection />
        <RunningLineLink
          mt="md"
          outline={"true"}
          link={"/order"}
          titles={["LET’S TALK", "LET’S TALK", "LET’S TALK"]}
        />
      </main>
      <Footer pt="xlg"/>
    </>
  );
};

export default Projects;
