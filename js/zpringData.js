
var zpringData = new function() {
   this.header = {
       location: {
           shop: {
               name:'',
               address:'',
               mobilePhone:'',
               telePhone:'',
               fax:'',
               website:'',
               taxNumber:''
           },
           seller: {
               name:'',
               address:'',
               taxNumber:''
           }
       }, 
       doc: {
            name : 'ใบสั่งซื้อ',
            part1: {
                docNo:'',
                createDate:'',
                credit:'',
                dueDate:'',
                customerName:''
            },
            part2: {
                workName:'',
                contactName:'',
                mobilePhone:'',
                email:''
            }
       }
   };

   this.body = {
       order: {
           orderlist: [
               {
                   no:'',
                   detail: {
                       name:'',
                       description:''
                   },
                   quantity: {
                       amount:'',
                       unit:''
                   },
                   pricePerUnit:''
               }
           ]
       },
       total: {
           letter:'',
           digit: {
               noTax: {
                    total:'',
                    discount:'',
                    afterDiscount:'',
                    finalTotal:'',
               },
               withTax: {
                   deductTax:'',
                   finalTotal:''
               }
           }
       },
       note: {
           description:''
       },
       signature:{
           buyer: {
               signature:'',
               date:''
           },
           seller:{
               shop: {
                   name:''
               },
               owner: {
                   signature:'',
                   date:''
               }
           }
       }
   };

   this.footer = {
       page: {
           number:''
       },
       logo: {
           name:''
       }
   };

}();





