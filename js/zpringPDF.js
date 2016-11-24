// Set document type here initialize with data !!
var jsDoc = quotation();

var docDefinition = {
    // Header and Content merge in content
    content: jsDoc.body,
    footer: jsDoc.footer,
    styles : zpringStyle,
    defaultStyle: jsDoc.font.pdfMakeDefaultFont,
    pageSize: zpringSize.page.pageSize,
    pageMargins: [ zpringSize.page.pageMargin.left, zpringSize.page.pageMargin.top, zpringSize.page.pageMargin.right, zpringSize.page.pageMargin.bottom + jsDoc.footer().height ] // [Left, Top, Right , Bottom] or [Horizontal, Vertical]
};

createPdf(docDefinition, jsDoc.font.pdfMakeLoad.map, jsDoc.font.pdfMakeLoad.vfs).getDataUrl(function (dataUrl) {
    document.getElementById('pdfIframe').src = dataUrl;
});
