import { HumburgerWrapper, HumburgerLine } from './humburger.style'

export const Hamburger = ({ isActive }) => (
    <HumburgerWrapper className='humburger' isActive={isActive}>
        <HumburgerLine />
        <HumburgerLine />
        <HumburgerLine />
    </HumburgerWrapper>
)
