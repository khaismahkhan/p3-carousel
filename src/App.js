import logo from './logo.svg';
import './App.css';
import SaleItemBox from "./components/common/saleitembox/sale.item.box"
import SliderItem from './components/common/Slider/sliderItem';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Footer from './components/common/footer/footer';
import DetailItemBoxCarousel from './components/common/detailItemBoxCarousel';
import Carousel from './components/common/carousel/carouselSlider';
import InstagramFeed from './components/common/instagram.feed/instagram.feed';
import InstagramFeedGrid from './components/common/instagram.feed.grid/instagram.feed.grid';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <InstagramFeed/> */}
        {/* <InstagramFeedGrid/> */}
        <Routes>
          <Route path="/" exact element={<Carousel/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
