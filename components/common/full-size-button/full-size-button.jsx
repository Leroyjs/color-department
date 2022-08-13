import { FullSizeButtonWrapper } from './full-size-button.style';

export const FullSizeButton = (props) => {
    return (
        <FullSizeButtonWrapper {...props}>
            <svg width="40" height="40" fill="none">
                <circle cx="20" cy="20" r="19" stroke="#fff" strokeWidth="2" />
                <path d="M17.33 28H14a2 2 0 0 1-2-2v-3.33M22.67 28H26a2 2 0 0 0 2-2v-3.33M17.33 12H14a2 2 0 0 0-2 2v3.33M22.67 12H26a2 2 0 0 1 2 2v3.33" stroke="#fff" strokeWidth="2" />
            </svg>
        </FullSizeButtonWrapper>

    )
}