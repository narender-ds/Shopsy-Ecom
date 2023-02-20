import React, { useEffect, useState } from "react";
import HeartIcons from "../../assets/images/icon/heart.png";
import CompareIcons from "../../assets/images/icon/compare.png";
import SearchIcons from "../../assets/images/icon/search.png";
import { Link } from "react-router-dom";
import { productlists } from "../../api/ApiCall";
import { addToCart } from "../../redux/slice/CartSlice";
import { fetchProducts } from "../../redux/slice/ProductDetailSlice";
import { useDispatch, useSelector } from "react-redux";

const MainProducts = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  // console.log("productsproducts", products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const [getProduct, setGetProduct] = useState([]);
  useEffect(() => {
    productlists()
      .then((res) => {
        setGetProduct(res);
      })
      .catch((err) => {});
    return () => {};
  }, []);

  return (
    <>
      {/* <div className="row">
        {getProduct?.products?.map((products) => {
          console.log("12232333333", products);
          return (
            <>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="product__item">
                  <div className="product__item__pic set-bg" key={products.id}>
                    <Link to="/shop-details" state={{ data: products }}>
                      {" "}
                      <img
                        id="productImage"
                        style={{ width: "80%" }}
                        src={products.thumbnail}
                      />
                    </Link>
                    <ul className="product__hover">
                      <li>
                        <Link to="/shopping-cart">
                          <img src={HeartIcons} alt="" />
                        </Link>
                      </li>
                      <li>
                        <Link to="/shopping-cart">
                          <img src={CompareIcons} alt="" /> <span>Compare</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/shopping-cart">
                          <img src={SearchIcons} alt="" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="product__item__text">
                    <button>
                      <Link
                        className="add-cart"
                        onClick={() => {
                          dispatch(addToCart(products));
                        }}
                      >
                        + Add To Cart
                      </Link>
                    </button>

                    <Link
                      to="/shop-details"
                      style={{ marginLeft: "55%" }}
                      className="add-cart"
                      state={{ data: products }}
                    >
                      View Details
                    </Link>

                    <h6 style={{ fontWeight: "bold" }}>{products.title}</h6>
                    <h5>${products.price}</h5>
                    <div className="rating">
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                      <i className="fa fa-star-o" />
                    </div>
                    {products.category == "cloths" ? (
                      <div className="product__color__select">
                        <label htmlFor="pc-4">
                          <input type="radio" id="pc-4" />
                        </label>
                        <label className="active black" htmlFor="pc-5">
                          <input type="radio" id="pc-5" />
                        </label>
                        <label className="grey" htmlFor="pc-6">
                          <input type="radio" id="pc-6" />
                        </label>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div> */}
      <div className="row">
        <div className="gallery">
          {getProduct?.products?.map((products) => {
            return (
              <>
                <div className="content">
                  <Link to="/shop-details" state={{ data: products }}>
                    <img className="imgs" src={products.thumbnail} />
                  </Link>
                  <h3 className="h3s">{products.title}</h3>
                  <p className="ps">{}</p>
                  <h6 className="h6s">${products.price}</h6>
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
                    <Link to="#" >
                      <img src={HeartIcons} alt="" />
                    </Link>
                  </ul>

                  <button
                    className="buttons"
                    onClick={() => {
                      dispatch(addToCart(products));
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
