let vatly = parseFloat(prompt("Nhập điểm vật lý"))
let hoahoc = parseFloat(prompt("Nhập điểm hóa học"))
let sinhhoc = parseFloat(prompt("Nhập điểm sinh học"))


let sum = vatly + hoahoc + sinhhoc
let avg = sum/3

document.write("Điểm trung bình: "+ avg +", "+"Điểm tổng: "+sum)