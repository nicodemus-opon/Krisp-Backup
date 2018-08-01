function render_directories() {

    var myDiv = document.getElementById("myDiv");
    var array = read_directories();
    for (var i = 0; i < array.length; i++) {
        var selectList = document.createElement("li");
        //var badge_x = document.createElement("small");
        //badge_x.setAttribute("class", " mb-1 text-primary");
        //badge_x.appendChild(document.createTextNode("array[i]"));
        selectList.id = "mySelect";
        selectList.setAttribute("class", "list-group-item d-flex justify-content-between align-items-center");
        //selectList.setAttribute("href","#");
        selectList.value = array[i];
        selectList.text = array[i];
        selectList.appendChild(document.createTextNode(array[i]));
        //selectList.appendChild(badge_x);
        myDiv.appendChild(selectList);
    }
}

function write_directories_special(arr) {
    var fs = require('fs');
    //var arr = ['cat', 'dog', 'bird'];
    var filename = 'directories.txt';
    //var str = String(JSON.stringify(arr[0], null, 4));
    if(arr!==[]){
        str = arr.join("\n");
    }else{
        str="";
    }
    
    fs.writeFile(filename, str, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('File written!');
            getCurrentWindow().reload();
        }
    });
    return 0;

}
function write_directories(arr) {
    var fs = require('fs');
    //var arr = ['cat', 'dog', 'bird'];
    var filename = 'directories.txt';
    //var str = String(JSON.stringify(arr[0], null, 4));
    str = "\n" + arr[0];
    fs.appendFile(filename, str, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('File written!');
            getCurrentWindow().reload();
        }
    });
    return 0;


}
function read_directories() {
    var fs = require('fs');
    var array_of_files = fs.readFileSync('directories.txt').toString().split("\n");
    return array_of_files;
}
var app = require('electron').remote;
var dialog = app.dialog;

$(document).ready(function () {

    $('li').on('click', function () {
        $(this).parent().children('li:eq(' + $(this).index() + ')').remove();

        var texts = [];

        $(function () {
            $('ul li').each(function () {
                texts.push($(this).text());
            });
            alert(texts);
            write_directories_special(texts);
        });
        
    });
});
render_directories();
$("#modal_x").on("click", function () {
    $("#exampleModal").modal('show');
});

$("ul").on("click", function () {
    //$(this).child().remove();
    console.log($(this).val())
    $('ul li:contains("TextToRemove")').remove();
});

$('.custom-file-input').click(function () {
    dialog.showOpenDialog({
        title: "Select a folder",
        properties: ["openDirectory"]
    }, (folderPaths) => {
        // folderPaths is an array that contains all the selected paths
        console.log(folderPaths);
        write_directories(folderPaths);
        //var root=$("#myDiv");

        //render_directories();getCurrentWindow().reload()
    });
    //mainWindow.reload();
})
const { getCurrentWindow, globalShortcut } = require('electron').remote;
get_ftp();
function get_ftp() {
    var fs = require('fs');
    var array_of_files = fs.readFileSync('ftp_info.txt').toString().split("\n");
    $("#ftp_host").val(array_of_files[0]);
    $("#ftp_name").val(array_of_files[1]);
    $("#ftp_password").val(array_of_files[2]);
    return 0;
}
function set_ftp() {
    var fs = require('fs');
    //var arr = ['cat', 'dog', 'bird'];
    var filename = 'ftp_info.txt';
    //var str = String(JSON.stringify(arr[0], null, 4));
    str = $("#ftp_host").val() + "\n" + $("#ftp_name").val() + "\n" + $("#ftp_password").val();
    fs.writeFile(filename, str, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('File written!');
            getCurrentWindow().reload();
        }
    });
    return 0;
}
$("#set_ftper").click(function () {
    set_ftp();
    $("#exampleModal").modal('hide');

});
function get_autobackup() {
    var fs = require('fs');
    var togo = document.getElementById("customToggle1");
    var array_of_files = fs.readFileSync('autobackup.txt').toString();
    //$("#customToggle1").val(array_of_files);
    console.log("array_of_files");
    console.log(array_of_files);
    if (array_of_files === "1") {
        console.log("huiiii");
        togo.setAttribute("checked", "true");
    } else {
        togo.setAttribute("unchecked", "true");
    }
}

get_autobackup()
$("#customToggle1").change(function () {
    var fs = require('fs');
    //var arr = ['cat', 'dog', 'bird'];
    var filename = 'autobackup.txt';
    //var str = String(JSON.stringify(arr[0], null, 4));
    var ki = document.getElementById("customToggle1")
    if (ki.hasAttribute("checked")) {
        ki.removeAttribute("checked");
        ki.setAttribute("unchecked", "true");
        str = "0"
    } else {
        ki.removeAttribute("unchecked");
        ki.setAttribute("checked", "true");
        str = "1"
    }
    console.log(ki.hasAttribute("checked"))
        ;
    fs.writeFile(filename, str, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('File written!');
            getCurrentWindow().reload();
        }
    });
    return 0;
})
get_frequency();
function get_frequency() {
    var fs = require('fs');

    var array_of_files = fs.readFileSync('frequency.txt').toString();
    //$("#customToggle1").val(array_of_files);
    var ider = array_of_files;
    var togo = document.getElementById(array_of_files);
    togo.setAttribute("selected", "true");
}
$(".custom-select").change(function () {
    console.log()
    var fs = require('fs');
    //var arr = ['cat', 'dog', 'bird'];
    var filename = 'frequency.txt';
    //var str = String(JSON.stringify(arr[0], null, 4));
    str = $(".custom-select").val();
    fs.writeFile(filename, str, function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('File written!');
            getCurrentWindow().reload();
        }
    });
    return 0;
})
