import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Nike" title="Nike" />
          <Button onClickHandler={handleClick} value="Illi London" title="Illi London" />
          <Button onClickHandler={handleClick} value="Uptownie" title="Uptownie" />
          <Button onClickHandler={handleClick} value="Roadster" title="Roadster" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
