let remove = null;
const output = document.querySelector("#output");

const updatePixelRatio = () => {
  if (remove != null) {
    remove();
  }
  const mqString = `(resolution: ${window.devicePixelRatio}dppx)`;
  const media = matchMedia(mqString);
  media.addEventListener("change", updatePixelRatio);
  remove = () => {
    media.removeEventListener("change", updatePixelRatio);
  };

  output.textContent = `${window.devicePixelRatio}`;
};

updatePixelRatio();