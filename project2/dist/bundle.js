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
		if (data.vin) {
			result = result.filter((x) => x.vin.toLowerCase().includes(data.vin));
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
module.exports=[{"id":1,"carMake":"BMW","carModel":"6 Series","vin":"WVGFG9BPXBD053400","color":"Khaki"},
    {"id":2,"carMake":"Buick","carModel":"Skyhawk","vin":"WDCGG5GB2BF235265","color":"Maroon"},
    {"id":3,"carMake":"Cadillac","carModel":"Sixty Special","vin":"3D73M4HL6BG604275","color":"Red"},
    {"id":4,"carMake":"Jaguar","carModel":"XK Series","vin":"WAUDH48H97K352162","color":"Pink"},
    {"id":5,"carMake":"Ford","carModel":"Explorer Sport Trac","vin":"WBANF73527C645744","color":"Red"},
    {"id":6,"carMake":"Acura","carModel":"RL","vin":"WAUFFAFL6FN218128","color":"Green"},
    {"id":7,"carMake":"Volkswagen","carModel":"Touareg","vin":"WBASN0C5XDD573288","color":"Pink"},
    {"id":8,"carMake":"Ford","carModel":"F350","vin":"SCFAB42361K527366","color":"Aquamarine"},
    {"id":9,"carMake":"Cadillac","carModel":"XLR","vin":"1N4AB7AP6EN106763","color":"Mauv"},
    {"id":10,"carMake":"Lincoln","carModel":"MKT","vin":"1C4NJPBA8ED894511","color":"Yellow"},
    {"id":11,"carMake":"BMW","carModel":"X5","vin":"WBAPH7C55AA317644","color":"Orange"},
    {"id":12,"carMake":"BMW","carModel":"3 Series","vin":"19UYA42493A401151","color":"Puce"},
    {"id":13,"carMake":"BMW","carModel":"Z8","vin":"1G6AB5SX0E0344251","color":"Red"},
    {"id":14,"carMake":"Subaru","carModel":"Baja","vin":"2HNYD18653H527015","color":"Purple"},
    {"id":15,"carMake":"Buick","carModel":"LeSabre","vin":"WAULD54B22N960143","color":"Red"},
    {"id":16,"carMake":"Buick","carModel":"LeSabre","vin":"3D73Y4HL2BG970433","color":"Aquamarine"},
    {"id":17,"carMake":"Volkswagen","carModel":"Jetta","vin":"SCFEBBBK2EG383899","color":"Blue"},
    {"id":18,"carMake":"Jaguar","carModel":"S-Type","vin":"WAUJT58E53A025366","color":"Orange"},
    {"id":19,"carMake":"Mazda","carModel":"Mazda5","vin":"WAUDGBFL9BA927695","color":"Crimson"},
    {"id":20,"carMake":"Maserati","carModel":"Quattroporte","vin":"WBAAZ33454K405563","color":"Fuscia"},
    {"id":21,"carMake":"Toyota","carModel":"Prius","vin":"WAUPL58EX5A209618","color":"Pink"},
    {"id":22,"carMake":"Toyota","carModel":"Prius","vin":"2HNYD18274H005128","color":"Yellow"},
    {"id":23,"carMake":"Oldsmobile","carModel":"98","vin":"WAUUL98E47A444254","color":"Teal"},
    {"id":24,"carMake":"Dodge","carModel":"Viper","vin":"JM3TB2MAXA0219546","color":"Fuscia"},
    {"id":25,"carMake":"Kia","carModel":"Soul","vin":"JTDJTUD34ED692187","color":"Pink"},
    {"id":26,"carMake":"BMW","carModel":"5 Series","vin":"3C4PDDDG3ET509138","color":"Maroon"},
    {"id":27,"carMake":"Ford","carModel":"E-Series","vin":"1FTEW1CM5DF328071","color":"Indigo"},
    {"id":28,"carMake":"Honda","carModel":"Pilot","vin":"JH4DC53804S705039","color":"Maroon"},
    {"id":29,"carMake":"Mazda","carModel":"CX-7","vin":"JM3KE2BE4E0941576","color":"Orange"},
    {"id":30,"carMake":"Oldsmobile","carModel":"Achieva","vin":"WBAEN33485P090551","color":"Fuscia"},
    {"id":31,"carMake":"GMC","carModel":"Sierra","vin":"1FTWX3A53AE292262","color":"Purple"},
    {"id":32,"carMake":"Isuzu","carModel":"Hombre","vin":"WAUBFAFL7DA072955","color":"Turquoise"},
    {"id":33,"carMake":"Saab","carModel":"9-3","vin":"JM1NC2EF0A0404536","color":"Aquamarine"},
    {"id":34,"carMake":"Audi","carModel":"A8","vin":"JN8AZ1MU1CW357304","color":"Aquamarine"},
    {"id":35,"carMake":"Volvo","carModel":"V70","vin":"WBAGL63462D014193","color":"Maroon"},
    {"id":36,"carMake":"Mitsubishi","carModel":"Starion","vin":"1GYEC63818R289912","color":"Maroon"},
    {"id":37,"carMake":"Pontiac","carModel":"6000","vin":"1G6DH5E59C0890050","color":"Goldenrod"},
    {"id":38,"carMake":"Mitsubishi","carModel":"GTO","vin":"WBADX7C52CE794436","color":"Green"},
    {"id":39,"carMake":"Dodge","carModel":"Ram Van 1500","vin":"1C6RD6LP8CS750365","color":"Orange"},
    {"id":40,"carMake":"Chevrolet","carModel":"Impala","vin":"WBAUC9C54BV141242","color":"Mauv"},
    {"id":41,"carMake":"Mitsubishi","carModel":"Raider","vin":"1FTMF1E81AK015145","color":"Fuscia"},
    {"id":42,"carMake":"Infiniti","carModel":"Q","vin":"2C3CDYCJ0DH597144","color":"Khaki"},
    {"id":43,"carMake":"Ford","carModel":"LTD Crown Victoria","vin":"1FMJK1F57DE746227","color":"Puce"},
    {"id":44,"carMake":"Chevrolet","carModel":"SSR","vin":"JH4KB16668C455335","color":"Teal"},
    {"id":45,"carMake":"Porsche","carModel":"911","vin":"WAULC68E12A894351","color":"Green"},
    {"id":46,"carMake":"Dodge","carModel":"Ram Wagon B350","vin":"3VW467AT0CM547415","color":"Pink"},
    {"id":47,"carMake":"Buick","carModel":"Lucerne","vin":"KNDMB5C16F6226286","color":"Violet"},
    {"id":48,"carMake":"Maybach","carModel":"62","vin":"WAUXG74F69N441601","color":"Orange"},
    {"id":49,"carMake":"Mazda","carModel":"626","vin":"JTHBC1KSXA5445725","color":"Blue"},
    {"id":50,"carMake":"Audi","carModel":"S5","vin":"JN8AS1MU4AM491849","color":"Blue"},
    {"id":51,"carMake":"Pontiac","carModel":"Firefly","vin":"KNAFT4A24D5434596","color":"Khaki"},
    {"id":52,"carMake":"Kia","carModel":"Rio","vin":"WVGAV7AX4AW737240","color":"Aquamarine"},
    {"id":53,"carMake":"Subaru","carModel":"Forester","vin":"JN8AF5MR1DT866520","color":"Purple"},
    {"id":54,"carMake":"Pontiac","carModel":"Firebird","vin":"1GYS3FEJ4DR011521","color":"Violet"},
    {"id":55,"carMake":"Lamborghini","carModel":"Murciélago","vin":"1N4AA5AP3AC450600","color":"Mauv"},
    {"id":56,"carMake":"Pontiac","carModel":"Montana","vin":"4USBT53555L878544","color":"Violet"},
    {"id":57,"carMake":"Acura","carModel":"RSX","vin":"3VWKX7AJ7CM621609","color":"Aquamarine"},
    {"id":58,"carMake":"Porsche","carModel":"Cayenne","vin":"KNAFU5A20C5940332","color":"Crimson"},
    {"id":59,"carMake":"Jaguar","carModel":"XK","vin":"WAUEV94F07N347106","color":"Blue"},
    {"id":60,"carMake":"Renault","carModel":"Alliance","vin":"WAUHFAFL1DA497954","color":"Puce"},
    {"id":61,"carMake":"Ford","carModel":"Ranger","vin":"SCBLC37F26C609634","color":"Blue"},
    {"id":62,"carMake":"Volkswagen","carModel":"Type 2","vin":"JM3TB2CV0F0638968","color":"Aquamarine"},
    {"id":63,"carMake":"Isuzu","carModel":"Amigo","vin":"WBAKG7C53DJ216359","color":"Violet"},
    {"id":64,"carMake":"Mitsubishi","carModel":"Chariot","vin":"SCBLC43F05C979622","color":"Yellow"},
    {"id":65,"carMake":"Volvo","carModel":"V40","vin":"JH4CU2F84EC587964","color":"Violet"},
    {"id":66,"carMake":"Land Rover","carModel":"Discovery","vin":"SCBLF34F66C884077","color":"Teal"},
    {"id":67,"carMake":"Chrysler","carModel":"LeBaron","vin":"1GYUCHEF1AR875325","color":"Fuscia"},
    {"id":68,"carMake":"Toyota","carModel":"Celica","vin":"1G6AC5S33E0044150","color":"Puce"},
    {"id":69,"carMake":"Suzuki","carModel":"SX4","vin":"WBAEN33452P512240","color":"Fuscia"},
    {"id":70,"carMake":"GMC","carModel":"Canyon","vin":"SCBZB25E12C773520","color":"Turquoise"},
    {"id":71,"carMake":"Maybach","carModel":"57","vin":"3C6JD6DK2CG759280","color":"Goldenrod"},
    {"id":72,"carMake":"Honda","carModel":"del Sol","vin":"4F2CY0C73BK370154","color":"Green"},
    {"id":73,"carMake":"Land Rover","carModel":"Discovery","vin":"1C4RDHEG8CC525567","color":"Mauv"},
    {"id":74,"carMake":"Audi","carModel":"S8","vin":"5UXKR0C51E0543112","color":"Red"},
    {"id":75,"carMake":"Buick","carModel":"Park Avenue","vin":"1G4GA5GC0BF066178","color":"Turquoise"},
    {"id":76,"carMake":"Audi","carModel":"A8","vin":"5BZAF0AAXFN598023","color":"Turquoise"},
    {"id":77,"carMake":"GMC","carModel":"Vandura G3500","vin":"JH4KB16667C922414","color":"Teal"},
    {"id":78,"carMake":"BMW","carModel":"5 Series","vin":"1D4SE6GTXBC812360","color":"Violet"},
    {"id":79,"carMake":"Nissan","carModel":"Altima","vin":"WAUBFAFL8FN778568","color":"Teal"},
    {"id":80,"carMake":"Suzuki","carModel":"Sidekick","vin":"SCFAD02A75G990210","color":"Mauv"},
    {"id":81,"carMake":"GMC","carModel":"Sierra 2500","vin":"WBAGH83461D349210","color":"Aquamarine"},
    {"id":82,"carMake":"Mercedes-Benz","carModel":"E-Class","vin":"3VW507AT9FM027482","color":"Purple"},
    {"id":83,"carMake":"GMC","carModel":"Savana 1500","vin":"SCFEBBCF2CG543701","color":"Goldenrod"},
    {"id":84,"carMake":"Mitsubishi","carModel":"Precis","vin":"5UXWX7C57CL756738","color":"Violet"},
    {"id":85,"carMake":"Dodge","carModel":"Ram 1500","vin":"JM3KE2BE9F0747823","color":"Goldenrod"},
    {"id":86,"carMake":"BMW","carModel":"650","vin":"5XYKT3A62EG057550","color":"Green"},
    {"id":87,"carMake":"Saturn","carModel":"Ion","vin":"1N6AD0CU6FN828439","color":"Turquoise"},
    {"id":88,"carMake":"Chrysler","carModel":"300","vin":"1G6DL8EV3A0439533","color":"Pink"},
    {"id":89,"carMake":"Porsche","carModel":"Boxster","vin":"2FMGK5DC7AB941898","color":"Orange"},
    {"id":90,"carMake":"Mitsubishi","carModel":"Galant","vin":"WBAYF8C54DD548070","color":"Teal"},
    {"id":91,"carMake":"Jaguar","carModel":"XK","vin":"JH4DB859X1S491246","color":"Blue"},
    {"id":92,"carMake":"Buick","carModel":"Century","vin":"WDCGG5GB7CF323889","color":"Yellow"},
    {"id":93,"carMake":"GMC","carModel":"Sonoma","vin":"3VW4A7AT3DM991856","color":"Aquamarine"},
    {"id":94,"carMake":"Mazda","carModel":"929","vin":"1FTMF1CW1AK403414","color":"Green"},
    {"id":95,"carMake":"Mitsubishi","carModel":"Galant","vin":"1G6DM57N530542951","color":"Goldenrod"},
    {"id":96,"carMake":"Oldsmobile","carModel":"Intrigue","vin":"JHMFB4F25CS927720","color":"Crimson"},
    {"id":97,"carMake":"Pontiac","carModel":"Grand Prix","vin":"WAUEF78E38A379690","color":"Green"},
    {"id":98,"carMake":"Mitsubishi","carModel":"Chariot","vin":"1GYS4CEF0ER892632","color":"Aquamarine"},
    {"id":99,"carMake":"Infiniti","carModel":"G","vin":"KL4CJESB8DB492092","color":"Violet"},
    {"id":100,"carMake":"Chevrolet","carModel":"Caprice Classic","vin":"1FA6P0G77E5396033","color":"Crimson"},
    {"id":101,"carMake":"Mitsubishi","carModel":"Eclipse","vin":"1FTWX3D53AE261041","color":"Blue"},
    {"id":102,"carMake":"Lincoln","carModel":"Navigator","vin":"WVWED7AJ8DW572768","color":"Maroon"},
    {"id":103,"carMake":"Ford","carModel":"F250","vin":"1FTMF1CW5AF885443","color":"Purple"},
    {"id":104,"carMake":"GMC","carModel":"Sierra 2500","vin":"WAUFGAFCXEN818260","color":"Khaki"},
    {"id":105,"carMake":"Ford","carModel":"Econoline E350","vin":"5YMGY0C5XDL908062","color":"Mauv"},
    {"id":106,"carMake":"Eagle","carModel":"Vision","vin":"JTDZN3EU5FJ694791","color":"Purple"},
    {"id":107,"carMake":"Dodge","carModel":"Magnum","vin":"1N4AB7AP6DN519488","color":"Pink"},
    {"id":108,"carMake":"Ford","carModel":"Mustang","vin":"WUAAU34278N029485","color":"Puce"},
    {"id":109,"carMake":"Cadillac","carModel":"Seville","vin":"KMHCT4AE1CU401393","color":"Aquamarine"},
    {"id":110,"carMake":"Suzuki","carModel":"Esteem","vin":"1FTNF1E85AK979624","color":"Khaki"},
    {"id":111,"carMake":"Honda","carModel":"CR-V","vin":"KMHCM3AC1BU614249","color":"Red"},
    {"id":112,"carMake":"Mazda","carModel":"323","vin":"SAJWA4GB1FL510470","color":"Blue"},
    {"id":113,"carMake":"Nissan","carModel":"Frontier","vin":"19UUA66214A325283","color":"Indigo"},
    {"id":114,"carMake":"Acura","carModel":"NSX","vin":"1G6DV5EPXD0086013","color":"Fuscia"},
    {"id":115,"carMake":"Ford","carModel":"Econoline E250","vin":"SCBLF44J37C802480","color":"Teal"},
    {"id":116,"carMake":"Dodge","carModel":"Dakota Club","vin":"1G6DJ1ED5B0586510","color":"Pink"},
    {"id":117,"carMake":"Ford","carModel":"F-Series Super Duty","vin":"1G4GD5EG0AF370008","color":"Fuscia"},
    {"id":118,"carMake":"Buick","carModel":"Roadmaster","vin":"1FTEX1C87AF417717","color":"Pink"},
    {"id":119,"carMake":"Jaguar","carModel":"XK Series","vin":"1GYFK26289R988043","color":"Crimson"},
    {"id":120,"carMake":"Land Rover","carModel":"Range Rover","vin":"JN1AJ0HP6CM928740","color":"Mauv"},
    {"id":121,"carMake":"Lexus","carModel":"IS F","vin":"1N6AF0LX1FN832127","color":"Turquoise"},
    {"id":122,"carMake":"Mitsubishi","carModel":"Mirage","vin":"WDDGF4HB8DG400966","color":"Blue"},
    {"id":123,"carMake":"Hummer","carModel":"H1","vin":"KMHDB8AE5AU374257","color":"Goldenrod"},
    {"id":124,"carMake":"MINI","carModel":"Cooper","vin":"WAUHE78P08A665353","color":"Puce"},
    {"id":125,"carMake":"Audi","carModel":"S8","vin":"5J6TF1H32EL433223","color":"Fuscia"},
    {"id":126,"carMake":"Hyundai","carModel":"Sonata","vin":"KMHHT6KD3CU394258","color":"Orange"},
    {"id":127,"carMake":"BMW","carModel":"M5","vin":"JH4KA96583C651939","color":"Green"},
    {"id":128,"carMake":"Chevrolet","carModel":"Sportvan G10","vin":"5N1AN0NUXCC842019","color":"Goldenrod"},
    {"id":129,"carMake":"Ford","carModel":"Crown Victoria","vin":"1GYEE53A990920824","color":"Aquamarine"},
    {"id":130,"carMake":"Lotus","carModel":"Esprit","vin":"WAUJT68EX4A102336","color":"Crimson"},
    {"id":131,"carMake":"Volvo","carModel":"XC70","vin":"19UUA8F71CA700045","color":"Violet"},
    {"id":132,"carMake":"Suzuki","carModel":"Samurai","vin":"WAUAVAFD3BN403298","color":"Green"},
    {"id":133,"carMake":"Dodge","carModel":"Nitro","vin":"WBADT33443G076368","color":"Crimson"},
    {"id":134,"carMake":"Acura","carModel":"RSX","vin":"JTHBL5EF0D5402733","color":"Green"},
    {"id":135,"carMake":"Subaru","carModel":"BRZ","vin":"1G6DM5ED3B0319767","color":"Red"},
    {"id":136,"carMake":"Infiniti","carModel":"G","vin":"1FTEW1CM8CK731287","color":"Green"},
    {"id":137,"carMake":"Kia","carModel":"Sorento","vin":"JH4CU2F68BC353319","color":"Crimson"},
    {"id":138,"carMake":"Mitsubishi","carModel":"Outlander Sport","vin":"4T1BF1FK9DU805298","color":"Puce"},
    {"id":139,"carMake":"Chevrolet","carModel":"Corvette","vin":"SAJWA6FC6E8700045","color":"Pink"},
    {"id":140,"carMake":"Lincoln","carModel":"MKT","vin":"JH4CU266X9C236321","color":"Yellow"},
    {"id":141,"carMake":"Chevrolet","carModel":"Equinox","vin":"5TDBKRFH3ES961636","color":"Pink"},
    {"id":142,"carMake":"Lotus","carModel":"Elan","vin":"3C6TD5DT3CG910610","color":"Yellow"},
    {"id":143,"carMake":"Isuzu","carModel":"Hombre Space","vin":"JN8AF5MV2FT146093","color":"Blue"},
    {"id":144,"carMake":"Lotus","carModel":"Esprit","vin":"3VW217AU6FM651832","color":"Red"},
    {"id":145,"carMake":"Volvo","carModel":"S80","vin":"1D7RB1CP6AS276856","color":"Violet"},
    {"id":146,"carMake":"Lotus","carModel":"Esprit","vin":"5GAKRBED3BJ313922","color":"Green"},
    {"id":147,"carMake":"Chevrolet","carModel":"Express 1500","vin":"WAUSH98E77A633926","color":"Green"},
    {"id":148,"carMake":"Eagle","carModel":"Summit","vin":"1HGCR2E72FA427575","color":"Teal"},
    {"id":149,"carMake":"Hyundai","carModel":"Sonata","vin":"KMHGH4JH8EU513480","color":"Pink"},
    {"id":150,"carMake":"Bentley","carModel":"Continental Super","vin":"1N6AF0LY6EN546894","color":"Pink"},
    {"id":151,"carMake":"Jaguar","carModel":"XJ Series","vin":"19XFA1E84AE738226","color":"Orange"},
    {"id":152,"carMake":"Mazda","carModel":"Millenia","vin":"WAUJGAFD8FN505292","color":"Maroon"},
    {"id":153,"carMake":"Jeep","carModel":"Wrangler","vin":"4T1BD1FK2EU776069","color":"Green"},
    {"id":154,"carMake":"Lexus","carModel":"HS","vin":"3D7TP2CT6BG190109","color":"Orange"},
    {"id":155,"carMake":"Chevrolet","carModel":"Silverado","vin":"1C4SDJCTXEC503484","color":"Crimson"},
    {"id":156,"carMake":"Dodge","carModel":"Ram Van B250","vin":"SCFEBBCF8BG721044","color":"Blue"},
    {"id":157,"carMake":"Pontiac","carModel":"Firebird","vin":"2G61P5S38F9039327","color":"Puce"},
    {"id":158,"carMake":"Pontiac","carModel":"Fiero","vin":"WP0AA2A90ES848983","color":"Red"},
    {"id":159,"carMake":"Audi","carModel":"S6","vin":"JN8AZ1MU1CW426881","color":"Blue"},
    {"id":160,"carMake":"Chevrolet","carModel":"Silverado 2500","vin":"JTJBC1BA9B2810694","color":"Fuscia"},
    {"id":161,"carMake":"Pontiac","carModel":"6000","vin":"1GTG5AEAXF1436462","color":"Violet"},
    {"id":162,"carMake":"Chevrolet","carModel":"Express 1500","vin":"137FA84311E923430","color":"Khaki"},
    {"id":163,"carMake":"Mitsubishi","carModel":"Montero","vin":"WA1BY94L87D007009","color":"Mauv"},
    {"id":164,"carMake":"Pontiac","carModel":"Grand Am","vin":"1FTEW1CM1DK473762","color":"Indigo"},
    {"id":165,"carMake":"Hyundai","carModel":"Tucson","vin":"JN1AZ4EH5CM559981","color":"Goldenrod"},
    {"id":166,"carMake":"Hyundai","carModel":"Santa Fe","vin":"2C3CCAAG2FH258650","color":"Teal"},
    {"id":167,"carMake":"Saab","carModel":"900","vin":"2B3CJ4DV8AH229077","color":"Maroon"},
    {"id":168,"carMake":"Ram","carModel":"C/V","vin":"1G6KF57942U749102","color":"Purple"},
    {"id":169,"carMake":"Suzuki","carModel":"SJ","vin":"5N1AN0NU9CC215859","color":"Pink"},
    {"id":170,"carMake":"Lamborghini","carModel":"Diablo","vin":"5TFBY5F18AX634986","color":"Khaki"},
    {"id":171,"carMake":"Land Rover","carModel":"LR2","vin":"WAUKGAFB3AN428875","color":"Blue"},
    {"id":172,"carMake":"Saturn","carModel":"VUE","vin":"4T1BF1FK0FU445003","color":"Mauv"},
    {"id":173,"carMake":"GMC","carModel":"Yukon XL 2500","vin":"1G6DP5EV5A0968081","color":"Purple"},
    {"id":174,"carMake":"Buick","carModel":"Riviera","vin":"WVGAV7AX1FW302862","color":"Yellow"},
    {"id":175,"carMake":"Hyundai","carModel":"Sonata","vin":"NM0KS9AN0AT299519","color":"Crimson"},
    {"id":176,"carMake":"Ford","carModel":"E250","vin":"1N6AF0KX5EN450747","color":"Khaki"},
    {"id":177,"carMake":"Lincoln","carModel":"LS","vin":"2C3CA4CD7AH599416","color":"Turquoise"},
    {"id":178,"carMake":"Mazda","carModel":"MX-6","vin":"1G6EL12Y02B645778","color":"Indigo"},
    {"id":179,"carMake":"Jaguar","carModel":"X-Type","vin":"JN1AJ0HP7CM528024","color":"Purple"},
    {"id":180,"carMake":"Land Rover","carModel":"Freelander","vin":"WAUDN74F98N918657","color":"Crimson"},
    {"id":181,"carMake":"Suzuki","carModel":"SX4","vin":"1G4CW54K414651609","color":"Goldenrod"},
    {"id":182,"carMake":"Dodge","carModel":"Ram 3500 Club","vin":"1FTEX1CM9CF200489","color":"Mauv"},
    {"id":183,"carMake":"Dodge","carModel":"Intrepid","vin":"KNALW4D48F6577183","color":"Orange"},
    {"id":184,"carMake":"Land Rover","carModel":"Range Rover","vin":"3C4PDDBG9CT122772","color":"Puce"},
    {"id":185,"carMake":"Lotus","carModel":"Esprit","vin":"JA32X8HW8DU362277","color":"Mauv"},
    {"id":186,"carMake":"Acura","carModel":"TL","vin":"1G6AZ5SX3F0969305","color":"Teal"},
    {"id":187,"carMake":"Mazda","carModel":"B-Series","vin":"JHMFA3F2XAS801265","color":"Violet"},
    {"id":188,"carMake":"Volkswagen","carModel":"GTI","vin":"TRUWT28N821464881","color":"Khaki"},
    {"id":189,"carMake":"Lincoln","carModel":"Continental Mark VII","vin":"YV4952CT3E1143145","color":"Violet"},
    {"id":190,"carMake":"Toyota","carModel":"Tacoma Xtra","vin":"1G6DZ67A380719086","color":"Blue"},
    {"id":191,"carMake":"Land Rover","carModel":"Range Rover","vin":"WBAYE8C52FD412851","color":"Teal"},
    {"id":192,"carMake":"Austin","carModel":"Mini Cooper S","vin":"WAUDL94F15N989168","color":"Mauv"},
    {"id":193,"carMake":"Ford","carModel":"Econoline E350","vin":"SAJWA6BC2F8774179","color":"Green"},
    {"id":194,"carMake":"Land Rover","carModel":"Discovery","vin":"2CTALMEC4B6696091","color":"Crimson"},
    {"id":195,"carMake":"Suzuki","carModel":"Vitara","vin":"2G61V5S30D9288093","color":"Green"},
    {"id":196,"carMake":"Bentley","carModel":"Continental","vin":"3FAHP0KCXAR135807","color":"Goldenrod"},
    {"id":197,"carMake":"Ford","carModel":"Taurus","vin":"JN8AZ2NC6D9210892","color":"Pink"},
    {"id":198,"carMake":"BMW","carModel":"525","vin":"JN1BY1APXDM214952","color":"Puce"},
    {"id":199,"carMake":"Ford","carModel":"Excursion","vin":"1FAHP2DWXCG429172","color":"Goldenrod"},
    {"id":200,"carMake":"Hyundai","carModel":"Santa Fe","vin":"1FTFW1E88AF864142","color":"Mauv"}]
},{}],3:[function(require,module,exports){
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

},{"./controller/cars.js":1}]},{},[3]);
