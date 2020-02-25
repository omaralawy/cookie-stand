var Hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
function getRandomIntsalamon(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//var randomCust = [];

function Salamon(min, max, avg,randomCust) {
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.randomCust = randomCust;
};
Salamon.prototype.getCokies = function () {
    for (let index = 0; index < Hour.length; index++) {
        this.randomCust.push(Math.floor(((getRandomIntsalamon(this.min, this.max) * this.avg))));
    };
    Salamon.prototype.render = function () {
        var container = document.getElementById("sillsfile");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);

        var h2El = document.createElement('h2');
        h2El.textContent = 'Seattle';
        articleEl.appendChild(h2El);


        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);

        for (let index = 0; index < Hour.length; index++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${Hour[index]}: ${this.randomCust[index]}`;
            articleEl.appendChild(liEl);
        }
    }
};
var Salamon = new Salamon('23','65','6.3','[]')
Salamon.getCokies();
Salamon.render();
var Seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    randomCust: [],
    getCokies: function () {
        for (let index = 0; index < Hour.length; index++) {
            this.randomCust.push(Math.floor(((getRandomIntsalamon(this.min, this.max) * this.avg))));
        };
        // console.log(this.randomCust);
        console.table(this.randomCust);

    },
    Render: function () {
        var container = document.getElementById("sillsfile");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);

        var h2El = document.createElement('h2');
        h2El.textContent = 'Seattle';
        articleEl.appendChild(h2El);


        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);

        for (let index = 0; index < Hour.length; index++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${Hour[index]}: ${this.randomCust[index]}`;
            articleEl.appendChild(liEl);
        }
    }
};
Seattle.getCokies();
Seattle.Render();
var Tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    randomCust: [],
    getCokies: function () {
        for (let index = 0; index < Hour.length; index++) {
            this.randomCust.push(Math.floor(((getRandomIntsalamon(this.min, this.max) * this.avg))));
        };
        // console.log(this.randomCust);
        console.table(this.randomCust);
    },
    Render: function () {
        var container = document.getElementById("sillsfile");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);

        var h2El = document.createElement('h2');
        h2El.textContent = 'Tokyo';
        articleEl.appendChild(h2El);


        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);

        for (let index = 0; index < Hour.length; index++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${Hour[index]}: ${this.randomCust[index]}`;
            articleEl.appendChild(liEl);
        }
    }
};
Tokyo.getCokies();
Tokyo.Render();
var Dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    randomCust: [],
    getCokies: function () {
        for (let index = 0; index < Hour.length; index++) {
            this.randomCust.push(Math.floor(((getRandomIntsalamon(this.min, this.max) * this.avg))));
        };
        // console.log(this.randomCust);
        console.table(this.randomCust);
    },
    Render: function () {
        var container = document.getElementById("sillsfile");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);

        var h2El = document.createElement('h2');
        h2El.textContent = 'Dubai';
        articleEl.appendChild(h2El);


        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);

        for (let index = 0; index < Hour.length; index++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${Hour[index]}: ${this.randomCust[index]}`;
            articleEl.appendChild(liEl);
        }
    }
};
Dubai.getCokies();
Dubai.Render();
var Paris = {
    min: 20,
    max: 38,
    avg: 2.3,
    randomCust: [],
    getCokies: function () {
        for (let index = 0; index < Hour.length; index++) {
            this.randomCust.push(Math.floor(((getRandomIntsalamon(this.min, this.max) * this.avg))));
        };
        // console.log(this.randomCust);
        console.table(this.randomCust);

    },
    Render: function () {
        var container = document.getElementById("sillsfile");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);

        var h2El = document.createElement('h2');
        h2El.textContent = 'Paris';
        articleEl.appendChild(h2El);


        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);

        for (let index = 0; index < Hour.length; index++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${Hour[index]}: ${this.randomCust[index]}`;
            articleEl.appendChild(liEl);
        }
    }
};
Paris.getCokies();
Paris.Render();
var Lima = {
    min: 2,
    max: 16,
    avg: 4.6,
    randomCust: [],
    getCokies: function () {
        for (let index = 0; index < Hour.length; index++) {
            this.randomCust.push(Math.floor(((getRandomIntsalamon(this.min, this.max) * this.avg))));
        };
        // console.log(this.randomCust);
        console.table(this.randomCust);

    },
    Render: function () {
        var container = document.getElementById("sillsfile");
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);

        var h2El = document.createElement('h2');
        h2El.textContent = 'Lima';
        articleEl.appendChild(h2El);


        var ulEl = document.createElement('ul');
        articleEl.appendChild(ulEl);

        for (let index = 0; index < Hour.length; index++) {
            var liEl = document.createElement('li');
            liEl.textContent = `${Hour[index]}: ${this.randomCust[index]}`;
            articleEl.appendChild(liEl);
        }
    }
};
//Lima.getCokies();
//Lima.Render();