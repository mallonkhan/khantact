const videos = [
  {
    type: "youtube",
    title: "Khanimations Live",
    id: "n9O874FdWa4"
  },
  {
    type: "youtube",
    title: "Khanimations Feature",
    id: "wydfPdBl-qk"
  },
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
    type: "youtube",
    title: "Proud Fools - Live 01",
    id: "lKwAuFrZGH0"
  },
  {
    type: "youtube",
    title: "Proud Fools - Live 02",
    id: "umHnLhzFOU0"
  },
  {
    type: "youtube",
    title: "Proud Fools - Live 03",
    id: "Ll8yXZJYw9E"
  },
  {
    type: "youtube",
    title: "Proud Fools - Live 04",
    id: "5lEq2GqIl4Q"
  },
  {
    type: "youtube",
    title: "Proud Fools - Live 05",
    id: "uaC6t5S_aic"
  },
  {
    type: "youtube",
    title: "Proud Fools - Live 06",
    id: "st7Ofo-VAYg"
  },
  {
    type: "youtube",
    title: "Ape Rock - Pilot",
    id: "n4_WxASGcyE"
  },
  {
    type: "tiktok",
    title: "Ape Rock - The Tube",
    format: "vertical",
    src: "https://www.tiktok.com/embed/v2/7524060830736878861"
  },
  {
    type: "tiktok",
    title: "Ape Rock - Gob",
    format: "vertical",
    src: "https://www.tiktok.com/embed/v2/7568475855752662285"
  },
  {
    type: "youtube",
    title: "Ape Rock - Money",
    id: "SV783CNzQQ8"
  },
  {
    type: "youtube",
    title: "Ape Rock - Rex",
    id: "mNwRJlyX43U"
  },
  {
    type: "youtube",
    title: "Ape Rock - Banana Collector",
    id: "7kwT-Ru2u1U"
  },
  {
    type: "youtube",
    title: "Emplant - Promo",
    id: "C9PxaiFw0ik"
  },
  {
    type: "localVideo",
    title: "Emplant - About",
    src: "assets/video/emplant/About Emplant.mov"
  },
  {
    type: "localVideo",
    title: "Emplant - 2013 Promo",
    src: "assets/video/emplant/EMPLANT-2013-promo-book.mov"
  },
  {
    type: "localVideo",
    title: "Emplant - Doubting Tomas",
    src: "assets/video/emplant/Emplant Doubting Tomas.mov"
  },
  {
    type: "facebook",
    title: "Dante's History - Reel",
    format: "vertical",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1741780559780515%2F&show_text=false&width=267&t=0"
  },
  {
    type: "facebook",
    title: "Dante's History - Canto",
    format: "square",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdanteshistory%2Fvideos%2F813560296085400%2F&show_text=false&width=476&t=0"
  },
  {
    type: "facebook",
    title: "Dante's History - Video",
    format: "square",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdanteshistory%2Fvideos%2F1864196167221279%2F&show_text=false&width=476&t=0"
  },
  {
    type: "facebook",
    title: "Dante's History - Reel 02",
    format: "vertical",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F219219671153045%2F&show_text=false&width=267&t=0"
  },
  {
    type: "facebook",
    title: "Dante's History - Video 02",
    format: "square",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdanteshistory%2Fvideos%2F672857563291992%2F&show_text=false&width=476&t=0"
  },
  {
    type: "facebook",
    title: "Dante's History - Video 03",
    format: "square",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdanteshistory%2Fvideos%2F1192953911073158%2F&show_text=false&width=476&t=0"
  },
  {
    type: "facebook",
    title: "Dante's History - Video 04",
    format: "square",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdanteshistory%2Fvideos%2F357340638278729%2F&show_text=false&width=476&t=0"
  },
  {
    type: "facebook",
    title: "Dante's History - Video 05",
    format: "square",
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fdanteshistory%2Fvideos%2F349661809504443%2F&show_text=false&width=476&t=0"
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
  "chaos": {
    title: "Chaos",
    src: "assets/artwork/Chaos.png"
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
  },
  "purple-painting": {
    title: "Whippy",
    src: "assets/artwork/IMG_7165.PNG"
  },
  "new-painting": {
    title: "New Painting",
    src: "assets/artwork/Screenshot 2023-09-17 at 1.05.40 PM.png"
  },
  "sketch-painting": {
    title: "Sketch Painting",
    src: "assets/artwork/IMG_5570.PNG"
  },
  "small-painting": {
    title: "Small Painting",
    src: "assets/artwork/7A61C532-20F0-4879-9FED-A0254EE1F9EE.JPG"
  },
  "we-are-butthead": {
    title: "We Are Butthead",
    src: "assets/artwork/We Are Butthead.png"
  },
  "emplant-page-2": {
    title: "Emplant Page 2 Preview",
    src: "assets/emplant/emplant page 2 preview.png"
  },
  "black-dove-2020": {
    title: "Black Dove 2020",
    src: "assets/black-dove/motion-comic/LOBD_2020_Black Dove 2020.PNG"
  },
  "black-dove-falcon": {
    title: "Falcon 2020",
    src: "assets/black-dove/motion-comic/LOBD_2020_Falcon.PNG"
  },
  "black-dove-jessica": {
    title: "Jessica 2020",
    src: "assets/black-dove/motion-comic/LOBD_2020_jessica.PNG"
  },
  "black-dove-blast": {
    title: "Blast 2020",
    src: "assets/black-dove/motion-comic/LOBD_2020_blast.PNG"
  },
  "black-dove-edmond": {
    title: "Edmond Prays",
    src: "assets/black-dove/motion-comic/LOBD_2020_Edmond_Prays.png"
  },
  "black-dove-dove": {
    title: "Dove 2020",
    src: "assets/black-dove/motion-comic/LOBD_2020_dove.jpg"
  }
};

