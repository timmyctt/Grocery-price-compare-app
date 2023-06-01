import { useState, useEffect } from "react";

const Yourlist = () => {
  const [list, Setlist] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/lists")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        Setlist(data);
      });
  }, []);

  const handleDelete = (e) => {
    const opts = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };

    fetch(`http://localhost:4000/lists/${e.target.value}`, opts)
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete");
        fetch("http://localhost:4000/lists")
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            Setlist(data);
          });
      });
  };

  return (
    <>
      <h1>Your List</h1>

      {/*  {(() => {
        if (list !== false) {
          return <div>NULL</div>;
        }
      })()} */}

      {list &&
        list.map((item) => (
          <div key={item.id}>
            <p className="groceriesList">
              {item.type}, £{item.price}, from {item.store}
              <button value={item.id} onClick={handleDelete} className="button">
                Remove
              </button>
            </p>
          </div>
        ))}
      <form>
        <input type="email" placeholder="Your Email" required></input>
        <button>Email this list to you!</button>
      </form>
    </>
  );
};

export default Yourlist;
