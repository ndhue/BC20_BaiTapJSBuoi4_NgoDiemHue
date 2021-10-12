function checkPreAndNext(){
    var a = document.getElementById("a").value;;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var preA, nextA, preB, nextB, preC, nextC;
    if(b%2!=0){  
        preB = nextB = b;
        preC = nextC = c;
        if(a<31){
            preA = a-1;
            nextA = Number(a)+1;
        }
        else{
            preA=30;
            nextA=1;
            nextB=Number(b)+1;
        }
    }
    else if(b%2==0){
        preB = nextB = b;
        preC = nextC = c;
        if(a<30){
            preA = a-1;
            nextA = Number(a)+1;
        }
        else{
            preA=29;
            nextA=1;
            nextB = Number(b)+1;
        }
    }
    if(b==1 && a==1){
        preA = 30;
        preB = 12;
        preC = c-1;
        nextC = c;
    }
    if(b==2){
        if((nam%400==0) || (nam%4==0 && nam%100!=0)){
            if(a<29){
                preA = a-1;
                nextA = Number(a)+1;
            }
            else{
                preA=29;
                nextA=1
            }
        }
        else{
            if(a<28){
                preA = a-1;
                nextA = Number(a)+1;
            }
            else{
                preA=27;
                nextA=1
            }
        }
    }
    if(b==12 && a==30){
        nextA = 1;
        nextB = 1;
        nextC = Number(c)+1;
        preC = c;
    }
    document.getElementById("ketqua1").innerHTML = "Ngày hôm sau: " + nextA +"/"+nextB+"/"+nextC + "\nNgày hôm trước: " +preA+"/"+preB+"/"+preC;
}
document.getElementById("btnCheck").onclick = checkPreAndNext;
/**
 * B1: tạo biến chứ giá trị ngày tháng năm
 *  với thang, nam gán từ dữ liệu nhập vào
 * B2: 
 *      Nếu năm nhuận thì các tháng lẻ có 31 ngày, tháng chẵn có 30 ngày, riêng tháng 2 có 29 ngày
 *      Ngược lại năm không nhuận thì tháng 2 có 28 ngày
 * B3: gán kết quả đã so sánh để đưa ra màn hình
 * B4: gọi hàm
 */
function checkNgay(){
    var thang = document.getElementById("thang").value;
    var nam = document.getElementById("nam").value;
    var ngay = 0;
    if((nam%400==0) || (nam%4==0 && nam%100!=0)){
        if(thang==1 || thang==3 || thang==5 || thang==7 || thang==9 || thang==11)
            ngay = 31;
        else if(thang==4 || thang==6 || thang==8 || thang==10 || thang==12)
            ngay = 30;
        else
            ngay = 29;
    }
    else{   
        if(thang==1 || thang==3 || thang==5 || thang==7 || thang==9 || thang==11)
            ngay = 31;
        else if(thang==4 || thang==6 || thang==8 || thang==10 || thang==12)
            ngay = 30;
        else
            ngay = 28;
    }
    document.getElementById("ketqua2").innerHTML = ngay;
}
document.getElementById("btnNext").onclick = checkNgay;

function docSo(){
    var num = document.getElementById("3num").value;
    var phanTram = Math.floor(num/10/10)%10;
    var phanChuc = Math.floor(num/10)%10;
    var donVi = num%10;
    var c1, c2, c3;
    switch(phanTram){
        case 1: c1 = "Một trăm ";
        break;
        case 2: c1 = "Hai trăm ";
        break;
        case 3: c1 = "Ba trăm ";
        break;
        case 4: c1 = "Bốn trăm ";
        break;
        case 5: c1 = "Năm trăm ";
        break;
        case 6: c1 = "Sáu trăm ";
        break;
        case 7: c1 = "Bảy trăm ";
        break;
        case 8: c1 = "Tám trăm ";
        break;
        case 9: c1 = "Chín trăm ";
        break;
    }
    switch(phanChuc){
        case 0: c2 = "linh ";
        break;
        case 1: c2 = "mười ";
        break;
        case 2: c2 = "hai mươi ";
        break;
        case 3: c2 = "ba mươi ";
        break;
        case 4: c2 = "bốn mươi ";
        break;
        case 5: c2 = "năm mươi ";
        break;
        case 6: c2 = "sáu mươi ";
        break;
        case 7: c2 = "bảy mươi ";
        break;
        case 8: c2 = "tám mươi ";
        break;
        case 9: c2 = "chín mươi ";
        break;
    }
    switch(donVi){
        case 0: c3 = "";
        break;
        case 1: c3 = "một";
        break;
        case 2: c3 = "hai";
        break;
        case 3: c3 = "ba";
        break;
        case 4: c3 = "bốn";
        break;
        case 5: c3 = "năm";
        break;
        case 6: c3 = "sáu";
        break;
        case 7: c3 = "bảy";
        break;
        case 8: c3 = "tám";
        break;
        case 9: c3 = "chín";
        break;
    }
    document.getElementById("ketqua3").innerHTML = c1+c2+c3;
}
document.getElementById("btnRead").onclick = docSo;


function tinhToaDoX(x,x1){
    return x1 - x;
}
function tinhToaDoY(y,y1){
    return y1 - y;
}
function inHoTen(){
    var x1 = document.getElementById("tdx1").value;
    var y1 = document.getElementById("tdy1").value;
    var x2 = document.getElementById("tdx2").value;
    var y2 = document.getElementById("tdy2").value;
    var x3 = document.getElementById("tdx3").value;
    var y3 = document.getElementById("tdy3").value;
    var t = "";
    var xt = document.getElementById("tdtx").value;
    var yt = document.getElementById("tdty").value;
    if(tinhToaDoX(x1,xt) > tinhToaDoX(x2,xt) && tinhToaDoX(x1,xt) > tinhToaDoX(x3,xt) && tinhToaDoX(y1,yt) > tinhToaDoX(y2,yt) && tinhToaDoX(y1,yt) > tinhToaDoX(y3,yt))
        t = document.getElementById("name1").value;
    else if(tinhToaDoX(x2,xt) > tinhToaDoX(x1,xt) && tinhToaDoX(x2,xt) > tinhToaDoX(x3,xt) && tinhToaDoX(y2,yt) > tinhToaDoX(y1,yt) && tinhToaDoX(y2,yt) > tinhToaDoX(y3,yt))
        t = document.getElementById("name2").value;
    else if(tinhToaDoX(x3,xt) > tinhToaDoX(x1,xt) && tinhToaDoX(x3,xt) > tinhToaDoX(x2,xt) && tinhToaDoX(y3,yt) > tinhToaDoX(y1,yt) && tinhToaDoX(y3,yt) > tinhToaDoX(y2,yt))
        t = document.getElementById("name2").value;
    else
        t = "sai";
    document.getElementById("ketqua4").innerHTML = t;
}  
document.getElementById("btnCal").onclick = inHoTen;