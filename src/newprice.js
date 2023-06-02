import { useState } from "react";

const Newprice = () => {
  const [added, Setadded] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      type: `${e.target[0].value}`,
      store: `${e.target[1].value}`,
      price: `${e.target[2].value}`,
    };
    console.log("newitem", newItem);

    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    };

    fetch("http://localhost:4000/groceries", opts)
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
        Setadded(e.target[0].value);
      });
  };

  return (
    <>
      <h1>Add price ££</h1>
      <br />
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Grocery type"></input>
          <select>
            <option value="Tesco">Tesco</option>
            <option value="Lidl">Lidl</option>
            <option value="M&S">M&S</option>
          </select>
          <input
            type="text"
            placeholder="£"
            maxLength={2}
            style={{ width: "20px" }}
          ></input>
          <button>Add</button>
        </form>
      </div>
      {added && (
        <p>
          Thank you for adding price for <span className="added">{added}</span>!
        </p>
      )}
      <br />
      <br />
      <br />
    </>
  );
};
export default Newprice;
