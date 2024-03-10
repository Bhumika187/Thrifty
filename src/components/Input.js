const Input = ({ handleChange, value, title, name, color }) => {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor:
         color }}></span>
        
      {title}
    </label>

  );
};

export default Input;





// const Input = ({ handleChange, min, max, title, name, color }) => {
//   function handleInputChange() {
//     handleChange({ min, max });
//   }
  
//   return (
//     <label className="sidebar-label-container">
//       <input
//         onChange={handleInputChange}
//         type="radio"
//         value={`${min}-${max}`}
//         name={name}
//       />
//       <span className="checkmark" style={{ backgroundColor: color }}></span>
//       {title}
//     </label>
//   );
// };

// export default Input;











