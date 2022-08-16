import React, {useRef, useState} from 'react';
import {Header, RunningLine, DetailCardModal, ButtonRectangle, PhotoStartScreen} from "components";

const WorksPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const videoContant = useRef(null);

    return (
        <div>
            <Header></Header>

            <PhotoStartScreen></PhotoStartScreen>

            <ButtonRectangle onClick={() => setModalOpen(true)}>
                Open modal
            </ButtonRectangle>
            <DetailCardModal isOpen={isModalOpen} setOpen={setModalOpen}/>
        </div>
    );
};

export default WorksPage;
