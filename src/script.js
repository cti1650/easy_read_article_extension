console.log("done");
(() => {
  const checkword = (word) => {
    const reg = /^[a-zA-Z0-9,\.'\!\?]+$/;
    return reg.test(word);
  };
  document.querySelectorAll("article p,article li,article ui").forEach((item) => {
    if (!item.querySelector("img")) {
      const text = item.textContent;
      const result = text
        .split(/\s+/)
        .map((word) => {
          if (checkword(word)) {
            if (word.length === 2) {
              return `<b>${word.slice(0, 1)}</b>${word.slice(1)}`;
            } else if (word.length === 3) {
              return `<b>${word.slice(0, 1)}</b>${word.slice(1)}`;
            } else if (word.length === 4) {
              return `<b>${word.slice(0, 3)}</b>${word.slice(3)}`;
            } else if (word.length > 4) {
              return `<b>${word.slice(0, 4)}</b>${word.slice(4)}`;
            }
          } else {
            return word;
          }
        })
        .join(" ");
      item.innerHTML = result;
    }
  });
})();
