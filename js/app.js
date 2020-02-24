var Seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    randomCust: [],
    Hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
    getCokies: function () {
        for (let index = 0; index < this.Hour.length; index++) {
            this.randomCust[this.Hour[index]] = this.randomCust.push(getRandomIntsalamon(this.min, this.max) * this.avg);
        };
        console.log(this.randomCust);
        console.table(this.randomCust);
    }
};
Seattle.getCokies();
function getRandomIntsalamon(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var container = document.getElementById("sillsfile");
var articleEl = document.createElement('article');
var h2El = document.createElement('h2');
articleEl.appendChild(h2El);
h2El.textContent ='seattle';
var pEl = document.createElement('p');
pEl.textContent = '1234';
articleEl.appendChild(pEl);