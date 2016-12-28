// Object ของ canvas [ ถ้าระบบ offScreenCanvas มาให้เปลี่ยนตรงนี้ ]
var canvasInstance = document.createElement("canvas"); // Improve Performance by using singleton technique.
// รวมฟังก์ชันในระบบ ให้อยู่ในตัวแปรชื่อ utilB [ ใช้บน Browser เท่านั้น ]
var utilB = {
    // ฟังก์ชันในการโหลอ Font เข้าระบบ เพื่อให้ Canvas สามารถใช้งานได้
    "loadFont" : function(font) {
        var loadChain = [];
        fontFileNames = Object.keys(font.canvas);
        fontFileNames.forEach(function(file) {
            loadChain.push(new Promise(function(resolve, reject) {
                var fileType = file.split('.')[1];
                // ใช้ FontFace API ในการโหลด Font
                var fontFaceAPI = new FontFace('THSarabun', 'url(data:application/x-font-' + fileType + ';charset=utf-8;base64,' + font.vfs[file] + ')', font.canvas[file]);
                document.fonts.add(fontFaceAPI);
                fontFaceAPI.load().then(function() {
                    resolve();
                });
            }));
        });
        return Promise.all(loadChain);
    },
    // คำนวณขนาดตัวอักษร โดยใช้ canvas
    "textSize": function(text, fontCanvas) {
        var canvas = canvasInstance;
        var context = canvas.getContext("2d");
        context.font = fontCanvas;
        var metrics = context.measureText(text);

        // สำหรับทดสอบ Canvas ว่าวาดตัวหนังสือออกมาอย่างไร
        //-------------------------------------------------------------
        // context.clearRect(0, 0, canvas.width, canvas.height);
        // context.fillText(text, 0, 30);
        // document.body.appendChild(canvas);

        // คำนวนความสูงจากการประมาณ
        var height = 0;
        fontCanvas.split(' ').forEach(function(attr) {
            if(attr.includes('pt')) {
                height = parseInt(attr.slice(0, -2));
            }
        });
        if(height <= 10) {
            height += 1; // ต่ำกว่า 10 ให้นำขนาด Font + 1
        }
        else if(height <= 25) {
            height += 2; // ต่ำกว่า 25 ให้นำขนาด Font + 2
        }
        else if(height >= 25) {
            height += 3; // มากกว่า 25 ให้นำขนาด Font + 3
        }

        // คูณ 0.75 เพื่อเปลี่ยนความกว่างจากระบบ Pixel เป็น Point 72 DPI
        return { width : (metrics.width * 0.75), height: height };
    },
    // ใช้ในการตัดประโยคให้เหมาะกับขนาดความกว้าง
    "textToArray": function(sentence, widthPoint, fontCanvas) {
        widthPoint -= 5; // ลบ 5 เนื่องจากความคลาดเคลื่อน
        var wordcut = require('wordcut'); // ใช้ library wordcut ในการตัดคำ
        wordcut.init();
        var wordArray = wordcut.cut(sentence).split('|');
        var sentenceArray = [];
        var sentenceTemp = '';
        for(var indexofWord = 0; indexofWord < wordArray.length; indexofWord++) {
            if(utilB.textSize(sentenceTemp + wordArray[indexofWord], fontCanvas).width > widthPoint) {
                var sentenceOutput = utilB.textSize(sentenceTemp, fontCanvas);
                sentenceOutput.text = sentenceTemp;
                sentenceArray.push(sentenceOutput);
                sentenceTemp = '';
            }
            sentenceTemp += wordArray[indexofWord];
            if((indexofWord + 1) === wordArray.length) {
                var sentenceOutput = utilB.textSize(sentenceTemp, fontCanvas);
                sentenceOutput.text = sentenceTemp;
                sentenceArray.push(sentenceOutput);
            }
        }
        return sentenceArray;
    },
    // ใช้ในการตัดตัวอักษรให้เหมาะกับขนาดความกว้าง
    "charToArray" : function(char, widthPoint, fontCanvas) {
        widthPoint -= 5; // ลบ 5 เนื่องจากความคลาดเคลื่อน
        var charArray = char.split('');
        var sentenceArray = [];
        var sentenceTemp = '';
        for(var indexofChar = 0; indexofChar < charArray.length; indexofChar++) {
            if(utilB.textSize(sentenceTemp + charArray[indexofChar], fontCanvas).width > widthPoint) {
                var sentenceOutput = utilB.textSize(sentenceTemp, fontCanvas);
                sentenceOutput.text = sentenceTemp;
                sentenceArray.push(sentenceOutput);
                sentenceTemp = '';
            }
            sentenceTemp += charArray[indexofChar];
            if((indexofChar + 1) === charArray.length) {
                var sentenceOutput = utilB.textSize(sentenceTemp, fontCanvas);
                sentenceOutput.text = sentenceTemp;
                sentenceArray.push(sentenceOutput);
            }
        }
        return sentenceArray;
    },
    // ใช้ในการตัดเว้นวรรคให้เหมาะกับขนาดความกว้าง
    "spaceToArray" : function(text, widthPoint, fontCanvas) {
        widthPoint -= 5; // ลบ 5 เนื่องจากความคลาดเคลื่อน
        var textArray = text.split(' ');
        var sentenceArray = [];
        var sentenceTemp = '';
        for(var indexofText = 0; indexofText < textArray.length; indexofText++) {
            if(utilB.textSize(sentenceTemp + ' ' + textArray[indexofText], fontCanvas).width > widthPoint) {
                var sentenceOutput = utilB.textSize(sentenceTemp, fontCanvas);
                sentenceOutput.text = sentenceTemp;
                sentenceArray.push(sentenceOutput);
                sentenceTemp = '';
            }
            sentenceTemp += (' ' + textArray[indexofText]);
            if((indexofText + 1) === textArray.length) {
                var sentenceOutput = utilB.textSize(sentenceTemp, fontCanvas);
                sentenceOutput.text = sentenceTemp;
                sentenceArray.push(sentenceOutput);
            }
        }
        return sentenceArray;
    },
    "charCut" : function(char, widthPoint, fontCanvas) {
        // widthPoint -= 15; // ลบ 5 เนื่องจากความคลาดเคลื่อน
        var charArray = char.split('');
        var sentenceTemp = '';
        var sentenceObject = {};
        for(var indexofChar = 0; indexofChar < charArray.length; indexofChar++) {
            if(utilB.textSize(sentenceTemp + charArray[indexofChar], fontCanvas).width > widthPoint) {
                sentenceObject = utilB.textSize(sentenceTemp, fontCanvas);
                sentenceObject.text = sentenceTemp;
                break;
            }
            sentenceTemp += charArray[indexofChar];
            if((indexofChar + 1) === charArray.length) {
                sentenceObject = utilB.textSize(sentenceTemp, fontCanvas);
                sentenceObject.text = sentenceTemp;
            }
        }
        return sentenceObject;
    },
    "imageSize" : function(base64) {
        return new Promise(function(resolve, reject) {
            var img = new Image();
            img.src = base64;
            img.onload = function(){
                resolve({ width : img.width, height : img.height });
            };
        });
    }
};