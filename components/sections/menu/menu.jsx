import { NavigationBarMap, CompanyInfo, FooterNavigation } from 'components'
import { MenuItem } from './menu-item/menu-item'
import {
  MenuBody,
  MenuFooter,
  MenuList,
  MenuMap,
  MenuWrapper,
  HideForMobile,
  ShowForMobile,
} from './menu.style'
import { useVH, useNoScroll } from 'utils'
import GoogleMap from 'google-map-react'
import { mapStyle } from '../../../styles'
import { FoxMarker } from '../../common/navigation-bar-map/fox-marker'

export const Menu = ({ isOpen, props, common }) => {
  useVH()
  useNoScroll(isOpen)

  return (
    <MenuWrapper isOpen={isOpen} {...props}>
      <MenuBody>
        <MenuList>
          <MenuItem
            link="/projects"
            key="/projects"
            title={common.nav_labels.projects}
          />
          <MenuItem link="/team" key="/team" title={common.nav_labels.team} />
          <MenuItem link="/shop" key="/shop" title={common.nav_labels.shop} />
          <MenuItem
            link="/order"
            key="/order"
            title={common.nav_labels.order}
          />
        </MenuList>
        <MenuMap>
          <GoogleMap
            bootstrapURLKeys={{
              key: 'AIzaSyDkrKVrZ7zshTB5jW2VNgUeur45GNMkeHw',
              version: 'weekly',
            }}
            options={{ styles: mapStyle }}
            defaultCenter={{
              center: {
                lat: +common.map?.latitude || 0,
                lng: +common.map?.longitude || 0,
              },
            }}
            defaultZoom={11}
          >
            <FoxMarker
              title={common.map?.title || ''}
              lat={+common.map?.latitude || 0}
              lng={+common.map?.longitude || 0}
            />
          </GoogleMap>
        </MenuMap>
        <HideForMobile>
          <CompanyInfo
            email={common.email}
            phone={common.phone}
            company_name={common.company_name}
            link_policy={common.link_policy}
            link_terms={common.link_terms}
          />
        </HideForMobile>
      </MenuBody>
      <MenuFooter isOpen={isOpen}>
        <HideForMobile>
          <FooterNavigation social={common.social} />
        </HideForMobile>
        <ShowForMobile>
          <NavigationBarMap common={common} isParentOpen={isOpen} />
        </ShowForMobile>
      </MenuFooter>
    </MenuWrapper>
  )
}
