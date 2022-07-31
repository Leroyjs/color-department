import { useRef, useState } from "react";
import "styles/global.style";
import { Header, Menu, GoogleMap } from "components";

const Home = () => {
  const videoContant = useRef(null);
  const [isOpenMenu, setOpenMenu] = useState(false);

  const changeMenuState = (newMenuState) => {
    setOpenMenu(newMenuState)
  }

  return (
    <>
      <Menu isOpen={isOpenMenu}></Menu>
      <Header isListenScroll={isOpenMenu} onToggleMenu={changeMenuState} transparentToComponent={videoContant}></Header>
      <div ref={videoContant} style={{ 'height': '800px', 'border': 'solid white 1px', 'backgroundColor': 'red' }}></div>

      <div style={{ 'height': '800px', 'border': 'solid red 1px', 'backgroundColor': 'white' }}></div>

      <div style={{ 'height': '800px', 'border': 'solid red 1px', 'backgroundColor': 'white' }}></div>
      <div style={{ 'height': '800px', 'border': 'solid white 1px', 'backgroundColor': 'red' }}></div>

      <div style={{ 'height': '800px', 'border': 'solid red 1px', 'backgroundColor': 'white' }}></div>

      <main>dfvdfv

      </main>
    </>
  );
};

export default Home;
