// import React from 'react'
// import Slider from "react-slick";
// import IconButton from '@mui/material/IconButton'
// import DetailSaleItemBox from '../DetailSaleItemBox/detail.sale.item.box';
// const DetailItemBoxCarousel = (props) => {
//     function SampleNextArrow(props) {
//         const { className, onClick } = props;

//         return (
//             <div
//                 className={className}
//                 onClick={onClick}>
//                 <IconButton className="position-absolute right_arrow">
//                     <i className="fa fa-arrow-right arrow-icon"></i>
//                 </IconButton>
//             </div>
//         );
//     }

//     function SamplePrevArrow(props) {
//         const { className, onClick } = props;
//         return (
//             <div
//                 className={className}
//                 onClick={onClick}>
//                 <IconButton className="position-absolute left_arrow " >
//                     <i className='fa fa-arrow-left arrow-icon'></i>
//                 </IconButton>
//             </div>
//         );
//     }

//     var settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 4,
//         slidesToScroll: 4,
//         initialSlide: 0,
//         nextArrow: <SampleNextArrow />,
//         prevArrow: <SamplePrevArrow />,
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,

//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2,

//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     };
//     return (
//         <div className="h-100 p-1 w-100 "  >

//             <Slider className="h-100 w-95" style={{ margin: "0px auto" }} {...settings}>
//                 <div >
//                     <div className="p-4">
//                         <DetailSaleItemBox stars="4" tag="new" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH9UL6q7icS51VsCTh6X6SsqCj6uopn9mkQ&usqp=CAU"  />
//                     </div>
//                 </div>
//                 <div>
//                     <div className="p-4">
//                         <DetailSaleItemBox tag="sale 20%" image="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80" stars="5" oldprice="6,450.12"/>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="p-4">
//                         <DetailSaleItemBox image="https://images.unsplash.com/photo-1547949003-9792a18a2601?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFnc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
//                     </div>
//                 </div>
//                 <div>
//                     <div className="p-4">
//                         <DetailSaleItemBox />
//                     </div>
//                 </div>
//                 <div>
//                     <div className="p-4">
//                         <DetailSaleItemBox />
//                     </div>
//                 </div>
//                 <div>
//                     <div className="p-4">
//                         <DetailSaleItemBox />
//                     </div>
//                 </div>
//                 <div>
//                     <div className="p-4">
//                         <DetailSaleItemBox />
//                     </div>
//                 </div>
//                 <div>
//                     <div className="p-4">
//                         <DetailSaleItemBox />
//                     </div>
//                 </div>
//             </Slider>
//         </div >
//     )
// }

// export default DetailItemBoxCarousel