function printElementContent(elemId, title) {
    var content = document.getElementById(elemId).innerHTML;

    var printWindow = window.open('', title, 'width=800,height=600');
    printWindow.document.write('<html><head><title>' + title + '</title>');
    printWindow.document.write('<link rel="stylesheet" href="css/print.css">'); // Підключення зовнішнього CSS файлу
    printWindow.document.write('</head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
}
