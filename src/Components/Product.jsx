import { useDispatch, useSelector } from "react-redux";
import { BagAction } from "../Store/BagStoreSlice";

const Product = () => {
  const BagItems = useSelector((store) => store.Bag);
  const ProductItems = useSelector((store) => store.Items);
  const dispatch = useDispatch();

  const handleAddToBag = (id) => {
    dispatch(BagAction.additem(id));
  };

  const handleRemoveFromBag = (id) => {
    dispatch(BagAction.removeitem(id));
  };

  return (
    <>
      <div className="items-container">
        {ProductItems.map((item) => (
          <div className="item-container">
            <img className="item-image" src={item.image} alt="item image" />
            <div className="rating">
              {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
              <span className="current-price">Rs {item.current_price}</span>
              <span className="original-price">Rs {item.original_price}</span>
              <span className="discount">
                ({item.discount_percentage}% OFF)
              </span>
            </div>
            {BagItems.includes(item.id) ? (
              <button
                className="btn-add-bag btn-add-bag2"
                onClick={() => handleRemoveFromBag(item.id)}
              >
                {" "}
                Remove From Bag{" "}
              </button>
            ) : (
              <button
                className="btn-add-bag"
                onClick={() => handleAddToBag(item.id)}
              >
                {" "}
                Add to Bag{" "}
              </button>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
