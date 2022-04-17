(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const cars = require("../data/cars");

const getAll = (data = {}) =>
	new Promise((resolve) => {
		let result = Array.from(cars);
		if (data.id) {
			result = result.filter((x) => x.id === parseInt(data.id));
		}
		if (data.carMake) {
			result = result.filter((x) => x.carMake.toLowerCase().includes(data.carMake));
		}
		if (data.carModel) {
			result = result.filter((x) => x.carModel.toLowerCase().includes(data.carModel));
		}
		if (data.carModelYear) {
			result = result.filter((x) => x.carModelYear === parseInt(data.carModelYear));
		}
		if (data.color) {
			result = result.filter((x) => x.color.toLowerCase().includes(data.color));
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

},{"../data/cars":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"carMake":"Nissan","carModel":"Armada","carModelYear":2005,"color":"Teal"},
    {"id":2,"carMake":"Acura","carModel":"NSX","carModelYear":2003,"color":"Khaki"},
    {"id":3,"carMake":"Buick","carModel":"Lucerne","carModelYear":2010,"color":"Blue"},
    {"id":4,"carMake":"Buick","carModel":"Roadmaster","carModelYear":1991,"color":"Aquamarine"},
    {"id":5,"carMake":"Mercedes-Benz","carModel":"SL-Class","carModelYear":2008,"color":"Puce"},
    {"id":6,"carMake":"Mitsubishi","carModel":"GTO","carModelYear":1991,"color":"Yellow"},
    {"id":7,"carMake":"BMW","carModel":"5 Series","carModelYear":1992,"color":"Red"},
    {"id":8,"carMake":"Chevrolet","carModel":"Tahoe","carModelYear":1995,"color":"Fuscia"},
    {"id":9,"carMake":"Mercedes-Benz","carModel":"M-Class","carModelYear":2005,"color":"Orange"},
    {"id":10,"carMake":"Ford","carModel":"F250","carModelYear":2010,"color":"Maroon"},
    {"id":11,"carMake":"Volvo","carModel":"960","carModelYear":1993,"color":"Aquamarine"},
    {"id":12,"carMake":"Dodge","carModel":"Stratus","carModelYear":2002,"color":"Khaki"},
    {"id":13,"carMake":"Dodge","carModel":"Ram Wagon B250","carModelYear":1993,"color":"Maroon"},
    {"id":14,"carMake":"Fiat","carModel":"500","carModelYear":2012,"color":"Turquoise"},
    {"id":15,"carMake":"Hummer","carModel":"H2 SUT","carModelYear":2006,"color":"Green"},
    {"id":16,"carMake":"Lexus","carModel":"GS","carModelYear":2005,"color":"Pink"},
    {"id":17,"carMake":"GMC","carModel":"3500","carModelYear":1993,"color":"Red"},
    {"id":18,"carMake":"Infiniti","carModel":"J","carModelYear":1996,"color":"Teal"},
    {"id":19,"carMake":"BMW","carModel":"X6","carModelYear":2008,"color":"Crimson"},
    {"id":20,"carMake":"Toyota","carModel":"Sequoia","carModelYear":2010,"color":"Blue"},
    {"id":21,"carMake":"Ford","carModel":"E-Series","carModelYear":2009,"color":"Red"},
    {"id":22,"carMake":"Volkswagen","carModel":"New Beetle","carModelYear":2001,"color":"Maroon"},
    {"id":23,"carMake":"Chevrolet","carModel":"Express 2500","carModelYear":2001,"color":"Crimson"},
    {"id":24,"carMake":"Jeep","carModel":"Liberty","carModelYear":2008,"color":"Blue"},
    {"id":25,"carMake":"Porsche","carModel":"Boxster","carModelYear":2012,"color":"Violet"},
    {"id":26,"carMake":"Land Rover","carModel":"Range Rover","carModelYear":1999,"color":"Teal"},
    {"id":27,"carMake":"Ford","carModel":"Escort","carModelYear":2001,"color":"Violet"},
    {"id":28,"carMake":"Chevrolet","carModel":"Cavalier","carModelYear":2001,"color":"Mauv"},
    {"id":29,"carMake":"Volkswagen","carModel":"Jetta","carModelYear":1997,"color":"Fuscia"},
    {"id":30,"carMake":"Mitsubishi","carModel":"GTO","carModelYear":1995,"color":"Aquamarine"},
    {"id":31,"carMake":"Volkswagen","carModel":"Passat","carModelYear":1986,"color":"Red"},
    {"id":32,"carMake":"Audi","carModel":"S4","carModelYear":1994,"color":"Red"},
    {"id":33,"carMake":"Suzuki","carModel":"SX4","carModelYear":2012,"color":"Indigo"},
    {"id":34,"carMake":"Toyota","carModel":"Sienna","carModelYear":2010,"color":"Turquoise"},
    {"id":35,"carMake":"Jaguar","carModel":"XK Series","carModelYear":1998,"color":"Mauv"},
    {"id":36,"carMake":"Honda","carModel":"Civic","carModelYear":2008,"color":"Blue"},
    {"id":37,"carMake":"Chevrolet","carModel":"Tahoe","carModelYear":2007,"color":"Yellow"},
    {"id":38,"carMake":"Mitsubishi","carModel":"Mirage","carModelYear":2002,"color":"Green"},
    {"id":39,"carMake":"Cadillac","carModel":"SRX","carModelYear":2011,"color":"Indigo"},
    {"id":40,"carMake":"Subaru","carModel":"XT","carModelYear":1991,"color":"Yellow"},
    {"id":41,"carMake":"Dodge","carModel":"Dakota","carModelYear":2002,"color":"Yellow"},
    {"id":42,"carMake":"Aston Martin","carModel":"DBS","carModelYear":2010,"color":"Goldenrod"},
    {"id":43,"carMake":"Ford","carModel":"Fairlane","carModelYear":1966,"color":"Indigo"},
    {"id":44,"carMake":"Aston Martin","carModel":"DBS","carModelYear":2011,"color":"Blue"},
    {"id":45,"carMake":"Ford","carModel":"Econoline E350","carModelYear":1999,"color":"Turquoise"},
    {"id":46,"carMake":"Toyota","carModel":"Solara","carModelYear":2001,"color":"Turquoise"},
    {"id":47,"carMake":"Mitsubishi","carModel":"Mirage","carModelYear":2002,"color":"Maroon"},
    {"id":48,"carMake":"Lexus","carModel":"LS","carModelYear":1990,"color":"Red"},
    {"id":49,"carMake":"Buick","carModel":"Park Avenue","carModelYear":1992,"color":"Khaki"},
    {"id":50,"carMake":"Dodge","carModel":"Ram 2500","carModelYear":2000,"color":"Crimson"},
    {"id":51,"carMake":"Kia","carModel":"Soul","carModelYear":2010,"color":"Goldenrod"},
    {"id":52,"carMake":"Saab","carModel":"9-5","carModelYear":2007,"color":"Aquamarine"},
    {"id":53,"carMake":"Land Rover","carModel":"LR4","carModelYear":2011,"color":"Turquoise"},
    {"id":54,"carMake":"Daewoo","carModel":"Lanos","carModelYear":2002,"color":"Khaki"},
    {"id":55,"carMake":"Jaguar","carModel":"XK","carModelYear":2006,"color":"Purple"},
    {"id":56,"carMake":"Toyota","carModel":"FJ Cruiser","carModelYear":2012,"color":"Orange"},
    {"id":57,"carMake":"Chevrolet","carModel":"G-Series G30","carModelYear":1993,"color":"Fuscia"},
    {"id":58,"carMake":"Mercury","carModel":"Cougar","carModelYear":1999,"color":"Maroon"},
    {"id":59,"carMake":"Ford","carModel":"Fusion","carModelYear":2010,"color":"Khaki"},
    {"id":60,"carMake":"Pontiac","carModel":"Firebird","carModelYear":1989,"color":"Goldenrod"},
    {"id":61,"carMake":"Plymouth","carModel":"Laser","carModelYear":1992,"color":"Fuscia"},
    {"id":62,"carMake":"Lincoln","carModel":"Town Car","carModelYear":2004,"color":"Orange"},
    {"id":63,"carMake":"Ford","carModel":"Econoline E250","carModelYear":1994,"color":"Blue"},
    {"id":64,"carMake":"Nissan","carModel":"Maxima","carModelYear":2011,"color":"Mauv"},
    {"id":65,"carMake":"Honda","carModel":"Insight","carModelYear":2002,"color":"Purple"},
    {"id":66,"carMake":"BMW","carModel":"X5 M","carModelYear":2010,"color":"Red"},
    {"id":67,"carMake":"BMW","carModel":"X5","carModelYear":2007,"color":"Orange"},
    {"id":68,"carMake":"Audi","carModel":"A8","carModelYear":2010,"color":"Violet"},
    {"id":69,"carMake":"Infiniti","carModel":"FX","carModelYear":2007,"color":"Red"},
    {"id":70,"carMake":"Lamborghini","carModel":"Gallardo","carModelYear":2006,"color":"Red"},
    {"id":71,"carMake":"Plymouth","carModel":"Voyager","carModelYear":1997,"color":"Blue"},
    {"id":72,"carMake":"Volvo","carModel":"S60","carModelYear":2009,"color":"Khaki"},
    {"id":73,"carMake":"Nissan","carModel":"NX","carModelYear":1993,"color":"Teal"},
    {"id":74,"carMake":"Volkswagen","carModel":"Golf","carModelYear":1991,"color":"Aquamarine"},
    {"id":75,"carMake":"Mazda","carModel":"Mazda6 5-Door","carModelYear":2006,"color":"Khaki"},
    {"id":76,"carMake":"Toyota","carModel":"Matrix","carModelYear":2006,"color":"Yellow"},
    {"id":77,"carMake":"Jensen","carModel":"Interceptor","carModelYear":1966,"color":"Khaki"},
    {"id":78,"carMake":"BMW","carModel":"3 Series","carModelYear":1995,"color":"Crimson"},
    {"id":79,"carMake":"GMC","carModel":"Envoy","carModelYear":2002,"color":"Turquoise"},
    {"id":80,"carMake":"Mercury","carModel":"Villager","carModelYear":1993,"color":"Fuscia"},
    {"id":81,"carMake":"Mercedes-Benz","carModel":"G-Class","carModelYear":2004,"color":"Khaki"},
    {"id":82,"carMake":"Pontiac","carModel":"Bonneville","carModelYear":1989,"color":"Pink"},
    {"id":83,"carMake":"Suzuki","carModel":"Swift","carModelYear":1997,"color":"Khaki"},
    {"id":84,"carMake":"Ford","carModel":"Thunderbird","carModelYear":1967,"color":"Puce"},
    {"id":85,"carMake":"Ford","carModel":"Probe","carModelYear":1996,"color":"Pink"},
    {"id":86,"carMake":"Porsche","carModel":"Cayenne","carModelYear":2013,"color":"Teal"},
    {"id":87,"carMake":"Pontiac","carModel":"6000","carModelYear":1989,"color":"Blue"},
    {"id":88,"carMake":"Saab","carModel":"900","carModelYear":1987,"color":"Orange"},
    {"id":89,"carMake":"Acura","carModel":"ZDX","carModelYear":2012,"color":"Indigo"},
    {"id":90,"carMake":"Dodge","carModel":"Ram Van B150","carModelYear":1992,"color":"Fuscia"},
    {"id":91,"carMake":"Toyota","carModel":"Paseo","carModelYear":1993,"color":"Aquamarine"},
    {"id":92,"carMake":"Chevrolet","carModel":"Blazer","carModelYear":2002,"color":"Yellow"},
    {"id":93,"carMake":"GMC","carModel":"Savana","carModelYear":2012,"color":"Violet"},
    {"id":94,"carMake":"GMC","carModel":"Envoy","carModelYear":2006,"color":"Goldenrod"},
    {"id":95,"carMake":"Porsche","carModel":"Cayenne","carModelYear":2009,"color":"Crimson"},
    {"id":96,"carMake":"GMC","carModel":"3500 Club Coupe","carModelYear":1995,"color":"Indigo"},
    {"id":97,"carMake":"Infiniti","carModel":"JX","carModelYear":2013,"color":"Violet"},
    {"id":98,"carMake":"BMW","carModel":"5 Series","carModelYear":2011,"color":"Purple"},
    {"id":99,"carMake":"Dodge","carModel":"Caravan","carModelYear":2012,"color":"Pink"},
    {"id":100,"carMake":"Saturn","carModel":"VUE","carModelYear":2007,"color":"Green"},
    {"id":101,"carMake":"Chevrolet","carModel":"Suburban 2500","carModelYear":1992,"color":"Mauv"},
    {"id":102,"carMake":"Mazda","carModel":"B-Series","carModelYear":1990,"color":"Indigo"},
    {"id":103,"carMake":"Jeep","carModel":"Patriot","carModelYear":2009,"color":"Blue"},
    {"id":104,"carMake":"Nissan","carModel":"240SX","carModelYear":1998,"color":"Fuscia"},
    {"id":105,"carMake":"Dodge","carModel":"Ram","carModelYear":1994,"color":"Pink"},
    {"id":106,"carMake":"BMW","carModel":"5 Series","carModelYear":2007,"color":"Maroon"},
    {"id":107,"carMake":"Lexus","carModel":"GS","carModelYear":1999,"color":"Orange"},
    {"id":108,"carMake":"Geo","carModel":"Prizm","carModelYear":1995,"color":"Orange"},
    {"id":109,"carMake":"Lotus","carModel":"Exige","carModelYear":2005,"color":"Goldenrod"},
    {"id":110,"carMake":"Ford","carModel":"F350","carModelYear":2007,"color":"Indigo"},
    {"id":111,"carMake":"Jeep","carModel":"Wrangler","carModelYear":1993,"color":"Red"},
    {"id":112,"carMake":"GMC","carModel":"Sonoma","carModelYear":1999,"color":"Maroon"},
    {"id":113,"carMake":"Ford","carModel":"Festiva","carModelYear":1993,"color":"Mauv"},
    {"id":114,"carMake":"Jeep","carModel":"Liberty","carModelYear":2007,"color":"Crimson"},
    {"id":115,"carMake":"Mitsubishi","carModel":"GTO","carModelYear":1995,"color":"Khaki"},
    {"id":116,"carMake":"Audi","carModel":"RS6","carModelYear":2003,"color":"Aquamarine"},
    {"id":117,"carMake":"Mazda","carModel":"Miata MX-5","carModelYear":2002,"color":"Goldenrod"},
    {"id":118,"carMake":"Suzuki","carModel":"Forenza","carModelYear":2007,"color":"Khaki"},
    {"id":119,"carMake":"Mazda","carModel":"B-Series Plus","carModelYear":1999,"color":"Khaki"},
    {"id":120,"carMake":"Jaguar","carModel":"XK","carModelYear":2007,"color":"Violet"},
    {"id":121,"carMake":"Mercury","carModel":"Sable","carModelYear":1991,"color":"Puce"},
    {"id":122,"carMake":"Subaru","carModel":"Tribeca","carModelYear":2009,"color":"Fuscia"},
    {"id":123,"carMake":"Toyota","carModel":"Highlander","carModelYear":2003,"color":"Mauv"},
    {"id":124,"carMake":"Ford","carModel":"Excursion","carModelYear":2003,"color":"Goldenrod"},
    {"id":125,"carMake":"Chevrolet","carModel":"Corvette","carModelYear":1994,"color":"Crimson"},
    {"id":126,"carMake":"Volvo","carModel":"V70","carModelYear":2009,"color":"Indigo"},
    {"id":127,"carMake":"BMW","carModel":"5 Series","carModelYear":2011,"color":"Turquoise"},
    {"id":128,"carMake":"Maserati","carModel":"Gran Sport","carModelYear":2005,"color":"Maroon"},
    {"id":129,"carMake":"Kia","carModel":"Rio","carModelYear":2005,"color":"Violet"},
    {"id":130,"carMake":"Volvo","carModel":"940","carModelYear":1994,"color":"Crimson"},
    {"id":131,"carMake":"Suzuki","carModel":"Forenza","carModelYear":2005,"color":"Turquoise"},
    {"id":132,"carMake":"Toyota","carModel":"Corolla","carModelYear":1993,"color":"Yellow"},
    {"id":133,"carMake":"Land Rover","carModel":"Range Rover","carModelYear":1995,"color":"Khaki"},
    {"id":134,"carMake":"Volkswagen","carModel":"Cabriolet","carModelYear":2000,"color":"Green"},
    {"id":135,"carMake":"Chevrolet","carModel":"Astro","carModelYear":2002,"color":"Pink"},
    {"id":136,"carMake":"Acura","carModel":"Integra","carModelYear":1997,"color":"Maroon"},
    {"id":137,"carMake":"Dodge","carModel":"Grand Caravan","carModelYear":1995,"color":"Maroon"},
    {"id":138,"carMake":"Chevrolet","carModel":"Express 3500","carModelYear":1998,"color":"Violet"},
    {"id":139,"carMake":"Dodge","carModel":"Caliber","carModelYear":2010,"color":"Puce"},
    {"id":140,"carMake":"Lincoln","carModel":"Continental","carModelYear":1996,"color":"Teal"},
    {"id":141,"carMake":"Dodge","carModel":"Grand Caravan","carModelYear":1995,"color":"Puce"},
    {"id":142,"carMake":"Pontiac","carModel":"G6","carModelYear":2010,"color":"Turquoise"},
    {"id":143,"carMake":"Audi","carModel":"S6","carModelYear":2008,"color":"Indigo"},
    {"id":144,"carMake":"Chevrolet","carModel":"Cavalier","carModelYear":2000,"color":"Mauv"},
    {"id":145,"carMake":"Toyota","carModel":"Tacoma Xtra","carModelYear":2001,"color":"Fuscia"},
    {"id":146,"carMake":"Infiniti","carModel":"Q","carModelYear":1998,"color":"Turquoise"},
    {"id":147,"carMake":"Chevrolet","carModel":"SSR","carModelYear":2003,"color":"Turquoise"},
    {"id":148,"carMake":"Mazda","carModel":"Mazdaspeed 3","carModelYear":2010,"color":"Mauv"},
    {"id":149,"carMake":"Chrysler","carModel":"Cirrus","carModelYear":1999,"color":"Indigo"},
    {"id":150,"carMake":"Dodge","carModel":"Dakota Club","carModelYear":2006,"color":"Fuscia"},
    {"id":151,"carMake":"Scion","carModel":"tC","carModelYear":2008,"color":"Teal"},
    {"id":152,"carMake":"Ford","carModel":"E250","carModelYear":2011,"color":"Khaki"},
    {"id":153,"carMake":"Ford","carModel":"Club Wagon","carModelYear":1995,"color":"Fuscia"},
    {"id":154,"carMake":"Dodge","carModel":"Durango","carModelYear":2001,"color":"Puce"},
    {"id":155,"carMake":"Nissan","carModel":"Quest","carModelYear":1998,"color":"Red"},
    {"id":156,"carMake":"Maserati","carModel":"Quattroporte","carModelYear":2006,"color":"Turquoise"},
    {"id":157,"carMake":"Infiniti","carModel":"QX","carModelYear":1998,"color":"Crimson"},
    {"id":158,"carMake":"Buick","carModel":"Regal","carModelYear":2012,"color":"Khaki"},
    {"id":159,"carMake":"Pontiac","carModel":"Firefly","carModelYear":1992,"color":"Teal"},
    {"id":160,"carMake":"Chevrolet","carModel":"Equinox","carModelYear":2010,"color":"Red"},
    {"id":161,"carMake":"Pontiac","carModel":"Bonneville","carModelYear":1967,"color":"Green"},
    {"id":162,"carMake":"Lotus","carModel":"Exige","carModelYear":2005,"color":"Aquamarine"},
    {"id":163,"carMake":"Oldsmobile","carModel":"Ciera","carModelYear":1992,"color":"Fuscia"},
    {"id":164,"carMake":"Mitsubishi","carModel":"Montero Sport","carModelYear":2000,"color":"Mauv"},
    {"id":165,"carMake":"Maserati","carModel":"228","carModelYear":1989,"color":"Yellow"},
    {"id":166,"carMake":"Chevrolet","carModel":"Suburban","carModelYear":2008,"color":"Khaki"},
    {"id":167,"carMake":"Volvo","carModel":"V70","carModelYear":1999,"color":"Pink"},
    {"id":168,"carMake":"Smart","carModel":"Fortwo","carModelYear":2012,"color":"Crimson"},
    {"id":169,"carMake":"Buick","carModel":"Riviera","carModelYear":1990,"color":"Teal"},
    {"id":170,"carMake":"Honda","carModel":"Insight","carModelYear":2000,"color":"Violet"},
    {"id":171,"carMake":"Mitsubishi","carModel":"Lancer","carModelYear":2009,"color":"Fuscia"},
    {"id":172,"carMake":"Suzuki","carModel":"Swift","carModelYear":2005,"color":"Goldenrod"},
    {"id":173,"carMake":"Mitsubishi","carModel":"Lancer","carModelYear":2007,"color":"Teal"},
    {"id":174,"carMake":"BMW","carModel":"330","carModelYear":2006,"color":"Fuscia"},
    {"id":175,"carMake":"Mazda","carModel":"RX-7","carModelYear":1991,"color":"Orange"},
    {"id":176,"carMake":"Nissan","carModel":"Maxima","carModelYear":2009,"color":"Mauv"},
    {"id":177,"carMake":"Hyundai","carModel":"Sonata","carModelYear":2002,"color":"Green"},
    {"id":178,"carMake":"Mitsubishi","carModel":"Lancer Evolution","carModelYear":2006,"color":"Fuscia"},
    {"id":179,"carMake":"Dodge","carModel":"Viper","carModelYear":2006,"color":"Aquamarine"},
    {"id":180,"carMake":"Hummer","carModel":"H2","carModelYear":2003,"color":"Goldenrod"},
    {"id":181,"carMake":"Mercury","carModel":"Mountaineer","carModelYear":2004,"color":"Teal"},
    {"id":182,"carMake":"Ford","carModel":"Contour","carModelYear":1996,"color":"Violet"},
    {"id":183,"carMake":"Nissan","carModel":"Pathfinder","carModelYear":2007,"color":"Crimson"},
    {"id":184,"carMake":"Kia","carModel":"Sedona","carModelYear":2009,"color":"Fuscia"},
    {"id":185,"carMake":"Ferrari","carModel":"F430","carModelYear":2007,"color":"Blue"},
    {"id":186,"carMake":"Nissan","carModel":"350Z","carModelYear":2009,"color":"Purple"},
    {"id":187,"carMake":"Chevrolet","carModel":"Malibu","carModelYear":1998,"color":"Red"},
    {"id":188,"carMake":"Jeep","carModel":"Patriot","carModelYear":2009,"color":"Puce"},
    {"id":189,"carMake":"Mazda","carModel":"Mazda6","carModelYear":2005,"color":"Violet"},
    {"id":190,"carMake":"Pontiac","carModel":"G3","carModelYear":2009,"color":"Blue"},
    {"id":191,"carMake":"Chevrolet","carModel":"Suburban 1500","carModelYear":1999,"color":"Puce"},
    {"id":192,"carMake":"GMC","carModel":"Savana 1500","carModelYear":1996,"color":"Purple"},
    {"id":193,"carMake":"Mercury","carModel":"Grand Marquis","carModelYear":2006,"color":"Aquamarine"},
    {"id":194,"carMake":"Honda","carModel":"S2000","carModelYear":2004,"color":"Purple"},
    {"id":195,"carMake":"GMC","carModel":"Sierra 3500","carModelYear":2002,"color":"Yellow"},
    {"id":196,"carMake":"GMC","carModel":"Envoy","carModelYear":2005,"color":"Purple"},
    {"id":197,"carMake":"BMW","carModel":"Z3","carModelYear":2000,"color":"Purple"},
    {"id":198,"carMake":"Pontiac","carModel":"Firebird","carModelYear":1984,"color":"Khaki"},
    {"id":199,"carMake":"Mitsubishi","carModel":"Challenger","carModelYear":1999,"color":"Pink"},
    {"id":200,"carMake":"Chevrolet","carModel":"Camaro","carModelYear":1972,"color":"Aquamarine"}]
},{}],3:[function(require,module,exports){
const { getAll } = require("./controller/cars.js");

const renderTable = (data) => {
	const tableBody = document.getElementById("table-data");

	if (!tableBody) {
		throw new Error("No table element found");
	}

	let source = data;

	const rows = source.reduce(
		(acc, { id, carMake, carModel, carModelYear, color }) =>
			acc +
			`<tr id="table-row-${id}"><td>${id}</td><td>${carMake}</td><td>${carModel}</td><td>${carModelYear}</td><td>${color}</td></tr>`,
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
	const carModelYear = event.target.carModelYear.value;
	const color = event.target.color.value;

	getAll({ id, carMake, carModel, carModelYear, color }).then(({ data }) =>
		renderTable(data)
	);
};

window.onReset = () => {
	getAll().then(({ data }) => renderTable(data));
};

},{"./controller/cars.js":1}]},{},[3]);
