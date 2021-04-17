document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("btn");
  let dataBody = document.querySelector(".data-body");

  button.addEventListener("click", () => {
    dataBody.innerHTML = "";
    let city = document.getElementById("city").value;
    let urls = `http://beermapping.com/webservice/loccity/58e24f0f72723d5be8e94a46bb076e28/${city}&s=json`;

    beerLocation(urls);
  });

  function beerLocation(url) {
    fetch(url)
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        if (data[0].name === null) {
          dataBody.innerHTML = "No Data Found";
        } else {
          addTable(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function addTable(data) {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let head = `<tr> <th>S.No</th> <th>Name</th> <th>Style</th> <th>Address</th> <th>Phone</th> <th>Website</th> </tr>`;
    table.appendChild(thead).insertAdjacentElement("afterend", tbody);

    dataBody.insertAdjacentElement("beforeend", table);
    thead.insertAdjacentHTML("afterbegin", head);

    for (let i = 0; i < data.length; i++) {
      let body = `
                <tr>
                    <td>${i + 1}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].status}</td>
                    <td>${data[i].street},${data[i].city},${data[i].state}</td>
                    <td>${data[i].phone}</td>
                    <td><a href="http://${data[i].url}">${data[i].name}</a></td>
                </tr>`;
      tbody.insertAdjacentHTML("beforeend", body);
    }
  }
});
