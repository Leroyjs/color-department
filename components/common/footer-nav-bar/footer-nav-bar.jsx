import { FooterNavBar, FooterNavBarItem } from './footer-nav-bar.style';
import { Caption } from 'components';
import { useEffect, useState } from 'react';
import { getPlatform } from 'styles';

const mockData = [
    { title: 'vimeo', link: 'https://vimeo.com/', icon: '/social-vimeo.svg' },
    { title: 'instagram', link: 'https://www.instagram.com/', icon: '/social-subtract.svg' },
    { title: 'linkedin', link: 'https://ru.linkedin.com/', icon: '/social-linkedin.svg' },
    { title: 'facebook', link: 'https://www.facebook.com/', icon: '/social-facebook.svg' }
];

export const FooterNavigation = ({ footerItems = mockData, ...props }) => {
    const [isMobile, setMobileFlag] = useState(false);
    useEffect(() => {
        console.log(getPlatform())
        if (getPlatform() === 'mobile') setMobileFlag(true);
    }, []);

    const navigateByLink = (link) => (_) => {
        window.open(link, '_blank')
    }

    const getFooterItems = () => {
        return footerItems.map((item) =>
            <FooterNavBarItem key={item.title} onClick={navigateByLink(item.link)}>
                <>
                    <img src={item.icon} alt='' />
                    <Caption color='white' >{item.title}</Caption>
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