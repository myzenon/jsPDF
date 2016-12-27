// Factory เพื่อใช้ในการสร้าง Object ของเอกสาร
// โดยระบุชนิดเอกสาร, ข้อมูล และขนาด [ขนาดยังไม่ได้ใช้ ณ ขณะนี้]
var zpringFactory = function(docType, data, size) {
    if(docType === 'quotation') {
        return new quotation(data, size);
    }
};