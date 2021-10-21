window.addEventListener("keypress", (e) => {
  console.log(e);
  if (e.key === "e") {
    const audio = new Audio("audio/crash.mp3");
    audio.play();
  }
  if (e.key === "r") {
    const audio = new Audio("audio/ride.mp3");
    audio.play();
  }
  if (e.key === "f") {
    const audio = new Audio("audio/floor tom.mp3");
    audio.play();
  }
  if (e.key === "g") {
    const audio = new Audio("audio/mid tom.mp3");
    audio.play();
  }
  if (e.key === "h") {
    const audio = new Audio("audio/crash.mp3");
    audio.play();
  }
  if (e.key === "v" || e.key === "b") {
    const audio = new Audio("audio/kick.mp3");
    audio.play();
  }
  if (e.key === "j") {
    const audio = new Audio("audio/snare.mp3");
    audio.play();
  }
  if (e.key === "i") {
    const audio = new Audio("audio/high hat open.mp3");
    audio.play();
  }
  if (e.key === "k") {
    const audio = new Audio("audio/hi hat closed.mp3");
    audio.play();
  }
});
