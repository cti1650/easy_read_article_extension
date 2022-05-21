console.log("done");
document.querySelectorAll("article p").forEach((item) => {
  if (!item.querySelector("img")) {
    const text = item.textContent;
    const result = text
      .split(" ")
      .map((word) => {
        if (word.length === 2) {
          return `<b>${word.slice(0, 1)}</b>${word.slice(1)}`;
        } else if (word.length === 3) {
          return `<b>${word.slice(0, 1)}</b>${word.slice(1)}`;
        } else if (word.length === 4) {
          return `<b>${word.slice(0, 3)}</b>${word.slice(3)}`;
        } else if (word.length > 4) {
          return `<b>${word.slice(0, 4)}</b>${word.slice(4)}`;
        }
      })
      .join(" ");
    item.innerHTML = result;
  }
});
