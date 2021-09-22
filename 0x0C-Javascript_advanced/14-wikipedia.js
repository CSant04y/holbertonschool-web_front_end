function createElement(data) {
    const para = document.createElement('P');
    const paraText = document.createTextNode(data);
    para.appendChild(paraText);
    document.body.appendChild(para);
}

function queryWikipedia(callback) {
    let xml = new XMLHttpRequest();
    xml.addEventListener("load", function() {callback(this.responseText)});
    xml.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*");
    xml.send();
}

queryWikipedia(createElement);
