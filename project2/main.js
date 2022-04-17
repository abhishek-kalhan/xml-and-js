const { getAll } = require("./controller/cars.js");

const renderTable = (data) => {
	const tableBody = document.getElementById("table-data");

	if (!tableBody) {
		throw new Error("No table element found");
	}

	let source = data;

	const rows = source.reduce(
		(acc, { id, carMake, carModel, vin, color }) =>
			acc +
			`<tr id="table-row-${id}"><td>${id}</td><td>${carMake}</td><td>${carModel}</td><td>${vin}</td><td>${color}</td></tr>`,
		``
	);

	tableBody.innerHTML = rows;
};

getAll().then(({ data }) =>  {
  renderTable(data)
});

window.onSubmit = (event) => {
	event.preventDefault();

	const id = event.target.id.value;
	const carMake = event.target.carMake.value;
	const carModel = event.target.carModel.value;
	const vin = event.target.vin.value;
	const color = event.target.color.value;

	getAll({ id, carMake, carModel, vin, color }).then(({ data }) =>
		renderTable(data)
	);
};

window.onReset = () => {
	getAll().then(({ data }) => renderTable(data));
};