const dialogs = {
  tv: document.querySelector("#tvModal"),
  poster: document.querySelector("#posterModal"),
  essays: document.querySelector("#essaysModal"),
  music: document.querySelector("#musicModal"),
  books: document.querySelector("#booksModal"),
  pc: document.querySelector("#pcModal"),
  contact: document.querySelector("#contactModal"),
  lightbox: document.querySelector("#imageLightbox"),
  proposal: document.querySelector("#proposalModal")
};

const videoFrame = document.querySelector("#videoFrame");
const channelDisplay = document.querySelector("#channelDisplay");
const posterTitle = document.querySelector("#posterTitle");
const posterImage = document.querySelector("#posterImage");
const posterViewer = document.querySelector(".poster-viewer");
const posterZoomIn = document.querySelector("#posterZoomIn");
const posterZoomOut = document.querySelector("#posterZoomOut");
const posterZoomReset = document.querySelector("#posterZoomReset");
const posterZoomLevel = document.querySelector("#posterZoomLevel");
const playerDisplay = document.querySelector("#playerDisplay");
const donateModal = document.querySelector("#donateModal");
const donateBookTitle = document.querySelector("#donateBookTitle");
const continueBookLink = document.querySelector("#continueBookLink");
const roomShell = document.querySelector(".room-shell");
const bedroomStage = document.querySelector(".bedroom-stage");
const bedroomArt = document.querySelector(".bedroom-art");
const constellationLines = document.querySelector("#constellationLines");
const avatarHub = document.querySelector("#avatarHub");
const lightboxTitle = document.querySelector("#lightboxTitle");
const lightboxImage = document.querySelector("#lightboxImage");
const proposalFrame = document.querySelector("#proposalFrame");
const proposalPageLabel = document.querySelector("#proposalPageLabel");
const proposalPrev = document.querySelector("#proposalPrev");
const proposalNext = document.querySelector("#proposalNext");
const proposalPages = [
  { label: "Cover", src: "assets/dante/grant-proposal/COVER PAGE.png" },
  { label: "Page 2", src: "assets/dante/grant-proposal/PAGE 2.png" },
  { label: "Page 3", src: "assets/dante/grant-proposal/PAGE 3.png" },
  { label: "Page 4", src: "assets/dante/grant-proposal/PAGE 4.png" },
  { label: "Page 5", src: "assets/dante/grant-proposal/PAGE 5.png" },
  { label: "Page 6", src: "assets/dante/grant-proposal/PAGE 6.png" },
  { label: "Page 7", src: "assets/dante/grant-proposal/PAGE 7.png" },
  { label: "Page 8", src: "assets/dante/grant-proposal/PAGE 8.png" },
  { label: "Page 9", src: "assets/dante/grant-proposal/PAGE 9.png" }
];

