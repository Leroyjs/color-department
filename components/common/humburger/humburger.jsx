import { HumburgerWrapper, HumburgerLine } from './humburger.style'

export const Hamburger = ({ ...props }) => (
    <HumburgerWrapper {...props}>
        <HumburgerLine />
        <HumburgerLine />
        <HumburgerLine />
    </HumburgerWrapper>
)
