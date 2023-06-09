import React from "react";
import { Typography, Grid, Box } from "@mui/material";
import ImageCarousel from "../../components/image-carousel/ImageCarousel.component";
import CustomerCollections from "../../components/customer-collections/CustomerCollections.component";
import NewArrivals from "../../components/new-arrivals/NewArrivals.component";
import BestSellers from "../../components/best-sellers/BestSellers.component";
import './home.scss';
import { Link } from "react-router-dom";
import bestsellerimage from '../../assets/images/banner-1.jpg';
import sliderimage from '../../assets/images/top-slider-image.jpg';
import featureimage from '../../assets/images/feature-image.png';
import appimage from '../../assets/images/app-image.jpg';
import TopCategories from "../../components/top-categories/TopCategories.component";
import WatchIt from "../../components/watch-it/WatchIt.component";
import ShopBy from "../../components/shop-by/ShopBy";
import ingredientimage from '../../assets/images/ingredients.jpg';
import CustomerReviews from "../../components/customer-reviews/CustomerReviews.component";


const HomeComponent = () => {
    return(
      <>
        <ImageCarousel />
        <CustomerCollections/>
        <NewArrivals />
        <BestSellers />

   
        <section className="spotlight">
          <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>In the</Typography>
          <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Spotlight</Typography>
          <Grid container className="spotlight-inner">
            <Grid item xs={12} md={6} className="sl-left">
              <img src={bestsellerimage} alt="" />
            </Grid>
            <Grid item xs={12} md={6} className="sl-right">
              <img src={bestsellerimage} alt="" />
            </Grid>
            <Grid item xs={12} className="sl-bottom">
            <img src={sliderimage} alt=""/>
            </Grid>
          </Grid>
        </section>

        <TopCategories/>

        <section>
          <WatchIt />
        </section>

        <section className="app-banner">
          <Link>
            <img src={appimage} alt=""/>
          </Link>
        </section>

        <section>
          <ShopBy />
        </section>

        <section className="when-shared">
          <Grid container>
            <Grid item xs={12}>
              <div className="title-outer">
                <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Love is greater</Typography>
                <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>When shared</Typography>
              </div>
              <div className="shared-image">
              <img src={sliderimage} alt=""/>
              </div>
              
            </Grid>
          </Grid>
        </section>

        <section className="container featured-content">
          <div className="title-outer">
            <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Clean Beauty</Typography>
            <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>With uncompormaised efficancy</Typography>
          </div>
          <Grid container>
            <Grid item xs={12} sx={{px:5}}>
              <Typography variant="body1" className="featured-text" sx={{mb:2}} textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ultrices felis nec luctus. Sed vel orci scelerisque, mattis augue eget, <em><strong>pellentesque sem</strong></em>. Proin fermentum est non ante laoreet, in mattis sem posuere. Sed viverra feugiat eros vel scelerisque. Quisque id nulla quis nisl volutpat vestibulum a sed dolor.
              </Typography>
              <Typography variant="body1" className="featured-text" sx={{mb:2}} textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ultrices felis nec luctus. Sed vel orci scelerisque, mattis augue eget, pellentesque sem. Proin fermentum est non ante laoreet, in mattis sem posuere. Sed viverra feugiat eros vel scelerisque. <em><strong>Quisque id</strong></em> nulla quis.
              </Typography>
            </Grid>
          </Grid>
        </section>

        <section className="featured-image">
                <Box className="image-details">
                  <img src={featureimage} alt=""/>
                </Box>
                <Box className="image-details">
                <img src={featureimage} alt=""/>
                </Box>
                <Box className="image-details">
                <img src={featureimage} alt=""/>
                </Box>
                <Box className="image-details">
                <img src={featureimage} alt=""/>
                </Box>
        </section>

        <section className="award-winning">
          <div className="title-outer">
            <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Award winning</Typography>
            <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Skincare</Typography>
          </div>
          <Typography variant="body1" className="gencont" textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ultrices felis nec luctus. Sed vel orci scelerisque</Typography>
          <Grid container>
            <Grid item xs={12} md={4} p={2}>
              <img src={ingredientimage} alt=""/>
            </Grid>
            <Grid item xs={12} md={4} p={2}>
              <img src={ingredientimage} alt=""/>
            </Grid>
            <Grid item xs={12} md={4} p={2}>
              <img src={ingredientimage} alt=""/>
            </Grid>
          </Grid>
        </section>

        <section className="">
          <CustomerReviews />
        </section>
      </>
    )
}

export default HomeComponent;