let channelIndex = 0;
let proposalIndex = 0;
let posterScale = 1;
let posterDragging = false;
let posterDragStart = { x: 0, y: 0, scrollLeft: 0, scrollTop: 0 };

function resolveObjectPosition(position, freeSpace, axis) {
  const parts = position.split(/\s+/).filter(Boolean);
  let value = parts[axis] || (axis === 0 ? "50%" : "50%");
  if (parts.length === 1) {
    value = axis === 0 ? parts[0] : "50%";
  }

  if (value === "left" || value === "top") return 0;
  if (value === "center") return freeSpace / 2;
  if (value === "right" || value === "bottom") return freeSpace;
  if (value.endsWith("%")) return freeSpace * (parseFloat(value) / 100);
  if (value.endsWith("px")) return parseFloat(value);
  const number = parseFloat(value);
  return Number.isFinite(number) ? number : freeSpace / 2;
}

function getRenderedBedroomRect() {
  if (!bedroomStage || !bedroomArt) return null;
  const stage = bedroomStage.getBoundingClientRect();
  const naturalWidth = bedroomArt.naturalWidth || Number(bedroomArt.getAttribute("width")) || 1536;
  const naturalHeight = bedroomArt.naturalHeight || Number(bedroomArt.getAttribute("height")) || 1024;
  const art = bedroomArt.getBoundingClientRect();
  const actualRatio = art.width / art.height;
  const naturalRatio = naturalWidth / naturalHeight;

  if (Number.isFinite(actualRatio) && Math.abs(actualRatio - naturalRatio) < 0.01) {
    return {
      left: art.left - stage.left + bedroomStage.scrollLeft,
      top: art.top - stage.top + bedroomStage.scrollTop,
      width: art.width,
      height: art.height
    };
  }

  const stageRatio = stage.width / stage.height;
  const imageRatio = naturalWidth / naturalHeight;
  const imageStyle = getComputedStyle(bedroomArt);
  const objectFit = imageStyle.objectFit;
  const objectPosition = imageStyle.objectPosition || "50% 50%";

  let width = stage.width;
  let height = stage.height;
  let left = 0;
  let top = 0;

  if (objectFit === "contain") {
    if (stageRatio > imageRatio) {
      width = stage.height * imageRatio;
      left = (stage.width - width) / 2;
    } else {
      height = stage.width / imageRatio;
      top = (stage.height - height) / 2;
    }
  } else if (stageRatio > imageRatio) {
    height = stage.width / imageRatio;
    top = (stage.height - height) / 2;
  } else {
    width = stage.height * imageRatio;
    left = (stage.width - width) / 2;
  }

  left = resolveObjectPosition(objectPosition, stage.width - width, 0);
  top = resolveObjectPosition(objectPosition, stage.height - height, 1);

  return { left, top, width, height };
}

function pointFromImageCoords(element, imageRect = getRenderedBedroomRect()) {
  if (!element || !imageRect) return null;
  const x = Number(element.dataset.x);
  const y = Number(element.dataset.y);
  if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
  return {
    x: imageRect.left + imageRect.width * x,
    y: imageRect.top + imageRect.height * y
  };
}

function positionSceneObjects() {
  const imageRect = getRenderedBedroomRect();
  if (!imageRect) return;

  document.querySelectorAll("[data-x][data-y]").forEach((element) => {
    const point = pointFromImageCoords(element, imageRect);
    if (!point) return;
    element.style.left = `${point.x}px`;
    element.style.top = `${point.y}px`;
  });

  drawConstellation(imageRect);
}

