
/**
 * B1: tạo biến chứ giá trị 3 số
 *      a = so1     b = so2     c = so3
 * B2: so sánh từng số với nhau và dùng biến tạm tmp để đổi vị trí số nào nhỏ nhất sẽ đứng trước
 * B3: gán kết quả đã so sánh để đưa ra màn hình
 * B4: gọi hàm
 */
function sapXep(){
    var a = document.getElementById("so1").value;
    var b = document.getElementById("so2").value;
    var c = document.getElementById("so3").value;
    if(a>b){
        tmp=a;
        a=b;
        b=tmp;
    }
    if(a>c){
        tmp=a;
        a=c;
        c=tmp;
    }
    if(b>c){
        tmp=b;
        b=c;
        c=tmp;
    }
    document.getElementById("ketqua1").innerHTML = a + " -> " + b + " -> " + c;
}
document.getElementById("btnAcsend").onclick = sapXep;

/**
 * B1: tạo biến chứ giá trị nhập vào
 *      ch = tagname
 * B2: tiến hành so sánh
 *  nếu là 'B' thì in ra "Con chào bố ạ!"
 *  nếu là 'M' thì in ra "Con chào mẹ ạ!"
 *  nếu là 'A' thì in ra "Em chào anh ạ!"
 *  nếu là 'E' thì in ra "Chào chào em gái!"
 *  nếu nhập sai thì in ra "Sai input"
 * B3: gọi hàm
 */
function chaoHoi(){
    var ch = document.getElementById("tagname").value;
    if(ch == 'B')
        document.getElementById("ketqua2").innerHTML = "Con chào bố ạ!";
    else if(ch == 'M')
        document.getElementById("ketqua2").innerHTML = "Con chào mẹ ạ!";
    else if(ch == 'A')
        document.getElementById("ketqua2").innerHTML = "Em chào anh ạ!";
    else if(ch == 'E')
        document.getElementById("ketqua2").innerHTML = "Chào chào em gái!";
    else 
        document.getElementById("ketqua2").innerHTML = "Sai input";
}
document.getElementById("btnChange").onclick = chaoHoi;

/**
 * B1: B1: tạo biến chứ giá trị 3 số
 *      a = a     b = b     c = c
 *      countE là đếm số chẵn, bằng 0
 *      countO là đếm số lẻ, bằng 0
 * B2: tiến hành so sánh
 *  nếu a%2 == 0 đúng thì countE tăng 1, sai thì countO tăng 1
 * nếu b%2 == 0 đúng thì countE tăng 1, sai thì countO tăng 1
 * nếu c%2 == 0 đúng thì countE tăng 1, sai thì countO tăng 1
 * B3: gán kết quả đã tính để đưa ra màn hình
 * B4: gọi hàm
 */
function oddAndEven(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var countE = 0;
    var countO = 0;
    (a%2==0) ? countE+=1 : countO+=1;
    (b%2==0) ? countE+=1 : countO+=1;
    (c%2==0) ? countE+=1 : countO+=1;
    document.getElementById("ketqua3").innerHTML = "Số lẻ: " + countO + "; Số chẵn: " + countE;
}
document.getElementById("btnCheck").onclick = oddAndEven;

/**
 * B1: tạo biến chứ giá trị nhập vào
 *      canhA = canh1       canhB = canh2       canhC = canh3
 * B2: so sánh
 *      tam giác đều khi 3 cạnh bằng nhau a=b=c
 *      tam giác cân khi có 2 cạnh bằng nhau a=b || a=c || b=c
 * B3: gán kết quả đã tính để đưa ra màn hình
 * B4: gọi hàm
 */
function kiemTraTamGiac(){
    var canhA = document.getElementById("canh1").value;
    var canhB = document.getElementById("canh2").value;
    var canhC = document.getElementById("canh3").value;
    
    if(canhA==canhB && canhA==canhC)
        document.getElementById("ketqua4").innerHTML = "Tam giác đều";
    else if(canhA==canhB || canhA==canhC || canhB==canhC)
        document.getElementById("ketqua4").innerHTML = "Tam giác cân";
    else if(canhA==Math.sqrt(Math.pow(canhB,2)+Math.pow(canhC,2)) || canhB==Math.sqrt(Math.pow(canhA,2)+Math.pow(canhB,2)) || canhC==Math.sqrt(Math.pow(canhB,2)+Math.pow(canhA,2)))
        document.getElementById("ketqua4").innerHTML = "Tam giác vuông";
}
document.getElementById("btnCheckTri").onclick = kiemTraTamGiac;