import GoogleMap from 'google-map-react'
import { CompanyInfo, FooterNavigation } from 'components'
import { useVH } from 'utils'
import {
  FooterMapWrapper,
  FooterModalWrapper,
  FooterCompanyInfoMobile,
} from './navigation-bar-map.style'
import { mapStyle } from '../../../styles'
import { FoxMarker } from './fox-marker'

export const NavigationBarMap = ({
  common,
  isParentOpen,
  hasAutoscroll = false,
  ...props
}) => {
  useVH()
  const latitude = Number(common.map?.latitude || 0)
  const longitude = Number(common.map?.longitude || 0)

  return (
    <>
      <FooterModalWrapper {...props}>
        <FooterNavigation social={common.social} />
        <FooterMapWrapper>
          <GoogleMap
            bootstrapURLKeys={{
              key: 'AIzaSyD1R1d0uOtMb-qbPF9AW8dklLkbqE5V2D8',
            }}
            options={{ styles: mapStyle }}
            defaultCenter={{
              lat: latitude,
              lng: longitude,
            }}
            defaultZoom={11}
          >
            <FoxMarker
              title={common.map?.title || ''}
              lat={latitude}
              lng={longitude}
            />
          </GoogleMap>
        </FooterMapWrapper>
      </FooterModalWrapper>
      <FooterCompanyInfoMobile>
        <CompanyInfo
          email={common.email}
          phone={common.phone}
          company_name={common.company_name}
          link_policy={common.link_policy}
          link_terms={common.link_terms}
        />
      </FooterCompanyInfoMobile>
    </>
  )
}
