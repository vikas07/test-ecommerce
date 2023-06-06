import { useState } from "react";
import TopBanner from '../../assets/images/top-slider-image.jpg';
import { Typography,Card,CardActions,CardContent,Button, Grid, Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import "./ProductListing.scss";
import productimage from '../../assets/images/best-seller.jpg';
import {Star} from '@mui/icons-material';

function AllProductListing() {
  // Dummy product data
  const products = [
    { id: 1, name: 'Vitamin C + E Moisturizer', subTitle: 'MAKE SKIN GLOW', type: 'Moisturizer', img: productimage, rating: '4.8 / 5', count: '278 reviews', actualPrice: 'Rs: 595.00', discountPrice: 'Rs: 565.00' },

    { id: 2, name: 'Vitamin C + E SPF 50 Sunscreen', subTitle: 'Waterlight Texture', type: 'Sunscreen', img: productimage, rating: '3.5 / 5', count: '281 reviews', actualPrice: 'Rs: 495.00', discountPrice: 'Rs: 470.00' },

    { id: 3, name: '10% Vitamin C+E & 5% Niacinamide Face Serum', subTitle: 'Even Tones Skin', type: 'Serum', img: productimage, rating: '5 / 5', count: '126 reviews', actualPrice: 'Rs: 695.00', discountPrice: 'Rs: 660.00' },

    { id: 4, name: 'Cica & 2% Salicylic Face Wash', subTitle: 'Unclogs Pores', type: 'Face Wash', img: productimage, rating: '4.2 / 5', count: '170 reviews', actualPrice: 'Rs: 295.00', discountPrice: '' },
    
    { id: 5, name: 'Lip Plumping Mask with Vitamin C + E', subTitle: '3 Shades Available', type: 'Lip Care', img: productimage, rating: '4.5 / 5', count: '316 reviews', actualPrice: 'Rs: 295.00', discountPrice: '' },

    { id: 6, name: 'Cica & Salicylic French Green Clay Face Mask', subTitle: 'Anti-Acne Treatment', type: 'Face Mask', img: productimage, rating: '4.5 / 5', count: '571 reviews', actualPrice: 'Rs: 550.00', discountPrice: '' },
    
    { id: 7, name: 'Watermelon & Glycolic Toner', subTitle: 'Refines Pores', type: 'Face Toner', img: productimage, rating: '5 / 5', count: '61 reviews', actualPrice: 'Rs: 395.00', discountPrice: '' },
  ];

  const [filterType, setFilterType] = useState('');

  const handleFilterChange = (event) => {
    setFilterType(event.target.value);
  };

  // Filter the products based on the selected type
  const filteredProducts = filterType
    ? products.filter((product) => product.type === filterType)
    : products;

    // Extracting unique types from the products array
    const types = [...new Set(products.map((product) => product.type))];

  return (
    <>  
        <div className="top-banner">
            <Box className="logo" component="img" src={TopBanner} alt="logo" />
        </div>
        <h2>Product List</h2>
        <div className="listing-container">
            <div className="filter-container">
                <div className="filter-header">Product Category Filter</div>
            <FormControl className="filter-drodown">
                <InputLabel id="dropdown-label">Select an option</InputLabel>
                <Select labelId="dropdown-label"id="dropdown"  value={filterType} onChange={handleFilterChange}>
                    <MenuItem value="">All</MenuItem>
                    {types.map((type, index) => (
                        <MenuItem value={type} key={index}>{type}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            </div>
            <Grid container className="card-container" spacing={2}>
                {filteredProducts.map((product, index) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                    <div className="listing-card">
                        <Card className="product-listing">
                            <div className="product-image">
                                <img src={product.img} />
                            </div>
                            <CardContent sx={{py:1}}>
                                <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",mb:1}}>
                                    <Star sx={{ color: '#FFCE51',fontSize:16 }} />  
                                    <span className="rating">{product.rating}</span>
                                    <span className="count">({product.count})</span>
                                </Typography>
                                <Typography className="product-title" gutterBottom variant="h2" component="div"> {product.name} </Typography>
                                <Typography className="product-desc" marginBottom={1}>{product.subTitle}</Typography>
                                <Grid container>
                                    <Grid item xs={product.discountPrice ? 6 : 12} sx={{textAlign:"center"}}>
                                        <Typography className="actual-amt">{product.actualPrice}</Typography>
                                    </Grid>

                                    {product.discountPrice && 
                                        <Grid item xs={6}>
                                            <Typography className="discounted-amt" sx={{textAlign:"center"}}>{product.discountPrice}</Typography>
                                        </Grid>
                                    }
                                </Grid>
                            </CardContent>
                            <CardActions sx={{p:0}}>
                                <Button variant="contained" sx={{borderRadius:0,width:'100%'}}>Add to Cart</Button>
                            </CardActions>
                        </Card>
                    </div>
                    </Grid>
                ))}
            </Grid>
        </div>
       
    </>
  );
}

export default AllProductListing;