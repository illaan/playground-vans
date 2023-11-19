import { useOutletContext } from "react-router-dom";

function HostVanPhotos() {
  const { van } = useOutletContext();

  return <img src={van.imageUrl} className="host-van-detail-image" />;
}

export default HostVanPhotos;
