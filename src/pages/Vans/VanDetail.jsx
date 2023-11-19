import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/VanDetail.css";

function VanDetail() {
  const params = useParams();
  const location = useLocation();
  console.log(location);
  const [van, setVan] = useState(null);

  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data));
  }, [params.id]);

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanDetail;
