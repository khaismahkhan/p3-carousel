import "./carousel.css"
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/free-mode"
// import "swiper/css/pagination"

// import Swiper core and required modules
import SwiperCore, {
  FreeMode, Pagination
} from 'swiper';
import { Container } from "@mui/material";
import InstagramFeed from "../instagram.feed/instagram.feed";

// install Swiper modules
// SwiperCore.use([FreeMode,Pagination]);

export const CarouselSlider = (props) => {

  return (
    <div>
      <Container style={{ display: 'flex', marginTop:'50px' }}>
        <button>
          <span class="material-icons">
            chevron_left
          </span>
        </button>

        <Swiper slidesPerView={3} spaceBetween={30} freeMode={true} pagination={{
          "clickable": true
        }} className="swiper">

          <SwiperSlide className="swiper-slide">
            <InstagramFeed backgroundimage="https://img.freepik.com/free-photo/pretty-young-stylish-sexy-woman-pink-luxury-dress-summer-fashion-trend-chic-style-sunglasses-blue-studio-background-shopping-holding-paper-bags-talking-mobile-phone-shopaholic_285396-2957.jpg?size=626&ext=jpg" brandtag="https://upload.wikimedia.org/wikipedia/commons/0/08/Magnolia_dairy_logo.png" />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <InstagramFeed message="50% Sale on alkaram branded suits" backgroundcolor="#02cecc" />


          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <InstagramFeed backgroundimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4amixx-a1OUKEFEnIwx8zsJZjbrrU_WO7cwMdpk5Ps9XiUlExXG-OvE0ijv4rtaIc6LQ&usqp=CAU" logoalignment="left" ZLwidth="100px" ZLheight="30px" brandtag="https://nation.com.pk/digital_images/medium/2019-06-04/khaadi-hosts-three-day-long-eid-celebrations-at-flagship-store-1559646846-3890.jpg " />

          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <InstagramFeed backgroundimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiofWkXC7TUsayo84oEeWPAxP0KdoPn-flei1fErImKsUZHjhLtnRe-JOUqjU9_jugFfY&usqp=CAU" brandtag="https://e7.pngegg.com/pngimages/306/228/png-clipart-bahria-town-karachi-alkaram-studio-alkaram-textile-mills-retail-brand-chappal-text-retail.png" />

          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <InstagramFeed message="when i say it order online,it only mean order with zapp it" backgroundcolor="purple" />

          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <InstagramFeed backgroundimage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCzQj8_uvohTufH2MOqDbpB5If6Gu3q7SD3Uopc1vdd-71xLhfSV8ODWU5hp2KQ2tiNek&usqp=CAU" brandtag="https://upload.wikimedia.org/wikipedia/commons/b/b4/Zellbury_logo.png" logoalignment="right" ZLwidth="100px" ZLheight="35px" />

          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <InstagramFeed message="stay home order online" backgroundcolor="pink" brandtag="https://zapp.world/assets/images/zapp-logo.svg" />

          </SwiperSlide>

        </Swiper>

        <button>
          <span class="material-icons">
            chevron_right
          </span>
        </button>
      </Container>

    </div >

  )
}
export default CarouselSlider

