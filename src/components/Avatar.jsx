/* eslint-disable */

function Avatar({ src, alt, size }) {
    return (
        <div className={`h-[${size}px] w-[${size}px] rounded-full overflow-hidden bg-red-200`} style={{ maxWidth: `${size}px`, maxHeight: `${size}px` }}>
            <img className="h-full w-full object-contain border" src={src} alt={alt} loading="lazy" />
        </div>
    )
}

export default Avatar
