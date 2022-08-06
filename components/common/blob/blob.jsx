import { useTheme } from "@emotion/react";
import { BlobWrapper } from "./blob.style";
import { getCurrentColor } from "styles";

export const Blob = ({ fill }) => {
    const theme = useTheme();
    return (
        <BlobWrapper>
            <svg width="20" height="28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path className="blob-svg" d="M20 18.667C20 23.82 15.523 28 10 28S0 23.821 0 18.667C0 12.008 7.007 3.417 9.29.795a.933.933 0 0 1 1.42 0C12.993 3.418 20 12.008 20 18.667Z" fill={getCurrentColor("primary", theme)} />
            </svg>
        </BlobWrapper>
    )
}