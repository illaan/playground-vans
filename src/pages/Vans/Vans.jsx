import { useEffect, useState } from "react";
import "../../styles/Vans.css";
import { Link, useSearchParams, useLoaderData } from "react-router-dom";
import { getVans } from "../../api";
import { TranslationContext } from "../../TranslationContext";
import { useContext } from "react";

export function loader() {
  return getVans();
}
function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { translations, selectedLanguage, handleLanguageChange } =
    useContext(TranslationContext);

  // const [vans, setVans] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const typeFilter = searchParams.get("type");

  const vans = useLoaderData();

  const displayedVans = typeFilter
    ? vans.filter((van) => van.type.toLowerCase() === typeFilter)
    : vans;

  // useEffect(() => {
  //   async function loadVans() {
  //     setLoading(true);
  //     try {
  //       const data = await getVans();
  //       setVans(data);
  //     } catch (err) {
  //       setError(err);
  //     }
  //     setLoading(false);
  //   }
  //   loadVans();
  // }, []);

  const allVans = displayedVans.map((van) => (
    <div key={van.id} className="van-tile">
      <Link
        to={van.id}
        state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
      >
        <img src={van.imageUrl} />
        <div className="van-info">
          <h3>{van.name}</h3>
          <p>
            ${van.price}
            <span>/day</span>
          </p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
      </Link>
    </div>
  ));

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  // if (loading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (error) {
  //   return <h1>There was an error: {error.message}</h1>;
  // }
  return (
    <div className="van-list-container">
      <h1>{translations.vansmessage}</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple 
          ${typeFilter === "simple" ? "selected" : ""}`}
        >
          {translations.simple}
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury 
          ${typeFilter === "luxury" ? "selected" : ""}`}
        >
          {translations.luxury}
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged 
          ${typeFilter === "rugged" ? "selected" : ""}`}
        >
          {translations.rugged}
        </button>
        {typeFilter ? (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filters"
          >
            {translations.clear}
          </button>
        ) : null}
      </div>
      <div className="van-list">{allVans}</div>
    </div>
  );
}

export default Vans;
