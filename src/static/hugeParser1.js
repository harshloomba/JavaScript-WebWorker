self.addEventListener('message',function(e){
  //make ajax request to server to get cards data
  var xhr = new XMLHttpRequest();
  xhr.open('GET', encodeURI('/cardSets'));
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
  var actual_data = JSON.parse(hugeData).sets;
  self.postMessage(actual_data.length);
  for(var i=0;i<actual_data.length;i++){
    var arr_cards = actual_data[i].cards;
    for(var j=0;j<arr_cards.length;j++){
        self.postMessage(arr_cards[j].imageName);
    }
    if(i=== actual_data.length-1){
      self.close();
    }
  }
}
