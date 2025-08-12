(function() {
  function getText(selector) {
    const el = document.querySelector(selector);
    return el ? el.textContent.trim() : 'N/A';
  }

  const url = window.location.href;
  const title = getText('#productTitle');
  const author = getText('.author a');
  const isbn = Array.from(document.querySelectorAll('#detailBullets_feature_div li'))
    .map(li => li.textContent)
    .find(text => text.includes('ISBN-10'))
    ?.match(/\d{10}/)?.[0] || 'ISBN not found';

  const result = `{{< amazon\n  url="${url}"\n  title="${title}"\n  author="${author}"\n  isbn="${isbn}" >}}`;
  navigator.clipboard.writeText(result).then(() => {
    console.log('copied: ', result);
  }).catch(err => {
    console.error('failed to copy: ', err);
  });
})();
