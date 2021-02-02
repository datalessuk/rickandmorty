const outPutDisplay = document.getElementById('output');
const userInput = document.getElementById('char-serch');

const liveChar = document.getElementById('liveCharacters');


//Shows the first 20 characters from the API
function getAllCharacters(pInput){
    let url;
    if(pInput ==url){
        url= "https://rickandmortyapi.com/api/character/";
    }
    else{
        url = `https://rickandmortyapi.com/api/character/?name=${pInput}`;
    }
    
    axios.get(url)
    .then(function(response){
       //console.log(response);
      
        
        for(let char of response.data.results){
            
            var htmlString = `<img src="${char.image}" class="img">
            <div class="info-display">
            <h5> Name: <span>${char.name}</span></h5>
            <h6> Species: <span>${char.species}</span></h6>
            <h6> Status: <span>${char.status}</span></h6>
            </div>
            `;

            let outputString = document.createElement('div');
            outputString.classList.add('col-md-3', 'mb-3', 'img-info');
            outputString.innerHTML = htmlString;       
            output.appendChild(outputString);
        }
    })
    .catch(function(error){
        console.log(error);
    })
    .then(function(){

    });

}

window.onload = function(){
    getAllCharacters();
}


userInput.addEventListener('change',inputField);

function inputField(){
    let input = userInput.value.replace(' ', '+');//remove white space from input and add +
    outPutDisplay.innerHTML = "";
    getAllCharacters(input);
}

