import ''
export default function VideoBackground() {
    return <div className="video-background">
        {/* <!-- The video container --> */}
        <div className="video-background__inner">
            <video className="video-background__video" src="...">...</video>
        </div>
        {/* <!-- The content --> */}
        <div className="video-background__content">...</div>
    </div>
}