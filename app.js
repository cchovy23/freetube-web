const input = document.getElementById("search");
const videos = document.getElementById("videos");

input.addEventListener("keydown", async e => {
  if (e.key !== "Enter") return;

  const data = await searchVideos(input.value);
  videos.innerHTML = "";

  data.items.forEach(v => {
    const div = document.createElement("div");
    div.className = "video";
    div.innerHTML = `
      <img src="${v.thumbnail}">
      <h3>${v.title}</h3>
    `;
    div.onclick = () => openPlayer(v.id);
    videos.appendChild(div);
  });
});

async function openPlayer(id) {
  const data = await getStream(id);
  videos.innerHTML = `
    <video controls autoplay src="${data.videoStreams[0].url}"></video>
    <h2>${data.title}</h2>
  `;
}
