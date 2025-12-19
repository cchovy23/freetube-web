const API = "https://pipedapi.kavin.rocks";
// 나중에 직접 운영 권장

async function searchVideos(q) {
  const r = await fetch(`${API}/search?q=${encodeURIComponent(q)}&filter=videos`);
  return r.json();
}

async function getStream(id) {
  return fetch(`${API}/streams/${id}`).then(r => r.json());
}
