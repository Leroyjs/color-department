import { BlobWrapper } from "./blob.style"
export const Blob = ({ fill, ...props }) => {
    return (
        <BlobWrapper>
            <svg width="20" height="28" viewBox="0 0 20 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
                <path d="M20 18.6667C20 23.8213 15.5228 28 10 28C4.47715 28 0 23.8213 0 18.6667C0 12.0082 7.0066 3.41774 9.28999 0.794979C9.67039 0.358047 10.3296 0.358046 10.71 0.794978C12.9934 3.41774 20 12.0082 20 18.6667Z" fill={fill} />
            </svg>
        </BlobWrapper>
    )
}