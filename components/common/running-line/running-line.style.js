import { keyframes } from "@emotion/css"
import styled from "@emotion/styled"
import { colors, getCurrentColor, sizes } from "styles"

const scrollAnimation = keyframes`
    from { transform: translateX(0);}
    to { transform: translateX(-50%); }
`

export const RunningLineWrapper = styled.div`
    position:relative;
    overflow: hidden;
    display: flex;
    ${({ link }) => link ? "cursor: pointer" : ""};
    &>*:nth-of-type(1n){
        animation: ${scrollAnimation} 20s linear infinite;
    }
`

const ScrollContentDinamicStyle = ({ outline }) => {
    if (outline) {
        return `
            & h1 span {
                color: ${colors.black};
                text-shadow: 
                    -1.5px -1.5px 0 ${colors.white}, 
                    1.5px -1.5px 0 ${colors.white}, 
                    -1.5px 1.5px 0 ${colors.white}, 
                    1.5px 1.5px 0 ${colors.white};
            }
        `
    }
}

export const RunningLineScrollContent = styled.div`
    display: flex;
    align-items: center;
    ${ScrollContentDinamicStyle};
`

const SeparatorDinamicStyle = ({ outline }) => {
    if (outline) {
        getCurrentColor
        return `
            & span { color: ${colors.white};}
            border-color: ${colors.white};
        `
    }
}

export const RunningLineSeparator = styled.div`
    border: 1px solid black;
    border-radius: 50%;
    border-color:${({ theme }) => getCurrentColor("primary", theme)};
    height: ${sizes['desktopLG'].half};
    min-width: 240px;
    margin: 0 16px;
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${SeparatorDinamicStyle};
`