// import axios from 'axios';


const arr = ["Life is what happens when you're busy making other plans.", "Never let the fear of striking out keep you from playing the game.", "Education is the most powerful weapon which you can use to change the world."]

var i = 0;

function generateQuote(){
    // const config = {
    //     headers : {
    //         Accept : 'application/json',
    //     },
    // }
    // axios.get('url', config).then((res) => {
    //     document.getElementById('...').innerHTML = res.data.joke
    // });

    if(i == arr.length){
        i = 0;
        document.getElementById('quote').innerHTML = arr[i];
    }

    else {
        document.getElementById('quote').innerHTML = arr[i];
        i++;
    }
}

export default generateQuote