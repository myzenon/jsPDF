var quotation = function(data, size) {

    // Data parameter สำหรับใส่ข้อมูลที่จะรับเข้ามา
    // Size parameter สำหรับการกำหนด ขนาดของ กระดาษ
    this.page = zpringSize.page[size];

    var self = this;

    if(size === 'A4') {

        // กำหนด font ของเอกสาร
        this.typeface = new thsarabun();

        // ตั้งค่าคุณสมบัติของ font ในเอกสาร
        this.font = {
            size : 14,
            canvasFont : function(type, size) {
                return utilW.canvasFontName(self.typeface.name, size ? size : self.font.size, type);
            }
        }

        // ตัวอย่าง Object ของ data
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
                            price : {
                                unit : '1250',
                                total : '5000'
                            }
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
                            price : {
                                unit : '59',
                                total : '50900.4678'
                            }
                        }
                    ]
                },
                total : {
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
                }
            }
        };

        // จับคู่ข้อมูล ให้เข้าเป็น Pattern ที่ระบบต้องการ
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
                        self.data.body.order.orderList.forEach(function(order) {
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
                                price : {
                                    unit : { text : order.price.unit },
                                    total : { text : order.price.total }
                                }
                            });
                            i++;
                        });
                        return newOrder;
                    }()
                },
                total : {
                    letter : { text : '(' + utilW.thaiTextMoney(this.data.body.total.digit.noTax.finalTotal) + ')' }, // แปลงค่าเงินในหน่วยตัวเลข เป็นตัวอักษรภาษาไทย
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
                        withTax : { // ลบไม้ได้ แต่ปล่อย object ให้ว่างได้ { }
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
                        },
                        date : { 
                            label : { text : 'วันที่' },
                        }
                    },
                    seller : {
                        shop : {
                            name : { 
                                label : { text : 'ในนาม' },
                                value : { text : this.data.header.location.shop.name }
                            }
                        },
                        owner : {
                            signature : { 
                                label : { text : 'ผู้อนุมัติ' },
                            },
                            date : { 
                                label : { text : 'วันที่' },
                            }
                        }
                    }
                }
            },
            footer : { 
                page : {
                    number : { 
                        label : { text : 'หน้าที่' },
                    }
                }
            }
        };

        // กำหนดขนาดของแต่ละส่วน ในเอกสาร
        // * หมายถึง auto
        // อ้างอิงขนาดเอกสารได้จาก zpringSize
        this.size = {
            header : {
                location : {
                    width: 200
                },
                doc : {
                    width: 220,
                    label: {
                        width: 70
                    },
                    value : {
                        width: 150
                    }
                },
                blank : {
                    width : '*'
                }
            },
            body : {
                order : {
                    no : {
                        width: 10
                    },
                    detail : {
                        width: 250
                    },
                    quantity : {
                        width: '*'
                    },
                    pricePerUnit : {
                        width: '*'
                    },
                    totalPrice : {
                        width : '*'
                    }
                },
                total : {
                letter : {
                    width : '*'
                },
                digit : {
                        width : 220,
                        label : {
                            width: 140
                        },
                        value : {
                            width : 80
                        }
                }
                },
                note : {
                    width: zpringSize.page[size].pageSizePoint.width
                },
                signature : {
                    buyer : {
                        signature : {
                            width: 75
                        },
                        date : {
                            width: 75
                        }
                    },
                    seller : {
                        signature : {
                            width: 75
                        },
                        date : {
                            width: 75
                        }
                    },
                    blank : {
                        width: '*'
                    }
                }
            },
            footer : {
                height : 0
            }      
        };

        // กำหนดรูปร่าง Layout
        this.layout = {
            header : '',
            body : '',
            footer : ''
        };

        // เมื่อสร้างเอกสาร จะทำการ Load Font เข้าสู่ canvas 
        // เมื่อทำการโหลดเสร็จ จะทำการ สร้าง Layout เอกสารแล้ว ส่งคืนให้เป็น Promise
        return new Promise(function(resolve, reject) {
            utilB.loadFont(self.typeface).then(function() {

                // สร้าง Header
                self.layout.header = utilW.header_a4(self.size.header, self.dataMap.header, self.font);

                // สร้าง Footer
                // เป็น Function ที่ PDFMake จะไป call โดยจะส่ง currentPage, totalPage มาให้เรา
                self.layout.footer = function(currentPage, totalPage) {
                    return utilW.footer_a4(self.size.footer, self.dataMap.footer, self.font, currentPage, totalPage);
                };
                // เรียกฟังก์ชันสร้าง Footer ขึ้นมา เพื่อที่จะคำนวนขอบล่างกระดาษ ก่อน
                utilW.footer_a4(self.size.footer, self.dataMap.footer, self.font, '1', '1');
            
                // สร้าง ตาราง Order
                self.layout.body = utilW.orderTable_a4(self.size.body.order, self.dataMap.body.order.label, self.dataMap.body.order.orderList, self.font, self.layout.header, self.size.footer.height);

                // สร้างตาราง สรุปยอด
                self.layout.body = self.layout.body.concat(utilW.total_a4(self.size.body.total, self.dataMap.body.total, self.font, self.layout.body, self.size.footer.height));
                
                // สร้าง กล่องหมายเหตุ
                self.layout.body = self.layout.body.concat(utilW.note_a4(self.size.body.note, self.dataMap.body.note, self.font, self.layout.body, self.size.footer.height));

                // สร้างช่องลายเซนต์
                self.layout.body= self.layout.body.concat(utilW.signature_a4(self.size.body.signature, self.dataMap.body.signature, self.font, self.layout.body, self.size.footer.height));


                // แจ้ง Promise ว่าทำเสร็จหมดแล้ว
                resolve(self);

            });
        });
        
    }
};