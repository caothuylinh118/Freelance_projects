
var classNameEdit = "list-edit-store";
var currentData;

var optionDiscount = "discount";
var optionFreesize = "freesize";
var optionGetFree = "getfree;"
var optionSamePrice = "sameprice;"

$(function() {

  init();

});

function init (){
  currentData = data;
  data = currentData;
  loadHtmlWithData();
}

function loadHtmlWithData () {
  var listStore = document.getElementById("liststore");
  // var mainItem = document.getElementById("mainitem");
  var div;

  // Clear View
  // while (mainItem.firstChild) {
  //     mainItem.removeChild(mainItem.firstChild);
  // }
  while (listStore.firstChild) {
      listStore.removeChild(listStore.firstChild);
  }

  // Load Main Item
  // mainItem.insertAdjacentHTML ('beforeend', createMainItem());


  if (currentData.length>0) {
    for (var i = 0; i < currentData.length; i++) {
        var item = currentData[i];
        div = document.createElement('tr');
        listStore.append(div);
        var newElem = createItem (item);
        div.insertAdjacentHTML ('beforeend', newElem );
        div.className = classNameEdit;
    }
    // At 3 last Items
    listStore.append (div);
  }
}


function createItem(item) {
  var elem = '<td>'+ item.name +'</td>';
  elem += '<td><select class="form-control" id="promotion"><option ' + addValue(item, optionDiscount) + '>Discount</option>';
  elem += '<option ' + addValue(item, optionSamePrice) + '>Same Price</option>';
  elem += '<option ' + addValue(item, optionFreesize) + '>Free up size</option>';
  elem += '<option ' + addValue(item, optionGetFree) + '>Buy xx get xx free</option></select></td>';
  elem += '<td><input type="text" class="form-control" id="percent" value="' + item.discountvalue + '"><label>giá trị khuyến mãi</label></td>';
  return elem;
}



function scanGetData(){
  var editClasses = document.getElementsByClassName(classNameEdit);
  for (var i = 0; i < editClasses.length; i++) {
    var childs = editClasses[i].childNodes;
    if (childs[2].firstChild.value!=""){
      currentData [i].discounttype = childs[1].firstChild.value;
      currentData [i].discountvalue = childs[2].firstChild.value.toString();;
    }

  }
  console.log(currentData[1].discountvalue);
  resortData();
}

function addValue(item, value){
  if (item.discounttype==value)
    return 'value="'+ value +'" selected';
  else
    return 'value="'+ value +'"';
}

function resortData (){
  var noPromoArray = currentData.filter(function(data){
    return data.discountvalue == "0"||data.discountvalue == "";
  });

  var promoArray = currentData.filter(function(data){
    return data.discountvalue != "0"&&data.discountvalue != "0";
  });

  var discountArray = promoArray.filter(function(data){
    return data.discounttype == optionDiscount;
  });

  var samepriceArray = promoArray.filter(function(data){
    return data.discounttype == optionSamePrice;
  });

  var getFreeArray = promoArray.filter(function(data){
    return data.discounttype == optionGetFree;
  });


  // ------- Sort ---------
  samepriceArray.sort(function(a, b){
    return parseInt(a.discountvalue) - parseInt(b.discountvalue);
  });

  discountArray.sort(function(a, b){
    return parseInt(b.discountvalue) - parseInt(a.discountvalue);
  });

  getFreeArray.sort(function(a, b){
    return parseInt(b.discountvalue) - parseInt(a.discountvalue);
  });

  noPromoArray.sort(function(a, b){
    return a.discounttype < b.discounttype;
  });

  var newSortData = samepriceArray.concat (discountArray);
  newSortData = newSortData.concat(getFreeArray);
  newSortData = newSortData.concat(noPromoArray);

  currentData = newSortData;

  // currentData.sort(function(a, b){
  //   return (parseInt(b.discountvalue) - parseInt(a.discountvalue)) * (a.discounttype > b.discounttype) ;
  // });
  writeData();
  loadHtmlWithData();
}

function writeData (){
  var json_string = JSON.stringify(currentData, undefined, 2);
  json_string = "data = " + json_string;
  var link = document.createElement('a');
  link.download = 'data.json';
  var blob = new Blob([json_string], {type: 'text/plain'});
  link.href = window.URL.createObjectURL(blob);
  link.click();
}
