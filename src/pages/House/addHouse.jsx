import { useState } from "react";
// import { useDispatch } from 'react-redux';
// import { addBook } from '../Redux/books/books';

const AddHouse = () => {
  const [house, setHouse] = useState({});

  // const dispatch = useDispatch();

  const inputValue = (e) => {
    setHouse({
      ...house,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="form-container">
      <h3 className="add-book-title">ADD NEW HOUSE</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // dispatch(addHouse(house));
          e.target.reset();
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="house name"
          onChange={(e) => inputValue(e)}
          required
        />
        <input
          type="string"
          name="image"
          placeholder="image"
          onChange={(e) => inputValue(e)}
          required
        />
        <input
          type="decimal"
          name="price"
          placeholder="price"
          onChange={(e) => inputValue(e)}
          required
        />
        <input
          type="text"
          name="location"
          placeholder="location"
          onChange={(e) => inputValue(e)}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="description"
          onChange={(e) => inputValue(e)}
          required
        />
        <input
          type="integer"
          name="bedroom_number"
          placeholder="bedroom number"
          onChange={(e) => inputValue(e)}
          required
        />
        <button type="submit">Add House</button>
      </form>
    </div>
  );
};

export default AddHouse;
