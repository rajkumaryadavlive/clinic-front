import Slider from "react-slick";
import FeatureSlide from "./FeatureSlide";

const FeatureSlider=()=>{
    let settings = {
        infinite: false,
        speed: 500,
        slidesToShow:3,
        slidesToScroll:3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow:1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  
    return(<>
         <Slider {...settings}>
           <FeatureSlide />
           <FeatureSlide />
           <FeatureSlide />

         </Slider>
       </>);
}
export default FeatureSlider;