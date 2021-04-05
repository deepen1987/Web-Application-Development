import { news } from "./news.js";

document.addEventListener("DOMContentLoaded", () => {
  let newsArticle = document.querySelector(".news");
  let keySearch = document.getElementById("key-search");
  let authSearch = document.getElementById("auth-search");
  let dateSearch = document.getElementById("date-search");

  let newsArr = "";
  for (const arr of news) {
    newsArr += `
    <div class="article">
      <a href="${arr.url}" target="_blank">
          <div>
              <div class="headline">${arr.caption}</div>
               <div class="story">
              ${arr.story}
              </div>
              <div class="author-date"><span class="publisher">${arr.source}</span>${arr.author}, ${arr.released}</div>
          </div>
      </a>
    </div>`;
  }
  newsArticle.innerHTML = newsArr;

  dateSearch.addEventListener("click", () => {
    let dateIn = document.getElementById("date").value;

    document.getElementById("auth").value = "";
    document.getElementById("key").value = "";

    let newsArr = "";
    for (const arr of news) {
      newsArticle.innerHTML = "";
      if (dateIn == arr.released.substr(0, 10)) {
        newsArr += `
    <div class="article">
      <a href="${arr.url}" target="_blank">
          <div>
              <div class="headline">${arr.caption}</div>
               <div class="story">
              ${arr.story}
              </div>
              <div class="author-date"><span class="publisher">${arr.source}</span>${arr.author}, ${arr.released}</div>
          </div>
      </a>
    </div>`;
      }
    }
    newsArticle.innerHTML = newsArr;
  });

  authSearch.addEventListener("click", () => {
    let authIn = document.getElementById("auth").value;

    document.getElementById("date").value = "";
    document.getElementById("key").value = "";

    let newsArr = "";
    for (const arr of news) {
      newsArticle.innerHTML = "";
      if (arr.author.toLowerCase().includes(authIn.toLowerCase())) {
        newsArr += `
    <div class="article">
      <a href="${arr.url}" target="_blank">
          <div>
              <div class="headline">${arr.caption}</div>
               <div class="story">
              ${arr.story}
              </div>
              <div class="author-date"><span class="publisher">${arr.source}</span>${arr.author}, ${arr.released}</div>
          </div>
      </a>
    </div>`;
      }
    }
    newsArticle.innerHTML = newsArr;
  });

  keySearch.addEventListener("click", () => {
    let keyIn = document.getElementById("key").value;

    document.getElementById("date").value = "";
    document.getElementById("auth").value = "";

    let newsArr = "";
    for (const arr of news) {
      newsArticle.innerHTML = "";
      if (arr.story.toLowerCase().includes(keyIn.toLowerCase())) {
        newsArr += `
    <div class="article">
      <a href="${arr.url}" target="_blank">
          <div>
              <div class="headline">${arr.caption}</div>
               <div class="story">
              ${arr.story}
              </div>
              <div class="author-date"><span class="publisher">${arr.source}</span>${arr.author}, ${arr.released}</div>
          </div>
      </a>
    </div>`;
      }
    }
    newsArticle.innerHTML = newsArr;
  });
});
