
var liveChar = document.getElementById('liveCharacters');
var locations = document.getElementById('locations');


function countAllCharacters(){
    let charTotal;
    let loctotal;
    
    let url= "https://rickandmortyapi.com/api/character/";

    axios.get(url)
    .then(function(response){
        
        charTotal = response.data.info.count;
        liveChar = liveChar.innerHTML = charTotal;
        
    }).catch(function(error){
        console.log(error);
    })
    .then(function(){

    });

}

function getAllLocations(){
    let loctotal;
    
    let url= "https://rickandmortyapi.com/api/location/";

    axios.get(url)
    .then(function(response){
        
        loctotal = response.data.info.count;
        locations = locations.innerHTML = loctotal;
        
    }).catch(function(error){
        console.log(error);
    })
    .then(function(){

    });
}


countAllCharacters();
getAllLocations();

