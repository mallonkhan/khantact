const videos = [
  {
    type: "youtube",
    title: "Khanimations",
    id: "eOkfrJ5i_l8"
  },
  {
    type: "youtube",
    title: "Khanimations 02",
    id: "rWo9J791Yss"
  },
  {
    type: "youtube",
    title: "Khanimations 03",
    id: "RoLPO3Rou14"
  },
  {
    type: "youtube",
    title: "Khanimations 04",
    id: "AyYX-LZS1WU"
  },
  {
    type: "youtube",
    title: "Khanimations 05",
    id: "WzA-rDDwXvI"
  },
  {
    type: "youtube",
    title: "Khanimations 06",
    id: "lf0tEjEyIJA"
  },
  {
    type: "youtube",
    title: "Khanimations 07",
    id: "C9M981SOpkY"
  },
  {
    type: "youtube",
    title: "Khanimations 08",
    id: "qOJQ4yZySwI"
  },
  {
    type: "youtube",
    title: "Khanimations 09",
    id: "yLuI-69UyCk"
  },
  {
    type: "youtube",
    title: "Khanimations 10",
    id: "LbZBhkMGu8k"
  },
  {
    type: "youtube",
    title: "Khanimations 11",
    id: "n4_WxASGcyE"
  },
  {
    type: "youtube",
    title: "Khanimations 12",
    id: "O3X44VksbQ4"
  },
  {
    type: "youtube",
    title: "Khanimations 13",
    id: "BssHr6WL6gw"
  },
  {
    type: "youtube",
    title: "Khanimations 16",
    id: "TBVbVPhJrm4"
  },
  {
    type: "youtube",
    title: "Khanimations 17",
    id: "ZJIDCF8SnXU"
  },
  {
    type: "youtube",
    title: "Khanimations 18",
    id: "1wcTgrgX9ic"
  },
  {
    type: "youtube",
    title: "Khanimations 19",
    id: "IFOvyQODeKk"
  },
  {
    type: "youtube",
    title: "Khanimations 20",
    id: "SwTzNV_iDRg"
  },
  {
    type: "youtube",
    title: "Khanimations 21",
    id: "T5KmBKWRcDo"
  },
  {
    type: "image",
    title: "Static",
    src: "https://media.giphy.com/media/xTk9ZvMnbY0zVb19nE/giphy.gif"
  }
];

const posterArt = {
  "cornered": {
    title: "Cornered",
    src: "assets/artwork/cornered.png"
  },
  "baphomesh": {
    title: "Baphomesh",
    src: "assets/artwork/baphomesh.png"
  },
  "ape-rock": {
    title: "Ape Rock",
    src: "assets/artwork/ape-rock.png"
  },
  "pizza": {
    title: "Pizza",
    src: "assets/artwork/pizza.jpg"
  },
  "dave": {
    title: "Dave",
    src: "assets/artwork/dave.png"
  },
  "election-2016": {
    title: "2016 Election",
    src: "assets/artwork/election-2016.png"
  },
  "sonic": {
    title: "Sonic",
    src: "assets/artwork/sonic.png"
  },
  "universal": {
    title: "Universal",
    src: "assets/artwork/Universal.png"
  },
  "gollum": {
    title: "Gollum",
    src: "assets/artwork/Gollum-purp.JPG"
  },
  "american-gothic": {
    title: "American Gothic",
    src: "assets/artwork/American gothic 2020.PNG"
  },
  "witcher": {
    title: "Witcher",
    src: "assets/artwork/Witcher.JPEG"
  },
  "batman-at-home": {
    title: "Batman At Home",
    src: "assets/artwork/Batman at home.PNG"
  },
  "sabrina": {
    title: "Sabrina",
    src: "assets/artwork/Sabrina.PNG"
  },
  "strange": {
    title: "Strange",
    src: "assets/artwork/Strange.PNG"
  },
  "robo-oreos": {
    title: "Robo Wants Oreos",
    src: "assets/artwork/Robo wants oreos.PNG"
  }
};

const dialogs = {
  tv: document.querySelector("#tvModal"),
  poster: document.querySelector("#posterModal"),
  essays: document.querySelector("#essaysModal"),
  music: document.querySelector("#musicModal"),
  books: document.querySelector("#booksModal"),
  pc: document.querySelector("#pcModal")
};

const videoFrame = document.querySelector("#videoFrame");
const channelDisplay = document.querySelector("#channelDisplay");
const posterTitle = document.querySelector("#posterTitle");
const posterImage = document.querySelector("#posterImage");
const posterZoom = document.querySelector("#posterZoom");
const playerDisplay = document.querySelector("#playerDisplay");
const donateModal = document.querySelector("#donateModal");
const donateBookTitle = document.querySelector("#donateBookTitle");
const continueBookLink = document.querySelector("#continueBookLink");
const roomShell = document.querySelector(".room-shell");
const avatarHub = document.querySelector("#avatarHub");

