export async function getVans() {
  const res = await fetch("http://127.0.0.1:5000/api/vans");
  if (!res.ok) {
    throw {
      message: "Failed to fetch vans",
      statusText: res.statusText,
      status: res.status
    };
  }
  const data = await res.json();
  return data;
}
