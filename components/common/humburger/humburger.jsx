import { HumburgerWrapper, HumburgerLine } from './humburger.style'

export const Hamburger = ({ ...props }) => (
    <HumburgerWrapper>
        <HumburgerLine />
        <HumburgerLine />
        <HumburgerLine />
    </HumburgerWrapper>
)
