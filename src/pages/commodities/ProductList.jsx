import { createContext, useEffect , useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCommodityList } from "../../store/commodityListSlice";
import "./ProductList.scss";
import MyCardContainer from '../../Components/ProductCard/MyCardContainer'
import Insight from "../../Components/Insight/Insight"
const data = createContext();
const ProductList = () => {
  const dispatch = useDispatch();
  const [active,setActive] = useState(false);
  const commodities = useSelector((state) => state.commodityList.commodities);
  useEffect(() => {
    dispatch(getCommodityList());
  }, [dispatch]);
  
if(commodities.length!==0){
    return (
     <data.Provider value = {[active,setActive]}>
      { active ? <Insight/> : commodities.map((market)=>(
        <MyCardContainer key={market._id} market={market._id} productData={market.detail} />
    ))}
     </data.Provider>
    );
}else{
    return <>No data</>
}

};

export default ProductList;
export {data};
