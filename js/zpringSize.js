// ตัวแปรที่เก็บขนาดเอกสาร
var zpringSize = new function() {
    this.page = {
        'A4' : {
            pageSize : 'A4',
            pageMargin : { // ขนาดขอบกระดาษ
                left: 36,
                right: 36,
                top: 40,
                bottom : 22
            }, 
            pageActualSizePoint : { // ขนาดกระดาษจริงๆ
                width: 595, // A4 Width value in 72DPI
                height: 842 // A4 Height value in 72DPI
            }
        },
        '80m' : {
            pageSize : { width: 227, height: 0 },
            pageMargin : {
                left: 10,
                right: 10,
                top: 10,
                bottom : 10
            }, 
            pageActualSizePoint : {
                width: 227,
                height: 0
            }
        }
    };

    // ขนาดที่ใช้จริงๆในหน่วย Point โดยการนำขนาดกระดาษ มาลบกับขนาด ขอบกระดาษ
    for(var pageType in this.page) {
        this.page[pageType].pageSizePoint = {
            width: this.page[pageType].pageActualSizePoint.width - this.page[pageType].pageMargin.left - this.page[pageType].pageMargin.right,
            height: this.page[pageType].pageActualSizePoint.height - this.page[pageType].pageMargin.top - this.page[pageType].pageMargin.bottom
        };
    }
    
    return this;
}();