// JavaScript source code
$(document).ready(function () {
    var stt = 0;
    $('#dangki').click(function () {
        $('#myModal1').modal();
    });

    function ktemail() {
        var a = /^\w{1,}\.?\w{1,}@\w{3,6}\.\w{3,6}$/;
        if ($("#txtemail").val() == "")
        {
            $("#tbemail").html("<font color=red>(*) Bắt buộc nhập</font>");
            return false;
        }
        else if (!a.test($("#txtemail").val()))
        {
            $("#tbemail").html("<font color=red>(*) Vui lòng nhập chính xác Email</font>");
            return false;
        }
        else
        {
            $("#tbemail").html("(*)");
            return true;
        }
    }
                                    
    $("#txtemail").blur(ktemail);

    function ktten() {
        var b = /^[A-Za-z]\w{1,6}(\s[A-Za-z]\w{1,6}\s)*([A-Za-z]\w{1,6})*$/;
        if ($("#txtten").val() == "")
        {
            $("#tbten").html("<font color=red>(*) Bắt buộc nhập</font>");
            return false;
        }
        else if (!b.test($("#txtten").val()))
        {
            $("#tbten").html("<font color=red>(*) Vui lòng nhập chính xác Email</font>");
            return false;
        }
        else
        {
            $("#tbten").html("(*)");
            return true;
        }
    }
    $("#txtten").blur(ktten);
   
    $("#dangki").click(function () {
        if (!ktemail() &&  ktten()) {
            $("#thongbao").html("Vui long nhap day du");
        }
    });
    startimg = $("img.slide:first").attr("stt");
    lastimg = $("img.slide:last").attr("stt");
    $("img.slide").each(function () {
        if ($(this).is(":visible"))
            stt = $(this).attr("stt");
    });
    $("#next").click(function () {
        if (stt == lastimg) {
            stt = -1;
        }
        next = ++stt;
        $("img.slide").hide();
        $("img.slide").eq(next).show();
    });

   

    setInterval(function () {
        $("#next").click()
    }, 2000);


  
});
$(document).ready(function () {
    $('#dangnhap').click(function () {
        $('#myModal').modal();
    });

    function ktemail1() {
        var a = /^\w{1,}\.?\w{1,}@\w{3,6}\.\w{3,6}$/;
        if ($("#txtemail1").val() == "") {
            $("#tbemail1").html("<font color=red>(*) Bắt buộc nhập</font>");
            return false;
        }
        else if (!a.test($("#txtemail1").val())) {
            $("#tbemail1").html("<font color=red>(*) Vui lòng nhập chính xác Email</font>");
            return false;
        }
        else {
            $("#tbemail1").html("(*)");
            return true;
        }
    }
    $("#txtemail1").blur(ktemail1);

   
});