function readSingleFile(evt) {
    var f = evt.target.files[0]; 
    if (f) {
        var r = new FileReader();
        r.onload = function(e) { 
            var contents = e.target.result;
            var workbook = XLSX.read(contents, { type: 'binary' });
            var xl_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets['Sheet1']);
            var json_object = JSON.stringify(xl_row_object, undefined, 2);
            document.getElementById('output').appendChild(document.createElement('pre')).innerHTML = json_object;
        }
        r.readAsBinaryString(f);
    } else { 
    alert("Failed to load file");
    }
}
document.getElementById('fileinput').addEventListener('change', readSingleFile, false);
