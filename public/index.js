
fileButton.addEventListener('change', function (e) {
    let phoneNO = document.getElementById("phoneNO").value;
    for (i = 0; i < e.target.files.length; i++) {
        let imagefile = e.target.files[i];

        let storageRef = firebase.storage().ref("images/" + phoneNO + "diet.jpg");
        console.log(phoneNO);
        let task = storageRef.put(imagefile);
        task.on('state_changed', function progress(snapshot) {
            let percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            console.log("Upload is" + percentage + "%done");
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log("Upload is Paused");
                    break;
                case firebase.storage.TaskState.RUNNING:
                    console.log("Upload is Running");
                    break;
            }
        })

    }

});

fileButton2.addEventListener('change', function (e) {
    let phoneNO = document.getElementById("phoneNO").value;
    for (i = 0; i < e.target.files.length; i++) {
        let imagefile = e.target.files[i];
        { }
        let storageRef = firebase.storage().ref("images/" + phoneNO + "exercise.jpg");
        console.log(phoneNO);
        let task = storageRef.put(imagefile);
        task.on('state_changed', function progress(snapshot) {
            let percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            console.log("Upload is" + percentage + "%done");
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED:
                    console.log("Upload is Paused");
                    break;
                case firebase.storage.TaskState.RUNNING:
                    console.log("Upload is Running");
                    break;
            }
        })

    }

});




