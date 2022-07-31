import { useRef } from "react";
import "styles/global.style";
import { Header } from "components";

const Home = () => {
  const videoContant = useRef(null)
  return (
    <>
      <Header isListenScroll={true} transparentToComponent={videoContant}></Header>
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
