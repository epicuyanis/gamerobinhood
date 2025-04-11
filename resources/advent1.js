    
    
    let theKnight = document.getElementById("theknight");
    let knight2outer = document.getElementById("knight2outer");
    let knight2 = document.getElementById("knight2");
    let arrow1 = document.getElementById("arrow1");
    
    let horizontal = 0
    let vertical = 0
    let horizondirect = 1
    let totalcoins = 0

    let totheright = true
    let totheleft = false

    let monstergreenlife = 1 //is alive, 0 is dead
    let monsterghostlife = 1 //is alive, 0 is dead
    let monstersaurlife = 1 //is alive, 0 is dead
    let monsterwoodlife = 1 //is alive, 0 is dead

    let killtostopmonsterwood = false
    let killtostopmonstersaur = false
    let killtostopmonsterghost = false
    let killtostopmonstergreen = false

    let laddertowitch = false
    let souls = 8
    let stargone = 0
    let arrowshot = 0
    let thewitchisalive = true

    function welcome(){
        setTimeout(() => {
            document.getElementById("welcome").style.marginTop = "0px"
            document.getElementById("fieldgame").style.opacity = "1"
            document.getElementById("playmusic").style.opacity = "1"
        },3000);
        setTimeout(() => {
            document.getElementById("controlgame").style.opacity = "1"
        }, 6000);
    }

    function start(){
        document.getElementById("beginboard").style.marginTop = "-630px"
        document.getElementById("beginboard").style.opacity = "100%"
        theKnight.style.backgroundPositionY = "-9px"
        theKnight.style.backgroundPositionX = "-14px"
        theKnight.style.width = "40px"

    }
    function begingame(){
        theKnight.style.width = "40px"
        document.getElementById("beginboard").style.marginTop = "0px"
        document.getElementById("beginboard").style.opacity = "0%"
        document.getElementById("knight2").style.opacity = "1"
        document.getElementById("stairenemies").style.opacity = "1"
        document.getElementById("stairwitch").style.opacity = "1"
    }

    function move(){
        theKnight.style.width = "40px"
        theKnight.style.backgroundPositionY = "-345px"
        theKnight.style.animationName = "playSprite3"
        theKnight.style.animationDuration = "1s"
        theKnight.style.animationTimingFunction = "steps(14)"
        theKnight.style.animationIterationCount = "infinite"
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionY = "-9px"
            theKnight.style.backgroundPositionX = "-14px"
        }, 500);
    }

    function run(){
        theKnight.style.width = "40px"
        knight2.style.transitionDuration = ".4s"
        theKnight.style.backgroundPositionY = "-345px"
        theKnight.style.animationName = "playSprite3"
        theKnight.style.animationDuration = ".5s"
        theKnight.style.animationTimingFunction = "steps(7)"
        theKnight.style.animationIterationCount = "infinite"
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionY = "-9px"
            theKnight.style.backgroundPositionX = "-14px"
        }, 1000);
    }

    

    function right(){
        totheright = true
        totheleft = false
        theKnight.style.width = "40px"
        horizondirect = 1
        horizontal = horizontal + 25
        knight2.style.marginLeft = horizontal - 500 + "px"
        theKnight.style.transform = "scaleX(1)"        
        move()
        
        //popup info
        if(totalcoins >= 58){
            document.getElementById("popinfo").style.opacity = "1"
        }

        //Falling from the flying land
        //land : left 1
        if(vertical === 75 && horizontal > -50){
            fall1()
        }
        //land : left 2
        if(vertical === 225 && horizontal >= -25){
            fall2()
        }
        //land : right 1 
        if(vertical === 25 && horizontal > 450){
            fall3()
        }
        //land : right 2
        if(vertical === 150 && horizontal > 450){
            fall4()
        }
        //land : final land the witch land
        if(vertical === 300 && horizontal > 450){
            fall4()
        }
        
        //Falling from the Ladders
        //falling from the ladder of land left 1
        if(vertical >= 25 && vertical <= 50){
            if(horizontal >= -300 && horizontal <= 150){
                fall1()
            }
        }
        //falling from the ladder of land left 2
        if(vertical >= 100 && vertical <= 200){
             if(horizontal >= -300 && horizontal <= 150){
                fall_on3rdflyingland()
            }
        }
        //falling from the ladder of land right 2
        if(vertical >= 50 && vertical <= 125){
             if(horizontal >= 200){
                setTimeout(() => {
                    theKnight.style.width = "40px"
                    theKnight.style.backgroundPositionY = "-285px"
                    theKnight.style.animationName = "jump"
                    theKnight.style.animationDuration = "1s"
                    theKnight.style.animationTimingFunction = "steps(8)"
                    theKnight.style.animationIterationCount = "infinite"
        
                    vertical = 25
                    knight2.style.marginTop = 345 + "px"
                }, 500);
                
                setTimeout(() => {
                    knight2outer.style.marginTop = "0px"
                }, 600);
                setTimeout(() => {
                    theKnight.style.animationName = "none"
                    theKnight.style.backgroundPositionY = "-9px"
                    theKnight.style.backgroundPositionX = "-14px"
                }, 1000);
                console.log("vertical " + vertical)
            }
        }
        //falling from the ladder of land of the witch
        if(vertical >= 175 && vertical <= 275){
            if(horizontal >= 200){
                // alert("must fall")
                fall5()
            }
        }

        //FALLING from The Game Land
        if(vertical === 0 || vertical === 25 || vertical === 150){
            if(horizontal >= 500){
                setTimeout(() => {
                    knight2.style.marginTop = 345 + 250 + "px"
                }, 1000); 
                setTimeout(() => {
                    restart()
                }, 2000);         
            }
        }

        //GETTING COINS
        //1st flying land
        if(vertical === 225){
            for (let i = 1; i <= 11; i++) {
                if (horizontal === -325 + (i * 25)) {
                    document.getElementById("stars1coin" + i).style.opacity = "0";
                    totalcoins += 1
                    document.getElementById("cointotal").innerHTML = totalcoins
                }
            }
        }
        //2nd flying land
        if(vertical === 150){
            for (let i = 1; i <= 11; i++) {
                if (horizontal === 175 + (i * 25)) {
                    document.getElementById("stars2coin" + i).style.opacity = "0";
                    totalcoins += 1
                    document.getElementById("cointotal").innerHTML = totalcoins
                }
            }
        }
        //3rd flying land
        if(vertical === 75){
            for (let i = 1; i <= 11; i++) {
                if (horizontal === -325 + (i * 25)) {
                    document.getElementById("stars3coin" + i).style.opacity = "0";
                    totalcoins += 1
                    document.getElementById("cointotal").innerHTML = totalcoins
                }
            }
        }
        //4th flying land
        if(vertical === 25){
            for (let i = 1; i <= 11; i++) {
                if (horizontal === 175 + (i * 25)) {
                    document.getElementById("stars4coin" + i).style.opacity = "0";
                    totalcoins += 1
                    document.getElementById("cointotal").innerHTML = totalcoins
                }
            }
        }

        //MONSTERS COMING
        //monster green start coming
        if(vertical === 225 && horizontal >= -300){
            if(monstergreenlife === 1){
                enemymonsterl1() 
            }                     
       }
        // grey ghost start coming
        if(vertical === 75 && horizontal >= -300){
            if(monsterghostlife === 1){
                enemymonsterl2() 
            }                      
       }
        // monster saur start coming
        if(vertical === 150 && horizontal >= 175){           
            if(monstersaurlife === 1){
                document.getElementById("enemy3").style.backgroundImage = "url(images/monstersaur.gif)"
                document.getElementById("enemy3").style.marginTop = "-90px"
                enemymonsterl3()
            }                      
       }
        // monster wood start coming
        if(vertical === 25 && horizontal >= 175){
            if(monsterwoodlife === 1){
                enemymonsterl4() 
            }     
       }

       //go to the witch
       if(vertical === 300){
            //challenge from the witch 
            if(horizontal >= 175 && horizontal <= 425){
                if(thewitchisalive === true){
                    document.getElementById("fireball").style.opacity = "1"
                    setTimeout(() => {
                        witchfight()
                    }, 500);
                } 
                if(thewitchisalive === false){
                    document.getElementById("fireball").style.opacity = "0"
                }         
            }
            //get the potion from the witch 
            if(horizontal === 400){
                document.getElementById("potion").style.opacity = "0"
                document.getElementById("potion").style.backgroundSize = "10px"
                document.getElementById("portal").style.opacity = "1"
                setTimeout(() => {
                    document.getElementById("portal").style.backgroundSize = "200px"
                    document.getElementById("portal").style.marginLeft = "90px"
                    document.getElementById("portal").style.marginTop = "-260px"
                }, 2000);
            }
       }

        console.log("horizontal " + horizontal)
        return horizontal
    }

    function left(){
        totheright = false
        totheleft = true
        theKnight.style.width = "40px"
        horizondirect = 0
        horizontal = horizontal - 25
        knight2.style.marginLeft = horizontal - 500 + "px"
        theKnight.style.transform = "scaleX(-1)"
        theKnight.style.backgroundPositionX = "-5px"
        move()

        //popup info
        if(totalcoins >= 58){
            document.getElementById("popinfo").style.opacity = "1"
        }

        //falling from the 4th floor
        if(vertical === 25 && horizontal < 175){
            fall3()
        }
        //falling from the second floor
        if(vertical === 150 && horizontal < 175){
            fall4()
        }
        //falling from the third floor
        if(vertical === 75 && horizontal < -325){
            fall1()
        }
        //falling from the first floor
        if(vertical === 225 && horizontal < -325){
            fall2()
        }
        //falling from the ladder of the land of the witch
        if(vertical >= 175 && vertical <= 275){
            if(horizontal >= -25 && horizontal < 175){
                // alert("must fall")
                fall1()
                setTimeout(() => {
                    died()
                }, 1000);
            }
        }

        //falling from the ladder of land left 1
        if(vertical >= 25 && vertical <= 50){
            if(horizontal <= -350){
                fall1()
            }
        }
        //falling from the ladder of land left 2
        if(vertical >= 100 && vertical <= 200){
             if(horizontal <= -350){
                fall2()
            }
        }

         //falling from the ladder of land right 2
        if(vertical >= 50 && vertical <= 125){
             if(horizontal >= -25 && horizontal <= 150){
                fall1()
            }
        }

        //FALLING from The Game Land
        if(vertical === 0 || vertical === 75 || vertical === 225){
            if(horizontal <= -375){
                setTimeout(() => {
                    knight2.style.marginTop = 345 + 250 + "px"
                }, 1000);       
                setTimeout(() => {
                    restart()
                }, 2000);       
            }
        }

        //falling from the land of the witch
        if(vertical === 300){
            if(horizontal >=125 && horizontal < 175){
                fall1()
                setTimeout(() => {
                    died()
                }, 1000);
            }
        }

        //entering the portal after getting the potion 
        if(vertical === 300 && horizontal === 325){
            if(thewitchisalive === false){
                knight2.style.opacity = "0"
                knight2.style.transitionDuration = "2s"
                setTimeout(() => {
                    wingame() 
                }, 3000);         
            }
        }

        console.log("horizontal " + horizontal)
        return horizontal
    }

    function up(){
        if(vertical >= 0 && vertical <= 200){
            if(horizontal === -325){
                theKnight.style.width = "40px"
                vertical = vertical + 25
                knight2.style.marginTop = 370 - vertical + "px"
                // document.getElementById("knight2").style.transform = "rotate(-90deg)"
                move()
        
                console.log("vertical " + vertical)
                return vertical
            }
        }
        if(vertical >= 0 && vertical <= 125){
            if(horizontal === 175){
                theKnight.style.width = "40px"
                vertical = vertical + 25
                knight2.style.marginTop = 370 - vertical + "px"
                // document.getElementById("knight2").style.transform = "rotate(-90deg)"
                move()
                
                console.log("vertical " + vertical)
                return vertical
            }
        }

        //go to the witch 
        if(laddertowitch === true){
            if(vertical >= 125 && vertical <= 275){
                if(horizontal === 175){
                    theKnight.style.width = "40px"
                    vertical = vertical + 25
                    knight2.style.marginTop = 370 - vertical + "px"
                    // document.getElementById("knight2").style.transform = "rotate(-90deg)"
                    move()
            
                    console.log("vertical " + vertical)
                    return vertical
                }
            }
        }
    }
    function down(){
        if(vertical >= 25 && vertical <= 225){
            if(horizontal === -325){           
                theKnight.style.width = "40px"
                vertical = vertical - 25
                knight2.style.marginTop = 370 - vertical + "px"
                // document.getElementById("theknight").style.transform = "rotate(90deg)"
                move()
                    
                console.log("vertical " + vertical)
                return vertical          
            }
        }
               
        if(vertical >= 25 && vertical <= 150){
            if(horizontal === 175){
                theKnight.style.width = "40px"
                vertical = vertical - 25
                knight2.style.marginTop = 370 - vertical + "px"
                // document.getElementById("theknight").style.transform = "rotate(90deg)"
                move()
            
                console.log("vertical " + vertical)
                return vertical
            }
        }       
    }

    function normal(){
        alert("normal")
    }

    function readytoshoot(){
        theKnight.style.width = "40px"
        theKnight.style.backgroundPositionY = "-60px"
    }
    function loose(){
        theKnight.style.width = "40px"
        theKnight.style.backgroundPositionY = "-9px"
        theKnight.style.backgroundPositionX = "-14px"
    }

    function shootarrow(){
        theKnight.style.width = "40px"
        theKnight.style.backgroundPositionY = "-60px"
        theKnight.style.animationName = "shootarrow"
        theKnight.style.animationDuration = "1s"
        theKnight.style.animationTimingFunction = "steps(4)"
        theKnight.style.animationIterationCount = "infinite"
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionX = "-14px"
            arrow1.style.opacity = "1"
            arrow1.style.transition = "0.5s"
            setTimeout(() => {
                arrow1.style.marginLeft = "300px"
                arrow1.style.backgroundPositionX = "0px"
                setTimeout(() => {
                    arrow1.style.backgroundPositionX = "30px"
                    setTimeout(() => {
                        arrow1.style.opacity = "0"
                        arrow1.style.transition = "0s"
                        setTimeout(() => {
                            arrow1.style.marginLeft = "0px"
                            arrow1.style.backgroundPositionX = "8px"                     
                        }, 500);
                    }, 600);
                }, 200);    
            }, 100);
        }, 900);

    //shootenemy4
    if(totheright === true){
        if(vertical === 25 && horizontal >= 175){
            if(monsterwoodlife === 1){
                setTimeout(() => {
                    killtostopmonsterwood = true
                    monsterwoodlife -= 1 
                    document.getElementById("enemy4").style.backgroundImage = "url(images/fire.gif)"
                    document.getElementById("enemy4").style.backgroundSize = "60px"
                    document.getElementById("enemy4").style.marginTop = "-80px"

                    totalcoins += 3
                    document.getElementById("cointotal").innerHTML = totalcoins
                }, 1500);         
            }
        }
    }
    //shootenemy3
    if(totheright === true){
        if(vertical === 150 && horizontal >= 175){
            if(monstersaurlife === 1){
                setTimeout(() => {
                    killtostopmonstersaur = true
                    monstersaurlife -= 1 
                    document.getElementById("enemy3").style.backgroundImage = "url(images/fire.gif)"
                    document.getElementById("enemy3").style.backgroundSize = "60px"
                    document.getElementById("enemy3").style.marginTop = "-90px"

                    totalcoins += 3
                    document.getElementById("cointotal").innerHTML = totalcoins
                }, 1500);         
            }
        }
    }
    //shootenemy2
    if(totheright === true){
        if(vertical === 75 && horizontal >= -325){
            if(monsterghostlife === 1){
                setTimeout(() => {
                    killtostopmonsterghost = true
                    monsterghostlife -= 1 
                    document.getElementById("enemy2").style.backgroundImage = "url(images/fire.gif)"
                    document.getElementById("enemy2").style.backgroundSize = "60px"
                    document.getElementById("enemy2").style.marginTop = "-80px"

                    totalcoins += 3
                    document.getElementById("cointotal").innerHTML = totalcoins
                }, 1500);         
            }
        }
    }
    //shootenemy1
    if(totheright === true){
        if(vertical === 225 && horizontal >= -325){
            if(monstergreenlife === 1){
                setTimeout(() => {
                    killtostopmonstergreen = true
                    monstergreenlife -= 1 
                    document.getElementById("enemy1").style.backgroundImage = "url(images/fire.gif)"
                    document.getElementById("enemy1").style.backgroundSize = "60px"
                    document.getElementById("enemy1").style.marginTop = "-80px"

                    totalcoins += 3
                    document.getElementById("cointotal").innerHTML = totalcoins
                }, 1500);         
            }
        }
    }

    //shoot the witch 
    if(totheright === true){
        if(vertical === 300){
            if(horizontal >= 175 && horizontal <= 425){
                arrowshot += 1
                if(arrowshot > 4){
                    thewitchisalive = false
                }
            }
        }
    }
    return totalcoins
    }

    function stabbing(){
        theKnight.style.width = "40px"
        theKnight.style.backgroundPositionY = "-170px"
        theKnight.style.animationName = "stabb"
        theKnight.style.animationDuration = "1s"
        theKnight.style.animationTimingFunction = "steps(6)"
        theKnight.style.animationIterationCount = "infinite"
        knight2outer.style.marginTop = "-20px"
        setTimeout(() => {
            knight2outer.style.marginTop = "0px"
        }, 600);
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionY = "-9px"
            theKnight.style.backgroundPositionX = "-14px"
        }, 1400);
    }

    function jumping(){
        theKnight.style.width = "40px"
        theKnight.style.backgroundPositionY = "-285px"
        theKnight.style.animationName = "jump"
        theKnight.style.animationDuration = "1s"
        theKnight.style.animationTimingFunction = "steps(8)"
        theKnight.style.animationIterationCount = "infinite"
        knight2outer.style.marginTop = "-40px"
        setTimeout(() => {
            knight2outer.style.marginTop = "0px"
            if(vertical === 0){
                if(horizontal === 0){
                    document.getElementById("lowerstarscoin1").style.opacity = "0";
                    totalcoins += 1
                    document.getElementById("cointotal").innerHTML = totalcoins
                }
                if(horizontal === 50){
                    document.getElementById("lowerstarscoin2").style.opacity = "0";
                    totalcoins += 1
                    document.getElementById("cointotal").innerHTML = totalcoins
                }
                if(horizontal === 100){
                    document.getElementById("lowerstarscoin3").style.opacity = "0";
                    totalcoins += 1
                    document.getElementById("cointotal").innerHTML = totalcoins
                }
            }
        }, 600);
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionY = "-9px"
            theKnight.style.backgroundPositionX = "-14px"
            if(vertical === 150 && horizontal === 200){
                //totalcoins 59
                if(totalcoins >= 1){
                    laddertowitch = true
                    document.getElementById("ladderwitch1").style.marginTop = "-15px"
                    document.getElementById("ladderwitch2").style.marginTop = "3px"
                    document.getElementById("popinfo").style.opacity = "0"
                }
            }
        }, 1400);

        console.log("vertical " + vertical)      
    }

    //3rd flying land
    function fall1(){
        setTimeout(() => {
            theKnight.style.width = "40px"
            theKnight.style.backgroundPositionY = "-285px"
            theKnight.style.animationName = "jump"
            theKnight.style.animationDuration = "1s"
            theKnight.style.animationTimingFunction = "steps(8)"
            theKnight.style.animationIterationCount = "infinite"

            vertical = 0
            knight2.style.marginTop = 370 + "px"
        }, 500);
        
        setTimeout(() => {
            knight2outer.style.marginTop = "0px"
        }, 600);
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionY = "-9px"
            theKnight.style.backgroundPositionX = "-14px"
        }, 1000);
        console.log("vertical " + vertical)
    }

    //1st flying land
    function fall2(){
        setTimeout(() => {
            theKnight.style.width = "40px"
            theKnight.style.backgroundPositionY = "-285px"
            theKnight.style.animationName = "jump"
            theKnight.style.animationDuration = "1s"
            theKnight.style.animationTimingFunction = "steps(8)"
            theKnight.style.animationIterationCount = "infinite"

            vertical = 0
            knight2.style.marginTop = 370 + "px"
        }, 500);
        
        setTimeout(() => {
            knight2outer.style.marginTop = "0px"
        }, 600);
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionY = "-9px"
            theKnight.style.backgroundPositionX = "-14px"
            died()
        }, 1000);
        console.log("vertical " + vertical)
    }

    //4th flying land
    function fall3(){
        setTimeout(() => {
            theKnight.style.width = "40px"
            theKnight.style.backgroundPositionY = "-285px"
            theKnight.style.animationName = "jump"
            theKnight.style.animationDuration = "0.5s"
            theKnight.style.animationTimingFunction = "steps(8)"
            theKnight.style.animationIterationCount = "infinite"
            vertical = 0
            knight2.style.marginTop = 370 + "px"
        }, 500);
        
        setTimeout(() => {
            knight2outer.style.marginTop = "0px"
        }, 600);
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionY = "-9px"
            theKnight.style.backgroundPositionX = "-14px"
        }, 1000);
        console.log("vertical " + vertical)
    }

    //2nd flying land
    function fall4(){
        setTimeout(() => {
            theKnight.style.width = "40px"
            theKnight.style.backgroundPositionY = "-285px"
            theKnight.style.animationName = "jump"
            theKnight.style.animationDuration = "1s"
            theKnight.style.animationTimingFunction = "steps(8)"
            theKnight.style.animationIterationCount = "infinite"

            vertical = 0
            knight2.style.marginTop = 370 + "px"
        }, 500);
        
        setTimeout(() => {
            knight2outer.style.marginTop = "0px"
        }, 600);
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionY = "-9px"
            theKnight.style.backgroundPositionX = "-14px"
            died()
        }, 1000);
        console.log("vertical " + vertical)
    }

    function fall_on3rdflyingland(){
        setTimeout(() => {
            theKnight.style.width = "40px"
            theKnight.style.backgroundPositionY = "-285px"
            theKnight.style.animationName = "jump"
            theKnight.style.animationDuration = "1s"
            theKnight.style.animationTimingFunction = "steps(8)"
            theKnight.style.animationIterationCount = "infinite"

            vertical = 75
            knight2.style.marginTop = 370 - 75 + "px"
        }, 500);
        
        setTimeout(() => {
            knight2outer.style.marginTop = "0px"
        }, 600);
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionY = "-9px"
            theKnight.style.backgroundPositionX = "-14px"
        }, 1000);
        console.log("vertical " + vertical)
    }

    function fall5(){
        setTimeout(() => {
            theKnight.style.width = "40px"
            theKnight.style.backgroundPositionY = "-285px"
            theKnight.style.animationName = "jump"
            theKnight.style.animationDuration = "1s"
            theKnight.style.animationTimingFunction = "steps(8)"
            theKnight.style.animationIterationCount = "infinite"

            vertical = 150
            knight2.style.marginTop = "220px"
        }, 500);
        
        setTimeout(() => {
            knight2outer.style.marginTop = "0px"
        }, 600);
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionY = "-9px"
            theKnight.style.backgroundPositionX = "-14px"
        }, 1000);
        console.log("vertical " + vertical)
    }

    function died(){
        souls -= 1
        stargone += 30 
        document.getElementById("soulvolume").style.width = 240 - stargone + "px"

        theKnight.style.backgroundPositionY = "-228px"
        theKnight.style.animationName = "die"
        theKnight.style.animationDuration = "1s"
        theKnight.style.animationTimingFunction = "steps(6)"
        theKnight.style.animationIterationCount = "infinite"
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionX = "-260px"
            theKnight.style.backgroundPositionY = "-228px"
            theKnight.style.width = "55px"
        }, 1000);

        if(souls <= 0){
            gameover()
        }
    }

    function enemymonsterl1(){
        const enemy = document.getElementById("enemy1");
        let enemyhorizontal = 245; // Starting margin-left

        const interval = setInterval(() => {
            enemyhorizontal -= 25; // Decrease horizontal position by 25
            enemy.style.marginLeft = `${enemyhorizontal}px`;
            console.log("enemyhorizontal is " + enemyhorizontal)
            if(vertical === 225){
                if(horizontal + 320 > enemyhorizontal){
                    died()
                    clearInterval(interval);
                    document.getElementById("enemy1").style.marginLeft = "-10px"
                }
            }
            

            if (enemyhorizontal <= 0) { // Stop when it reaches -25
                clearInterval(interval);
                setTimeout(() => {
                    document.getElementById("enemy1").style.marginLeft = "245px"
                }, 2000); 
            }

            if(killtostopmonstergreen === true){
                clearInterval(interval);
            }
        }, 1000); // Update every second (1000ms)
    }
    function enemymonsterl2(){
        const enemy = document.getElementById("enemy2");
        let enemyhorizontal = 245; // Starting margin-left

        const interval = setInterval(() => {
            enemyhorizontal -= 25; // Decrease horizontal position by 25
            enemy.style.marginLeft = `${enemyhorizontal}px`;
            console.log("enemyhorizontal is " + enemyhorizontal)

            if(vertical === 75){
                if(horizontal + 320 > enemyhorizontal){
                    died()
                    clearInterval(interval);
                    document.getElementById("enemy2").style.marginLeft = "-10px"
                }
            }          

            if (enemyhorizontal <= -25) { // Stop when it reaches -25
                clearInterval(interval);
                setTimeout(() => {
                    document.getElementById("enemy2").style.marginLeft = "245px"
                }, 2000); 
            }

            if(killtostopmonsterghost === true){
                clearInterval(interval);
            }
        }, 1000); // Update every second (1000ms)
    }
    function enemymonsterl3(){
        const enemy = document.getElementById("enemy3");
        // let enemyhorizontal = 245; // Starting margin-left
        let enemyhorizontal = 255;

        const interval = setInterval(() => {
            enemyhorizontal -= 25; // Decrease horizontal position by 25
            enemy.style.marginLeft = `${enemyhorizontal}px`;
            console.log("enemyhorizontal is " + enemyhorizontal)

            if(vertical === 150){
                if(horizontal - 200 > enemyhorizontal){
                    died()
                    clearInterval(interval);
                    document.getElementById("enemy3").style.marginLeft = "-30px"
                }
            }           

            if (enemyhorizontal <= -15) { // Stop when it reaches -25
                clearInterval(interval);
                setTimeout(() => {
                    document.getElementById("enemy3").style.marginLeft = "245px"
                    document.getElementById("enemy3").style.backgroundImage = "url(images/monstersaur.png)"
                }, 2000); 
            }

            if(killtostopmonstersaur === true){
                clearInterval(interval);
            }
        }, 1000); // Update every second (1000ms)
    }
    function enemymonsterl4(){
        const enemy = document.getElementById("enemy4");
        let enemyhorizontal = 245; // Starting margin-left

        const interval = setInterval(() => {
            enemyhorizontal -= 25; // Decrease horizontal position by 25
            enemy.style.marginLeft = `${enemyhorizontal}px`;
            console.log("enemyhorizontal is " + enemyhorizontal)

            if(vertical === 25){
                if(horizontal - 200 > enemyhorizontal){
                    died()
                    clearInterval(interval);
                    document.getElementById("enemy4").style.marginLeft = "-10px"
                }
            }            

            if (enemyhorizontal <= 0) { // Stop when it reaches -25
                clearInterval(interval);
                setTimeout(() => {
                    document.getElementById("enemy4").style.marginLeft = "245px"
                }, 2000); 
            }

            if(killtostopmonsterwood === true){
                clearInterval(interval);
            }
        }, 1000); // Update every second (1000ms)
    }

    function witchfight(){
        intervaloffireball = setInterval(() => {
            document.getElementById("fireball").style.marginLeft = "400px"
            setTimeout(() => {
                document.getElementById("fireball").style.marginLeft = "0px"
                souls -= 1
                stargone += 30 
                document.getElementById("soulvolume").style.width = 240 - stargone + "px"
                if(thewitchisalive === true){
                   if(souls <= 0){
                        clearInterval(intervaloffireball)
                        died()
                        setTimeout(() => {
                            gameover()
                        }, 3000);
                    } 
                }
                if(thewitchisalive === false){
                    clearInterval(intervaloffireball)
                    document.getElementById("thewitch").style.backgroundImage = "url(images/fire.gif)"
                    document.getElementById("fireball").style.opacity = "0"
                }
            }, 1000);
        }, 2000);

       
    }

    function wingame(){
        document.getElementById("gameover").style.backgroundImage = "url(images/win.png)"
        document.getElementById("firstbody").style.opacity = "0"
        document.getElementById("firstbody").style.transitionDuration = "5s"
        document.getElementById("secondbody").style.opacity = "0"
        document.getElementById("secondbody").style.transitionDuration = "5s"
        document.getElementById("thirdbody").style.opacity = "0"
        document.getElementById("thirdbody").style.transitionDuration = "5s"

        document.getElementById("fifthbody").style.opacity = "0"
        document.getElementById("fifthbody").style.transitionDuration = "5s"
        document.getElementById("gameover").style.marginTop = "-900px"
    }

    function gameover(){
        document.getElementById("firstbody").style.opacity = "0"
        document.getElementById("firstbody").style.transitionDuration = "5s"
        document.getElementById("secondbody").style.opacity = "0"
        document.getElementById("secondbody").style.transitionDuration = "5s"
        document.getElementById("thirdbody").style.opacity = "0"
        document.getElementById("thirdbody").style.transitionDuration = "5s"
        document.getElementById("fifthbody").style.opacity = "0"
        document.getElementById("fifthbody").style.transitionDuration = "5s"
        document.getElementById("gameover").style.marginTop = "-900px"
    }

    function restart(){
        location.reload()
    }

    function playMusic() {
        // Mengambil elemen audio
        const audioPlayer = document.getElementById('audioPlayer');

        // Memeriksa apakah audio sedang diputar
        if (audioPlayer.paused) {
            audioPlayer.play(); // Memutar audio jika sedang dihentikan
        } else {
            audioPlayer.pause(); // Menghentikan audio jika sedang diputar
            audioPlayer.currentTime = 0; // Mengembalikan ke awal audio
        }
    }