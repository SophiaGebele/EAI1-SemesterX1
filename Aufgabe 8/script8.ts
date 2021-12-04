

window.addEventListener("load", function(): void {
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



//array
    var sounds: HTMLAudioElement [] = [sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8, sound9];
//
        var myInterval: number;
        var index: number = 0;
        var playback: boolean;


//play
    function playSample(sounds: HTMLAudioElement): void {
        sounds.play();
    }  
    
    
//beat
    function playBeat (): void {
        

        if (document.getElementById("Play").getAttribute("class") == "fas fa-play-circle") {
            document.getElementById("Play").setAttribute("class", "fas fa-stop-circle");
            myInterval = setInterval(tone, 500);
            }

        else {document.getElementById("Play").setAttribute("class", "fas fa-play-circle");
              clearInterval(myInterval); }
    
        function tone(): void {
            playSample(sounds[index]);
            index++;
            if (index == 3) { index = 0; } 
        }
    }
//Remix loeschen
    function deleteRemix(): void {
        clearInterval(myInterval);
        if (document.getElementById("Play").getAttribute("class") == "fas fa-stop-circle") {
            document.getElementById("Play").setAttribute("class", "fas fa-play-circle"); }
        }
 
//Remix
    function playRemix(): void {
        myInterval = setInterval(mix, 250);
        function mix(): void {
            index = Math.floor(Math.random() * 5);
            playSample(sounds[index]);    
        }
        playback = true;
        if (playback == true) {document.getElementById("Play").setAttribute("class", "fas fa-stop-circle"); }
        else {document.getElementById("Play").setAttribute("class", "fas fa-play-circle");
              clearInterval(myInterval); } }


// click auf Sound-Buttons
    document.getElementById("Button1").addEventListener("click",function():
        void {playSample(sounds[0]);
    });
    document.getElementById("Button2").addEventListener("click",function():
        void{playSample(sounds[1]);
    });
    document.getElementById("Button3").addEventListener("click",function():
        void {playSample(sounds[2]); });

    document.getElementById("Button4").addEventListener("click",function():
        void{playSample(sounds[3]);
    });
    document.getElementById("Button5").addEventListener("click",function():
        void{playSample (sounds[4]);
    });
    document.getElementById("Button6").addEventListener("click",function():
        void {playSample (sounds[5]);
    });
    document.getElementById("Button7").addEventListener("click",function():
        void{playSample (sounds[6]);
    });
    document.getElementById("Button8").addEventListener("click",function():
        void {playSample (sounds[7]);
    });
    document.getElementById("Button9").addEventListener("click",function():
        void {playSample (sounds[8]);
    });

    document.getElementById("Play").addEventListener("click", function(): void {playBeat(); });
    document.getElementById("Remix").addEventListener("click", function(): void {playRemix(); });
    document.getElementById("Delete").addEventListener("click", function(): void {deleteRemix(); });

});