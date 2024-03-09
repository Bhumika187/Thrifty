import "./Category.css";
import Input from "../../components/Input";
function Category({ handleChange }) {
  return (
    <>
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Tops"
          title="Tops"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Bottoms"
          title="Bottoms"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Sweaters"
          title="Sweaters"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
         
        />
      </div>
    </div>
    
    </>
  );
}

export default Category;
