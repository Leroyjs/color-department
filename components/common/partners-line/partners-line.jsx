import { PartnersLineWrapper, PartnersLineSlider, PartnersItem, Img } from './partners-line.style';
import { useState, useEffect } from 'react';
import { initStepCounter } from './utils';
import Image from "next/image";

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
    useEffect(() => initStepCounter(setStep, imagePaths.length), []);

    return (
        <PartnersLineWrapper>
            <PartnersLineSlider step={step}>
                {
                    imagePaths.map((path, indx) =>
                        <PartnersItem key={indx}>
                            <Img src={path}></Img>
                        </PartnersItem>)
                }
            </PartnersLineSlider>
        </PartnersLineWrapper>
    );
}