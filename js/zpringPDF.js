var data = null; // จำลองตัวแปรข้อมูล
var size = '80m'; // จำลองตัวแปรขนาด

// เรียก factory ออกมาสร้างเอกสารให้ โดยระบุชนิดเอกสาร, ข้อมูล และขนาดเอกสาร [A4, 58m]
zpringFactory('receipt', data, size).then(function(jsDoc) {

    // ทำการ Map ระหว่างข้อมูลในเอกสาร กับระบบ PDFMake
    var docDefinition = {
        // Header ได้ทำการรวมไว้ใน content อยู่แล้ว
        content: jsDoc.layout.body, 
        footer: jsDoc.layout.footer,
        styles : zpringStyle,
        defaultStyle: {
            font: jsDoc.typeface.name,
            fontSize : jsDoc.font.size, 
        },
        pageSize: jsDoc.page.pageSize,
        pageMargins: [ jsDoc.page.pageMargin.left, jsDoc.page.pageMargin.top, jsDoc.page.pageMargin.right, jsDoc.size.footer.height] // [Left, Top, Right , Bottom] หรือ [Horizontal, Vertical]
    };

    // สร้าง PDF ลงใน iFrame
    createPdf(docDefinition, jsDoc.typeface.pdfMake, jsDoc.typeface.vfs).getDataUrl(function (dataUrl) {
        document.getElementById('pdfIframe').src = dataUrl;
    });

});
