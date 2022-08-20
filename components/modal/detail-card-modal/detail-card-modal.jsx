import React from 'react';
import {PropTypes} from "prop-types";
import {Caption, H2} from "components";
import {WorksCards} from "../../ui/works-cards";
import {
    Wrapper,
    User,
    UserAvatar,
    UserAbout,
    Description,
    TextCol,
    CloseBtn,
    Container,
    TextRow, ProfileLinks, CaptionLink, ModalWrapper
} from "./detail-card-modal.style";

const DEMO_VIDEO = 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4';
const DEMO_POSTER = 'https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d?mw=1500&mh=844&q=70'


const demoCards = [
    {
        firstTitle: "Lil pump",
        secondTitle: "Zolla",
        author: "Archangel Studios",
        year: "2021",
        poster: DEMO_POSTER,
        video: {"mp4": DEMO_VIDEO}
    },
    {
        firstTitle: "Lil pump",
        secondTitle: "Zolla",
        author: "Archangel Studios",
        year: "2021",
        poster: DEMO_POSTER,
        video: {"mp4": DEMO_VIDEO}
    },
    {
        firstTitle: "Lil pump",
        secondTitle: "Zolla",
        author: "Archangel Studios",
        year: "2021",
        poster: DEMO_POSTER,
        video: {"mp4": DEMO_VIDEO}
    },
    {
        firstTitle: "Lil pump",
        secondTitle: "Zolla",
        author: "Archangel Studios",
        year: "2021",
        poster: DEMO_POSTER,
        video: {"mp4": DEMO_VIDEO}
    },
]

export const DetailCardModal = ({isOpen, setOpen, modalId}) => (
    <ModalWrapper isOpen={isOpen} setOpen={setOpen}>
        <Wrapper>
            <CloseBtn onClick={() => setOpen(false)}/>
            <Container>
                <User>
                    <UserAvatar img="https://placebeard.it/640x360"/>
                    <UserAbout>
                        <H2 pb="sm">Miranda Bell</H2>
                        <Caption color="white">Creative producer</Caption>
                    </UserAbout>
                </User>
                <Description>
                    <TextRow>
                        <TextCol color="white">
                            Miranda Bell is a highly versatile senior colourist working broadly across advertising,
                            narrative,
                            music and fashion. Nike, Louis Vuitton, Mercedes, Virgin Media, ASOS, Sainsbury’s,
                            Balenciaga
                            and
                            Calvin Klein all feature in his varied commercial portfolio. Throughout every grade, he
                            prioritises
                            enhancing the message and emotion of the work.
                        </TextCol>
                        <TextCol color="white">
                            As well as appearing on streaming sites such as Netflix, Amazon and Mubi, Jack’s
                            narrative
                            work
                            is
                            regularly awarded at global film festivals, including European Short Film Festival, BFI,
                            Iris,
                            London Short Film Festival, and more
                        </TextCol>
                    </TextRow>
                    <ProfileLinks>
                        <Caption color="white">Instagram</Caption>
                        <CaptionLink>@MirandaBell</CaptionLink>
                    </ProfileLinks>
                </Description>
            </Container>
        </Wrapper>
        <WorksCards title="Miranda Bell’s cases" cards={demoCards}/>
    </ModalWrapper>
);

DetailCardModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}
