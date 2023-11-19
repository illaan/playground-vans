import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function HostVans() {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data))
      .catch((error) => console.error(error));
  }, []);

  const hostVans = vans.map((van) => (
    <Link to={van.id} key={van.id} className="host-van-link-wrapper">
      <div className="host-van-single" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="hpst-van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            /day
          </p>
        </div>
      </div>
    </Link>
  ));

  return (
    <section>
      <h1 className="host-vans-title">Your listed vans</h1>
      <div className="host-vans-list">
        {vans.length > 0 ? <section>{hostVans}</section> : <h2>Loading..</h2>}
      </div>
    </section>
  );
}

export default HostVans;
