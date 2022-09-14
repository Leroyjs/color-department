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

export const DetailCardModal = ({
  isOpen,
  setOpen,
  name,
  bio,
  bio_second,
  position,
  networks,
  photo,
  projects = [],
}) => (
  <ModalWrapper isOpen={isOpen} setOpen={setOpen}>
    <Wrapper>
      <CloseBtn onClick={() => setOpen(false)} />
      <Container>
        <User>
          <UserAvatar img={photo} />
          <UserAbout>
            <UserName>{name}</UserName>
            <Caption color="white">{position}</Caption>
          </UserAbout>
        </User>
        <Description>
          <TextRow>
            <TextCol color="white">{bio}</TextCol>
            <TextCol color="white">{bio_second}</TextCol>
          </TextRow>
          <ProfileLinks>
            <Link href={`https://www.instagram.com/${networks}`}>
              <Caption color="white" style={{ cursor: 'pointer' }}>
                Instagram
              </Caption>
            </Link>
            <CaptionLink>@{networks}</CaptionLink>
          </ProfileLinks>
        </Description>
      </Container>
    </Wrapper>
    <WorksCards title={`${name}’s cases`} cards={projects} />
  </ModalWrapper>
)

DetailCardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
}
