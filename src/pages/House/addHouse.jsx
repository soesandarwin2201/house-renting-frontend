import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHouse } from "../../redux/house/houseSlice"; // Import the action to add a house
import "./house.css";

const AddHouse = () => {
  const [house, setHouse] = useState({
    name: "",
    image: "",
    price: "",
    location: "",
    description: "",
    bedroom_number: "",
  });

  const dispatch = useDispatch();

  const inputValue = (e) => {
    setHouse({
      ...house,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addHouse(house)); // Dispatch the addHouse action with the house data
    e.target.reset();
  };

  return (
    <div className="form-container">
      <h3 className="add-book-title">ADD NEW HOUSE</h3>
      <form onSubmit={handleSubmit} className="add-form">
        <input
          type="text"
          name="name"
          placeholder="house name"
          onChange={inputValue}
          required
          className="add-input"
        />
        <input
          type="string"
          name="image"
          placeholder="image"
          onChange={inputValue}
          required
          className="add-input"
        />
        <input
          type="decimal"
          name="price"
          placeholder="price"
          onChange={inputValue}
          required
          className="add-input"
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          onChange={inputValue}
          required
          className="add-input"
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={inputValue}
          required
          className="add-input"
        />
        <input
          type="integer"
          name="bedroom_number"
          placeholder="bedroom number"
          onChange={inputValue}
          required
          className="add-input"
        />
        <button type="submit" className="form-button">
          Add House
        </button>
      </form>
    </div>
  );
};

export default AddHouse;
