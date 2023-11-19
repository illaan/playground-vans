import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function HostVanDetail() {
  const params = useParams();
  const [van, setVan] = useState(null);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  };

  useEffect(() => {
    fetch(`http://127.0.0.1:5000/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data));
  }, [params.id]);
  return (
    <>
      {van ? (
        <section>
          <Link to=".." relative="path" className="back-button">
            &larr; <span>Back to all vans</span>
          </Link>
          <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
              <img src={van.imageUrl} />
              <div className="host-van-detail-info-text">
                <i className={`van-type van-type-${van.type}`}>{van.type}</i>
                <h3>{van.name}</h3>
                <h4>${van.price}/day</h4>
              </div>
            </div>
            <nav className="host-van-detail-nav">
              <NavLink
                to="."
                end
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Details
              </NavLink>
              <NavLink
                to="pricing"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Pricing
              </NavLink>
              <NavLink
                to="photos"
                style={({ isActive }) => (isActive ? activeStyles : null)}
              >
                Photos
              </NavLink>
            </nav>
            <Outlet context={{ van }} />
          </div>
        </section>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
}

export default HostVanDetail;
