


window.addEventListener('load', function playSample(){
    
    document.getElementById("Button1").addEventListener("click",function(){
        sound1.play();
        Knopf1.style.opacity='100%';
    });
    document.getElementById("Button2").addEventListener("click",function(){
        sound2.play();
        Knopf2.style.opacity='100%';
        
    });
    document.getElementById("Button3").addEventListener("click",function(){
        sound3.play();
        Knopf3.style.opacity='100%';
    });
    document.getElementById("Button4").addEventListener("click",function(){
        sound4.play();
        Knopf4.style.opacity='100%';
    });
    document.getElementById("Button5").addEventListener("click",function(){
        sound5.play();
        Knopf5.style.opacity='100%';
    });
    document.getElementById("Button6").addEventListener("click",function(){
        sound6.play();
        Knopf6.style.opacity='100%';
    });
    document.getElementById("Button7").addEventListener("click",function(){
        sound7.play();
        Knopf7.style.opacity='100%';
    });
    document.getElementById("Button8").addEventListener("click",function(){
        sound8.play();
        Knopf8.style.opacity='100%';
    });
    document.getElementById("Button9").addEventListener("click",function(){
        sound9.play();
        Knopf9.style.opacity='100%';
    });
    document.getElementById('Play').addEventListener('click',function(){
        Knopf10.style.opacity='100%'
    });

    
    //knoepfe
    var Knopf1:HTMLElement=document.getElementById('Button1');
    var Knopf2:HTMLElement=document.getElementById('Button2');
    var Knopf3:HTMLElement=document.getElementById('Button3');
    var Knopf4:HTMLElement=document.getElementById('Button4');
    var Knopf5:HTMLElement=document.getElementById('Button5');
    var Knopf6:HTMLElement=document.getElementById('Button6');
    var Knopf7:HTMLElement=document.getElementById('Button7');
    var Knopf8:HTMLElement=document.getElementById('Button8');
    var Knopf9:HTMLElement=document.getElementById('Button9');
    var Knopf10:HTMLElement=document.getElementById('Play');

    //sounds
    var sound1:HTMLAudioElement=new Audio('assets/A.mp3');
    var sound2:HTMLAudioElement=new Audio('assets/C.mp3');
    var sound3:HTMLAudioElement=new Audio('assets/F.mp3');
    var sound4:HTMLAudioElement=new Audio('assets/G.mp3');
    var sound5:HTMLAudioElement=new Audio('assets/hihat.mp3');
    var sound6:HTMLAudioElement=new Audio('assets/kick.mp3');
    var sound7:HTMLAudioElement=new Audio('assets/laugh-1.mp3');
    var sound8:HTMLAudioElement=new Audio('assets/laugh-2.mp3');
    var sound9:HTMLAudioElement=new Audio('assets/snare.mp3');

  

    


    var beat:HTMLAudioElement[]=[sound1,new Audio('assets/kick.mp3'), new Audio('assets/snare.mp3')]; //index 0,1,2

    let zeahlervariable = 0;


    setInterval(function() {

        beat[zeahlervariable].play();

        zeahlervariable++;

      }, 500);

    
})

