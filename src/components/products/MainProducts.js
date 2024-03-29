import React, { useEffect, useState } from "react";
import HeartIcons from "../../assets/images/icon/heart.png";
import CompareIcons from "../../assets/images/icon/compare.png";
import SearchIcons from "../../assets/images/icon/search.png";
import { Link } from "react-router-dom";
import { productlists } from "../../api/ApiCall";
import { addToCart } from "../../redux/slice/CartSlice";
import { fetchProducts } from "../../redux/slice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUS } from "../../context/Status";
import Detail from "../../utils/skeleton/Detail";

const MainProducts = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  if (status === STATUS.LOADING) {
    return <Detail />;
  }
  if (status !== STATUS.LOADING && status === STATUS.ERROR) {
    return <h2>{status}</h2>;
  }

  return (
    <>
      <div className="row">
        <div className="gallery">
          {products.products?.map((item) => {
            
            return (
              <>
                <div className="content">
                  <Link to="/shop-details" state={{ data: item }}>
                    <img className="imgs" src={item.thumbnail} />
                  </Link>
                  <h3 className="h3s">{item.title}</h3>
                  <p className="ps">{}</p>
                  <h6 className="h6s">${item.price}</h6>
                  <ul className="uls">
                    <li className="lis">
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li className="lis">
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li className="lis">
                      <i className="fa fa-star" aria-hidden="true" />
                    </li>
                    <li className="lis">
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </li>
                    <li className="lis">
                      <i className="fa fa-star-o" aria-hidden="true" />
                    </li>
                    {/* <Link to="#">
                      <img src={HeartIcons} alt="" />
                    </Link> */}
                  </ul>

                  <button
                    className="buttons"
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                  >
                    Add To Cart
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MainProducts;
{
  /* <div className="content">
<img className="imgs" src="earphone.png" />
<h3 className="h3s">Earphone</h3>
<p className="ps">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<h6 className="h6s">$40.00</h6>
<ul className="uls">
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
</ul>
<button className=" buttons">Buy Now</button>
</div>
<div className="content">
<img className="imgs" src="watch.png" />
<h3 className="h3s">Watch</h3>
<p className="ps">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
<h6 className="h6s">$70.84</h6>
<ul className="uls">
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
  <li>
    <i className="fa fa-star" aria-hidden="true" />
  </li>
</ul>
<button className="buttons">Buy Now</button>
</div> */
}
