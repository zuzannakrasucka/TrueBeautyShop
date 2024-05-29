
    var ImgNo = 0;
    var Tab_Img = new Array(6);
    Tab_Img[0] = "baner_makijaz.jpg";
    Tab_Img[1] = "baner_cialo.jpg";
    Tab_Img[2] = "baner_paznokcie.png";
    Tab_Img[3] = "wlosy.jpeg";
    Tab_Img[4] = "baner_kosmetyki.jpg";
    Tab_Img[5] = "baner_probki.jpg";
  



    function Next() {
        if (ImgNo < Tab_Img.length - 1) {
            ImgNo = ImgNo + 1;
            document.getElementById("image").src = Tab_Img[ImgNo];
        }
        else {
            document.getElementById("image").src = Tab_Img[Tab_Img.length - 1];
            ImgNo = Tab_Img.length - 1;
        }
    }

    function Prev() {
        if (ImgNo > 0) {
            ImgNo = ImgNo - 1;
            document.getElementById("image").src = Tab_Img[ImgNo];
        }
        else {
            document.getElementById("image").src = Tab_Img[0];
            ImgNo = 0;
        }
    }

    function First() {
        document.getElementById("image").src = Tab_Img[0];
        ImgNo = 0;
    }

    function Last() {
        document.getElementById("image").src = Tab_Img[Tab_Img.length - 1];
        ImgNo = Tab_Img.length - 1;
    }


    
