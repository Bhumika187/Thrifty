import Category from "./Category/Category";
import Price from "./Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import PriceRangeSlider from "./Price/Price";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
        <img src="https://i.ibb.co/cyBct5R/Your-paragraph-text-3-removebg-preview.png" alt="Your-paragraph-text-3-removebg-preview" height="150rem" width="200rem"/>      
        </div>
        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;

