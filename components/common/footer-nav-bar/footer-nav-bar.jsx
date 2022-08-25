import { ClassNames } from '@emotion/react';
import { Caption } from 'components';
import { FooterNavBar, FooterNavBarItem, socialIcon, socialLabel } from './footer-nav-bar.style';


const mockData = [
    { title: 'vimeo', link: 'https://vimeo.com/', icon: '/social-vimeo.svg' },
    { title: 'instagram', link: 'https://www.instagram.com/', icon: '/social-subtract.svg' },
    { title: 'linkedin', link: 'https://ru.linkedin.com/', icon: '/social-linkedin.svg' },
    { title: 'facebook', link: 'https://www.facebook.com/', icon: '/social-facebook.svg' }
];

export const FooterNavigation = ({ footerItems = mockData, ...props }) => {
    const navigateByLink = (link) => (_) => {
        window.open(link, '_blank')
    }

    const getFooterItems = () => {
        return footerItems.map((item) =>
            <FooterNavBarItem key={item.title} onClick={navigateByLink(item.link)}>
                <>
                    <img className={socialIcon} src={item.icon} alt='' />
                    <Caption wrapperProps={{className:socialLabel}} color={'white'}>{item.title}</Caption>
                </>
            </FooterNavBarItem>)
    }

    return (
        <FooterNavBar {...props}>
            {
                getFooterItems()
            }
        </FooterNavBar>
    )
}