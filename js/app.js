var Hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'] ;
function getRandomIntsalamon(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var Seattle = {
    min: 23,
    max: 65,
    avg: 6.3,
    totalCookiesPerDay : 0,
    randomCust: [],
    getCokies: function () {
        for (var index = 0; index < Hour.length; index++) {
             this.randomCust.push(Math.floor(getRandomIntsalamon(this.min, this.max) * this.avg));
            this.totalCookiesPerDay += this.randomCust[index];
        }; 
        },
        Render : function () {
            var container = document.getElementById("sillsfile");
            var articleEl = document.createElement('article');
            container.appendChild(articleEl);

            var h2El = document.createElement('h2');
            h2El.textContent ='Seattle';
            articleEl.appendChild(h2El);


            var ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl); 

            for (let index = 0; index <Hour.length; index++){
                var liEl = document.createElement('li');
                liEl.textContent = `${Hour[index] }: ${this.randomCust[index]}` ;
                articleEl.appendChild(liEl);}   
                var totalel = document.createElement('li');
                totalel.textContent =  `total ${this.totalCookiesPerDay}`;
                liEl.appendChild(totalel);
                         
            }
          
};
Seattle.getCokies();
Seattle.Render();
var Tokyo = {
    min: 3,
    max: 24,
    avg: 1.2,
    totalCookiesPerDay : 0,
    randomCust: [],
    getCokies: function () {
        for (let index = 0; index <Hour.length; index++) {
             this.randomCust.push(Math.floor(((getRandomIntsalamon(this.min, this.max) * this.avg))));
           this.totalCookiesPerDay += this.randomCust[index];
        };    
        },
        Render : function () {
            var container = document.getElementById("sillsfile");
            var articleEl = document.createElement('article');
            container.appendChild(articleEl);

            var h2El = document.createElement('h2');
            h2El.textContent ='Tokyo';
            articleEl.appendChild(h2El);


            var ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl); 

            for (let index = 0; index <Hour.length; index++){
                var liEl = document.createElement('li');
                liEl.textContent = `${Hour[index] }: ${this.randomCust[index]}` ;
                articleEl.appendChild(liEl);}  
                var totalel = document.createElement('li');
                 totalel.textContent =  `total ${this.totalCookiesPerDay}`;
                 liEl.appendChild(totalel);               
            }
};
Tokyo.getCokies();
Tokyo.Render();
var Dubai = {
    min: 11,
    max: 38,
    avg: 3.7,
    totalCookiesPerDay : 0,
    randomCust: [],
    getCokies: function () {
        for (let index = 0; index <Hour.length; index++) {
             this.randomCust.push(Math.floor(((getRandomIntsalamon(this.min, this.max) * this.avg))));
             this.totalCookiesPerDay += this.randomCust[index];
        };    
        },
        Render : function () {
            var container = document.getElementById("sillsfile");
            var articleEl = document.createElement('article');
            container.appendChild(articleEl);

            var h2El = document.createElement('h2');
            h2El.textContent ='Dubai';
            articleEl.appendChild(h2El);


            var ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl); 

            for (let index = 0; index <Hour.length; index++){
                var liEl = document.createElement('li');
                liEl.textContent = `${Hour[index] }: ${this.randomCust[index]}` ;
                articleEl.appendChild(liEl);}
                 var totalel = document.createElement('li');
                 totalel.textContent =  `total ${this.totalCookiesPerDay}`;
                 liEl.appendChild(totalel);                 
            }
};
Dubai.getCokies();
Dubai.Render();
var Paris = {
    min: 20,
    max: 38,
    avg: 2.3, 
    totalCookiesPerDay : 0,
    randomCust: [],
    getCokies: function () {
        for (let index = 0; index <Hour.length; index++) {
             this.randomCust.push(Math.floor(((getRandomIntsalamon(this.min, this.max) * this.avg))));
           this.totalCookiesPerDay += this.randomCust[index];
        };    
        },
        Render : function () {
            var container = document.getElementById("sillsfile");
            var articleEl = document.createElement('article');
            container.appendChild(articleEl);

            var h2El = document.createElement('h2');
            h2El.textContent ='Paris';
            articleEl.appendChild(h2El);


            var ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl); 

            for (let index = 0; index <Hour.length; index++){
                var liEl = document.createElement('li');
                liEl.textContent = `${Hour[index] }: ${this.randomCust[index]}` ;
                articleEl.appendChild(liEl);} 
                var totalel = document.createElement('li');
                totalel.textContent =  `total ${this.totalCookiesPerDay}`;
                liEl.appendChild(totalel);                
            }
};
Paris.getCokies();
Paris.Render();
var Lima = {
    min: 2,
    max: 16,
    avg: 4.6, 
    totalCookiesPerDay : 0,
    randomCust: [],
    getCokies: function () {
        for (let index = 0; index <Hour.length; index++) {
             this.randomCust.push(Math.floor(((getRandomIntsalamon(this.min, this.max) * this.avg))));
         this.totalCookiesPerDay += this.randomCust[index];
        };    
        },
        Render : function () {
            var container = document.getElementById("sillsfile");
            var articleEl = document.createElement('article');
            container.appendChild(articleEl);

            var h2El = document.createElement('h2');
            h2El.textContent ='Lima';
            articleEl.appendChild(h2El);


            var ulEl = document.createElement('ul');
            articleEl.appendChild(ulEl); 

            for (let index = 0; index <Hour.length; index++){
                var liEl = document.createElement('li');
                liEl.textContent = `${Hour[index] }: ${this.randomCust[index]}` ;
                articleEl.appendChild(liEl);}    
                var totalel = document.createElement('li');
                totalel.textContent =  `total ${this.totalCookiesPerDay}`;
                liEl.appendChild(totalel);              
            }
};
Lima.getCokies();
Lima.Render();