import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCommodityList } from "../../store/commodityListSlice";
import "./ProductList.scss";
import MyCardContainer from '../ProductCard/MyCardContainer'
const ProductList = () => {
  const dispatch = useDispatch();
  const commodities = useSelector((state) => state.commodityList.commodities);

  useEffect(() => {
    dispatch(getCommodityList());
  }, [dispatch]);

if(commodities.length!==0){
    return commodities.map((market)=>(
        <MyCardContainer key={market._id} market={market._id} productData={market.detail}/>
    ))
}else{
    return <>No data</>
}

};

export default ProductList;
