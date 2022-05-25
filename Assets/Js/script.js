let dragBox = document.querySelectorAll("#boxing");
let area = document.querySelectorAll(".areas");
dragBox.forEach(element => {
    element.ondragstart = function (ev) {
        ev.dataTransfer.setData("Text", ev.target.getAttribute('data-id'));
    }
});
area.forEach(element => {
    element.ondragover = function (ev) {
        ev.preventDefault();
    };
    element.ondrop = function (ev) {
        var data = ev.dataTransfer.getData("Text");
        var item = document.getElementById(data);
        var eldata = ev.target.getAttribute('data-id');
        var elid = document.getElementById(eldata);
        if (data > 10 && data < 15 && eldata == 30) {
            elid.append(item);
        }
        else if (data > 14 && data < 19 && eldata == 40) {
            elid.append(item);
        }
        else if (data > 18 && data <= 22 && eldata == 50) {
            elid.append(item);
        }
    }
});
