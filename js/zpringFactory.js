// Factory เพื่อใช้ในการสร้าง Object ของเอกสาร
// โดยระบุชนิดเอกสาร, ข้อมูล และขนาด [A4, 58m]
var zpringFactory = function(docType, data, size) {
    if(docType === 'quotation') {
        return new quotation(data, size);
    }
    if(docType === 'receipt') {
        return new receipt(data, size);
    }
};