import { useDispatch, useSelector } from "react-redux";
import { BagAction } from "../Store/BagStoreSlice";
import BagSummary from "./BagSummary";

const Bags = () => {
  const dispatch = useDispatch();
  const BagList = useSelector((store) => store.Bag);
  const ProductList = useSelector((store) => store.Items);
  const FinalList = [];

  ProductList.forEach((element) => {
    if (BagList.includes(element.id)) {
      FinalList.push(element);
    }
  });

  const handleRemove = (id) => {
    dispatch(BagAction.removeitem(id));
  };

  return (
    <>
      <div className="bag-page">
        <div className="bag-items-container">
          {FinalList.map((item) => (
            <div class="bag-item-container">
              <div class="item-left-part">
                <img class="bag-item-img" src={item.image} />
              </div>
              <div class="item-right-part">
                <div class="company">{item.company}</div>
                <div class="item-name">{item.item_name}</div>
                <div class="price-container">
                  <span class="current-price">Rs {item.current_price}</span>
                  <span class="original-price">Rs {item.original_price}</span>
                  <span class="discount-percentage">
                    (${item.discount_percentage}% OFF)
                  </span>
                </div>
                <div class="return-period">
                  <span class="return-period-days">
                    {item.return_period} days
                  </span>{" "}
                  return available
                </div>
                <div class="delivery-details">
                  Delivery by
                  <span class="delivery-details-days">
                    {item.delivery_date}
                  </span>
                </div>
              </div>

              <div
                class="remove-from-cart"
                onClick={() => handleRemove(item.id)}
              >
                X
              </div>
            </div>
          ))}
        </div>

        <BagSummary summary={FinalList}></BagSummary>
      </div>
    </>
  );
};

export default Bags;
