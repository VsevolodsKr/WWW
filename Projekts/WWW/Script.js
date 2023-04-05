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
    var video1 = document.getElementById("video1");
    var video2 = document.getElementById("video2");
    var video3 = document.getElementById("video3");
    var video4 = document.getElementById("video4");
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
    function cam(index){
        if(index=='5')
            document.getElementById('att').src = "../GIF/FNAF1_CAM5.gif";
        else if(index=='1A')
            document.getElementById('att').src = "GIF/FNAF1_CAM1A.gif";
        else if(index=='1B')
            document.getElementById('att').src = "GIF/FNAF1_CAM1B.gif";
        else if(index=='1C')
            document.getElementById('att').src = "GIF/FNAF1_CAM1C.gif";
        else if(index=='7')
            document.getElementById('att').src = "GIF/FNAF1_CAM7.gif";
        else if(index=='6')
            document.getElementById('att').src = "GIF/FNAF1_CAM6.gif";  
        else if(index=='3')
            document.getElementById('att').src = "GIF/FNAF1_CAM3.gif"; 
        else if(index=='2A')
            document.getElementById('att').src = "GIF/FNAF1_CAM2A.gif";  
        else if(index=='2B')
            document.getElementById('att').src = "GIF/FNAF1_CAM2B.gif";
        else if(index=='4A')
            document.getElementById('att').src = "GIF/FNAF1_CAM4A.gif";  
        else if(index=='4B')
            document.getElementById('att').src = "GIF/FNAF1_CAM4B.jpg";
        else
            document.getElementById('att').src = "GIF/FNAF1_Office.gif";  
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
    