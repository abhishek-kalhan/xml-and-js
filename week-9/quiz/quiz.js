var data = [
    {
      "isActive": false,
      "balance": "$1,343.69",
      "name": "Hobbs Macdonald",
      "registered": "2015-02-08T02:36:36 +05:00",
      "latitude": -80.356177,
      "longitude": -125.276756,
      "friends": [
        {
          "id": 0,
          "name": "Hart Guthrie"
        },
        {
          "id": 1,
          "name": "Kasey Gomez"
        }
      ]
    },
    {
      "isActive": false,
      "balance": "$2,426.98",
      "name": "Nelda Sykes",
      "registered": "2015-02-01T10:16:00 +05:00",
      "latitude": 72.078718,
      "longitude": -159.71397,
      "friends": [
        {
          "id": 0,
          "name": "Sullivan Preston"
        },
        {
          "id": 1,
          "name": "Mcgee James"
        }
      ]
    },
    {
      "isActive": true,
      "balance": "$1,257.12",
      "name": "Shaw Walls",
      "registered": "2018-08-26T02:26:15 +04:00",
      "latitude": -76.647851,
      "longitude": 173.881151,
      "friends": [
        {
          "id": 0,
          "name": "Reyna Wilkins"
        },
        {
          "id": 1,
          "name": "Deann Christensen"
        }
      ]
    },
    {
      "isActive": true,
      "balance": "$1,431.44",
      "name": "Boyer Riley",
      "registered": "2018-09-24T10:12:16 +04:00",
      "latitude": -60.360275,
      "longitude": 19.826812,
      "friends": [
        {
          "id": 0,
          "name": "Steele Coleman"
        },
        {
          "id": 1,
          "name": "Darcy Dixon"
        }
      ]
    },
    {
      "isActive": false,
      "balance": "$3,038.94",
      "name": "George Snider",
      "registered": "2017-09-25T09:12:43 +04:00",
      "latitude": -67.814834,
      "longitude": -145.045949,
      "friends": [
        {
          "id": 0,
          "name": "Irene Rivers"
        },
        {
          "id": 1,
          "name": "Dora Hart"
        }
      ]
    }
  ]

function checkIsActive(data) {
    var isActive = data.filter(data => (data.isActive === true));
    console.log(isActive)
    return isActive;
}

function calculateHighestBalance(data) {
    var highestBalance = data.reduce((acc, data) => acc = acc > data.balance ? acc : data.balance, 0);
    return highestBalance;
  }

function getFriends(data) {
    var friendsData = data.map(data => (data.friends));
    console.log(friendsData)
    return friendsData;
}

function getAccNames(data) {
    var nameData = data.map(data => (data.name));
    let nData = nameData.toString();
    console.log(nData)
    return nData;
}

checkIsActive(data)

var highestBalance = calculateHighestBalance(data)
console.log("highestBalance: " + highestBalance)

var getFriendsData = getFriends(data);

var getNames = getAccNames(data);
