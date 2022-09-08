import React from 'react'
import { PropTypes } from 'prop-types'
import { Caption, H2 } from 'components'
import { WorksCards } from '../../ui/works-cards'
import {
  Wrapper,
  User,
  UserAvatar,
  UserAbout,
  Description,
  TextCol,
  CloseBtn,
  Container,
  TextRow,
  ProfileLinks,
  CaptionLink,
  ModalWrapper,
  UserName,
} from './detail-card-modal.style'
import Link from 'next/link'

const DEMO_VIDEO =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
const DEMO_POSTER =
  'https://i.vimeocdn.com/video/1098107786-66e16e6c38f322badf0757fb378d618222697e1e0a3fada0b993df076daea72f-d?mw=1500&mh=844&q=70'

const demoCards = [
  {
    firstTitle: "Lil pump 1",
    secondTitle: "Zolla",
    author: "Archangel Studios",
    year: "2021",
    poster:
      "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    video: {
      mp4: "https://drive.google.com/uc?id=1iSNLWmHI7aB72zl53b6LKrz60SJQJ4k1"
    },
  },
  {
    firstTitle: "Lil pump 2",
    secondTitle: "Zolla",
    author: "Archangel Studios",
    year: "2021",
    poster:
      "https://i.vimeocdn.com/video/969956438-651eaae49450178bd03a0a1a7a19d5daf29ee7e56c410f9507e95e04117952ff-d",
    video: {
      mp4: "https://drive.google.com/uc?id=1Xdyt6G1AU-2Ef-Nas0HcsOxd3Lt6keqO",
    },
  },
  {
    firstTitle: "Lil pump 3",
    secondTitle: "Zolla",
    author: "Archangel Studios",
    year: "2021",
    poster:
      "https://i.vimeocdn.com/video/1104167332-6b4e20f12306d88f5a65f940acd631da3d03163d57f77fd2052b4ae260f09cb5-d",
    video: {
      mp4: "https://drive.google.com/uc?id=1AfYOdwOXA8kq9aS3SerSV2zDam_xQiyf",
    },
  },
  {
    firstTitle: "Lil pump 4",
    secondTitle: "Zolla",
    author: "Archangel Studios",
    year: "2021",
    poster:
      "https://i.vimeocdn.com/video/847771530-2c68d26f433117c779d19c837bc9c01de91bcba607dd76978ad76f665e76b522-d",
    video: {
      mp4: "https://drive.google.com/uc?id=1cZrJhilm5Zn8DXCurTSM7X2ObEvfhaoK",
    },
  },
];

export const DetailCardModal = ({ isOpen, setOpen, modalId }) => (
  <ModalWrapper isOpen={isOpen} setOpen={setOpen}>
    <Wrapper>
      <CloseBtn onClick={() => setOpen(false)} />
      <Container>
        <User>
          <UserAvatar img="https://placebeard.it/640x360" />
          <UserAbout>
            <UserName>Miranda Bell</UserName>
            <Caption color="white">Creative producer</Caption>
          </UserAbout>
        </User>
        <Description>
          <TextRow>
            <TextCol color="white">
              Miranda Bell is a highly versatile senior colourist working
              broadly across advertising, narrative, music and fashion. Nike,
              Louis Vuitton, Mercedes, Virgin Media, ASOS, Sainsbury’s,
              Balenciaga and Calvin Klein all feature in his varied commercial
              portfolio. Throughout every grade, he prioritises enhancing the
              message and emotion of the work.
            </TextCol>
            <TextCol color="white">
              As well as appearing on streaming sites such as Netflix, Amazon
              and Mubi, Jack’s narrative work is regularly awarded at global
              film festivals, including European Short Film Festival, BFI, Iris,
              London Short Film Festival, and more
            </TextCol>
          </TextRow>
          <ProfileLinks>
            <Link href={'https://www.instagram.com/'}>
              <Caption color="white" style={{ cursor: 'pointer' }}>
                Instagram
              </Caption>
            </Link>
            <CaptionLink>@MirandaBell</CaptionLink>
          </ProfileLinks>
        </Description>
      </Container>
    </Wrapper>
    <WorksCards title="Miranda Bell’s cases" cards={demoCards} />
  </ModalWrapper>
)

DetailCardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}
