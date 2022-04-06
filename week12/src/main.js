const { getAll } = require("./api/products.js");

const loadData = (path) =>
	new Promise((resolve) => {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = ({ target }) => {
			if (target.readyState == 4 && target.status == 200) {
				resolve(JSON.parse(target.response));
			}
		};
		xhttp.open("GET", path, true);
		xhttp.send();
	});

  const renderTable = (data) => {
    const tableBody = document.getElementById("table-body");
  
    if (!tableBody) {
      throw new Error("No table element found");
    }
  
    let source = data;
    const params = new URLSearchParams(window.location.search);
    const name = params.get("first_name");
    const car_make = params.get("car_make");
    const car_model = params.get("car_model");
    if (name) {
      source = source.filter(({ first_name }) =>
        first_name.toLowerCase().includes(name)
      );
    }
    if (car_make) {
      source = source.filter((elm) => elm.car_make == (car_make));
    }
    if (car_model) {
      source = source.filter((elm) => elm.car_model == (car_model));
    }
    const rows = source.reduce(
      (
        acc,
        {
          id,
          first_name,
          last_name,
          gender,
          email,
          dept,
          car_make,
          car_model,
          car_model_year,
          city,
        }
      ) =>
        acc +
        `<tr><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${gender}</td><td>${email}</td><td>${dept}</td><td>${car_make}</td><td>${car_model}</td><td>${car_model_year}</td><td>${city}</td></tr>`,
      ``
    );
  
    tableBody.innerHTML = rows;
  };
  

getAll().then(({ data }) => renderTable(data));

const onSubmit = (event) => {
  event.preventDefault();

  const term = event.target.name.value;

  getAll().then(({ data }) => renderTable(data, term));
};

const onReset = () => {
  getAll().then(({ data }) => renderTable(data));
};
