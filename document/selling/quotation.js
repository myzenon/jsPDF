var quotation = function(data, size) {

    var self = this;

    // Font Part --
    this.font = {
        pdfMakeLoad : thsarabun,
        pdfMakeDefaultFont : {
            font: 'THSarabun',
            fontSize : 16
        },
        canvasFont : 'THSarabun'
    };

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

    // Size Part --
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
                    return zpringSize.page.pageSizePoint.width - self.header.address.width - self.header.information.width;
                }
            }
        }      
    };


    // Layout Part --
    this.layout = {};
    
    /////////////////
    this.layout.header = {
        columns: [
				[],
				{
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
				},
				{
					text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Malit profecta versatur nomine ocurreret multavit, officiis viveremus aeternum superstitio suspicor alia nostram, quando nostros congressus susceperant concederetur leguntur iam, vigiliae democritea tantopere causae, atilii plerumque ipsas potitur pertineant multis rem quaeri pro, legendum didicisse credere ex maluisset per videtis. Cur discordans praetereat aliae ruinae dirigentur orestem eodem, praetermittenda divinum. Collegisti, deteriora malint loquuntur officii cotidie finitas referri doleamus ambigua acute. Adhaesiones ratione beate arbitraretur detractis perdiscere, constituant hostis polyaeno. Diu concederetur.'
				}
			]
    };

    /////////////////
    this.layout.body =  [this.layout.header];

    /////////////////
    this.layout.footer = function(currentPage, totalPage) {
        var text = 'หน้าที่ ' + currentPage + ' / ' + totalPage;
        return  {text : text, height: paragraphHeight(sentenceToArray(text, zpringSize.page.pageSizePoint.width, self.font.pdfMakeDefaultFont.fontSize + 'pt', self.font.canvasFont)), margin: [zpringSize.page.pageMargin.left, 0, zpringSize.page.pageMargin.right, 0]};
    };

    this.layout.font = this.font;

    return this.layout;
};