import { Typography,Link} from "@mui/material";
import ProductListing from "../product-listing/ProductListing.component";
import Slider from "react-slick";
import "./BestSellers.scss";

function BestSellers() {
  const settings = {
    className: "slider",
    //innerWidth:"100%",
    arrows:false,
    swipeToSlide: true,
    dots: false,
    infinite: false,
    draggable: true,
    accessibility: false,
    //centerMode: true,
    //variableWidth:true,
    //autoplay:true,
    speed: 500,
    autoplaySpeed:4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <>
    <div className="best-sellers">
      <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Our</Typography>
      <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Bestsellers</Typography>
      <ul className="categories-listing">
        <li>
          <Link className="active">Face Creams</Link>
        </li>
        <li>
          <Link>Face Creams</Link>
        </li>
        <li>
          <Link>Face Creams</Link>
        </li>
        <li>
          <Link>Face Creams</Link>
        </li>
      </ul>
      <Slider {...settings}>
        <div>
          <ProductListing />
        </div>
        <div>
        <ProductListing />
        </div>
        <div>
        <ProductListing />
        </div>
        <div>
        <ProductListing />
        </div>
      </Slider>
    </div>
    </>
  );
}

export default BestSellers;