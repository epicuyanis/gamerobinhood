 // function startgame() {
    //     start()
    // }

    let horizontal = 0
    let vertical = 0
    let horizondirect = 1

    let theKnight = document.getElementById("theknight")
    let knight2outer = document.getElementById("knight2outer")
    let knight2 = document.getElementById("knight2")
    let arrow1 = document.getElementById("arrow1")

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

    function start(){
        document.getElementById("beginboard").style.marginTop = "-600px"
        document.getElementById("beginboard").style.opacity = "100%"
        theKnight.style.backgroundPositionY = "-9px"
        theKnight.style.backgroundPositionX = "-14px"
        theKnight.style.width = "40px"

    }
    function begingame(){
        theKnight.style.width = "40px"
        document.getElementById("beginboard").style.marginTop = "0px"
        document.getElementById("beginboard").style.opacity = "0%"
    }

    function right(){
        theKnight.style.width = "40px"
        horizondirect = 1
        horizontal = horizontal + 25
        knight2.style.marginLeft = horizontal - 500 + "px"
        theKnight.style.transform = "scaleX(1)"        
        move()

        console.log(horizontal)
        return horizontal
    }

    function left(){
        theKnight.style.width = "40px"
        horizondirect = 0
        horizontal = horizontal - 25
        knight2.style.marginLeft = horizontal - 500 + "px"
        theKnight.style.transform = "scaleX(-1)"
        theKnight.style.backgroundPositionX = "-5px"
        move()

        console.log(horizontal)
        return horizontal
    }

    function up(){
        theKnight.style.width = "40px"
        vertical = vertical + 25
        knight2.style.marginTop = 270 - vertical + "px"
        // document.getElementById("knight2").style.transform = "rotate(-90deg)"
        move()

        console.log(vertical)
        return vertical
    }
    function down(){
        theKnight.style.width = "40px"
        vertical = vertical - 25
        knight2.style.marginTop = 270 - vertical + "px"
        // document.getElementById("theknight").style.transform = "rotate(90deg)"
        move()

        console.log(vertical)
        return vertical
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
        }, 600);
        setTimeout(() => {
            theKnight.style.animationName = "none"
            theKnight.style.backgroundPositionY = "-9px"
            theKnight.style.backgroundPositionX = "-14px"
        }, 1400);
    }

    function died(){
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
    }

    