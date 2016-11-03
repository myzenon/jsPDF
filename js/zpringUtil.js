var getTextWidth = {};
var getTextWidthPoint = function(text, style) {
    var canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
    var context = canvas.getContext("2d");
    context.font = style + ' ' + zpringFont.canvasFont;
    var metrics = context.measureText(text);
    
    // For Testing Canvas
    // context.fillText(text, 0, 30);
    // document.body.appendChild(canvas);

    // 1px = 0.75pt
    return metrics.width * 0.75;
};

var sentenceToArray = function(sentence, widthPoint, fontStyle) {
    var wordcut = require('wordcut');
    wordcut.init();
    var wordArray = wordcut.cut(sentence).split('|');
    var sentenceArray = [];
    var sentenceTemp = '';
    for(var indexofWord = 0; indexofWord < wordArray.length; indexofWord++) {
        if(getTextWidthPoint(sentenceTemp + wordArray[indexofWord], fontStyle) > widthPoint) {
            sentenceArray.push(sentenceTemp);
            sentenceTemp = '';
        }
        sentenceTemp += wordArray[indexofWord];
    }
    return sentenceArray;
};
