import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import WishlistForm from '../components/WishlistForm';
import {QUERY_ME} from '../utils/queries'
import Auth from '../utils/auth';
import Carousel from 'react-bootstrap/Carousel'
import image1 from '../images/carousel-gift-1.jpg'
import image2 from '../images/carousel-gift-2.jpg'
import './home.css'

const Home = () => {
  
  const { loading, data, refetch } = useQuery(QUERY_ME);

  const [wishlistFormData, setWishlistFormData] = useState({
    listName: "",
    priceLimit: "",
  });

  const dataMe = data?.me || {};
  const myWishlists = dataMe?.wishlists || [];


  const[wishlistsData, setWishlistsData] = useState(myWishlists);


  console.log(myWishlists);


  if(!Auth.loggedIn()){
    return (
    <main>
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image1}
            alt="First slide"
          />
          <Carousel.Caption className="first-caption">
            <h5>Easily organise your gifts</h5>
            <p>Using our many tools, you can create gift lists and manage them from within your personal dashboard.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />
          <Carousel.Caption  className="second-caption">
            <h5>Login to take the reins</h5>
            <p>Pun intended</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </main>
    )
  }

  return (
    <main>
      <div className="row">
        <div className="col-xs-12 col-md-6">
          <WishlistForm onUpdated={() => refetch()} wishlistFormData={wishlistFormData} setWishlistFormData={setWishlistFormData} wishlistsData={wishlistsData} setWishlistsData={setWishlistsData} />
        </div>
        <div className="col-xs-12 col-md-6">
          <div className="wishlist-container">
            <h3>Your wishlists</h3>
            <div className="wishlists">
              {loading ? (
                <div>Loading...</div>
              ) : (
                myWishlists.map((myWishlist) => {
                  return (
                    <Link to={`/wishlist/${myWishlist._id}`}>
                      <div key = {myWishlist._id}>
                      
                        <div className="wl-card">
                          <div className="list-name">
                            {myWishlist.listName}
                          </div>
                          <div className="price-limit">
                            <span>Price Limit: £</span>{myWishlist.priceLimit}
                          </div>
                  
                          <button className="delete-list" >
                            View Wishlist
                          </button>
                        </div>
                      </div>
                    </Link>
                    
                )
              })
            )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
