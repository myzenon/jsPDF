// Font Function
var getTextSizeCanvas = document.createElement("canvas");
var getTextSizePoint = function(text, font) {
    var canvas = getTextSizeCanvas;
    var context = canvas.getContext("2d");
    context.font = font;
    var metrics = context.measureText(text);

    // For Testing Canvas
    //-------------------------------------------------------------
    // context.clearRect(0, 0, canvas.width, canvas.height);
    // context.fillText(text, 0, 30);
    // document.body.appendChild(canvas);

    return {width : (metrics.width * 0.75), height: parseInt(context.font)} ;
};

var sentenceToArray = function(sentence, widthPoint, font) {
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

var charToArray = function(char, widthPoint, font) {
    var charArray = char.split('');
    var sentenceArray = [];
    var sentenceTemp = '';
    for(var indexofChar = 0; indexofChar < charArray.length; indexofChar++) {
        if(getTextSizePoint(sentenceTemp + charArray[indexofChar], font).width > widthPoint) {
            var sentenceOutput = getTextSizePoint(sentenceTemp, font);
            sentenceOutput.text = sentenceTemp;
            sentenceArray.push(sentenceOutput);
            sentenceTemp = '';
        }
        sentenceTemp += charArray[indexofChar];
        if((indexofChar + 1) === charArray.length) {
            var sentenceOutput = getTextSizePoint(sentenceTemp, font);
            sentenceOutput.text = sentenceTemp;
            sentenceArray.push(sentenceOutput);
        }
    }
    return sentenceArray;
};

var getCanvasFont = function(fontName, fontSize, type) {
    if(type === 'b') {
        return 'bold ' + fontSize + 'pt ' + fontName;
    }
    else if(type === 'i') {
        return 'italic ' + fontSize + 'pt ' + fontName;
    }
    else if(type === 'bi') {
        return 'bold italic ' + fontSize + 'pt ' + fontName;
    }
    else {
        return fontSize + 'pt ' + fontName;
    }
};

var preloadFont = function(fontCanvas) {
    getTextSizePoint('', fontCanvas());
    getTextSizePoint('', fontCanvas('b'));
    getTextSizePoint('', fontCanvas('i'));
    getTextSizePoint('', fontCanvas('bi'));
};


// PDFMake Function
var paragraphHeight = function(sentenceArray) {
    var height = 0;
    sentenceArray.forEach(function (sentence) {
        height += sentence.height;
    });
    return height;
}

var oneLineToMutilple = function(data, width, font, bugWidthPoint) {
    if(typeof(data) === 'object') {
        data = data.text;
    }
    return { stack : charToArray(data, width + bugWidthPoint, this.font.canvasFont())}
};

var textDataWithLabel = function(data) {
    return {text : [data.label, ' ', data.value]};
};

var textTableDataWithLabel = function(data) {
    return [data.label, data.value];
};

var textTableDataMulWithLabel = function(data, width, font, bugWidthPoint) {
    var dataTable = textTableDataWithLabel(data);
    dataTable[1] = oneLineToMutilple(dataTable[1], width, font, bugWidthPoint);
    return dataTable;
}

var hrLine = function(width, options) {
    var lineData = { canvas: [{ type: 'line', x1: 0, y1: 0, x2: width, y2: 0, lineWidth: 1,  color: '#AAA' }]};
    for(option in options) {
        lineData[option] = options[option];
    }
    return lineData;
};

var setTextAttr = function(text, attr) {
    if(typeof(text) === 'object') {
        var textObject = text;
    }
    else {
        var textObject = {text : text};
    }
    for(a in attr) {
        text[a] = attr[a];
    }
    return textObject;
};

var setArrayTextAttr = function(array, attr) {
    for(index in array) {
        array[index] = setTextAttr(array[index], attr);
    }
    return array;
};

var createOrderTable = function(widths, label, data, font, bugWidthPoint) {
    var tableObject = {
        table : {
            widths: widths,
            body : [
                [label.no, label.detail, label.quantity, label.pricePerUnit, label.totalPrice],
            ]
        },
        layout : {
            vLineWidth : function() { return 0; },
            hLineColor : function() { return '#AAA'; }
        }
    };
    data.forEach(function(data) {
        data.no.alignment = 'center';
        var quantity = {text : [data.quantity.amount, ' ', data.quantity.unit], alignment : 'center'};
        data.pricePerUnit.text = parseFloat(data.pricePerUnit.text).toFixed(2);
        data.pricePerUnit.alignment = 'right';
        var totalPrice = (data.pricePerUnit.text * data.quantity.amount.text).toString();
        totalPrice = { text: parseFloat(totalPrice).toFixed(2), alignment : 'right' };
        tableObject.table.body.push([
            data.no, 
            {
                stack : [
                    setArrayTextAttr(sentenceToArray(data.detail.name.text, widths[1] + bugWidthPoint, font.canvasFont('b')), {bold : true}),
                    sentenceToArray(data.detail.description.text, widths[1] + bugWidthPoint, font.canvasFont())
                ],
                alignment : 'left'
            },
            quantity,
            data.pricePerUnit,
            totalPrice
        ]);
    });
    return tableObject;
};