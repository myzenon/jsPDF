var zpringSize = new function() {
    
    // Page Section
    this.page = {
        pageSize : 'A4',
        pageMargin : {
            left: 36,
            right: 36,
            top: 12,
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

    // Header Section
    this.header = {
        address : {
            width: 300 // Left Side Width
        },
        information : {
            width: 150 // Right Side Width
        }        
    };
    this.header.blank = {
        width: this.page.pageSizePoint.width - this.header.address.width - this.header.information.width // Center Width
    };

    // Body Section
    this.body = {};

    // Footer Section
    this.footer = {};

    return this;

}();