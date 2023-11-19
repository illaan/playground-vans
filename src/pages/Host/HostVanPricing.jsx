import { useOutletContext } from "react-router-dom";

function HostVanPricing() {
  const { van } = useOutletContext();

  return (
    <h3 className="host-van-price">
      ${van.price}
      <span>/day</span>
    </h3>
  );
}

export default HostVanPricing;
