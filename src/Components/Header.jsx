import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
const Header = ({ setbag }) => {
  const BagItems = useSelector((store) => store.Bag);

  return (
    <>
      <header>
        <div className="logo_container" onClick={() => setbag(true)}>
          <a href="#">
            <img
              className="myntra_home"
              src="images/myntra_logo.webp"
              alt="Myntra Home"
            />
          </a>
        </div>
        <nav className="nav_bar">
          <a href="#">Men</a>
          <a href="#">Women</a>
          <a href="#">Kids</a>
          <a href="#">Home & Living</a>
          <a href="#">Beauty</a>
          <a href="#">
            Studio <sup>New</sup>
          </a>
        </nav>
        <div className="search_bar">
          <span className="material-symbols-outlined search_icon">
            <CiSearch />
          </span>

          <input
            className="search_input"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className="action_bar">
          <div className="action_container">
            <IoPersonSharp />
            <span className="action_name">Profile</span>
          </div>

          <div className="action_container">
            <FaShoppingCart />
            <span className="action_name">Wishlist</span>
          </div>

          <a className="action_container" onClick={() => setbag(false)}>
            <FaShoppingBag />
            <span className="action_name">Bag</span>
            <span className="bag-item-count">{BagItems.length}</span>
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
