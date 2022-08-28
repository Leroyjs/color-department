import { ShopSection, RunningLineLink, Footer, Header } from "components";

const Projects = () => {
  return (
    <>
      <Header></Header>
      <main>
        <ShopSection />
        <RunningLineLink mt="md" outline={'true'} target={'_blank'} link={'https://cs9.pikabu.ru/post_img/big/2017/01/29/1/1485643541171113411.jpg'}/>
      </main>
      <Footer pt="xlg"></Footer>
    </>
  );
};

export default Projects;
