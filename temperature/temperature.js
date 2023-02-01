document.getElementById("submit").onclick = function () {

    let temp = document.getElementById("temp").value;
    temp = Number(temp);

    if (document.getElementById("celsius").checked) {
        let convert = (temp - 32) * (5 / 9);
        // let ans = convert.toLocaleString(undefined, {style: "unit", unit: "celsius"})
        document.getElementById("ans").innerHTML = Math.floor(convert) + "°C";
    }
    else if (document.getElementById("fahrenhiet").checked) {
        let convert = (temp * (9 / 5)) + 32;
        document.getElementById("ans").innerHTML = Math.floor(convert) + "°F";
    }
}
