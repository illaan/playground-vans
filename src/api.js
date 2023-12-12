export async function getVans(id) {
  const url = id
    ? `http://127.0.0.1:5000/api/vans/${id}`
    : "http://127.0.0.1:5000/api/vans";
  const res = await fetch(url);
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

export async function getHostVans(id) {
  const url = id
    ? `http://127.0.0.1:5000/api/host/vans/${id}`
    : "http://127.0.0.1:5000/api/host/vans";
  const res = await fetch(url);
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

export async function loginUser(creds) {
  const res = await fetch("http://127.0.0.1:5000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(creds)
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status
    };
  }

  return data;
}
