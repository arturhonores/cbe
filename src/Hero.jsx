import video from "./assets/video/video_HD.mp4"

const Hero = () => {
    return (
        <div className="h-screen w-full">
            <video autoPlay loop muted type="video/mp4" src={video} className="object-cover w-full h-full">
            </video>
        </div>
    )
}
export default Hero