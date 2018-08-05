let numbers = [1, 2, 3, 4, 5, 6, ];

function Odd(num) {
   return num.filter((number)=> number % 2 !==0)
    .map((number)=> number * 2)
};
function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {

        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request 
    request.send();
}

function putTag (){
    movieList.map((movie)=>{

        switch(true){

            case (movie.rating >= 7) :
            movie.tag = "Good"
            break;

            case (movie.rating >= 4 & movie.rating < 7 ) :
            movie.tag = "Average"
            break;

            case (movie.rating < 4) :
            movie.tag = "Bad"
            break;
            
        }
    })
}    

putTag(movieList);
