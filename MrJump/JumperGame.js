//Gamesound files still exsist but i could not find back-up code where sound was semi-working

document.addEventListener('DOMContentLoaded', () => { //Makes everything in document run after HTML and CSS have established themselves

    var mrjump = document.querySelector('.mrjump');                     
    var count = 0;                                                      //Establishes count for timer.
    let floor = 45                                                      //Establishes base value of the floor
    let weight = 0.9                                                    //Establishes weight of character
    let inair = false                                                   //Establishes character state

    //JUMP FUNCTION

    function jump() {
        if (inair) return
        let airtime = setInterval( function () {

            if (floor > 300) {                                         //Controls max jump height
                clearInterval(airtime)
                let droptime = setInterval( function() {
                    if (floor < 45){
                        clearInterval(droptime)
                        inair = false
                    }
                    floor -= 7
                    mrjump.style.bottom = floor + 'px'
                }, 15)
            }
        inair = true                                                   //Stops them from jumping                            
        floor += 50                                                    //45 + 50
        floor = floor * weight
        mrjump.style.bottom = floor + 'px'                             //Tells javascript to use px measuremnt
        }, 15)                                                         //Checks if user is jumping
    }

    //SCORE FUNCTION

    function scorecount(){
        
        var score = document.getElementById('score')
        if (inair) return                                               //if hes in air then pressing jump doesnt add to score
        else
        count++;                                                        //Adds to score
        score.innerHTML = "score: " + count;                            // Shows count in score
    }

    //JUMPANDSCORE KEY FUNCTION 

    function JumpAndScoreControl(j) {                                   //gives jump functionn a key
        if (j.keyCode === 32){                                          //if spacebar (spacebar means 32) is pressed...
            jump();
            scorecount();
            localStorage.setItem("score", count);
            sessionStorage.topScore = count;
        }
    }

    document.addEventListener('keydown', JumpAndScoreControl)           //waits for registered key to be pressed


    



    //COLLISION ATTEMPTS I COULD SALVAGE (Used various methods but could only find a back-up with this)

        /*var cannyvictory = setInterval(function(){
            var mrjumpBottom = parseInt(window.getComputedStyle(mrjump).getPropertyValue("bottom"));
    

            var cannySide = parseInt(window.getComputedStyle(mrjump).getPropertyValue("left"));
    
            if(cannySide<1000 && cannyLeft>0 && mrjumpBottom>=45){
             alert("death");
            }
    
    
        },15);*/

        /*var death = setInterval(function(){
            var mrjumpright = parseInt (window.getComputedStyle(mrjump).getPropertyValue("right"));

            var cannyleft = parseInt(window.getComputedStyle(mrjump).getPropertyValue("left"));

            if(cannyleft<=100 && mrjumpright<0 && mrjumpright>=300){
                alert (death);
            }


        },15);*/


        //TOP SCORE SESSION STORAGE ATTEMPT

        /*let newscore = document.getElementById("score").value;
        if(sessionStorage.loggedInUser !== undefined){
            let usr = JSON.parse(localStorage[sessionStorage.loggedInUser]);
                if(usr.topScore < newscore){
                    usr.topScore = newscore;
                    localStorage[usr.username] = JSON.stringify(usr);
                }
        
            }*/
}) 