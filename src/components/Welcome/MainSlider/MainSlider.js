import Slider from "react-slick";
import Slide from "./Slide";
import bg from '../../../assets/images/doctor.webp'
import corona from '../../../assets/images/corona-banner.svg'
const MainSlider=()=>{
    const settings = {
        focusOnSelect: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "300px",
        slidesToShow:1,
        speed: 500,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                centerPadding: "35px",
                slidesToShow: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                centerPadding: "35px",
                slidesToShow: 1,
              }
            }
          ]
      };
    return(<>
             <Slider {...settings}>
               <Slide banner={bg}/>
               <Slide banner={corona}/>
               <Slide banner={bg} />
               <Slide banner={bg}/>
               <Slide banner={corona}/>
               <Slide banner={bg} />
             </Slider>
         </>);
}
export  default MainSlider;