let channelIndex = 0;

function openDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", "");
  }
}

function closeDialog(dialog) {
  if (!dialog) return;
  if (typeof dialog.close === "function") {
    dialog.close();
  } else {
    dialog.removeAttribute("open");
  }
}

function formatChannel(index) {
  return `CH ${String(index + 1).padStart(2, "0")}`;
}

function renderChannel(index = channelIndex) {
  channelIndex = (index + videos.length) % videos.length;
  const video = videos[channelIndex];
  if (channelDisplay) {
    channelDisplay.textContent = formatChannel(channelIndex);
  }
  if (video.type === "youtube") {
    const origin = location.origin === "null" ? "https://www.mallonkhan.com" : location.origin;
    videoFrame.innerHTML = `
      <iframe
        title="${video.title}"
        src="https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&origin=${encodeURIComponent(origin)}"
        loading="lazy"
        referrerpolicy="origin-when-cross-origin"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    `;
    return;
  }
  if (video.type === "image") {
    videoFrame.innerHTML = `<img src="${video.src}" alt="${video.title}">`;
    return;
  }
}

function changeChannel(direction = 1) {
  renderChannel(channelIndex + direction);
}

function openPoster(id) {
  selectPoster(id);
  posterZoom.value = "1";
  posterImage.style.transform = "scale(1)";
  openDialog(dialogs.poster);
}

function selectPoster(id) {
  const poster = posterArt[id] || posterArt.cornered;
  posterTitle.textContent = poster.title;
  posterImage.src = poster.src;
  posterImage.alt = poster.title;
  posterZoom.value = "1";
  posterImage.style.transform = "scale(1)";
  document.querySelectorAll("[data-poster-select]").forEach((item) => {
    item.classList.toggle("is-active", item.dataset.posterSelect === id);
  });
}

document.addEventListener("click", (event) => {
  const closeButton = event.target.closest("[data-close]");
  if (closeButton) {
    const dialog = closeButton.closest("dialog");
    if (dialog?.id === "tvModal") {
      videoFrame.innerHTML = "";
    }
    closeDialog(dialog);
    return;
  }

  const posterSelect = event.target.closest("[data-poster-select]");
  if (posterSelect) {
    selectPoster(posterSelect.dataset.posterSelect);
    return;
  }

  const gatedBook = event.target.closest(".gated-book");
  if (gatedBook) {
    event.preventDefault();
    donateBookTitle.textContent = gatedBook.dataset.bookTitle || "the PDF";
    continueBookLink.href = gatedBook.href;
    openDialog(donateModal);
    return;
  }

  const hotspot = event.target.closest("[data-action]");
  if (!hotspot) return;

  const action = hotspot.dataset.action;
  if (action === "tv") {
    renderChannel(channelIndex);
    openDialog(dialogs.tv);
  }
  if (action === "poster") {
    openPoster(hotspot.dataset.poster);
  }
  if (action === "music") {
    openDialog(dialogs.music);
  }
  if (action === "essays") {
    openDialog(dialogs.essays);
  }
  if (action === "books") {
    openDialog(dialogs.books);
  }
  if (action === "pc") {
    openDialog(dialogs.pc);
  }
});

document.querySelector("#nextChannel")?.addEventListener("click", () => changeChannel(1));
document.querySelector("#prevChannel")?.addEventListener("click", () => changeChannel(-1));

avatarHub?.addEventListener("click", () => {
  roomShell?.classList.add("pins-on");
});

posterZoom?.addEventListener("input", () => {
  posterImage.style.transform = `scale(${posterZoom.value})`;
});

document.querySelectorAll(".album").forEach((album) => {
  album.addEventListener("click", () => {
    document.querySelectorAll(".album").forEach((item) => item.classList.remove("is-active"));
    album.classList.add("is-active");
    const linkLabel = album.dataset.linkLabel || "Open Link";
    const linkTarget = album.dataset.album?.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";
    const player = album.dataset.embed
      ? `<iframe class="bandcamp-player" title="${album.dataset.title}" src="${album.dataset.embed}" loading="lazy" seamless></iframe>`
      : `<audio controls src="${album.dataset.audio}"></audio>`;
    playerDisplay.innerHTML = `
      <strong>${album.dataset.title}</strong>
      ${player}
      <a href="${album.dataset.album}"${linkTarget}>${linkLabel}</a>
    `;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    Object.values(dialogs).forEach(closeDialog);
  }
});
