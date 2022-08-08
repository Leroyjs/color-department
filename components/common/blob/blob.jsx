import { useTheme } from "@emotion/react";
import { BlobWrapper } from "./blob.style";
import { getCurrentColor } from "styles";

export const Blob = () => {
    const theme = useTheme();
    return (
        <BlobWrapper>
            <svg width="20" height="28" fill="none">
                <path className="blob-svg" d="M20 18.67C20 23.82 15.52 28 10 28S0 23.82 0 18.67C0 12 7 3.42 9.29.79a.93.93 0 0 1 1.42 0C12.99 3.42 20 12.01 20 18.67Z" fill={getCurrentColor("primary", theme)} />
            </svg>
        </BlobWrapper>
    )
}