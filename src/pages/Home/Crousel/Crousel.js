import Slider from "react-slick";
import "./Crousel.css"
import TextArray from "./CrouselText";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Crousel(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false,
    };
    return(
        <div className="crouselMainDiv">
            <Slider {...settings}>
                <div className="crousel-1 singleSlideDiv">
                    <div className="crouselTextDiv">
                        <h1>{TextArray[0].heading}</h1>
                        <p>{TextArray[0].text}</p>
                    </div>
                </div>
                <div  className="crousel-2 singleSlideDiv">
                <div className="crouselTextDiv">
                        <h1>{TextArray[1].heading}</h1>
                        <p>{TextArray[1].text}</p>
                    </div>
                </div>
                <div  className="crousel-3 singleSlideDiv">
                <div className="crouselTextDiv">
                        <h1>{TextArray[2].heading}</h1>
                        <p>{TextArray[2].text}</p>
                    </div>
                </div>
                <div  className="crousel-4 singleSlideDiv">
                <div className="crouselTextDiv">
                        <h1>{TextArray[3].heading}</h1>
                        <p>{TextArray[3].text}</p>
                    </div>
                </div>
                <div  className="crousel-5 singleSlideDiv">
                <div className="crouselTextDiv">
                        <h1>{TextArray[4].heading}</h1>
                        <p>{TextArray[4].text}</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}
export default Crousel;