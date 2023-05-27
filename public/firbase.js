document.getElementById('save').onclick = function writeUserData() {
    var phone = document.getElementById("phoneH").value;
    console.log("entered funv save")
    var storage = firebase.storage();
    var storageRef = storage.ref();
    var i = 0;
    var row2 = document.getElementById("List").insertRow();
    row2.innerHTML = '<tr><td id = "theading">Diet and exercise charts</td></tr>';
    storageRef.child('images/').listAll().then(function (result) {
        console.log(result.items.length);
        result.items.forEach(function (imageRef) {
            console.log("Image reference " + imageRef.toString());
            if (imageRef == "gs://lmc-123.appspot.com/images/"+phone+"diet.jpg" || imageRef == "gs://lmc-123.appspot.com/images/"+phone+"exercise.jpg") {
                displayImage(imageRef, result);
            }
        });

    });


    function displayImage(images, result) {
        images.getDownloadURL().then(function (url) {
            console.log(url);
            var new_html = '';
            new_html += '<tr>';
            new_html += '<td>';
            new_html += '<img src="' + url + '" width="40%" id="imageView" >';
            new_html += '</td>';
            new_html += '</tr>';
            console.log(new_html);
            var row2 = document.getElementById("List").insertRow();
            row2.innerHTML = new_html;
        });
    }
};