function drawConstellation(imageRect = getRenderedBedroomRect()) {
  if (!constellationLines || !avatarHub || !imageRect) return;
  const avatarPoint = pointFromImageCoords(avatarHub, imageRect);
  if (!avatarPoint) return;

  const lineWidth = Math.max(bedroomStage.clientWidth, bedroomStage.scrollWidth);
  const lineHeight = Math.max(bedroomStage.clientHeight, bedroomStage.scrollHeight);
  constellationLines.style.width = `${lineWidth}px`;
  constellationLines.style.height = `${lineHeight}px`;
  constellationLines.setAttribute("viewBox", `0 0 ${lineWidth} ${lineHeight}`);
  constellationLines.innerHTML = "";

  document.querySelectorAll(".scene-object[data-x][data-y]").forEach((pin) => {
    const pinPoint = pointFromImageCoords(pin, imageRect);
    if (!pinPoint) return;
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", pinPoint.x.toFixed(1));
    line.setAttribute("y1", pinPoint.y.toFixed(1));
    line.setAttribute("x2", avatarPoint.x.toFixed(1));
    line.setAttribute("y2", avatarPoint.y.toFixed(1));
    constellationLines.append(line);
  });
}

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

function openHashTarget() {
  if (window.location.hash !== "#khantact") return;
  openDialog(dialogs.contact);
  history.replaceState(null, "", window.location.pathname + window.location.search);
}

function formatChannel(index) {
  return `CH ${String(index + 1).padStart(2, "0")}`;
}

function renderChannel(index = channelIndex) {
  channelIndex = (index + videos.length) % videos.length;
  const video = videos[channelIndex];
  videoFrame.dataset.format = video.format || "wide";
  if (channelDisplay) {
    channelDisplay.textContent = formatChannel(channelIndex);
  }
  if (video.type === "youtube") {
    const origin = location.origin === "null" ? "https://www.mallonkhan.com" : location.origin;
    videoFrame.innerHTML = `
      <iframe
        title="${video.title}"
        src="https://www.youtube-nocookie.com/embed/${video.id}?rel=0&origin=${encodeURIComponent(origin)}"
        loading="lazy"
        referrerpolicy="origin-when-cross-origin"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    `;
    return;
  }
  if (video.type === "image") {
    videoFrame.innerHTML = `<img src="${video.src}" alt="${video.title}">`;
    return;
  }
  if (video.type === "localVideo") {
    videoFrame.innerHTML = `<video controls controlsList="nodownload" playsinline src="${video.src}"></video>`;
    return;
  }
  if (video.type === "facebook" || video.type === "tiktok") {
    videoFrame.innerHTML = `
      <iframe
        title="${video.title}"
        src="${video.src}"
        loading="lazy"
        referrerpolicy="strict-origin-when-cross-origin"
        allow="clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    `;
  }
}

function changeChannel(direction = 1) {
  renderChannel(channelIndex + direction);
}

function openPoster(id) {
  selectPoster(id);
  openDialog(dialogs.poster);
}

function updatePosterZoom(nextScale, focusPoint) {
  if (!posterImage || !posterViewer) return;
  const previousScale = posterScale;
  posterScale = Math.min(5, Math.max(1, nextScale));
  const viewerRect = posterViewer.getBoundingClientRect();
  const naturalWidth = posterImage.naturalWidth || posterImage.offsetWidth;
  const naturalHeight = posterImage.naturalHeight || posterImage.offsetHeight;
  const fitScale = Math.min(
    1,
    (viewerRect.width - 32) / naturalWidth,
    (viewerRect.height - 32) / naturalHeight
  );
  const displayWidth = Math.max(1, naturalWidth * fitScale * posterScale);
  const displayHeight = Math.max(1, naturalHeight * fitScale * posterScale);
  posterImage.style.width = `${displayWidth}px`;
  posterImage.style.height = `${displayHeight}px`;
  posterImage.style.transform = "";
  posterImage.style.marginRight = "";
  posterImage.style.marginBottom = "";
  if (posterZoomLevel) {
    posterZoomLevel.textContent = `${Math.round(posterScale * 100)}%`;
  }

  if (focusPoint && previousScale !== posterScale) {
    const scaleRatio = posterScale / previousScale;
    posterViewer.scrollLeft = (posterViewer.scrollLeft + focusPoint.x) * scaleRatio - focusPoint.x;
    posterViewer.scrollTop = (posterViewer.scrollTop + focusPoint.y) * scaleRatio - focusPoint.y;
  }
}

