$(function() {

  var currentLang = 'vi';
  var currentLangData;
  var currentCity = 'hcm';

  var optionDiscount = "discount";
  var optionFreesize = "freesize";
  var optionGetFree = "getfree;"
  var optionSamePrice = "sameprice;"

  initialData();

  $('#area').on('change', function() {
    checkCity($(this).val());
  })

  $('#district').on('change', function() {
    checkDistrict($(this).val());
  })

  $('#language').on('change', function() {
    changeLanguage($(this).val());
    checkCity (currentCity);
  });

  /*
  *  FUNCTIONS
  *
  */

  function initialData()
	{
    list_hcm = {
					"Quan-1":"Quận 1",
          "Quan-2":"Quận 2",
          "Quan-3":"Quận 3",
          "Quan-4":"Quận 4",
          "Quan-5":"Quận 5",
          // "Quan-6":"Quận 6",
          "Quan-7":"Quận 7",
          "Quan-8":"Quận 8",
          "Quan-9":"Quận 9",
          "Quan-10":"Quận 10",
          "Quan-11":"Quận 11",
          "Quan-12":"Quận 12",
          // "An-Phu":"An Phú",
          // "Phu-My-Hung":"Phú Mỹ Hưng",
          "Thu-Duc":"Thủ Đức",
          "Go-Vap":"Gò Vấp",
          "Tan-Binh":"Tân Bình",
          "Tan-Phu":"Tân Phú",
          "Binh-Tan":"Bình Tân",
          "Binh-Thanh":"Bình Thạnh",
          "Phu-Nhuan":"Phú Nhuận"
      };

      list_hn = {
          "Hai-Ba-Trung":"Hai Bà Trưng",
          "Ba-Dinh":"Ba Đình",
          "Hoan-Kiem":"Hoàn Kiếm",
      		"Dong-Da":"Đống Đa",
          "Tay-Ho":"Tây Hồ",
          "Cau-Giay":"Cầu Giấy",
          "Thanh-Xuan":"Thanh Xuân",
          "Hoang-Mai":"Hoàng Mai",
          "Long-Bien":"Long Biên",
          "Tu-Liem":"Từ Liêm",
          // "Thanh-Tri":"Thanh Trì",
          // "Gia-Lam":"Gia Lâm",
          // "Dong-Anh":"Đông Anh",
          // "Soc-Son":"Sóc Sơn"

			};

      list_dn = {
          "Hai-Chau":"Hải Châu"

      };

    changeLanguage ('vi');
    checkCity (currentCity);
	}

  function loadHtmlWithData (jsonData) {
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


    if (jsonData.length>0) {
      for (var i = 0; i < jsonData.length; i++) {
          console.log ("name : " + jsonData[i].name);
          var item = jsonData[i];
          if (i%4==0){
            if (div!=null)
              listStore.append(div);
            div = document.createElement('div');
          }
          var newElem = createItem (item);
          div.insertAdjacentHTML ('beforeend', newElem );
          div.className = "row";
      }
      // At 3 last Items
      listStore.append (div);
    }
  }

  function createItem(item) {
    var elem = '<div class="col-sm-3"><div class="item"><div class="box"><p class="picture">';
    elem += '<img src="assets/img/'+ item.image +'" class="img-responsive"></p>';
    if (item.discounttype==optionDiscount&&item.discountvalue!="0"){
      elem += '<p class="discount">' + currentLangData['discount'] + ' ' + item.discountvalue +  '%</p><div class="info"><p class="title">';
    } else if (item.discounttype==optionSamePrice&&item.discountvalue!="0") {
      elem += '<p class="discount">' + currentLangData['same_price'] + ' ' + formatPrice(item.discountvalue) +  ' vnđ</p><div class="info"><p class="title">';
    } else if (item.discounttype==optionGetFree&&item.discountvalue!="0") {
      elem += '<p class="discount">' + getFreeValue (item)  + '</p><div class="info"><p class="title">';
    } else if (item.discounttype==optionFreesize) {
      elem += '<p class="discount">' + currentLangData['free_up_size']  + '</p><div class="info"><p class="title">';
    } else {
      elem += '<div class="info"><p class="title">';
    }
    //elem += '<p class="discount">' + currentLangData['discount'] + '</p><div class="info"><p class="title">';
    elem += getTranslation(item.name);
  //  elem += '<p><img src="' + getStar(item.stars) + '" width="50%"></p>';
    if (currentLang =='vi'){
      elem += ' <p>Giao hàng: ' + getTranslation(item.delivery);
      elem += '</div> </div> <a href="' + item.viurl;
      elem += '#"><div class="btn btn-info">Đặt ngay</div></a> </div> </div>';
    } else if (currentLang == 'en'){
      elem += ' <p>Delivery: ' + getTranslation(item.delivery);
      elem += '</div> </div> <a href="' + item.enurl;
      elem += '#"><div class="btn btn-info">Order now</div></a> </div> </div>';
    }
    return elem;
  }

  function createMainItem () {
    var mainItem = data[0];
    var url ;
    if (currentLang =='vi') {
      url = mainItem.viurl;
    } else if (currentLang =='en') {
      url = mainItem.enurl;
    }
    var elem = '<div class="col-sm-6"><img src="assets/img/'+ mainItem.image + '" class="img-responsive"></div><div class="col-sm-6 description">';
    elem += '<h2>' + mainItem.name + '</h2>';
    elem += '<p class="text-info"> <img src="' + getStar(mainItem.stars) + '" width="50%" > ' + currentLangData['comments_1'] + mainItem.comments + currentLangData['comments_2'] + '</p>';
    elem += '<p><strong>' + currentLangData['description'] + '</strong><br>' + mainItem.content + '<a href="' + url + '"> ' + currentLangData['view_more'] + '</a></p>';
    elem += '<p><strong>' + currentLangData['delivery'] + '</strong> <span class="address">' + mainItem.delivery + '</span>';
    elem += '<div class="order"><div class="btn btn-info"><a href="' + url + '">' + currentLangData['book_now'] + '</a></div> <span class="discount" tkey="discount">' + currentLangData['discount'] + '</span></div></div>'

    return elem;
  }

  function checkCity (city) {

    var listStore = document.getElementById("liststore");
    // Clear View
    while (listStore.firstChild) {
        listStore.removeChild(listStore.firstChild);
    }
    $('#district').empty();
    currentCity = city;
    var welcomeTxt = document.getElementById("welcometext");

		var new_districts;

    if (city =='hcm'){
      new_districts = list_hcm;
      welcomeTxt.innerHTML = currentLangData['welcome_at'] + " HỒ CHÍ MINH";
    } else if (city =='hn') {
      new_districts = list_hn;
      welcomeTxt.innerHTML = currentLangData['welcome_at'] + " HÀ NỘI";
    } else {
      new_districts = list_dn;
      welcomeTxt.innerHTML = currentLangData['welcome_at'] + " ĐÀ NẴNG";
    }

    $.each(new_districts, function(key, value) {
      if(value=='null'){
			     key = translate_txt['district_choose_txt'];
    	}
      $('#district').append($("<option></option>")
     			.attr("value", value).text(getTranslation(value)));
    	});

      $('#district').prop('selectedIndex', 0);
      checkDistrict($('#district').val());
  }

  function changeLanguage (lang) {
    if(lang=="vi"){
      currentLangData = vi;
      currentLang = 'vi';
    }
    else{
      currentLangData = en;
      currentLang = 'en';
    }
    document.getElementById("mainimg").style.backgroundImage = "url(assets/bg/"+ currentLangData['banner_url']  +")";
    $("[tkey]").each (function (index)
    {
      var strTr = currentLangData [$(this).attr ('tkey')];
        $(this).html (strTr);
    });
    checkCity($('#area').val());
  }

  function checkDistrict (district) {
    var jsonData = data;
    var filterData;
    var filterDistrict;
    if (currentCity =='hcm'){
      filterData = jsonData.filter(function(data){
        return ((data.city == "Hồ Chí Minh" || data.city == "HCM" || data.city == "Ho Chi Minh")
                &&(data.name.includes(district)));
      });
      if (district=="Quận 1"){
        filterData = filterData.filter(function(data){
          return data.name.includes(district)
                &&!data.name.includes("Quận 10")
                &&!data.name.includes("Quận 11")
                &&!data.name.includes("Quận 12");
        });
      }
    } else if (currentCity =='hn') {
      filterData = jsonData.filter(function(data){
        return ((data.city == "Hà Nội" || data.city == "HN" || data.city == "Ha Noi")
                &&(data.name.includes(district)));
      });
    } else {
      filterData = jsonData.filter(function(data){
        return ((data.city == "Đà Nẵng" || data.city == "Da Nang" || data.city == "DN")
                &&(data.name.includes(district)));
      });
    }



    loadHtmlWithData (filterData);
  }

  function getStar (stars) {
    if (stars == "5")
      return "https://gallery.mailchimp.com/22afe50f0ff7428c99dbb1de8/images/3ff0d8b7-8fe0-42e0-b648-a2f3c059c88a.png";
    else if (stars == "4.5")
      return "https://gallery.mailchimp.com/22afe50f0ff7428c99dbb1de8/images/e7745a32-552b-4f35-92f5-bd60456a9eef.png";
    else if (stars == "4")
      return "https://gallery.mailchimp.com/22afe50f0ff7428c99dbb1de8/images/70b3f394-f96c-4a31-b3df-1ef69850273c.png";
    else if (stars == "3.5")
      return "https://gallery.mailchimp.com/22afe50f0ff7428c99dbb1de8/images/514de75e-ff5b-493c-8a1b-de57c95f29da.png";
    else
      return "https://gallery.mailchimp.com/22afe50f0ff7428c99dbb1de8/images/0449bf37-ee09-421b-b55e-a81806f82cda.png";
  }


  function getTranslation (content){
    if (currentLang == 'en') {
      return content.replace(/Quận/g, "District").replace(/quận/g, "District");
    }
    return content;
  }

  function getFreeValue (item) {
    return currentLangData['buy'] + " " + getFreeItemAt(item, 0) + " " + currentLangData['get'] + " " + getFreeItemAt(item, 1) + " " + currentLangData['free'];
  }

  function getFreeItemAt (item, position) {
    var value = item.discountvalue.split(',');
    return value[position];
  }

  function getDistrictValue (name){
    if (name.includes("Quận"))
      return name.split(" ")[1];
    return name;
  }

  function formatPrice (price) {
    var priceArr = price.split ("");
    var priceFormat = "";
    var counter = 0;
    for (var i = (priceArr.length-1); i >= 0; i--) {
      counter++;
      priceFormat += priceArr[i];
      if (counter == 3 && i > 0){
        priceFormat += ".";
        counter = 0;
      }
    }
    return priceFormat.split("").reverse().join("");
  }
});
