import { useSelector } from "react-redux";

const BagSummary = ({ summary }) => {
  const BagList = useSelector((store) => store.Bag);

  let Total_MRP = 0;
  let MRP_Discount = 0;

  summary.forEach((element) => {
    Total_MRP += element.original_price;
    MRP_Discount += Math.round(
      (element.original_price * element.discount_percentage) / 100
    );
  });

  let Final_Price = Total_MRP - MRP_Discount + 99;

  return (
    <>
      <div className="bag-summary">
        <div class="bag-details-container">
          <div class="price-header">
            PRICE DETAILS ({BagList.length} Items){" "}
          </div>
          <div class="price-item">
            <span class="price-item-tag">Total MRP</span>
            <span class="price-item-value">{Total_MRP}</span>
          </div>
          <div class="price-item">
            <span class="price-item-tag">Discount on MRP</span>
            <span class="price-item-value priceDetail-base-discount">
              -₹{MRP_Discount}
            </span>
          </div>
          <div class="price-item">
            <span class="price-item-tag">Convenience Fee</span>
            <span class="price-item-value">₹99</span>
          </div>
          <hr />
          <div class="price-footer">
            <span class="price-item-tag">Total Amount</span>
            <span class="price-item-value">₹ {Final_Price}</span>
          </div>
        </div>
        <button class="btn-place-order">
          <div class="css-xjhrni">PLACE ORDER</div>
        </button>
      </div>
    </>
  );
};

export default BagSummary;
