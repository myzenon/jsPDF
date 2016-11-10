var getTextSizeCanvas = document.createElement("canvas");
var getTextSizePoint = function(text, font) {
    var canvas = getTextSizeCanvas;
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);
    // For Testing Canvas

    // context.clearRect(0, 0, canvas.width, canvas.height);
    // context.fillText(text, 0, 30);
    // document.body.appendChild(canvas);

    // 1px = 0.75pt
    return {width : metrics.width * 0.75, height: parseInt(context.font)} ;
};

var sentenceToArray = function(sentence, widthPoint, fontStyle, fontName) {
    var font = fontStyle + ' ' + fontName;
    var wordcut = require('wordcut');
    wordcut.init();
    var wordArray = wordcut.cut(sentence).split('|');
    var sentenceArray = [];
    var sentenceTemp = '';
    for(var indexofWord = 0; indexofWord < wordArray.length; indexofWord++) {
        if(getTextSizePoint(sentenceTemp + wordArray[indexofWord], font).width > widthPoint) {
            var sentenceOutput = getTextSizePoint(sentenceTemp, font);
            sentenceOutput.text = sentenceTemp;
            sentenceArray.push(sentenceOutput);
            sentenceTemp = '';
        }
        sentenceTemp += wordArray[indexofWord];
        if((indexofWord + 1) === wordArray.length) {
            var sentenceOutput = getTextSizePoint(sentenceTemp, font);
            sentenceOutput.text = sentenceTemp;
            sentenceArray.push(sentenceOutput);
        }
    }
    return sentenceArray;
};


var paragraphHeight = function(sentenceArray) {
    var height = 0;
    sentenceArray.forEach(function (sentence) {
        height += sentence.height;
    });
    return height;
}

// Preload Font by Javascript
getTextSizePoint('','1pt');
getTextSizePoint('','bold 1pt');
getTextSizePoint('','italic 1pt');
getTextSizePoint('','bold italic 1pt');