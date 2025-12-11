import "../assets/colonnadestra.css";
import { useState, useEffect } from "react";

const ColonnaDestra = ({ title, people }) => {
  const [users, setUsers] = useState(null);

  const URL = "https://striveschool-api.herokuapp.com/api/profile";
  const KEY =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTM3ZmU0NWQzMjJmNTAwMTUxMDc2YzIiLCJpYXQiOjE3NjUyNzcyNTMsImV4cCI6MTc2NjQ4Njg1M30.6vFhBSWn_BZLNsof5SqbWvb4UQfXAP1wchtNpfCrZmI";

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };
  const toggleConnection = (id) => {
    setUsers((prev) =>
      prev.map((user) =>
        user._id === id ? { ...user, connected: !user.connected } : user
      )
    );
  };

  const getUsers = () => {
    fetch(URL, {
      headers: {
        Authorization: KEY,
      },
    })
      .then((r) => {
        if (!r.ok) throw new Error(`Error: ${r.status}`);
        return r.json();
      })
      .then((d) => {
        const shuffled = shuffleArray(d.slice(-50)).map((u) => ({
          ...u,
          connected: false,
        }));
        setUsers(shuffled);
      })
      .catch((e) => {
        console.log(`Siamo nel catch: ${e}`);
      });
  };

  useEffect(getUsers, []);

  return (
    <div className="bg-light rounded-3 border-secondary border  mb-2 bg-white border border-secondary rounded-3">
      <h6 className="px-4 pt-4 mb-3">{title}</h6>
      {users?.slice(0, people).map((user, i) => (
        <div key={i}>
          <div className="d-flex align-items-start px-3 gap-2">
            <img
              src={user.image}
              width={50}
              height={50}
              alt="pic-profile"
              className="rounded-5"
            />
            <div className="container-description">
              <h6 className="m-0">{user.name}</h6>
              <p className="m-0 description">{user.bio}</p>
            </div>
          </div>
          <div className="text-center mb-3 pe-5">
            {people !== 1 && (
              <button
                onClick={() => {
                  toggleConnection(user._id);
                }}
                className="bg-transparent rounded-5 px-3 py-1 fw-bold mt-3">
                {title === "Aggiungi feed" ? (
                  user.connected ? (
                    <i className="bi bi-check2">Seguito</i>
                  ) : (
                    <i className="bi bi-person-plus-fill">Segui</i>
                  )
                ) : user.connected ? (
                  "Connected"
                ) : (
                  "Connect"
                )}
              </button>
            )}
          </div>
          {i !== people - 1 && <hr className="ms-4" />}
        </div>
      ))}

      {people > 3 && (
        <div className="text-center py-3" id="illumina">
          <a>
            {people === 1 ? "View all recommandations" : "Mostra tutto"}
            <i className="bi bi-arrow-right fw-bolder"></i>
          </a>
        </div>
      )}
    </div>
  );
};

export default ColonnaDestra;
