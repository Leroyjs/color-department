import "styles/global.style";
import {DropDown} from "../components/ui/dropDown";
import {useState} from "react";

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
    return (
        <>
            <main style={{height: '100vh', overflow: "visible"}}>
                <DropDown title="Service" onChange={(option) => setValue(option)} options={options} value={value}/>
            </main>
        </>
    );
};

export default Home;
