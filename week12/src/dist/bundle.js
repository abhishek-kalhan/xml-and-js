(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const products = require("../data/products");

const getAll = ({ id, name, description, price } = {}) =>
  new Promise((resolve) => {
    let result = Array.from(products);

    if (id) {
      result = result.filter((item) => item.id === id);
    }

    if (name) {
      result = result.filter((item) => item.name === name);
    }

    if (description) {
      result = result.filter((item) => item.description === description);
    }

    if (price) {
      result = result.filter((item) => item.price === Number(price));
    }

    resolve({ code: 200, data: result });
  });

const getById = (id) =>
  new Promise((resolve) => {
    const product = products.find((product) => product.id === id);

    if (product) {
      resolve({ code: 200, data: product });
    } else {
      resolve({
        code: 404,
        data: { message: `No product found for id ${id}` },
      });
    }
  });

module.exports = {
  getAll,
  getById,
};

},{"../data/products":2}],2:[function(require,module,exports){
module.exports=[{"id":1,"first_name":"Wilfred","last_name":"Gobbett","email":"wgobbett0@tinypic.com","gender":"Male","dept":"Engineering","car_make":"Ford","car_model":"Edge","car_model_year":2009,"city":"Baiyin"},
  {"id":2,"first_name":"Dallis","last_name":"Vynall","email":"dvynall1@howstuffworks.com","gender":"Genderqueer","dept":"Legal","car_make":"GMC","car_model":"Envoy XL","car_model_year":2004,"city":"Oke Mesi"},
  {"id":3,"first_name":"Gwynne","last_name":"Pipet","email":"gpipet2@deviantart.com","gender":"Female","dept":"Sales","car_make":"Bentley","car_model":"Continental","car_model_year":2009,"city":"M??lnlycke"},
  {"id":4,"first_name":"Derward","last_name":"Colles","email":"dcolles3@nationalgeographic.com","gender":"Male","dept":"Human Resources","car_make":"GMC","car_model":"Savana 3500","car_model_year":1998,"city":"Wierzbica"},
  {"id":5,"first_name":"Byrom","last_name":"McCorkindale","email":"bmccorkindale4@cpanel.net","gender":"Male","dept":"Human Resources","car_make":"Dodge","car_model":"Ram Van 2500","car_model_year":2003,"city":"Jiazhuyuan"},
  {"id":6,"first_name":"Theodora","last_name":"Stutter","email":"tstutter5@yahoo.co.jp","gender":"Female","dept":"Sales","car_make":"GMC","car_model":"1500 Club Coupe","car_model_year":1999,"city":"Alegrete"},
  {"id":7,"first_name":"Neilla","last_name":"Lemon","email":"nlemon6@ocn.ne.jp","gender":"Female","dept":"Sales","car_make":"Hyundai","car_model":"Elantra","car_model_year":2003,"city":"Cartagena"},
  {"id":8,"first_name":"Farah","last_name":"O'Hickee","email":"fohickee7@hhs.gov","gender":"Genderfluid","dept":"Research and Development","car_make":"Chrysler","car_model":"300","car_model_year":2008,"city":"Kalangsari"},
  {"id":9,"first_name":"Jasen","last_name":"Kybbye","email":"jkybbye8@about.com","gender":"Male","dept":"Services","car_make":"Oldsmobile","car_model":"Regency","car_model_year":1997,"city":"Cabric??n"},
  {"id":10,"first_name":"De","last_name":"Hercock","email":"dhercock9@imageshack.us","gender":"Female","dept":"Accounting","car_make":"Subaru","car_model":"Impreza WRX","car_model_year":2010,"city":"Ben?? Beraq"},
  {"id":11,"first_name":"Berk","last_name":"Alvarez","email":"balvareza@gravatar.com","gender":"Male","dept":"Legal","car_make":"Kia","car_model":"Sorento","car_model_year":2011,"city":"Ribas"},
  {"id":12,"first_name":"Letisha","last_name":"Elvey","email":"lelveyb@hhs.gov","gender":"Female","dept":"Research and Development","car_make":"Mazda","car_model":"MX-6","car_model_year":1991,"city":"Xinshancun"},
  {"id":13,"first_name":"Nancie","last_name":"Attril","email":"nattrilc@tuttocitta.it","gender":"Female","dept":"Product Management","car_make":"Ford","car_model":"Club Wagon","car_model_year":1995,"city":"Lijiaping"},
  {"id":14,"first_name":"Sergio","last_name":"Broggio","email":"sbroggiod@nba.com","gender":"Male","dept":"Support","car_make":"Nissan","car_model":"Sentra","car_model_year":2009,"city":"Bay-ang"},
  {"id":15,"first_name":"Bethena","last_name":"Pettyfar","email":"bpettyfare@zimbio.com","gender":"Female","dept":"Research and Development","car_make":"Oldsmobile","car_model":"Bravada","car_model_year":2004,"city":"Jinxiang"},
  {"id":16,"first_name":"Edith","last_name":"See","email":"eseef@webs.com","gender":"Female","dept":"Product Management","car_make":"Mercedes-Benz","car_model":"SLK-Class","car_model_year":2007,"city":"Shanglu"},
  {"id":17,"first_name":"Mariam","last_name":"Burchett","email":"mburchettg@devhub.com","gender":"Non-binary","dept":"Legal","car_make":"Dodge","car_model":"Ram","car_model_year":2007,"city":"Sukabatu"},
  {"id":18,"first_name":"Dela","last_name":"Burgess","email":"dburgessh@oakley.com","gender":"Female","dept":"Product Management","car_make":"Toyota","car_model":"Sequoia","car_model_year":2009,"city":"Cibitung"},
  {"id":19,"first_name":"Carroll","last_name":"Rhoades","email":"crhoadesi@cdbaby.com","gender":"Genderqueer","dept":"Support","car_make":"Plymouth","car_model":"Grand Voyager","car_model_year":1994,"city":"El Tambo"},
  {"id":20,"first_name":"Jobi","last_name":"Tebbet","email":"jtebbetj@diigo.com","gender":"Female","dept":"Human Resources","car_make":"Saturn","car_model":"Outlook","car_model_year":2010,"city":"Uni??n de Reyes"},
  {"id":21,"first_name":"Adrien","last_name":"Chilles","email":"achillesk@squarespace.com","gender":"Male","dept":"Accounting","car_make":"GMC","car_model":"Savana 1500","car_model_year":2005,"city":"Yangjiapo"},
  {"id":22,"first_name":"Velvet","last_name":"Staresmeare","email":"vstaresmearel@xinhuanet.com","gender":"Female","dept":"Legal","car_make":"Mitsubishi","car_model":"Mirage","car_model_year":1993,"city":"Colonias Unidas"},
  {"id":23,"first_name":"Caesar","last_name":"Seabourne","email":"cseabournem@illinois.edu","gender":"Male","dept":"Research and Development","car_make":"Chevrolet","car_model":"Corvette","car_model_year":1973,"city":"Jianshe"},
  {"id":24,"first_name":"Montague","last_name":"Pykerman","email":"mpykermann@livejournal.com","gender":"Male","dept":"Support","car_make":"Mitsubishi","car_model":"Diamante","car_model_year":2004,"city":"Pancoran"},
  {"id":25,"first_name":"Justinn","last_name":"Bagshawe","email":"jbagshaweo@businesswire.com","gender":"Female","dept":"Legal","car_make":"Porsche","car_model":"968","car_model_year":1994,"city":"Skaramang??s"},
  {"id":26,"first_name":"Almeta","last_name":"Doodney","email":"adoodneyp@yale.edu","gender":"Female","dept":"Product Management","car_make":"Scion","car_model":"xB","car_model_year":2009,"city":"Guayaybi"},
  {"id":27,"first_name":"Emylee","last_name":"Scriver","email":"escriverq@uol.com.br","gender":"Female","dept":"Business Development","car_make":"Land Rover","car_model":"Range Rover","car_model_year":1992,"city":"Reutov"},
  {"id":28,"first_name":"Antonio","last_name":"Palliser","email":"apalliserr@indiegogo.com","gender":"Non-binary","dept":"Legal","car_make":"Ford","car_model":"Aspire","car_model_year":1996,"city":"Kaoma"},
  {"id":29,"first_name":"Barbaraanne","last_name":"Pyford","email":"bpyfords@engadget.com","gender":"Female","dept":"Product Management","car_make":"Audi","car_model":"5000S","car_model_year":1986,"city":"Zangbawa"},
  {"id":30,"first_name":"Abeu","last_name":"Tomalin","email":"atomalint@multiply.com","gender":"Male","dept":"Product Management","car_make":"Subaru","car_model":"Baja","car_model_year":2003,"city":"Jibiya"},
  {"id":31,"first_name":"Sheila","last_name":"Dilley","email":"sdilleyu@hubpages.com","gender":"Female","dept":"Accounting","car_make":"Jeep","car_model":"Liberty","car_model_year":2007,"city":"Orip????"},
  {"id":32,"first_name":"Tracy","last_name":"Gehricke","email":"tgehrickev@phpbb.com","gender":"Male","dept":"Sales","car_make":"Mazda","car_model":"Mazda2","car_model_year":2011,"city":"Vrilissia"},
  {"id":33,"first_name":"Doug","last_name":"Kehoe","email":"dkehoew@wordpress.org","gender":"Male","dept":"Product Management","car_make":"Ford","car_model":"E-Series","car_model_year":2008,"city":"Sylvan Lake"},
  {"id":34,"first_name":"Melesa","last_name":"Scarsbrooke","email":"mscarsbrookex@nymag.com","gender":"Female","dept":"Sales","car_make":"Ford","car_model":"Fairlane","car_model_year":1965,"city":"General Santos"},
  {"id":35,"first_name":"Maxi","last_name":"Peter","email":"mpetery@engadget.com","gender":"Genderqueer","dept":"Human Resources","car_make":"Mazda","car_model":"MX-6","car_model_year":1992,"city":"Jinchang"},
  {"id":36,"first_name":"Nissie","last_name":"Jakubowski","email":"njakubowskiz@123-reg.co.uk","gender":"Bigender","dept":"Engineering","car_make":"Ford","car_model":"Escape","car_model_year":2007,"city":"Galimuyod"},
  {"id":37,"first_name":"Dode","last_name":"Villa","email":"dvilla10@is.gd","gender":"Female","dept":"Research and Development","car_make":"Acura","car_model":"TL","car_model_year":2011,"city":"Lefortovo"},
  {"id":38,"first_name":"Christophorus","last_name":"Smillie","email":"csmillie11@google.it","gender":"Male","dept":"Support","car_make":"Ford","car_model":"F-Series","car_model_year":2002,"city":"V??esina"},
  {"id":39,"first_name":"Foster","last_name":"Warrior","email":"fwarrior12@macromedia.com","gender":"Male","dept":"Support","car_make":"Dodge","car_model":"Viper","car_model_year":1997,"city":"Patea"},
  {"id":40,"first_name":"Hillary","last_name":"Blackboro","email":"hblackboro13@etsy.com","gender":"Genderfluid","dept":"Human Resources","car_make":"Isuzu","car_model":"Rodeo","car_model_year":1993,"city":"Betim"},
  {"id":41,"first_name":"Morley","last_name":"Verryan","email":"mverryan14@bravesites.com","gender":"Male","dept":"Business Development","car_make":"Subaru","car_model":"Legacy","car_model_year":1991,"city":"Gaopi"},
  {"id":42,"first_name":"Tandy","last_name":"Brigstock","email":"tbrigstock15@earthlink.net","gender":"Female","dept":"Training","car_make":"Nissan","car_model":"Altima","car_model_year":2009,"city":"Marystown"},
  {"id":43,"first_name":"Walker","last_name":"de Courcey","email":"wdecourcey16@zimbio.com","gender":"Male","dept":"Business Development","car_make":"Chevrolet","car_model":"2500","car_model_year":1996,"city":"Meicheng"},
  {"id":44,"first_name":"Fawn","last_name":"McGeaney","email":"fmcgeaney17@ft.com","gender":"Female","dept":"Legal","car_make":"Pontiac","car_model":"Sunfire","car_model_year":2002,"city":"Badaogu"},
  {"id":45,"first_name":"Nikki","last_name":"Granham","email":"ngranham18@gravatar.com","gender":"Male","dept":"Research and Development","car_make":"Cadillac","car_model":"DeVille","car_model_year":1995,"city":"Shuangkou"},
  {"id":46,"first_name":"Wyn","last_name":"Torresi","email":"wtorresi19@dailymotion.com","gender":"Male","dept":"Services","car_make":"Ford","car_model":"F250","car_model_year":2009,"city":"Sulangan"},
  {"id":47,"first_name":"Kettie","last_name":"Swenson","email":"kswenson1a@hostgator.com","gender":"Female","dept":"Research and Development","car_make":"Cadillac","car_model":"CTS-V","car_model_year":2011,"city":"Gorg??n"},
  {"id":48,"first_name":"Scarface","last_name":"Dolan","email":"sdolan1b@abc.net.au","gender":"Male","dept":"Marketing","car_make":"Mercedes-Benz","car_model":"M-Class","car_model_year":2009,"city":"Beringovskiy"},
  {"id":49,"first_name":"Ewan","last_name":"McFaell","email":"emcfaell1c@tripod.com","gender":"Male","dept":"Support","car_make":"Pontiac","car_model":"6000","car_model_year":1990,"city":"Peras Ruivas"},
  {"id":50,"first_name":"Tito","last_name":"O'Calleran","email":"tocalleran1d@slashdot.org","gender":"Male","dept":"Services","car_make":"BMW","car_model":"M3","car_model_year":2001,"city":"Santana"},
  {"id":51,"first_name":"Gerladina","last_name":"Heads","email":"gheads1e@sohu.com","gender":"Female","dept":"Engineering","car_make":"Toyota","car_model":"TundraMax","car_model_year":2009,"city":"G??theio"},
  {"id":52,"first_name":"Vida","last_name":"Bertie","email":"vbertie1f@techcrunch.com","gender":"Female","dept":"Services","car_make":"Dodge","car_model":"Ram 3500","car_model_year":1999,"city":"Helsingborg"},
  {"id":53,"first_name":"Neville","last_name":"Pridie","email":"npridie1g@prnewswire.com","gender":"Male","dept":"Support","car_make":"BMW","car_model":"Alpina B7","car_model_year":2008,"city":"Reitoca"},
  {"id":54,"first_name":"Meris","last_name":"Madill","email":"mmadill1h@youku.com","gender":"Female","dept":"Engineering","car_make":"Chevrolet","car_model":"Silverado 1500","car_model_year":2005,"city":"Zhongshan"},
  {"id":55,"first_name":"Ilario","last_name":"Revely","email":"irevely1i@sakura.ne.jp","gender":"Male","dept":"Training","car_make":"Toyota","car_model":"Tercel","car_model_year":1996,"city":"Pateh Sam"},
  {"id":56,"first_name":"Rhona","last_name":"Bartalucci","email":"rbartalucci1j@odnoklassniki.ru","gender":"Female","dept":"Engineering","car_make":"BMW","car_model":"M5","car_model_year":1992,"city":"Labin"},
  {"id":57,"first_name":"Sigismond","last_name":"Puckey","email":"spuckey1k@vinaora.com","gender":"Male","dept":"Marketing","car_make":"Honda","car_model":"Fit","car_model_year":2011,"city":"???Afula ???Illit"},
  {"id":58,"first_name":"Alexandre","last_name":"Sorley","email":"asorley1l@berkeley.edu","gender":"Male","dept":"Sales","car_make":"Land Rover","car_model":"Defender 90","car_model_year":1997,"city":"Santa Rosa del Sara"},
  {"id":59,"first_name":"Kirsti","last_name":"Berrigan","email":"kberrigan1m@nature.com","gender":"Female","dept":"Product Management","car_make":"Lamborghini","car_model":"Murci??lago","car_model_year":2002,"city":"Boende"},
  {"id":60,"first_name":"Sibylla","last_name":"Deny","email":"sdeny1n@google.com.au","gender":"Female","dept":"Support","car_make":"GMC","car_model":"Sierra 3500","car_model_year":2011,"city":"M??d??yah"},
  {"id":61,"first_name":"Yoshi","last_name":"Thewless","email":"ythewless1o@google.ru","gender":"Female","dept":"Product Management","car_make":"Mazda","car_model":"RX-8","car_model_year":2009,"city":"Toulouse"},
  {"id":62,"first_name":"Nikki","last_name":"Bottle","email":"nbottle1p@tinyurl.com","gender":"Male","dept":"Marketing","car_make":"GMC","car_model":"Sonoma","car_model_year":1998,"city":"Jaunpiebalga"},
  {"id":63,"first_name":"Gilemette","last_name":"Cropp","email":"gcropp1q@goo.gl","gender":"Female","dept":"Research and Development","car_make":"Volkswagen","car_model":"Passat","car_model_year":2010,"city":"Punta de Bomb??n"},
  {"id":64,"first_name":"Michal","last_name":"Spaducci","email":"mspaducci1r@fema.gov","gender":"Male","dept":"Support","car_make":"Audi","car_model":"S4","car_model_year":1993,"city":"Cibaregbeg Dua"},
  {"id":65,"first_name":"Kelly","last_name":"Eckersley","email":"keckersley1s@paypal.com","gender":"Female","dept":"Training","car_make":"Toyota","car_model":"Land Cruiser","car_model_year":1993,"city":"Or Yehuda"},
  {"id":66,"first_name":"Blakelee","last_name":"Larn","email":"blarn1t@stumbleupon.com","gender":"Female","dept":"Support","car_make":"Mitsubishi","car_model":"Mighty Max Macro","car_model_year":1992,"city":"Bhokadoke"},
  {"id":67,"first_name":"Quinn","last_name":"Ordish","email":"qordish1u@quantcast.com","gender":"Bigender","dept":"Marketing","car_make":"Toyota","car_model":"4Runner","car_model_year":1999,"city":"Pantang"},
  {"id":68,"first_name":"Dominic","last_name":"Tizzard","email":"dtizzard1v@de.vu","gender":"Male","dept":"Business Development","car_make":"BMW","car_model":"3 Series","car_model_year":1994,"city":"Jaguaquara"},
  {"id":69,"first_name":"Alexio","last_name":"Jales","email":"ajales1w@drupal.org","gender":"Male","dept":"Sales","car_make":"Land Rover","car_model":"Range Rover","car_model_year":2000,"city":"Kedungdowo"},
  {"id":70,"first_name":"Garth","last_name":"Fearnside","email":"gfearnside1x@timesonline.co.uk","gender":"Male","dept":"Business Development","car_make":"Toyota","car_model":"Previa","car_model_year":1991,"city":"Roberval"},
  {"id":71,"first_name":"Benedicta","last_name":"Oblein","email":"boblein1y@angelfire.com","gender":"Female","dept":"Marketing","car_make":"Volvo","car_model":"850","car_model_year":1997,"city":"Xinwu"},
  {"id":72,"first_name":"Niccolo","last_name":"Donisi","email":"ndonisi1z@diigo.com","gender":"Male","dept":"Sales","car_make":"Ford","car_model":"LTD Crown Victoria","car_model_year":1987,"city":"Kafr Kann??"},
  {"id":73,"first_name":"Lillis","last_name":"Derrington","email":"lderrington20@rambler.ru","gender":"Female","dept":"Training","car_make":"Chevrolet","car_model":"Express","car_model_year":2011,"city":"Huansheng"},
  {"id":74,"first_name":"Haze","last_name":"Noury","email":"hnoury21@uiuc.edu","gender":"Male","dept":"Marketing","car_make":"Lexus","car_model":"LS","car_model_year":1995,"city":"Al ?????qir"},
  {"id":75,"first_name":"Meaghan","last_name":"Fearnside","email":"mfearnside22@cyberchimps.com","gender":"Female","dept":"Legal","car_make":"Volkswagen","car_model":"Passat","car_model_year":1996,"city":"Kun??ice pod Ond??ejn??kem"},
  {"id":76,"first_name":"Anton","last_name":"Stonelake","email":"astonelake23@ox.ac.uk","gender":"Male","dept":"Engineering","car_make":"Ford","car_model":"Taurus","car_model_year":1999,"city":"Detroit"},
  {"id":77,"first_name":"Vicky","last_name":"Gleave","email":"vgleave24@webeden.co.uk","gender":"Female","dept":"Legal","car_make":"Cadillac","car_model":"Seville","car_model_year":2004,"city":"Saint-Quentin-en-Yvelines"},
  {"id":78,"first_name":"Agna","last_name":"Cawston","email":"acawston25@vkontakte.ru","gender":"Female","dept":"Sales","car_make":"Oldsmobile","car_model":"Alero","car_model_year":2004,"city":"Piippola"},
  {"id":79,"first_name":"Janie","last_name":"Cleeton","email":"jcleeton26@furl.net","gender":"Female","dept":"Human Resources","car_make":"Lincoln","car_model":"Continental Mark VII","car_model_year":1990,"city":"Mont??limar"},
  {"id":80,"first_name":"Nevile","last_name":"Crinion","email":"ncrinion27@paypal.com","gender":"Male","dept":"Marketing","car_make":"GMC","car_model":"Sierra 1500","car_model_year":2011,"city":"Leigao"},
  {"id":81,"first_name":"Dannie","last_name":"Domke","email":"ddomke28@hc360.com","gender":"Female","dept":"Research and Development","car_make":"Mitsubishi","car_model":"Mirage","car_model_year":1994,"city":"Pajaten"},
  {"id":82,"first_name":"Garrett","last_name":"Fearnley","email":"gfearnley29@pbs.org","gender":"Male","dept":"Business Development","car_make":"Chevrolet","car_model":"Lumina","car_model_year":1999,"city":"Tampa"},
  {"id":83,"first_name":"Heindrick","last_name":"Hartop","email":"hhartop2a@deliciousdays.com","gender":"Bigender","dept":"Services","car_make":"Toyota","car_model":"Celica","car_model_year":1994,"city":"Longgang"},
  {"id":84,"first_name":"Britta","last_name":"Thickin","email":"bthickin2b@topsy.com","gender":"Female","dept":"Sales","car_make":"BMW","car_model":"3 Series","car_model_year":2003,"city":"Tinumpuk"},
  {"id":85,"first_name":"Graig","last_name":"Favelle","email":"gfavelle2c@hud.gov","gender":"Male","dept":"Services","car_make":"Nissan","car_model":"Pathfinder","car_model_year":1997,"city":"Soledad"},
  {"id":86,"first_name":"Tine","last_name":"Santry","email":"tsantry2d@dmoz.org","gender":"Female","dept":"Support","car_make":"Volkswagen","car_model":"Jetta III","car_model_year":1993,"city":"Avignon"},
  {"id":87,"first_name":"Catlee","last_name":"Beamish","email":"cbeamish2e@wordpress.com","gender":"Female","dept":"Product Management","car_make":"Mitsubishi","car_model":"Lancer","car_model_year":2003,"city":"Balading"},
  {"id":88,"first_name":"Anetta","last_name":"Canny","email":"acanny2f@smugmug.com","gender":"Female","dept":"Business Development","car_make":"Ford","car_model":"E150","car_model_year":1984,"city":"Junkou"},
  {"id":89,"first_name":"Isidoro","last_name":"Dawidman","email":"idawidman2g@booking.com","gender":"Male","dept":"Product Management","car_make":"Dodge","car_model":"Ram 1500 Club","car_model_year":2000,"city":"???A????rah al Qibl??yah"},
  {"id":90,"first_name":"Mord","last_name":"Boullin","email":"mboullin2h@baidu.com","gender":"Male","dept":"Legal","car_make":"Honda","car_model":"Accord","car_model_year":2002,"city":"Mashi"},
  {"id":91,"first_name":"Ursula","last_name":"Beeckx","email":"ubeeckx2i@pinterest.com","gender":"Female","dept":"Legal","car_make":"Chevrolet","car_model":"Tracker","car_model_year":2003,"city":"Bol???shoye Skuratovo"},
  {"id":92,"first_name":"Uriel","last_name":"Paudin","email":"upaudin2j@dmoz.org","gender":"Male","dept":"Human Resources","car_make":"Subaru","car_model":"Impreza WRX","car_model_year":2011,"city":"Kuala Lumpur"},
  {"id":93,"first_name":"Paige","last_name":"Jebb","email":"pjebb2k@netvibes.com","gender":"Female","dept":"Product Management","car_make":"Mazda","car_model":"323","car_model_year":1993,"city":"Bacem"},
  {"id":94,"first_name":"Farris","last_name":"Canet","email":"fcanet2l@kickstarter.com","gender":"Male","dept":"Services","car_make":"Ford","car_model":"F250","car_model_year":2010,"city":"Portmore"},
  {"id":95,"first_name":"Chadwick","last_name":"Waddicor","email":"cwaddicor2m@twitter.com","gender":"Male","dept":"Training","car_make":"Subaru","car_model":"Outback Sport","car_model_year":2002,"city":"Monte Alto"},
  {"id":96,"first_name":"Ogden","last_name":"Cavendish","email":"ocavendish2n@cnbc.com","gender":"Male","dept":"Legal","car_make":"Nissan","car_model":"350Z","car_model_year":2005,"city":"Hallsberg"},
  {"id":97,"first_name":"Olag","last_name":"Godman","email":"ogodman2o@nationalgeographic.com","gender":"Male","dept":"Research and Development","car_make":"Porsche","car_model":"928","car_model_year":1995,"city":"Menghai"},
  {"id":98,"first_name":"Liv","last_name":"Cudmore","email":"lcudmore2p@businessinsider.com","gender":"Female","dept":"Business Development","car_make":"Acura","car_model":"TL","car_model_year":2002,"city":"Araruama"},
  {"id":99,"first_name":"Sean","last_name":"Woolston","email":"swoolston2q@sciencedaily.com","gender":"Agender","dept":"Training","car_make":"Jeep","car_model":"Compass","car_model_year":2009,"city":"Balahovit"},
  {"id":100,"first_name":"Benedetta","last_name":"Reader","email":"breader2r@redcross.org","gender":"Female","dept":"Training","car_make":"Kia","car_model":"Forte","car_model_year":2012,"city":"Kedunglo"}]
},{}],3:[function(require,module,exports){
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

},{"./api/products.js":1}]},{},[3]);
