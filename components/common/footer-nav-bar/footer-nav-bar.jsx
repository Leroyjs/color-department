import { FooterNavBar, FooterNavBarItem } from './footer-nav-bar.style';
import { Caption } from 'components';

const footerItems = [
    { title: 'vimeo', link: 'ref)' },
    { title: 'instagram', link: 'ref->' },
    { title: 'linkedin', link: '<-ref' },
    { title: 'facebook', link: '<<ref' }
];

export const FooterNavigation = () => {

    //TODO: Навигация
    const navigateByLink = (link) => (_) => { }

    return (
        <FooterNavBar>
            {
                footerItems.map((item) =>
                    <FooterNavBarItem key={item.title} onClick={navigateByLink(item.link)}>
                        <Caption color='white' >{item.title}</Caption>
                    </FooterNavBarItem>)
            }
        </FooterNavBar>
    )
}