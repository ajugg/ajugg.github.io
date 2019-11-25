

function camelToSnake(string) {
    return string.replace(/[\w]([A-Z])/g, function (m) {
        return m[0] + "_" + m[1];
    }).toLowerCase();
}

function change(s) {
    var content = document.getElementById("change");
    var q = document.getElementById("changeQuery").value
    content.style.visibility = "visible";
    var ret = ""
    q = q.replace(/\n|\r/g, "");
    q.trim();
    var l = q.split(/;(\s)*/g);
    var i;
    for (i = 0; i < l.length; i++) {
        console.log(i + ",")
        if ((l[i] || "").trim() === "") continue;
        temp = camelToSnake(l[i].split(" ")[1])
        ret = ret + temp + ","
    }
    ret = ret.slice(0, -1)
    content.textContent = ret;

}