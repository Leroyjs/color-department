import { HumburgerWrapper, HumburgerLine } from './humburger.style'

export const Hamburger = ({ ...props }) => (
    <HumburgerWrapper onClick={()=>{console.log('Дрочит меня')}}>
        <HumburgerLine />
        <HumburgerLine />
        <HumburgerLine />
    </HumburgerWrapper>
)
