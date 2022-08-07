import {useState} from "react";
import {DropDown, TextArea} from "components";
import "styles/global.style";

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
    const [value, setValue] = useState(null);
    const [message, setMessage] = useState(null);
    return (
        <>
            <main style={{height: '100vh', overflow: "visible"}}>
                <DropDown title="Service" onChange={(option) => setValue(option)} options={options} value={value}/>

                <TextArea title="About your work" value={message} onChange={(val) => {
                    setMessage(val)
                }}/>
            </main>
        </>
    );
};

export default Home;
