import { useParams, Link, useLocation, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import "../../styles/VanDetail.css";
import { getVans } from "../../api";

export function loader({ params }) {
  return getVans(params.id);
}

function VanDetail() {
  // const params = useParams();
  // const [van, setVan] = useState(null);
  const location = useLocation();
  const search = location.state?.search || "";
  const type = location.state?.type || "all";

  const van = useLoaderData();

  // useEffect(() => {
  //   fetch(`http://127.0.0.1:5000/api/vans/${params.id}`)
  //     .then((res) => res.json())
  //     .then((data) => setVan(data));
  // }, [params.id]);

  return (
    <div className="van-detail-container">
      <Link to={`..${search}`} relative="path" className="back-button">
        &larr; <span>Back to {type} vans</span>
      </Link>

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
    </div>
  );
}

export default VanDetail;
