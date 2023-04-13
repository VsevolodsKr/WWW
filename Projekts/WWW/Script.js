let rand = Math.floor(Math.random()*15);
function checkPassword(){
    var password = document.getElementById("passwordBox");
    var passwordValue = password.value;
    if(passwordValue == "Foxy1987"){
        return true;
    }
    alert("Nepareiza parole! Piekļūve aizliegta!");
    return false;
    }
    function returning(){
    window.location.replace("../Main.html");
    }
    function returning_FNAF1(){
    window.location.replace("FNAF1.html");
    }
    function returning_FNAF2(){
    window.location.replace("FNAF2.html");
    }
    function returning_FNAF3(){
    window.location.replace("FNAF3.html");
    }
    function returning_FNAF4(){
    window.location.replace("FNAF4.html");
    }
    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var video3 = document.getElementById("video3");
    var video4 = document.getElementById("video4");
    var screamerVideo = document.getElementById("screamer");
    var tag = document.getElementById("setDisplayNone");
    video1.onended = function e1(){
        window.location.replace("FNAF1/FNAF1.html");
        video1.style.visibility = "hidden";
    }
    video2.onended = function e2(){
        window.location.replace("FNAF2/FNAF2.html");
        video2.style.visibility = "hidden";
    }
    video3.onended = function e3(){
        window.location.replace("FNAF3/FNAF3.html");
        video3.style.visibility = "hidden";
    }
    video4.onended = function e4(){
        window.location.replace("FNAF4/FNAF4.html");
        video4.style.visibility = "hidden";
    }  
    screamerVideo.onended = function e5(){
        window.location.replace("FNAF4/FNAF4_Noslepumi.html");
        screamerVideo.style.visibility = "hidden";
    }
    function Video1(){
        var v = "visible";
        if(video1.style.visibility != "hidden"){
            v = "visible";
            video1.style.visibility = v;
        }
        video1.requestFullscreen();
        tag.style.display = "block";
        video1.currentTime = 0;
        video1.play();
    }
    function Video2(){  
        var v = "visible";
        if(video2.style.visibility != "hidden"){
            v = "visible";
            video2.style.visibility = v;
        }
        video2.requestFullscreen();
        tag.style.display = "block";
        video2.currentTime = 0;
        video2.play();
    }
    function Video3(){
        var v = "visible";
        if(video3.style.visibility != "hidden"){
            v = "visible";
            video3.style.visibility = v;
        }
        video3.requestFullscreen();
        tag.style.display = "block";
        video3.currentTime = 0;
        video3.play();
    }
    function Video4(){
        var v = "visible";
        if(video4.style.visibility != "hidden"){
            v = "visible";
            video4.style.visibility = v;
        }
        video4.requestFullscreen();
        tag.style.display = "block";
        video4.currentTime = 0;
        video4.play();
    }
    function Video5(){
    var v = "visible";
    if(screamerVideo.style.visibility != "hidden"){
        v = "visible";
        screamerVideo.style.visibility = v;
        }
        screamerVideo.requestFullscreen();
        tag.style.display = "block";
        screamerVideo.currentTime = 0;
        screamerVideo.play();
    }
    function cam1(index){
        if(index=='5')
            document.getElementById('kameras').src = "../GIF/FNAF1_CAM5.gif";
        else if(index=='1A')
            document.getElementById('kameras').src = "../GIF/FNAF1_CAM1A.gif";
        else if(index=='1B')
            document.getElementById('kameras').src = "../GIF/FNAF1_CAM1B.gif";
        else if(index=='1C')
            document.getElementById('kameras').src = "../GIF/FNAF1_CAM1C.gif";
        else if(index=='7')
            document.getElementById('kameras').src = "../GIF/FNAF1_CAM7.gif";
        else if(index=='6')
            document.getElementById('kameras').src = "../GIF/FNAF1_CAM6.gif";  
        else if(index=='3')
            document.getElementById('kameras').src = "../GIF/FNAF1_CAM3.gif"; 
        else if(index=='2A')
            document.getElementById('kameras').src = "../GIF/FNAF1_CAM2A.gif";  
        else if(index=='2B')
            document.getElementById('kameras').src = "../GIF/FNAF1_CAM2B.gif";
        else if(index=='4A')
            document.getElementById('kameras').src = "../GIF/FNAF1_CAM4A.gif";  
        else if(index=='4B')
            document.getElementById('kameras').src = "../GIF/FNAF1_CAM4B.jpg";
        else
            document.getElementById('kameras').src = "../GIF/FNAF1_Office.gif";  
    }
    function cam2(index){
        if(index=='1')
            document.getElementById('kameras').src = "../GIF/FNAF2_CAM1.png";
        else if(index=='2')
            document.getElementById('kameras').src = "../GIF/FNAF2_CAM2.png";
        else if(index=='3')
            document.getElementById('kameras').src = "../GIF/FNAF2_CAM3.png";
        else if(index=='4')
            document.getElementById('kameras').src = "../GIF/FNAF2_CAM4.png";
        else if(index=='5')
            document.getElementById('kameras').src = "../GIF/FNAF2_CAM5.png";
        else if(index=='6')
            document.getElementById('kameras').src = "../GIF/FNAF2_CAM6.png";  
        else if(index=='7')
            document.getElementById('kameras').src = "../GIF/FNAF2_CAM7.png"; 
        else if(index=='8')
            document.getElementById('kameras').src = "../GIF/FNAF2_CAM8.png";  
        else if(index=='9')
            document.getElementById('kameras').src = "../GIF/FNAF2_CAM9.png";
        else if(index=='10')
            document.getElementById('kameras').src = "../GIF/FNAF2_CAM10.png";  
        else if(index=='11')
            document.getElementById('kameras').src = "../GIF/FNAF2_CAM11.png";
        else if(index=='12')
            document.getElementById('kameras').src = "../GIF/FNAF2_CAM12.png";
        else
            document.getElementById('kameras').src = "../GIF/FNAF2_Office.png";  
    }
    function cam3(index){
        if(index=='1')
            document.getElementById('kameras').src = "../GIF/FNAF3_CAM1.png";
        else if(index=='2')
            document.getElementById('kameras').src = "../GIF/FNAF3_CAM2.gif";
        else if(index=='3')
            document.getElementById('kameras').src = "../GIF/FNAF3_CAM3.png";
        else if(index=='4')
            document.getElementById('kameras').src = "../GIF/FNAF3_CAM4.png";
        else if(index=='5')
            document.getElementById('kameras').src = "../GIF/FNAF3_CAM5.png";
        else if(index=='6')
            document.getElementById('kameras').src = "../GIF/FNAF3_CAM6.png";  
        else if(index=='7')
            document.getElementById('kameras').src = "../GIF/FNAF3_CAM7.png"; 
        else if(index=='8')
            document.getElementById('kameras').src = "../GIF/FNAF3_CAM8.png";  
        else if(index=='9')
            document.getElementById('kameras').src = "../GIF/FNAF3_CAM9.png";
        else if(index=='10')
            document.getElementById('kameras').src = "../GIF/FNAF3_CAM10.png";
        else if(index=='11'){
        var sk = Math.floor(Math.random()*3)+1;
        switch(sk){
            case 1:
                audio = new Audio("../Audio/BB_Hello.mp3");
                audio.play();
                break;
            case 2:
                audio = new Audio("../Audio/BB_Hi.mp3");
                audio.play();
                break;
            case 3:
                audio = new Audio("../Audio/BB_laugh.mp3");
                audio.play();
                break;
        }
        }
        else
            document.getElementById('kameras').src = "../GIF/FNAF3_Office.png";  
    }
    function kursors1(){
        document.body.style.cursor = 'pointer';
    }
    function kursors2(){
        document.body.style.cursor = 'auto';
    }
    function honk(){
        audio = new Audio("../Audio/honk.mp3");
        audio.play();
    }
    function screamer(){
    rand++;
    if(rand<15)
        honk();
    else{
        Video5();
        rand = Math.floor(Math.random()*15); 
    }
    }  