var Hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRandomIntsalamon(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var container = document.getElementById("contanir");
var tableEl = document.createElement('table');
container.appendChild(tableEl);



// var th3El = document.createElement('tr');
// tableEl.appendChild(th3El);



// var t6El = document.createElement('td');
// t6El.textContent = 'Tokyo';
// t5El.appendChild(t6El);

// var t7El = document.createElement('td');
// t7El.textContent = 'Dubai';
// t6El.appendChild(t7El);

// var t8El = document.createElement('td');
// t8El.textContent = 'Paris';
// t7El.appendChild(t8El);

// var t9El = document.createElement('td');
// t9El.textContent = 'Lima';
// t8El.appendChild(t9El);



// the header function
function headerRender() {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);

    var thEl1 = document.createElement('th');
    thEl1.textContent = ' ';
    trEl.appendChild(thEl1);

    for (let k = 0; k < Hour.length; k++) {
        var thEl = document.createElement('th');
        thEl.textContent = ` ${Hour[k]}`;
        trEl.appendChild(thEl);
    };
}

headerRender();

function Salamon(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.randomCust = [];
    this.total = 0;
}

Salamon.prototype.getCokies = function () {
    for (let index = 0; index < Hour.length; index++) {
        var randomToltal = Math.floor((getRandomIntsalamon(this.min, this.max) * this.avg));
        this.randomCust.push(randomToltal);
        this.total += randomToltal;
        console.log(this.randomCust[index]);
    };
}




Salamon.prototype.render = function () {
    this.getCokies();
};

// tablebody render
function tabelRender() {
    var trEl = document.createElement('tr');
    tableEl.appendChild(trEl);
    var t5El = document.createElement('td');
    trEl.appendChild(t5El);
    t5El.textContent = 'Seattel';
    for (let r = 0; r < Hour.length; r++) {
        var tdEl =document.createElement('td');
        trEl.appendChild(tdEl);
        tdEl.textContent =  seattle.randomCust[r];
    };

}

var seattle = new Salamon('Seatle', '23', '65', '6.3');
seattle.render();
tabelRender();
console.log(seattle.render());
var Tokyo = new Salamon('Tokyo', '3', '24', '1.2');
Tokyo.render();

var Dubai = new Salamon('Dubai', '11', '38', '3.7');
Dubai.render();

var Paris = new Salamon('Paris', '20', '38', '2.3');
Paris.render();
var Lima = new Salamon('Lima', '2', '16', '4.6');
Lima.render();