
import { useState, useRef } from "react";
import { DropDown } from "../components/ui/dropDown";
import { TextArea } from "../components/ui/textArea";
import "styles/global.style";
import { Header, Menu, GoogleMap } from "components";

const options = [
    {
        label: 'color grading',
        value: 1
    },
    {
        label: 'VFX-design',
        value: 2
    },
    {
        label: 'Dailies',
        value: 3
    }
]

const Home = () => {

    const videoContant = useRef(null);
    const [isOpenMenu, setOpenMenu] = useState(false);

    const changeMenuState = (newMenuState) => {
        setOpenMenu(newMenuState)
    }
    const [value, setValue] = useState(null);
    return (
        <>
            <Header isListenScroll={isOpenMenu} onToggleMenu={changeMenuState} transparentToComponent={videoContant}></Header>
            <div ref={videoContant} style={{ 'height': '800px', 'border': 'solid white 1px', 'backgroundColor': 'red' }}></div>
            <main style={{ height: '100vh', overflow: "visible" }}>
                <DropDown title="Service" onChange={(option) => setValue(option)} options={options} value={value} />

                <TextArea title="About your work" onChange={(val) => {
                    console.log(val)
                }} />
            </main>
        </>
    );

};

export default Home;
