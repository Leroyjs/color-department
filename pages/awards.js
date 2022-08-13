import React from 'react';
import {Awards} from "components";

const awardsItems = [
    {href: '/', startLabel: 'D&AD', endLabel: 'Balkan line', img: 'https://www.fillmurray.com/400/400'},
    {href: '/', startLabel: 'CANNES LIONS', endLabel: 'El corte ingles', img: 'https://placebeard.it/400/400'},
    {href: '/', startLabel: 'WEBBY', endLabel: 'Zolla', img: 'https://www.placecage.com/400/400'},
    {href: '/', startLabel: 'ONE SHOW', endLabel: 'Lil pump', img: 'https://www.stevensegallery.com/400/400'},
]

const AwardsPage = () => {
    return (
        <div style={{marginTop: '180px'}}>
            <Awards options={awardsItems} title="Our Awards"/>
        </div>
    );
};

export default AwardsPage;
