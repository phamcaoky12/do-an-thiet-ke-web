window.addEventListener('load', () => {
    const bntPay = document.getElementById("btn-pay");
    const total = document.getElementById("total");
    const price1 = document.getElementById("price1");
    const price2 = document.getElementById("price2");
    const subTotal1 = document.getElementById("subTotal1");
    const subTotal2 = document.getElementById("subTotal2");
    const quantity1 = document.getElementById("quantity1");
    const quantity2 = document.getElementById("quantity2");
    const deleteProduct1 = document.getElementById("deleteProduct1");
    const deleteProduct2 = document.getElementById("deleteProduct2");

    bntPay.addEventListener("click", (e) => {
        alert("Bạn đã thanh toán thành công!");
        window.location = "http://127.0.0.1:5500/HTML/order.html#";
    })

    function themDauChamChoGiaTien(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    // function xuLyTangGia(element, priceElement) {
    //     // let price = priceElement.innerText.replaceAll('.', '');
    //     let price = element.getAttribute('data-price');
    //     let subTotal = element.value * price;

    //     // priceElement.innerText = themDauChamChoGiaTien(price);
    //     // priceElement.i
    //     alert(subTotal)
    // }

    // quantity1.addEventListener("change", xuLyTangGia(quantity1, price1));
    function khoiTaoTongTien() {
        subTotal1.innerText = price1.innerText;
        subTotal2.innerText = price2.innerText;

        let price1Str = price1.innerText.replaceAll('.', '');
        let price2Str = price2.innerText.replaceAll('.', '');
        total.innerText = themDauChamChoGiaTien(Number(price1Str) + Number(price2Str));
    }
    khoiTaoTongTien();

    function capNhatTongTien() {
        let subTotal1Str = subTotal1.innerText.replaceAll('.', '');
        let subTotal2Str = subTotal2.innerText.replaceAll('.', '');
        total.innerText = themDauChamChoGiaTien(Number(subTotal1Str) + Number(subTotal2Str));
    }

    function xuLyTangGia1() {
        let price = quantity1.getAttribute('data-price');
        let subTotal = price * this.value;
        subTotal1.innerText = themDauChamChoGiaTien(subTotal);
        capNhatTongTien();
    }

    quantity1.addEventListener("change", xuLyTangGia1);

    function xuLyTangGia2() {
        let price = quantity2.getAttribute('data-price');
        let subTotal = price * this.value;
        subTotal2.innerText = themDauChamChoGiaTien(subTotal);
        capNhatTongTien();
    }
    
    quantity2.addEventListener("change", xuLyTangGia2);

    function resetTienKhiBiXoaHet() {
        if (document.getElementById("order-product-1").getAttribute('hidden')
            && document.getElementById("order-product-2").getAttribute('hidden')
        ) {
            total.innerText = 0;
            bntPay.disabled = true;
            document.getElementById("tieptucmuahang").innerText = `Giỏ hàng rỗng! Shop now!`;
            document.getElementById("tieptucmuahang").setAttribute("style", "color:red; text-decoration: underline")
        }
    }

    deleteProduct1.addEventListener("click", () => {
        document.getElementById("order-product-1").setAttribute("hidden", true);
        let totalPrice = total.innerText.replaceAll('.', '') - subTotal1.innerText.replaceAll('.', '');
        total.innerText = themDauChamChoGiaTien(totalPrice);

        resetTienKhiBiXoaHet();
    })
    deleteProduct2.addEventListener("click", () => {
        document.getElementById("order-product-2").setAttribute("hidden", true);
        let totalPrice = total.innerText.replaceAll('.', '') - subTotal2.innerText.replaceAll('.', '');
        total.innerText = themDauChamChoGiaTien(totalPrice);
        resetTienKhiBiXoaHet();
    })
    // quantity2.addEventListener("change", xuLyTangGia(quantity2, price2));

    // Array(orderQuantities).forEach(element => {
    //     // element.addEventListener("change", xuLyTangGia(element));
    //     console.log(element.value)
    // })
})