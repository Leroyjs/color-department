import {Caption} from 'components';
import {FooterNavBar, FooterNavBarItem, socialIcon, socialLabel} from './footer-nav-bar.style';

export const FooterNavigation = ({social, ...props}) => {
    const navigateByLink = (link) => (_) => {
        window.open(link, '_blank')
    }

    return (
        <FooterNavBar {...props}>
            {
                social.map(({title, link, icon}) => (
                    <FooterNavBarItem key={title} onClick={navigateByLink(link)}>
                        <img className={socialIcon} src={icon} alt={title}/>
                        <Caption wrapperProps={{className: socialLabel}} color={'white'}>
                            {title}
                        </Caption>
                    </FooterNavBarItem>
                ))
            }
        </FooterNavBar>
    )
}
