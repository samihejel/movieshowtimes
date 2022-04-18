var langArray = [
    {
        "id": "tt0059742",
        "title": "The Sound of Music",
        "location": "Oshawa Cinemas",
        "date": "2022/04/01",
        "times": [
            "7:15pm",
            "8:40pm"
        ]
    },
    {
        "id": "tt0059113",
        "title": "Doctor Zhivago",
        "location": "Oshawa Cinemas",
        "date": "2022/04/01",
        "times": [
            "7:35pm",
            "8:10pm",
            "9:05pm"
        ]
    },
    {
        "id": "tt0059243",
        "title": "The Great Race",
        "location": "Oshawa Cinemas",
        "date": "2022/04/01",
        "times": [
            "6:45pm",
            "9:15pm"
        ]
    },
    {
        "id": "tt0059578",
        "title": "For a Few Dollars More",
        "location": "Oshawa Cinemas",
        "date": "2022/04/01",
        "times": [
            "8:05pm",
            "9:40pm"
        ]
    },
    {
        "id": "tt0059661",
        "title": "The Rounders",
        "location": "Oshawa Cinemas",
        "date": "2021/01/01",
        "times": [
            "4:10pm"
        ]
    },
    {
        "id": "tt0059800",
        "title": "Thunderball",
        "location": "Oshawa Cinemas",
        "date": "2021/01/01",
        "times": [
            "8:00pm"
        ]
    },
    {
        "id": "tt0059800",
        "title": "Thunderball",
        "location": "noshwar",
        "date": "2021/01/01",
        "times": [
            "8:00pm"
        ]
    }
];
// $.getJSON('localhost:8000/showtimes.json', function (json) {
//     console.log("hello");
//     for (var key in json) {
//         console.log(key);
//         if (json.hasOwnProperty(key)) {
//             var item = json[key];
//             langArray.push({
//                 id: item.id,
//                 title: item.title,
//                 lcoation: item.location,
//                 date: item.date,
//                 times: item.times
//             });            
//         }
//     }
//     });

var newSelect=document.createElement('select'),
    option,
    i = 0,
    il = langArray.length;
var locations = [];
for (; i < il; i += 1) {
    if(!(locations.includes(langArray[i].location))){        
        option = document.createElement('option');
        option.setAttribute('value', langArray[i].value);
        option.appendChild(document.createTextNode(langArray[i].location));
        locations.push(langArray[i].location);
        newSelect.appendChild(option);
    }
}

const selectLocation = document.getElementById("location");
selectLocation.appendChild(newSelect);
const movielist = document.getElementById("movieList");
var list = document.createElement("ul");
movielist.appendChild(list);


$(document).ready(function(){
   $("#searchButton").click(function(){
        console.log("Select: " + $(newSelect).find(":selected").text());
        list.innerHTML = "";
        for (var i = 0; i < langArray.length; i += 1) {
            if(langArray[i].location == $(newSelect).find(":selected").text()){    
                var listElement=document.createElement('li');    
                listElement.setAttribute('value', langArray[i].value);
                listElement.textContent = (langArray[i].title);
                for(var j = 0; j < langArray[i].times.length; j++){
                    listElement.textContent += " " + langArray[i].times[j];
                }
                list.appendChild(listElement);
            }
        }
        

    });

});