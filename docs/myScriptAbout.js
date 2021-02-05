
var liveChar = document.getElementById('liveCharacters');
var locations = document.getElementById('locations');
var episode = document.getElementById('episode');

function liveAPIStats(){
    let charTotal;
    
    
    let url= "https://rickandmortyapi.com/api/character/";

    axios.get(url)
    .then(function(response){
        
        charTotal = response.data.info.count;
        liveChar = liveChar.innerHTML = charTotal;
        //console.log(charTotal);
        
    }).catch(function(error){
        console.log(error);
    })

    axios.get("https://rickandmortyapi.com/api/location/")
    .then(function(response){
        let loctotal;

        loctotal = response.data.info.count;
        locations = locations.innerHTML = loctotal;
        //console.log(loctotal);
        
    }).catch(function(error){
        console.log(error);
    })

    axios.get("https://rickandmortyapi.com/api/episode")
    .then(function(response){
        let eppTotal;

        eppTotal = response.data.info.count;
        episode = episode.innerHTML = eppTotal;
        
    }).catch(function(error){
        console.log(error);
    })
    .then(function(){
    })

}


window.onload = function(){
    liveAPIStats();
}



