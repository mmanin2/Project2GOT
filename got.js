const url = "https://thronesapi.com/api/v2/characters";
const output = document.querySelector(".output");

function performFetch() {
  fetch(url)
    .then(function (res) {
      console.log(res);
      return res.json();
    })
    .then(function (id) {
      console.log(id);
      output.innerHTML = '';
      let nameValue = document.querySelector("[name=name]").value;
      id.forEach(function (val) {
          if ( val.fullName.toUpperCase().includes(nameValue.toUpperCase()) ) {
        output.innerHTML += `
            <div class="characters">
            <h3>${val.fullName}</h3>
            <img src=${val.imageUrl} alt="${val.fullName}" />
            <aside>
                <div>Known as : ${val.title}</div>
                <div>Family: ${val.family}</div>
            </aside>
            </div>
            `;
          }
        });
    })
    .catch(function (error) {
      console.log(error);
    });
}

function submitForm(event) {
  event.preventDefault();
  performFetch(event);
}

const form = document.querySelector(".js-search-form");
form.addEventListener("submit", submitForm);