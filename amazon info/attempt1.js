/* *************************************************************
Amazon search storage:
Store all images and titles that appear on an amazon
search results page.

Search page: 
https://www.amazon.com/s?k=ram+32gb&ref=nb_sb_ss_ts-doa-p_2_4
************************************************************* */

let images = Array.from(
  document.querySelectorAll(
    `[data-component-type="s-product-image"] img.s-image`
  )
);
let descriptions = Array.from(
  document.querySelectorAll(`.s-main-slot .sg-row h2 > .a-link-normal > span`)
);
let data = [];
images.forEach((img, i) =>
  data.push({ image: img.src, text: descriptions[i].innerText })
);
// I had to look up the method to convert to JSON string
products = JSON.stringify(data);
localStorage.setItem("products", products);

// Check if code was stored properly to localStorage
localStorage.getItem("products");

/* *************************************************************
Sources:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
************************************************************* */
