let html = document.getElementsByTagName("html")[0];
let attribute = document.createAttribute("dir");

let quoteText = document.getElementById("quote");//
let quoteTextAuthor = document.getElementById("author");

let parametersAr = {
  mainText:
    '<bdo dir = "rtl">انقر فوق الزانتظر دقيقة ، نحن بحاجة إلى بعض الوقت لمعالجة طلبك </bdo>',
  author: '<bdo dir = "rtl" style = "margin-left: 20px">نص</bdo>',
};

let parametersEn = {
  mainText:
    '<bdo dir = "ltr">Wait a minute, we need some time to process your request! Click on the button!</bdo>',
  author: '<bdo dir = "ltr" >Author</bdo>',
};

function convertToAr() {
  attribute.value = "rtl";

  quoteText.innerHTML = parametersAr.mainText;
  quoteTextAuthor.innerHTML = parametersAr.author;

  html.setAttributeNode(attribute);
}
function convertToEn() {
  attribute.value = "ltr";

  quoteText.innerHTML = parametersEn.mainText;
  quoteTextAuthor.innerHTML = parametersEn.author;

  html.setAttributeNode(attribute);
}

fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((json) => {
    let next = document.querySelector("#button");

    next.addEventListener("click", function () {
      let i = Math.ceil(Math.random() * 1000);
      let backgroundcolor = "#" + Math.ceil(Math.random() * 10000).toString(16); //получаем цвет
      let element_one = document.querySelector("#quote");
      let element_two = document.querySelector("#author");

      attribute.value = "ltr";
      html.setAttributeNode(attribute);

      setTimeout(() => {
        element_one.innerHTML = json[i].text;
        element_two.innerHTML = json[i].author;
        document.body.style.backgroundColor = backgroundcolor;
        element_one.style.color = backgroundcolor;
        element_two.style.color = backgroundcolor;

        document.querySelector(".main").style.backgroundColor = backgroundcolor;
        next.style.backgroundColor = backgroundcolor;
      }, 800);
    });
  });
