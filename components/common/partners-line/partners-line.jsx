import { useEffect, useState } from 'react';
import { Img, PartnersItem, PartnersLineSlider, PartnersLineWrapper } from './partners-line.style';
import { initStepCounter } from './utils';

const mockImagePaths = [
    '/20-century.png',
    '/apple.png',
    '/dream-works.png',
    '/netflix.png',
    '/pizza-hunt.png',
    '/uniqlo.png',
    '/zara.png',
];

export const PartnersLine = ({ imagePaths = mockImagePaths }) => {
    const [step, setStep] = useState(0);
    const [pictureArray, setPictureArray] = useState([]);
    useEffect(() => initStepCounter(setStep, imagePaths, setPictureArray), []);
    const getPartners = () => {
        return pictureArray.map((path, indx) =>
            <PartnersItem key={indx}>
                <img src={path} alt=''></img>
            </PartnersItem>)
    }
    return (
        <PartnersLineWrapper>
            <PartnersLineSlider step={step}>
                {getPartners()}
            </PartnersLineSlider>
        </PartnersLineWrapper>
    );
}