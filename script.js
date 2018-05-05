var rows = document.getElementById('numR');
console.log(rows);
var books = [];

for (var i = 0; i < rows.innerHTML; i++) {
    var tit = document.getElementById('title' + i);
    var date = document.getElementById('date_published' + i);
    var Author = document.getElementById('author' + i);
    var rev = document.getElementById('reviews' + i);
    var Rate = document.getElementById('rate' + i);
    var Img = document.getElementById('image' + i);    
    books.push({ title: tit.innerHTML, date_published: date.innerHTML, author: Author.innerHTML, reviews: rev.innerHTML, rate: Rate.innerHTML, img: Img.innerHTML });
}

// Default sort
StarsHigh();
upDateDOM();

function createBookItem(bookObj) {

    var liElem = document.createElement('li');

    var img = document.createElement('img');
    img.src = bookObj.img;
    img.width = 100;
    img.height = 150;
    liElem.appendChild(img);




    var Lit = document.createElement("div");
    var Lia = document.createElement('div');
    var Lid = document.createElement('div');
    var Lir = document.createElement('div');
    var Lira = document.createElement('div');

    //title
    Lit.appendChild(document.createTextNode("Title :" + bookObj.title));
    liElem.appendChild(Lit);


    //Author
    Lia.appendChild(document.createTextNode("Author: " + bookObj.author));
    liElem.appendChild(Lia);

    //Date
    Lid.appendChild(document.createTextNode("Published Date: " + bookObj.date_published));
    liElem.appendChild(Lid);

    //reviews
    Lir.appendChild(document.createTextNode("Reviews: " + bookObj.reviews));
    liElem.appendChild(Lir);

    //rate
    Lira.appendChild(document.createTextNode("Rating: " + bookObj.rate));
    liElem.appendChild(Lira);


    liElem.appendChild(document.createElement("hr"));


    // create the remaining elements
    return liElem;
}


function Dateold() {
    books.sort(function (a, b) {
        var D1 = Date.parse(a.date_published);
        var D2 = Date.parse(b.date_published);
        return D2 - D1;
    });
}
function Datenew() {
    books.sort(function (a, b) {
        var D1 = Date.parse(a.date_published);
        var D2 = Date.parse(b.date_published);
        return D1 - D2;
    });
}
function reviewsHigh() {
    books.sort(function (a, b) {
        return b.reviews - a.reviews;
    });
}
function reviewslow() {
    books.sort(function (a, b) {
        return a.reviews - b.reviews;
    });
}
function StarsHigh() {
    books.sort(function (a, b) {
        return b.rate - a.rate;
    });
}
function Starslow() {
    books.sort(function (a, b) {
        return a.rate - b.rate;
    });
}

function upDateDOM() {
    var ulBooks = document.getElementById('books-list');
    ulBooks.innerHTML = '';
    for (item of books) {
        ulBooks.appendChild(createBookItem(item));
    }
}

// Sort by, select event
var select = document.getElementById("sort-news");
select.onchange = function () {
    if (select.value === 'Dateold') {
        Dateold();
        upDateDOM();
    } else if (select.value === 'Datenew') {
        Datenew();
        upDateDOM();
    } else if (select.value === 'reviewsHigh') {
        reviewsHigh();
        upDateDOM();
    } else if (select.value === 'reviewslow') {
        reviewslow();
        upDateDOM();
    } else if (select.value === 'StarsHigh') {
        StarsHigh();
        upDateDOM();
    } else if (select.value === 'Starslow') {
        Starslow();
        upDateDOM();
    }
};
