import { HumburgerWrapper, HumburgerLine } from './humburger.style'

export const Hamburger = ({ isActive }) => (
    <HumburgerWrapper isActive={isActive}>
        <HumburgerLine />
        <HumburgerLine />
        <HumburgerLine />
    </HumburgerWrapper>
)
