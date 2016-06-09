self.addEventListener('message',function(e){
    var start_time = e.data.time;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', encodeURI('/getjson'));
    xhr.onload = function(){
      if(xhr.status === 200){
        //call function to do the work
        performOperations(xhr.responseText, start_time);
      }else{
        self.postMessage('could not get data from server');
      }
    };
    xhr.send();
},false);

function performOperations(myData, time_of_start){
  var operations = JSON.parse(myData).operations_data.operations;
  for(var i=0;i<operations.length;i++){
    switch(operations[i].operation){
      case 'encode':
        var encoded_data = btoa(operations[i].value);
        self.postMessage('Encoded value of '+operations[i].value+' : '+encoded_data+'\n');
      break;
      case 'decode':
        var decoded_data = atob(operations[i].value);
        self.postMessage('Decoded Value of '+operations[i].value+ ':'+decoded_data+'\n');
      break;
      default:
        self.postMessage('Unknown Operation:'+operations[i].operation+'\n');
    };
    if(i === operations.length-1){
      var t1 = performance.now();
      self.postMessage('it took'+(t1-time_of_start)+'milliseconds');
    }
  }
}
