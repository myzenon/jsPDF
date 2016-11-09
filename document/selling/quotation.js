var quotation = function(data, size) {

    var self = this;

    // Data Part --
    this.data = {
        header : {
            location : {
                shop : {
                    name : 'ร้านก้องคำ'
                }
            },
            doc : {
                part1 : {
                    docNo : 'QT000002'
                }
            }
        },
        body : {},
        footer : {}
    };

    // Data with Label Part --
    this.dataMap = {
        header : {
            location : {
                shop : {
                    name : { text : this.data.header.location.shop.name, style: 'shopName'}
                }
            },
            doc : {
                label : { text : 'ใบเสนอราคา', style : 'สีส้วม' },
                part1 : {
                    docNo : {
                        label : { text: 'เลขที่', style : 'สีส้วม' },
                        value : { text: this.data.header.doc.part1.docNo, style : 'บลาๆๆ'  }
                    }
                }
            }
        },
        body : {},
        footer : {}
    };

    // Size Part
    this.size = {
        header : {
            location : {
                width: function() { return 300; } 
            },
            doc : {
                width: function() { return 200; } 
            },
            blank : {
                width : function() {
                    return self.page.pageSizePoint.width - self.header.address.width - self.header.information.width;
                }
            }
        }      
    };


    // Layout Part
    this.layout = {};

    return this.layout;
};