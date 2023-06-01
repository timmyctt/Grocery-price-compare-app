import { useState, useEffect } from "react";

const Home = () => {
  const [groceries, Setgroceries] = useState(null);
  const [initialData, SetinitialData] = useState(null);

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

    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(listItem[0]),
    };

    fetch("http://localhost:4000/lists", opts)
      .then((response) => response.json())
      .then((data) => {
        console.log("POST Done");
      });
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
            <p className="groceriesList">
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
