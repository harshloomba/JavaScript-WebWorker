self.addEventListener('message',function(e){
  //make ajax request to server to get cards data
  var xhr = new XMLHttpRequest();
  xhr.open('GET', encodeURI('/cardData'));
  xhr.onload = function(){
    if(xhr.status === 200){
      //call function to do the work
      performOperations(xhr.responseText);
    }else{
      self.postMessage('could not get data from server');
    }
  };
  xhr.send();
},false);

function performOperations(hugeData){
  var actual_data = JSON.parse(hugeData).cards;
  for(var obj in actual_data){
    self.postMessage(obj);
  }
}
