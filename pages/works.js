import React, {useRef, useState} from 'react';
import {Header, RunningLine, DetailCardModal, ButtonRectangle} from "components";

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

            <ButtonRectangle onClick={() => setModalOpen(true)}>
                Open modal
            </ButtonRectangle>
            <DetailCardModal isOpen={isModalOpen} setOpen={setModalOpen}/>
        </div>
    );
};

export default WorksPage;