function resetPosterZoom() {
  updatePosterZoom(1);
  if (posterViewer) {
    posterViewer.scrollLeft = 0;
    posterViewer.scrollTop = 0;
  }
}

function selectPoster(id) {
  const poster = posterArt[id] || posterArt.cornered;
  posterTitle.textContent = poster.title;
  posterImage.src = poster.src;
  posterImage.alt = poster.title;
  resetPosterZoom();
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

  const galleryImage = event.target.closest(".image-gallery img");
  if (galleryImage && dialogs.lightbox && lightboxImage) {
    event.preventDefault();
    const sourceLink = galleryImage.closest("a");
    lightboxImage.src = sourceLink?.href || galleryImage.currentSrc || galleryImage.src;
    lightboxImage.alt = galleryImage.alt || "Gallery preview";
    if (lightboxTitle) {
      lightboxTitle.textContent = galleryImage.alt || "Gallery Preview";
    }
    openDialog(dialogs.lightbox);
    return;
  }

  const proposalOpen = event.target.closest("[data-proposal-open]");
  if (proposalOpen && dialogs.proposal) {
    event.preventDefault();
    renderProposalPage(0);
    openDialog(dialogs.proposal);
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
  if (action === "contact") {
    openDialog(dialogs.contact);
  }
});

function renderProposalPage(index) {
  if (!proposalFrame) return;
  proposalIndex = (index + proposalPages.length) % proposalPages.length;
  const page = proposalPages[proposalIndex];
  proposalFrame.src = page.src;
  proposalFrame.alt = `Dante's History grant proposal ${page.label.toLowerCase()}`;
  if (proposalPageLabel) {
    proposalPageLabel.textContent = page.label;
  }
}

proposalPrev?.addEventListener("click", () => renderProposalPage(proposalIndex - 1));
proposalNext?.addEventListener("click", () => renderProposalPage(proposalIndex + 1));

document.querySelector("#nextChannel")?.addEventListener("click", () => changeChannel(1));
document.querySelector("#prevChannel")?.addEventListener("click", () => changeChannel(-1));
posterZoomIn?.addEventListener("click", () => updatePosterZoom(posterScale + 0.25));
posterZoomOut?.addEventListener("click", () => updatePosterZoom(posterScale - 0.25));
posterZoomReset?.addEventListener("click", resetPosterZoom);

