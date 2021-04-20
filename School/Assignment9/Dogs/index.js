document.addEventListener("DOMContentLoaded", () => {
  let url = `http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?`;

  $.getJSON(
    url,
    { tags: "dogs", tagmode: "any", format: "json" },
    function (data) {
      data.items.forEach((element) => {
        let images = document.getElementById("images");
        images.insertAdjacentHTML(
          "beforeend",
          `<img src="${element.media.m}">`
        );
      });
    }
  );
});
