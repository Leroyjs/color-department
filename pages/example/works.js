import React, {useState} from 'react';
import {Header, DetailCardModal, ButtonRectangle, PhotoStartScreen} from "components";

const WorksPage = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    return (
        <div>
            <Header/>
            <PhotoStartScreen/>
            <ButtonRectangle onClick={() => setModalOpen(true)}>
                Open modal
            </ButtonRectangle>
            <DetailCardModal isOpen={isModalOpen} setOpen={setModalOpen}/>
        </div>
    );
};

export default WorksPage;
