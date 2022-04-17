const cars = require("../data/cars");

const getAll = (data = {}) =>
	new Promise((resolve) => {
		let result = Array.from(cars);
		if (data.id) {
			result = result.filter((x) => x.id === parseInt(data.id));
		}
		if (data.carMake) {
			result = result.filter((x) => x.carMake.toLowerCase().includes(data.carMake.toLowerCase()));
		}
		if (data.carModel) {
			result = result.filter((x) => x.carModel.toLowerCase().includes(data.carModel.toLowerCase()));
		}
		if (data.carModelYear) {
			result = result.filter((x) => x.carModelYear === parseInt(data.carModelYear));
		}
		if (data.color) {
			result = result.filter((x) => x.color.toLowerCase().includes(data.color.toLowerCase()));
		}
		resolve({ code: 200, data: result });
	});

const getById = (id) =>
	new Promise((resolve) => {
		const car = cars.find((car) => car.id === id);

		if (car) {
			resolve({ code: 200, data: car });
		} else {
			resolve({
				code: 404,
				data: { message: `No car found for id ${id}` },
			});
		}
	});

module.exports = {
	getAll,
	getById,
};
