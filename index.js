//buttonclick event
for(let i=0;i<document.querySelectorAll(".drum").length;i++)
    {
        document.querySelectorAll(".drum")[i].addEventListener("click",function(){
            var buttontext=this.innerHTML;
        makesound(buttontext)});}
//keydown event
document.addEventListener("keydown",function(event){
            makesound(event.key)
         });

    function makesound(event){
            switch(event){
                case "w":
                    var audio=new Audio("./sounds/tom-1.mp3");
                    audio.play();
                            // Add the "active" effect to the button
                            var button = document.querySelector(".w");
                            button.classList.add("active");
                    
                            // Remove the "active" effect after a short delay
                            setTimeout(function () {
                                button.classList.remove("active");
                            }, 100); // 100ms delay to simulate the pressed effect
                            break;
                case "a":
                    var audio=new Audio("./sounds/tom-2.mp3");
                    audio.play();
                    // Add the "active" effect to the button
                    var button = document.querySelector(".a");
                    button.classList.add("active");
            
                    // Remove the "active" effect after a short delay
                    setTimeout(function () {
                        button.classList.remove("active");
                    }, 100); // 100ms delay to simulate the pressed effect
                    break;
                case "s":
                    var audio=new Audio("./sounds/tom-3.mp3");
                    audio.play();
                    // Add the "active" effect to the button
                            var button = document.querySelector(".s");
                            button.classList.add("active");
                    
                            // Remove the "active" effect after a short delay
                            setTimeout(function () {
                                button.classList.remove("active");
                            }, 100); // 100ms delay to simulate the pressed effect
                            break;
                    
                case "d":
                        var audio=new Audio("./sounds/tom-4.mp3");
                        audio.play();
                        // Add the "active" effect to the button
                        var button = document.querySelector(".d");
                        button.classList.add("active");
                
                        // Remove the "active" effect after a short delay
                        setTimeout(function () {
                            button.classList.remove("active");
                        }, 100); // 100ms delay to simulate the pressed effect
                        break;
                case "j":
                    var audio=new Audio("./sounds/snare.mp3");
                    audio.play();
                    // Add the "active" effect to the button
                    var button = document.querySelector(".j");
                    button.classList.add("active");
            
                    // Remove the "active" effect after a short delay
                    setTimeout(function () {
                        button.classList.remove("active");
                    }, 100); // 100ms delay to simulate the pressed effect
                    break;
                case "k":
                        var audio=new Audio("./sounds/kick-bass.mp3");
                        audio.play();
                        // Add the "active" effect to the button
                        var button = document.querySelector(".k");
                        button.classList.add("active");
                
                        // Remove the "active" effect after a short delay
                        setTimeout(function () {
                            button.classList.remove("active");
                        }, 100); // 100ms delay to simulate the pressed effect
                        break;
                case "l":
                            var audio=new Audio("./sounds/crash.mp3");
                            audio.play();
                            // Add the "active" effect to the button
                            var button = document.querySelector(".l");
                            button.classList.add("active");
                    
                            // Remove the "active" effect after a short delay
                            setTimeout(function () {
                                button.classList.remove("active");
                            }, 100); // 100ms delay to simulate the pressed effect
                            break;
                default:
                    break;
            }
        };

    
    