posterViewer?.addEventListener("wheel", (event) => {
  if (!posterImage) return;
  event.preventDefault();
  const rect = posterViewer.getBoundingClientRect();
  const focusPoint = {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
  const direction = event.deltaY < 0 ? 1 : -1;
  updatePosterZoom(posterScale + direction * 0.18, focusPoint);
}, { passive: false });

posterViewer?.addEventListener("pointerdown", (event) => {
  if (posterScale <= 1) return;
  posterDragging = true;
  posterViewer.setPointerCapture(event.pointerId);
  posterViewer.classList.add("is-dragging");
  posterDragStart = {
    x: event.clientX,
    y: event.clientY,
    scrollLeft: posterViewer.scrollLeft,
    scrollTop: posterViewer.scrollTop
  };
});

posterViewer?.addEventListener("pointermove", (event) => {
  if (!posterDragging) return;
  posterViewer.scrollLeft = posterDragStart.scrollLeft - (event.clientX - posterDragStart.x);
  posterViewer.scrollTop = posterDragStart.scrollTop - (event.clientY - posterDragStart.y);
});

posterViewer?.addEventListener("pointerup", (event) => {
  posterDragging = false;
  posterViewer.releasePointerCapture(event.pointerId);
  posterViewer.classList.remove("is-dragging");
});

posterViewer?.addEventListener("pointercancel", () => {
  posterDragging = false;
  posterViewer.classList.remove("is-dragging");
});

posterViewer?.addEventListener("dblclick", resetPosterZoom);

roomShell?.classList.remove("pins-on");

function scheduleScenePositioning() {
  positionSceneObjects();
  requestAnimationFrame(positionSceneObjects);
  window.setTimeout(positionSceneObjects, 120);
  window.setTimeout(positionSceneObjects, 360);
}

scheduleScenePositioning();
window.addEventListener("resize", scheduleScenePositioning);
window.addEventListener("orientationchange", scheduleScenePositioning);
window.visualViewport?.addEventListener("resize", scheduleScenePositioning);
window.visualViewport?.addEventListener("scroll", scheduleScenePositioning);
bedroomArt?.addEventListener("load", scheduleScenePositioning);
openHashTarget();
window.addEventListener("hashchange", openHashTarget);

document.querySelectorAll(".album").forEach((album) => {
  album.addEventListener("click", () => {
    document.querySelectorAll(".album").forEach((item) => item.classList.remove("is-active"));
    album.classList.add("is-active");
    const linkLabel = album.dataset.linkLabel || "Open Link";
    const linkTarget = album.dataset.album?.startsWith("http") ? ' target="_blank" rel="noopener noreferrer"' : "";
    const artist = album.dataset.artist || "";
    const kind = album.dataset.kind || (album.dataset.audio ? "tape" : album.dataset.embed?.includes("redcircle.com") ? "radio" : "cd");
    const player = album.dataset.embed
      ? `<iframe class="bandcamp-player" title="${album.dataset.title}" src="${album.dataset.embed}" loading="lazy" seamless></iframe>`
      : album.dataset.audio
        ? `<audio controls controlsList="nodownload" src="${album.dataset.audio}"></audio>`
        : `<p class="radio-note">Tune in through the RSS feed or open the project page.</p>`;
    const playerShell = kind === "tape"
      ? `
      <div class="tape-deck-player">
        <div class="book-tape">
          <img src="${album.dataset.thumb || "assets/emplant/emplant-logo.png"}" alt="">
          <span>Book On Tape</span>
        </div>
        <div class="cassette-deck">
          <div class="cassette-window" aria-hidden="true"><span></span><span></span></div>
          ${player}
        </div>
      </div>`
      : kind === "radio"
        ? `
      <div class="radio-tuner-player">
        <div class="tuner-face">
          <div class="tuner-scale" aria-hidden="true"><span></span></div>
          <iframe class="radio-player" title="${album.dataset.title}" src="${album.dataset.embed}" loading="lazy"></iframe>
        </div>
        <div class="radio-dial" aria-hidden="true"></div>
      </div>`
        : `
      <div class="simple-media-player">
        ${player}
      </div>`;
    playerDisplay.innerHTML = `
      <div class="cd-readout">
        <span class="readout-label">Now Playing</span>
        <strong>${album.dataset.title}</strong>
        <span>${artist}</span>
      </div>
      ${playerShell}
      <a href="${album.dataset.album}"${linkTarget}>${linkLabel}</a>
    `;
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    Object.values(dialogs).forEach(closeDialog);
  }
});

document.addEventListener("click", (event) => {
  const audioSelect = event.target.closest("[data-audio-select]");
  if (!audioSelect) return;
  const player = document.querySelector("#emplantChapterPlayer");
  if (!player) return;
  player.src = audioSelect.dataset.audioSelect;
  player.play?.();
});

document.addEventListener("contextmenu", (event) => {
  if (event.target.closest("audio, video, img")) {
    event.preventDefault();
  }
});
