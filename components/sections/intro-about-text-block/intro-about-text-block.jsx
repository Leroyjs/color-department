import { Caption, H2 } from 'components'
import Link from 'next/link'
import {
  TextSectionWrapper,
  RoundedNumber,
  TextDecorationWrapper,
  StyledWhiteH2,
  StyledUnderline,
  StyledPlanet,
  StyledDesktopSMBR,
  StyledTabletBR,
  StyledTabletSMBR,
  StyledTabletXSMBR,
  StyledDesktopBR,
  StyledPhoneLGBR,
  StyledPhoneSMBR,
} from './intro-about-text-block.style'

export const IntroAboutTextBlock = ({ ...props }) => {
  return (
    <TextSectionWrapper {...props}>
      <H2>a color grading studio&nbsp;</H2>
      <StyledTabletBR />
      <StyledTabletSMBR />
      <StyledPhoneSMBR />
      <H2>Based in&nbsp;</H2>
      <StyledWhiteH2>Los Angeles, CALIFORNIA.&nbsp;</StyledWhiteH2>
      <StyledPlanet />
      <StyledDesktopBR />
      <StyledDesktopSMBR />
      <StyledTabletBR />
      <StyledTabletSMBR />
      <StyledTabletXSMBR />
      <StyledPhoneLGBR />
      <StyledPhoneSMBR />
      <RoundedNumber>
        <Caption>01</Caption>
      </RoundedNumber>
      <StyledWhiteH2>&nbsp;We have personality.&nbsp;</StyledWhiteH2>
      <StyledTabletXSMBR />
      <RoundedNumber>
        <Caption>02</Caption>
      </RoundedNumber>
      <StyledWhiteH2>&nbsp;We love&nbsp;</StyledWhiteH2>
      <StyledTabletBR />
      <StyledTabletSMBR />
      <StyledPhoneSMBR />
      <StyledWhiteH2>What we do.&nbsp;</StyledWhiteH2>
      <StyledDesktopBR />
      <StyledDesktopSMBR />
      <StyledTabletXSMBR />
      <StyledPhoneLGBR />
      <RoundedNumber>
        <Caption>03</Caption>
      </RoundedNumber>
      <StyledWhiteH2>&nbsp;We make it fun for us and&nbsp;</StyledWhiteH2>
      <StyledTabletBR />
      <StyledTabletXSMBR />
      <StyledPhoneSMBR />
      <StyledWhiteH2> our clients.&nbsp;</StyledWhiteH2>
      <H2>That said,&nbsp;</H2>
      <StyledDesktopSMBR />
      <StyledTabletXSMBR />
      <H2>we take&nbsp;</H2>
      <StyledDesktopBR />
      <StyledPhoneLGBR />
      <H2>deadlines&nbsp;</H2>
      <StyledTabletBR />
      <StyledTabletSMBR />
      <StyledPhoneSMBR />
      <H2> and&nbsp;</H2>
      <Link href="/letstalk">
        <TextDecorationWrapper>
          <StyledWhiteH2>agreements very seriously.</StyledWhiteH2>
          <StyledUnderline />
        </TextDecorationWrapper>
      </Link>
    </TextSectionWrapper>
  )
}
