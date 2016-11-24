var quotation = function(data, size) {

    var self = this;

    // Font Part --
    this.font = {
        name : 'THSarabun',
        size : 14,
        pdfMakeLoad : thsarabun,
        canvasFont : function(type) {
            return getCanvasFont(self.font.name, self.font.size, type);
        }
    }
    this.font.pdfMakeDefaultFont = {
        font: this.font.name,
        fontSize : this.font.size,        
    };

    // Pre-load font
    preloadFont(this.font.canvasFont);

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
                    website : 'http://www.fffeefsd;fsdf;lsdkfl;sdkfsdf;ldskl;fkl;sdfkeeee.com',
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
                    sellerName : 'นางสาวอรอนงค์ ภูรีมหาวงศ์',
                    quote : '00001',
                },
                 part2 : {
                    workName : 'โปรเจ็คร้อยล้าน กินบ้านกินเมือง',
                    contactName : 'สมศรี ใจดี',
                    mobilePhone : '081234564',
                    email : 'Onanongpureemahawong@hotmail.com'
                }
            }
        },
        body : {
            order : {
                orderList : [
                    {
                        detail : {
                            name : 'Jerhigh Meat as Meals อาหารเม็ดเนื้อนุ่ม เจอร์ไฮ รสเนื้อวัว 500กรัม (6ถุง)',
                            description : 'อาหารเม็ดเนื้อนุ่ม เกรดซุปเปอร์พรีเมี่ยมมีสัดส่วนเนื้อในปริมาณสูง ครบคุณค่าทางโภชนาการระดับ โฮลิสติกมีส่วนประกอบของสารอาหารที่เป็นประโยชน์ต่อสุนัข เช่น กลูโคซามีน และคอนดรยติน ซึ่งเป็นสารอาหารจำเป็นต่อการสร้างกระดูกอ่อนและเสริมน้ำเลี้ยงบริเวณข้อต่อ ,เบต้ากลูแคน ที่ช่วยเสริมภูมิคุ้มกันในร่างกาย และที่สำคัญ แร่ลิโมไนซ์ ที่ช่วยดูดซับกลิ่นมูลของสุนัขได้ถึง 80%เหมาะกับสุนัขทุกสายพันธุ์ และโดยเฉพาะสุนัขที่ทานยาก'
                        },
                        quantity : {
                            amount : '500000000',
                            unit : 'ถุง'
                        },
                        pricePerUnit : '1250'
                    },
                    {
                        detail : {
                            name : 'ซีเรียสบัตเตอร์แรลลีอิมพีเรียลพรีเมียม เย้วโค้ชไรเฟิลแชเชือน น็อกเป่ายิ้งฉุบ ม้ง วอร์รูมชัตเตอร์สคริปต์บิ๊ก แหววโหงวเฮ้งวิลเลจ ตู้เซฟไทเฮาเทรลเล่อร์ไบเบิล แฟ้บเฮีย ง่าวสปอตอริยสงฆ์มหาอุปราชา',
                            description : 'โรแมนติกเปโซไฮเอนด์ คอร์สรองรับแฟรี มาร์ค เยนแซนด์วิช อุรังคธาตุนายแบบซูม ฟาสต์ฟู้ดมาม่า วานิลาแจ็กพอตโกเต็กซ์สังโฆชินบัญชร กิฟท์เอสเปรสโซคลับโอวัลติน ติวเตอร์ดราม่าเอสเพรสโซตอกย้ำคอมเมนท์ เอสเพรสโซแพทยสภาเบลอแตงโม เวิร์กช็อปคอร์รัปชันลิมูซีน โยโย่ ดิกชันนารีอัตลักษณ์วัจนะแมมโบ้ลิมูซีน เซ่นไหว้พอเพียง เซี้ยวสแตนดาร์ดโกะซูโม่ เวอร์ไชน่า'
                        },
                        quantity : {
                            amount : '100',
                            unit : 'กก.'
                        },
                        pricePerUnit : '59'
                    },
                    {
                        detail : {
                            name : 'ซีเรียสบัตเตอร์แรลลีอิมพีเรียลพรีเมียม เย้วโค้ชไรเฟิลแชเชือน น็อกเป่ายิ้งฉุบ ม้ง วอร์รูมชัตเตอร์สคริปต์บิ๊ก แหววโหงวเฮ้งวิลเลจ ตู้เซฟไทเฮาเทรลเล่อร์ไบเบิล แฟ้บเฮีย ง่าวสปอตอริยสงฆ์มหาอุปราชา',
                            description : 'โรแมนติกเปโซไฮเอนด์ คอร์สรองรับแฟรี มาร์ค เยนแซนด์วิช อุรังคธาตุนายแบบซูม ฟาสต์ฟู้ดมาม่า วานิลาแจ็กพอตโกเต็กซ์สังโฆชินบัญชร กิฟท์เอสเปรสโซคลับโอวัลติน ติวเตอร์ดราม่าเอสเพรสโซตอกย้ำคอมเมนท์ เอสเพรสโซแพทยสภาเบลอแตงโม เวิร์กช็อปคอร์รัปชันลิมูซีน โยโย่ ดิกชันนารีอัตลักษณ์วัจนะแมมโบ้ลิมูซีน เซ่นไหว้พอเพียง เซี้ยวสแตนดาร์ดโกะซูโม่ เวอร์ไชน่า'
                        },
                        quantity : {
                            amount : '100',
                            unit : 'เครื่อง'
                        },
                        pricePerUnit : '59'
                    }
                ]
            },
            total : {
                letter : 'ห้าหมื่นเก้าพันบาท',
                digit : {
                    noTax : {
                        total : '59000 บาท',
                        discount : '4000 บาท',
                        afterDiscount : '55000 บาท',
                        finalTotal : '55000 บาท',
                    },
                    withTax : {
                        deductTax : '1000 บาท',
                        finalTotal : '54000 บาท'
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
                label : { alignment: 'center', text : 'ใบเสนอราคา', style : ['quo_label_color', 'uni_doc_label_fontSize'], bold : true },
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
                    no : { text : '#', alignment: 'center' },
                    detail : { text : 'รายละเอียด', alignment: 'center' },
                    quantity : { text : 'จำนวน', alignment: 'center' },
                    pricePerUnit : { text : 'ราคาต่อหน่วย', alignment: 'right' },
                    totalPrice : { text : 'ยอดรวม', alignment: 'right' } 
                 },
                orderList : function() {
                    var newOrder = [];
                    var i = 1;
                    this.data.body.order.orderList.forEach(function(order) {
                        newOrder.push({
                            no : { text : i.toString() },
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
                        i++;
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
                width: function() { return 220; },
                label: {
                    width: function() { return 50; }
                },
                value : {
                    width: function() { return 150; }
                }
            },
            blank : {
                width : function() {
                    return zpringSize.page.pageSizePoint.width - self.size.header.location.width() - self.size.header.doc.width();
                }
            }
        },
        body : {
            order : {
                no : {
                    width: function() { 
                        return 10;
                    }
                },
                detail : {
                    width: function() {
                        return 250;
                    }
                },
                quantity : {
                    width: function() {
                        return '*';
                    }
                },
                pricePerUnit : {
                    width: function() {
                        return '*';
                    }
                },
                totalPrice : {
                    width : function() {
                        return '*';
                    }
                }
            },
            total : {
               letter : {
                   width : function() {
                       return zpringSize.page.pageSizePoint.width - self.size.body.total.digit.width();
                   }
               },
               digit : {
                   width : function() {
                       return 220;
                   }
               }
            },
            signature : {
                buyer : {
                    signature : {
                        width : function() {
                            return 75;
                        }
                    },
                    date : {
                        width : function() {
                            return 75;
                        }
                    }
                },
                seller : {
                    signature : {
                        width : function() {
                            return 75;
                        }
                    },
                    date : {
                        width : function() {
                            return 75;
                        }
                    }
                },
                blank : {
                    width : function() {
                        return '*';
                    }
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
                            oneLineToMutilple(this.dataMap.header.location.shop.website, this.size.header.location.width(), this.font, -80),
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
                        {
                            table: {    
                                    widths: [ 80, 120 ],
                                    body: [
                                            [hrLine(this.size.header.doc.width(), { margin: [0, 10], colSpan: 2 }), {}],
                                            textTableDataWithLabel(this.dataMap.header.doc.part1.docNo),
                                            textTableDataWithLabel(this.dataMap.header.doc.part1.date),
                                            textTableDataWithLabel(this.dataMap.header.doc.part1.sellerName),
                                            textTableDataWithLabel(this.dataMap.header.doc.part1.quote),
                                            [hrLine(this.size.header.doc.width(), { margin: [0, 10], colSpan: 2 }), {}],
                                            textTableDataWithLabel(this.dataMap.header.doc.part2.workName),
                                            textTableDataWithLabel(this.dataMap.header.doc.part2.contactName),
                                            textTableDataWithLabel(this.dataMap.header.doc.part2.mobilePhone),
                                            textTableDataMulWithLabel(this.dataMap.header.doc.part2.email, this.size.header.doc.width(), this.font, -80)
                                    ]
                            },
                            layout: {
                                hLineColor: function() {
                                    return 'white';
                                },
                                vLineColor: function(){
                                    return 'white';
                                },
                                paddingTop: function() {
                                    return 0;
                                },
                                paddingBottom: function() {
                                    return 0;
                                } 
                            }
                        },
                    
                    ]
				}
			]
    };

    /////////////////
     this.layout.body =  [
         {
             stack : [
                         this.layout.header,
                         ' ',
                         createOrderTable([this.size.body.order.no.width(), this.size.body.order.detail.width(), this.size.body.order.quantity.width(), this.size.body.order.pricePerUnit.width(), this.size.body.order.totalPrice.width()], this.dataMap.body.order.label, this.dataMap.body.order.orderList, this.font, 120),
                     ]
            
         },
         ' ',
          { 
              columns : [
                 {
                     width : this.size.body.total.letter.width(),
                     text : 'test1'
                 },
                 {
                     width : this.size.body.total.digit.width(),
                     stack : [
                         {
                         table : {
                         widths : [120, 80],
                         body: [

                            textTableDataWithLabel(this.dataMap.body.total.digit.noTax.total),
                            textTableDataWithLabel(this.dataMap.body.total.digit.noTax.discount),
                            textTableDataWithLabel(this.dataMap.body.total.digit.noTax.afterDiscount),
                            textTableDataWithLabel(this.dataMap.body.total.digit.noTax.finalTotal),
                            [hrLine(this.size.header.doc.width(), { margin: [0, 10], colSpan: 2 }), {}],
                            textTableDataWithLabel(this.dataMap.body.total.digit.withTax.deductTax),
                            textTableDataWithLabel(this.dataMap.body.total.digit.withTax.finalTotal)
                                            
                                ]
                                
                            },
                            alignment: 'right',
                            layout : {
                                hLineColor: function() {
                                    return 'white';
                                },
                                vLineColor: function() {
                                    return 'white';
                                },
                                paddingTop: function() {
                                    return 0;
                                },
                                paddingBottom: function() {
                                    return 0;
                                }
                            }
                        }
                    ]
                }
            ]
         },
         this.dataMap.body.note.description.label,
         this.dataMap.body.note.description.value,
         ' ',
         ' ',
         ' ',
         {
            table : {
                widths : [this.size.body.signature.buyer.signature.width(),this.size.body.signature.buyer.date.width(),
                this.size.body.signature.blank.width(), this.size.body.signature.seller.signature.width(),this.size.body.signature.seller.date.width()],

                body: [
                    [
                        hrLine(this.size.body.signature.buyer.signature.width()),
                        hrLine(this.size.body.signature.buyer.date.width()),
                        '',
                        hrLine(this.size.body.signature.seller.signature.width()),
                        hrLine(this.size.body.signature.seller.date.width())
                    ],
                    [
                        this.dataMap.body.signature.buyer.signature.label,
                        this.dataMap.body.signature.buyer.date.label,
                        '',
                        this.dataMap.body.signature.seller.owner.signature.label,
                        this.dataMap.body.signature.seller.owner.date.label
                    ]
                ]
            },
            alignment : 'center',
            layout : 'noBorders'
         }
    ]


    /////////////////
    this.layout.footer = function(currentPage, totalPage) {
        var text = 'หน้าที่ ' + currentPage + ' / ' + totalPage;
        return  {text : text, height: paragraphHeight(sentenceToArray(text, zpringSize.page.pageSizePoint.width, this.font.canvasFont())), margin: [zpringSize.page.pageMargin.left, 0, zpringSize.page.pageMargin.right, 0]};
    };

    this.layout.font = this.font;

    return this.layout;
};