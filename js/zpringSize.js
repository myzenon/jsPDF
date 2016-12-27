// ตัวแปรที่เก็บขนาดเอกสาร
var zpringSize = new function() {
    this.page = {
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
    };
    // ขนาดที่ใช้จริงๆในหน่วย Point โดยการนำขนาดกระดาษ มาลบกับขนาด ขอบกระดาษ
    this.page.pageSizePoint = {
        width: this.page.pageActualSizePoint.width - this.page.pageMargin.left - this.page.pageMargin.right,
        height: this.page.pageActualSizePoint.height - this.page.pageMargin.top - this.page.pageMargin.bottom
    };
    return this;
}();