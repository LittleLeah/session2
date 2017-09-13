function retirement() {
    let ca = convertToInt("curAge");
    let ra = convertToInt("retAge");
    let yearsToGo = ra - ca;
    let YearOfRet = GetYear() + yearsToGo;
}
function convertToInt(elementid: string) {
let temp : string;
temp = "" + document.getElementById(elementid);
return +temp;
}
function GetYear() {
    let today = new Date();
    return today.getFullYear();
}