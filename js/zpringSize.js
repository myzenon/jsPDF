var zpringSize = new function() {
    this.page = {
        pageSize : 'A4',
        pageMargin : {
            left: 36,
            right: 36,
            top: 40, // Closed 12 point
            bottom : 12
        }, 
        pageActualSizePoint : {
            width: 595, // A4 Width value in 72DPI
            height: 842 // A4 Height value in 72DPI
        }
    };
    this.page.pageSizePoint = {
        width: this.page.pageActualSizePoint.width - this.page.pageMargin.left - this.page.pageMargin.right,
        height: this.page.pageActualSizePoint.height - this.page.pageMargin.top - this.page.pageMargin.bottom
    };
    return this;
}();