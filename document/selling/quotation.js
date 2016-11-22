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
                    name : 'ร้านก๋องคำ',
                    address : '123 ต.เเม่สาย อ.เเม่สาย จ.เชียงราย 57130',
                    mobilePhone : '0123456789',
                    telePhone : '053123456',
                    fax : '0533456789',
                    website : 'eeeeee.com',
                    taxNumber : '11123456789'
                },
                seller : {
                    name : 'Company1',
                    address : '222/1 ต.สุเทพ อ.เมือง จ.เชียงใหม่ 50200',
                    taxNumber : '012345 (111/1)'
                }
            }, 
            doc : {
                part1 : {
                    docNo : 'QT000001',
                    date : '27/10/2016',
                    sellerName : 'Mind',
                    quote : '00001',
                },
                 part2 : {
                    workName : 'firstProject',
                    contactName : 'สมศรี ใจดี',
                    mobilePhone : '081234564',
                    email : '555@hotmail.com'
                }
            }
        },
        body : {
            order : {
                orderlist : [
                    {
                        no :'1',
                        detail : {
                            name : 'ซีเรียสบัตเตอร์แรลลีอิมพีเรียลพรีเมียม เย้วโค้ชไรเฟิลแชเชือน น็อกเป่ายิ้งฉุบ ม้ง วอร์รูมชัตเตอร์สคริปต์บิ๊ก แหววโหงวเฮ้งวิลเลจ ตู้เซฟไทเฮาเทรลเล่อร์ไบเบิล แฟ้บเฮีย ง่าวสปอตอริยสงฆ์มหาอุปราชา',
                            description : 'โรแมนติกเปโซไฮเอนด์ คอร์สรองรับแฟรี มาร์ค เยนแซนด์วิช อุรังคธาตุนายแบบซูม ฟาสต์ฟู้ดมาม่า วานิลาแจ็กพอตโกเต็กซ์สังโฆชินบัญชร กิฟท์เอสเปรสโซคลับโอวัลติน ติวเตอร์ดราม่าเอสเพรสโซตอกย้ำคอมเมนท์ เอสเพรสโซแพทยสภาเบลอแตงโม เวิร์กช็อปคอร์รัปชันลิมูซีน โยโย่ ดิกชันนารีอัตลักษณ์วัจนะแมมโบ้ลิมูซีน เซ่นไหว้พอเพียง เซี้ยวสแตนดาร์ดโกะซูโม่ เวอร์ไชน่า'
                        },
                        quantity : {
                            amount : '100',
                            unit : 'กก'
                        },
                        pricePerUnit : '59'
                    },
                    {
                        no :'2',
                        detail : {
                            name : 'ซีเรียสบัตเตอร์แรลลีอิมพีเรียลพรีเมียม เย้วโค้ชไรเฟิลแชเชือน น็อกเป่ายิ้งฉุบ ม้ง วอร์รูมชัตเตอร์สคริปต์บิ๊ก แหววโหงวเฮ้งวิลเลจ ตู้เซฟไทเฮาเทรลเล่อร์ไบเบิล แฟ้บเฮีย ง่าวสปอตอริยสงฆ์มหาอุปราชา',
                            description : 'โรแมนติกเปโซไฮเอนด์ คอร์สรองรับแฟรี มาร์ค เยนแซนด์วิช อุรังคธาตุนายแบบซูม ฟาสต์ฟู้ดมาม่า วานิลาแจ็กพอตโกเต็กซ์สังโฆชินบัญชร กิฟท์เอสเปรสโซคลับโอวัลติน ติวเตอร์ดราม่าเอสเพรสโซตอกย้ำคอมเมนท์ เอสเพรสโซแพทยสภาเบลอแตงโม เวิร์กช็อปคอร์รัปชันลิมูซีน โยโย่ ดิกชันนารีอัตลักษณ์วัจนะแมมโบ้ลิมูซีน เซ่นไหว้พอเพียง เซี้ยวสแตนดาร์ดโกะซูโม่ เวอร์ไชน่า'
                        },
                        quantity : {
                            amount : '100',
                            unit : 'กก'
                        },
                        pricePerUnit : '59'
                    }
                ]
            },
            total : {
                letter : 'ห้าหมื่นเก้าพันบาท',
                digit : {
                    noTax : {
                        total : '59000',
                        discount : '4000',
                        afterDiscount : '55000',
                        finalTotal : '55000',
                    },
                    withTax : {
                        deductTax : '1000',
                        finalTotal : '54000'
                    }
                }
            },
            note : {
                description : 'อ้ย โปรดักชั่นอาร์พีจีบาบูน อุปทานครัวซองทีวี เอาต์ แรงใจ เอาท์อาร์พีจีพอเพียง พะเรอแหววสเก็ตช์ต่อยอดสตรอว์เบอร์รี ธัมโมพงษ์ลาตินบ๊วยว้อดก้า มะกัน กีวี โอวัลตินไมเกรนแดนซ์ล็อบบี้สปอต แซนด์วิชไหร่ อุปัทวเหตุวิลเลจสะเด่าซินโดรม สกาย ﻿กรรมาชนตุ๊กตุ๊กราสเบอร์รีสต๊อคออกแบบ วอลซ์เกมส์ไวกิ้งโชห่วยน็อค'
            },
            signature : {
                buyer : {
                    signature : '',
                    date : ''
                },
                seller : {
                    shop : {
                        name : ''
                    },
                    owner : {
                        signature : '',
                        date : ''
                    }
                }
            }
        },
        footer : {
            page : {
                number : ''
            },
            logo : {
                name : ''
            }
        }
    };

    // Data with Label Part --
    this.dataMap = {
        header : {
            location : {
                shop : {
                    name : { text : this.data.header.location.shop.name, bold: true },
                    address: { text : this.data.header.location.shop.address },
                    mobilePhone: {
                        label : { text : 'เบอร์มือถือ' },
                        value : { text : this.data.header.location.shop.mobilePhone }
                    },
                    telePhone: {
                        label : { text : 'โทร' },
                        value : { text : this.data.header.location.shop.telePhone }
                    },
                    fax: {
                        label : { text : 'เบอร์แฟกซ์' }, 
                        value : { text : this.data.header.location.shop.fax }
                    },
                    website: { text : this.data.header.location.shop.website },
                    taxNumber: { 
                        label : { text : 'เลขประจำตัวผู้เสียภาษี' },
                        value : { text : this.data.header.location.shop.taxNumber } 
                    }
                },
                seller : {
                    label : { text : 'ลูกค้า', style : 'quo_label_color' },
                    name : { text : this.data.header.location.seller.name },
                    address : { text : this.data.header.location.seller.address },
                    taxNumber : { 
                        label : { text : 'เลขประจำตัวผู้เสียภาษี' },
                        value : { text : this.data.header.location.seller.taxNumber } 
                    }
                }
            },
            doc : {
                label : { alignment: 'center', text : 'ใบเสนอราคา', fontSize:'40', style : 'quo_label_color', bold : true },
                part1 : {
                    docNo : {
                        label : { text : 'เลขที่', style : 'quo_label_color' },
                        value : { text : this.data.header.doc.part1.docNo }
                    },
                    date : {
                        label : { text : 'วันที่', style : 'quo_label_color' },
                        value : { text : this.data.header.doc.part1.date }
                    },
                    sellerName : { 
                        label : { text : 'ผู้ขาย', style : 'quo_label_color' },
                        value : { text : this.data.header.doc.part1.sellerName }
                     },
                    quote : { 
                        label : { text : 'อ้างอิง', style : 'quo_label_color' },
                        value : { text : this.data.header.doc.part1.quote }
                     }
                },
                part2 : {
                    workName : { 
                        label : { text : 'ชื่องาน', style : 'quo_label_color' },
                        value : { text : this.data.header.doc.part2.workName }
                     },
                    contactName : { 
                        label : { text : 'ผู้ติดต่อ', style : 'quo_label_color' },
                        value : { text : this.data.header.doc.part2.contactName }
                     },
                    mobilePhone : { 
                        label : { text : 'เบอร์โทร', style : 'quo_label_color' },
                        value : { text : this.data.header.doc.part2.mobilePhone }
                     },
                    email : { 
                        label : { text : 'อีเมลล์', style : 'quo_label_color' },
                        value : { text : this.data.header.doc.part2.email }
                     }
                }
            }
        },
        body : {
            order : {
                label : { 
                    no : { text : '#' },
                    detail : { text : 'รายละเอียด' },
                    quantity : { text : 'จำนวน' },
                    pricePerUnit : { text : 'ราคาต่อหน่วย' },
                    total : { text : 'ยอดรวม' } 
                 },
                orderlist : function() {
                    var newOrder = [];
                    this.data.body.order.orderlist.forEach(function(order) {
                        newOrder.push({
                            no : { text : order.no },
                            detail : {
                                name : { text : order.detail.name, bold : true },
                                description : { text : order.detail.description }
                            },
                            quantity : {
                                amount : { text : order.quantity.amount },
                                unit : { text : order.quantity.unit }
                            },
                            pricePerUnit : { text : order.pricePerUnit }
                        });
                    });
                    return newOrder;
                }()
            },
            total : {
                letter : { text : this.data.body.total.letter },
                digit : {
                    noTax : {
                        total : { 
                            label : { text : 'รวมเป็นเงิน', style : 'quo_label_color' },
                            value : { text : this.data.body.total.digit.noTax.total }
                         },
                        discount : { 
                            label : { text : 'ส่วนลด', style : 'quo_label_color' },
                            value : { text : this.data.body.total.digit.noTax.discount }
                         },
                        afterDiscount : { 
                            label : { text : 'จำนวนเงินหลังหักส่วนลด', style : 'quo_label_color' },
                            value : { text : this.data.body.total.digit.noTax.afterDiscount }
                         },
                        finalTotal : { 
                            label : { text : 'จำนวนเงินรวมทั้งสิ้น', style : 'quo_label_color' },
                            value : { text : this.data.body.total.digit.noTax.finalTotal }
                         },
                    },
                    withTax : {
                        deductTax : { 
                            label : { text : 'หักภาษี ณ ที่จ่าย', style : 'quo_label_color' },
                            value : { text: this.data.body.total.digit.withTax.deductTax }
                         },
                        finalTotal : { 
                            label : { text : 'ยอดชำระ', style : 'quo_label_color' },
                            value : { text : this.data.body.total.digit.withTax.finalTotal }
                         }
                    }
                }
            },
            note : {
                description : {
                    label : { text : 'หมายเหตุ', style : 'quo_label_color' },
                    value : { text : this.data.body.note.description }
                }
            },
            signature : {
                buyer : {
                    signature : { 
                        label : { text : 'ผู้สั่งซื้อสินค้า' },
                        value : { text : this.data.body.signature.buyer.signature }
                     },
                    date : { 
                        label : { text : 'วันที่' },
                        value : { text : this.data.body.signature.buyer.date }
                     }
                },
                seller : {
                    shop : {
                        name : { 
                            label : { text : 'ในนาม' },
                            value : { text : this.data.body.signature.seller.shop.name }
                         }
                    },
                    owner : {
                        signature : { 
                            label : { text : 'ผู้อนุมัติ' },
                            value : { text : this.data.body.signature.seller.owner.signature }
                         },
                        date : { 
                            label : { text : 'วันที่' },
                            value : { text : this.data.body.signature.seller.owner.date }
                         }
                    }
                }
            }
        },
        footer : { 
            page : {
                number : { 
                    label : { text : 'หน้าที่' },
                    value : { text : this.data.footer.page.number }
                 }
            },
            logo : {
                name : { 
                    label : { text : 'เราใช้' },
                    value : { text : this.data.footer.logo.name }
                 }
            }
         }
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
                    return zpringSize.page.pageSizePoint.width - self.size.header.location.width() - self.size.header.doc.width();
                }
            }
        }      
    };


    // Layout Part --
    this.layout = {};

    /////////////////
    this.layout.header = {
        columns: [
                { 
                    width: this.size.header.location.width(),
                    stack :  [
                            this.dataMap.header.location.shop.name,
                            this.dataMap.header.location.shop.address,
                            textDataWithLabel(this.dataMap.header.location.shop.mobilePhone),
                            textDataWithLabel(this.dataMap.header.location.shop.telePhone),
                            textDataWithLabel(this.dataMap.header.location.shop.fax),
                            this.dataMap.header.location.shop.website,
                            textDataWithLabel(this.dataMap.header.location.shop.taxNumber),
                            ' ',
                            this.dataMap.header.location.seller.label,
                            this.dataMap.header.location.seller.name,
                            this.dataMap.header.location.seller.address,
                            textDataWithLabel(this.dataMap.header.location.seller.taxNumber)
                    ]
                },
				{
                    width: this.size.header.blank.width(),
                    text : ' '
                },
				{
					width: this.size.header.doc.width() ,
                    stack : [
                        this.dataMap.header.doc.label,
                        hrLine(this.size.header.doc.width(), { margin: [0, 5]}),
                        {
                            table: {    
                                    widths: [ 50, 150 ],
                                    body: [
                                            textTableDataWithLabel(this.dataMap.header.doc.part1.docNo),
                                            textTableDataWithLabel(this.dataMap.header.doc.part1.date),
                                            textTableDataWithLabel(this.dataMap.header.doc.part1.sellerName),
                                            textTableDataWithLabel(this.dataMap.header.doc.part1.quote),
                                            [hrLine(this.size.header.doc.width(), { margin: [0, 5], colSpan: 2 }), {}],
                                            textTableDataWithLabel(this.dataMap.header.doc.part2.workName),
                                            textTableDataWithLabel(this.dataMap.header.doc.part2.contactName),
                                            textTableDataWithLabel(this.dataMap.header.doc.part2.mobilePhone),
                                            textTableDataWithLabel(this.dataMap.header.doc.part2.email)
                                    ]
                            },
                            layout: 'noBorders'
                        },
                    
                    ]
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