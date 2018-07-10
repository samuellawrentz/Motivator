

function makeCall(){
    var request = new XMLHttpRequest();
    request.open('GET', 'https://random-quote-generator.herokuapp.com/api/quotes/random', true);
    
    request.onload = function() {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        var data = JSON.parse(request.response);
        $('h1').text('"' + data.quote + '"');
        $('span').text(data.author).parent().show();
      } else {
        // We reached our target server, but it returned an error
    
      }
    };
    
    request.onerror = function() {
      // There was a connection error of some sort
    };
    
    request.send();
}

makeCall();
