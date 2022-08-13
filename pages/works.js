import React, {useRef, useState} from 'react';
import {Header, RunningLine, DetailCardModal} from "components";

const WorksPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const videoContant = useRef(null);

    return (
        <div>
            <Header transparentToComponent={videoContant}></Header>

            <div className="TODO: Play ground" style={{'position': 'relative', 'overflow': 'hidden'}}>
                <div ref={videoContant} style={{
                    'height': '25vh',
                    'filter': 'brightness(0.5)',
                    'background-image': 'url(./Yp2.gif)',
                    'background-size': 'cover'
                }}></div>
                <RunningLine style={{'position': 'absolute', 'bottom': '0'}}></RunningLine>
            </div>

            <button style={{color: 'yellow'}} onClick={() => setModalOpen(true)}>OpenModal</button>
            <DetailCardModal isOpen={isModalOpen} setOpen={setModalOpen}/>
        </div>
    );
};

export default WorksPage;
