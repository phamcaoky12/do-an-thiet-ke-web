function xoagiohang(x){
    alert("Xoá sản phẩm thành công")
    var tr = x.parentElement.parentElement;
  tr.remove();
  tongdonhang();
}

function getName(){
            alert("Thêm vào giỏ hàng thành công")
}

var product=[];
function tinh()
{
    var x={};
    x.gia=document.getElementById('gia');
    x.sl=document.getElementById('sl');
    x.tong=document.getElementById('tong').innerText=Number(x.gia)*Number(x.sl);
    product.push(x);
    var iDiv=document.createElement('div');
    iDiv.id=product.length;
    document.getElementsByTagName('body')[0].appendChild(iDiv);
    var element =document.getElementById('product.length');

}