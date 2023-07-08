import video from "./assets/video/video_HD.mp4"

const Hero = () => {
    return (
        <div className="h-[calc(100vh-56px)] w-full">
            <video autoPlay loop muted type="video/mp4" src={video} className="object-cover w-full h-full">
            </video>
        </div>
    )
}
export default Hero