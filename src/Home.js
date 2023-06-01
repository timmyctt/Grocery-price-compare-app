import { useState, useEffect } from "react";

const Home = () => {
  const [groceries, Setgroceries] = useState(null);
  const [initialData, SetinitialData] = useState(null);
  const list = [];

  useEffect(() => {
    fetch("http://localhost:4000/groceries")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        SetinitialData(data);
        Setgroceries(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredGrocery = initialData.filter(
      (grocery) =>
        grocery.type.toUpperCase() === e.target[0].value.toUpperCase()
    );
    Setgroceries(filteredGrocery);
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    const filteredGrocery = initialData.filter(
      (grocery) => grocery.type.toUpperCase() === e.target.value.toUpperCase()
    );
    if (filteredGrocery.length === 0) {
      Setgroceries(initialData);
    } else {
      Setgroceries(filteredGrocery);
    }
  };

  const handleClick = (e) => {
    const listItem = initialData.filter((item) => item.id == e.target.value);
    list.push(listItem);
    console.log(list);
  };

  return (
    <>
      <h1>Groceries Price</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Grocery you're looking for"
          required
          onChange={handleChange}
        />
        <button>Search</button>
      </form>

      {groceries &&
        groceries.map((groceries) => (
          <div key={groceries.id}>
            <p>
              {groceries.type}, £{groceries.price}, from {groceries.store}
              <button onClick={handleClick} value={groceries.id}>
                Add to list
              </button>
            </p>
          </div>
        ))}
    </>
  );
};

export default Home;