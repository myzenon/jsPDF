var docDefinition = {
    content: [ 
        {
            table: {
                widths: [zpringSize.header.address.width, zpringSize.header.blank.width, zpringSize.header.information.width],
                body: [
                    [ 
                        {
                            text: '',
                            fillColor: '#555555',
                            color: '#00FFFF',
                        },
                        {
                            text: ' ',
                            fillColor: '#554955',
                            color: '#00FFFF',
                        },
                        {
                            text: ' ',
                            fillColor: '#855559',
                            color: '#00FFFF',
                        }
                    ]
                ]
            },
            layout: 'noBorders'
        }
    ],
    styles : zpringStyle,
    defaultStyle: {
        font: zpringFont.pdfMake.font,
        fontSize : zpringFont.pdfMake.fontSize
    },
    pageSize: zpringSize.page.pageSize,
    pageMargins: [ zpringSize.page.pageMargin.left, zpringSize.page.pageMargin.top, zpringSize.page.pageMargin.right, zpringSize.page.pageMargin.bottom ] // [Left, Top, Right , Bottom] or [Horizontal, Vertical]
};

createPdf(docDefinition, thsarabun.map, thsarabun.vfs).getDataUrl(function (dataUrl) {
    document.getElementById('pdfIframe').src = dataUrl;
});
