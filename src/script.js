document.querySelectorAll("article p").forEach(item => {
    if (!item.querySelector('img')) {
      const text = item.textContent
      const result = text.split(' ').map(word => {
        if (word.length > 2) {
          return `<b>${word.slice(0,2)}</b>${word.slice(2)}`
        }
      }).join(' ')
      item.innerHTML = result
    }
  })