

//General rules: Every 60 seconds each tree giving you 50 apples. It takes you 1 minutes to collect the apples and store them in the barn. 1 day is 10 minutes. 
// 2.25 per kilo. But you need to pay rent and wages to Arny which are 500 a week. If your money end up you lose the game. 
//If your money go above 10 000 than you can invest in new land and  have more trees. At the first place the game will end up there. 

let startBtn, startGame, calendar, calendarWeekDay, barn, money, applesInKg, coinsTotal, moneyTotal, next1, next2, logoStart, intro, McDonaldSpeach, firstSpeach, secondSpeach,
 startScreen, setDay, dayInterval, currentDay = 0, moneyYouGet, moneyFromGustav, applesConvert,
 days, displayDay, dayNumber = 1, week = 1, displayDayNumber, game = 0, i = 0, timing, marketBtn, market, closeBtnAccept, closeBtnDeclined, pricePlaceholder, randomApplesPrice, acceptDeal, declinedDeal,
 closeMarket, marketClock, clockTick, clockMinutes, clockSeconds, gustavGreating, gustavHappy, gustavUnhappy,
 clockMinPlaceholder, clockSecPlaceholder, tree1, tree2, tree3,loader1scale, loader2scale, loader3scale, Ls1 ,Ls2, Ls3, intTree1,
 collectTree1, collectTree2, collectTree3, winBlurred, looseBrurred, win;

days = ["Monday", "Thuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
calendar = document.getElementById("calendar");
calendarWeekDay = document.getElementById("calendarWeekDay");
startBtn = document.getElementById("startBtn"); 
startGame  = document.getElementById("startGame");
displayDay = document.getElementById("displayDay"); //Still not assigned
displayDayNumber = document.getElementById("calendarDay"); //Still not assigned
cloudsAnimationSwitch = document.getElementById("animation-wrapper");
logoStart = document.getElementById("logo-start");
intro = document.getElementById("intro");
startScreen = document.getElementById("start-blurred");
McDonaldSpeach = document.getElementById("McDonaldSpeaking");
firstSpeach = document.getElementById("FirstSpeach");
secondSpeach = document.getElementById("SecondSpeach");
next1 = document.getElementById("next-1");
next2 = document.getElementById("next-2");
tree1 = document.getElementById("treeN1");
tree2 = document.getElementById("treeN2");
tree3 = document.getElementById("treeN3");
loader1scale = document.getElementById("loader-1-scale"); //Scale for tree N1    
loader2scale = document.getElementById("loader-2-scale"); //Scale for tree N2
loader3scale = document.getElementById("loader-3-scale"); //Scale for tree N3
Ls1 = 100; Ls2 = 100; Ls3 = 100; moneyTotal = 1200; //for the percentages of the scales
barn = 0; money = 1200; randomApplesPrice = 0; clockMinutes = 1; clockSeconds = 60;
applesInKg = document.getElementById("applesInKg");
coinsTotal = document.getElementById("coinsTotal");
marketBtn = document.getElementById("market");
market = document.getElementById("market-blurred");
gustavGreating = document.getElementById("GustavGreating");
gustavHappy = document.getElementById("GustavHappy");
gustavUnhappy = document.getElementById("GustavUnhappy");
pricePlaceholder = document.getElementById("priceForApples");
acceptDeal = document.getElementById("agreed");
moneyFromGustav = document.getElementById("moneyFromGustav");
closeBtnAccept = document.getElementById("closeBtnAccept");
closeBtnDeclined = document.getElementById("closeBtnDeclined");
declinedDeal = document.getElementById("declined");
collectTree1 = document.getElementById("collect-1");
collectTree2 = document.getElementById("collect-2");
collectTree3 = document.getElementById("collect-3");
closeMarket = document.getElementById("closeMarket");
marketClock = document.getElementById("marketClock");
clockMinPlaceholder = document.getElementById("clockMinutes");
clockSecPlaceholder = document.getElementById("clockSeconds");
winBlurred = document.getElementById("win-blurred");
looseBrurred = document.getElementById("loose-blurred");


function fadeIn(section){
    section.style.transition = "1s";
    section.style.opacity = "0";
    section.style.display = "block";
    setTimeout(() => {
        section.style.opacity = "1";
    }, 100);
}

function fadeOut(section){
    section.style.transition = "1s";
    section.style.opacity = "1";
    setTimeout(()=>{
        section.style.opacity = "0";
    }, 1000)
    setTimeout(() => {
        section.style.display = "none";
    }, 1100);
}





//Clouds animation when StartBtn clicked
startBtn.addEventListener("click", cloudsAnimation);
//Here is starting the game
startGame.addEventListener("click", () => {
    game = 1;
    cloudsAnimation(); 
    gameOn();
     gameStarting(); 
    setTimeout(() => {
        McDonaldSpeaking()
    }, 6000);}); 
//Second speach of McDonald the farmer
next1.addEventListener("click", () => {
    firstSpeach.style.opacity = 0;
    setTimeout(() => {
        firstSpeach.style.display = "none";
        secondSpeach.style.display = "block";
    }, 3000);
    setTimeout(() => {
        secondSpeach.style.opacity = "1";
    }, 3100);
})
//Close the speach and game begin
next2.addEventListener("click", () => {
    secondSpeach.style.opacity = "0";
    setTimeout(() => {
        secondSpeach.style.display = "none";
    }, 3000);
})




function McDonaldSpeaking(){
    McDonaldSpeach.style.display = "block";
    setTimeout(() => {
        McDonaldSpeach.style.opacity = "1";
    }, 1000);
    
}


function cloudsAnimation(){
    
    setTimeout(() => {
        startBtn.style.display = "none";
    }, 4000);
    setTimeout(() => {
        cloudsAnimationSwitch.style.display = "none";
    }, 8000);
    
    setTimeout(() => {
        intro.style.display = "block";
        setTimeout(() => {
            intro.style.opacity = "1";
        }, 1000);
    }, 6000);

    setTimeout(() => {
        logoStart.style.display = "none";
    }, 6000);

    cloudsAnimationSwitch.style.display = "block";
    logoStart.style.opacity = "0";
    
}

function gameStarting(){
    startScreen.style.opacity = "0";
    setTimeout(() => {
        startScreen.style.display = "none";
    }, 4000);
}


function randomPrice(){
    randomApplesPrice = Math.random() * 1.5 + 1.5;
    priceForApples.innerHTML = randomApplesPrice.toFixed(2);

}

function dealAccepted(){
    moneyYouGet = applesConvert * randomApplesPrice;
    moneyTotal += moneyYouGet;
    applesConvert = 0;
    barn = 0;
    applesInKg.innerHTML = applesConvert;
    coinsTotal.innerHTML = moneyTotal.toFixed(2);
    gustavGreating.style.opacity = 0;
    setTimeout(() => {
        gustavGreating.style.display = "none";
        gustavHappy.style.display = "block";
        moneyFromGustav.innerHTML = moneyYouGet.toFixed(2);
    }, 1000);
    setTimeout(() => {
        gustavHappy.style.opacity = "1";
        //addEventListener("click", functionName) to the close btn
    }, 1100);
}

function dealDeclined(){
    gustavGreating.style.opacity = "0";
    setTimeout(() => {
        gustavGreating.style.display = "none";
        gustavUnhappy.style.display = "block";
    }, 1000);
    setTimeout(() => {
        gustavUnhappy.style.opacity = "1";
    }, 1100);
}

function showTheMarket() {
    if(barn === 0){
        alert("You must have apples to trade! Go and produce some.")
    }
    else{
        clockSeconds = 60;
        clockMinutes = 1;
        clockMinPlaceholder.innerHTML = clockMinutes;
        market.style.display = "block";
        setTimeout(() => {
            market.style.opacity = "1";
        }, 100);
        randomPrice();
        acceptDeal.addEventListener("click", dealAccepted);
        declinedDeal.addEventListener("click", dealDeclined);
    }
}

function hideMarket(){
    market.style.opacity = "0";
    setTimeout(() => {
        market.style.display  = "none";
    }, 4000);

    gustavHappy.style.display = "none";
    gustavUnhappy.style.display = "none";
    setTimeout(() => {
        gustavGreating.style.display = "block";
        gustavGreating.style.opacity = "1";
    }, 4000);

    marketBtn.removeEventListener("click", showTheMarket);

    marketClock.style.display = "block";
    marketClock.style.opacity = "1";

    clockTick = setInterval(() => {
        if(clockSeconds >= 1){
            clockSeconds--;
            clockSecPlaceholder.innerHTML = clockSeconds;
        }
        else{
            clockSeconds = 59;
            clockSecPlaceholder.innerHTML = clockSeconds;
            clockMinutes--;
            clockMinPlaceholder.innerHTML = clockMinutes;
        }
    }, 1000);
    setTimeout(() => {
        marketBtn.addEventListener("click", showTheMarket);
        marketClock.style.opacity = "0";
        marketClock.style.display = "none";
        clearInterval(clockTick);
    }, 120000);
}



console.log("Game started");
console.log("Today is: " + days[currentDay]);

function gameOn(){

    if(game == 1 ){
        
        win = setInterval(() => {
            if(moneyTotal > 10000){
                fadeOut(gustavHappy);
                fadeIn(winBlurred);
                clearInterval(win);
            }
        }, 1000);
      

        //Market open
        marketBtn.addEventListener("click", showTheMarket);

        //Market close
        closeMarket.addEventListener("click", hideMarket);
        closeBtnAccept.addEventListener("click", hideMarket);
        closeBtnDeclined.addEventListener("click", hideMarket);
        

                //Functions for the 3 trees

        tree1.addEventListener("click", () => {
            console.log("Tree 1 was clicked");
            tree1.style.pointerEvents = "none";
            intTree1 = setInterval(tree1production, 100);
            function tree1production() {
                
                if(Ls1 >= 1){
                    Ls1--;
                    console.log(Ls1);
                    loader1scale.style.width = Ls1 + "%";
                    
                }
                else {
                    clearInterval(intTree1);
                    collectTree1.style.display = "block";
                    setTimeout(() => {
                        collectTree1.style.opacity = "1";
                    }, 100);
                    collectTree1.addEventListener("click", collectApples1)
                    function collectApples1(){
                        barn+= 150;
                        applesConvert = barn*0.15;
                        applesInKg.innerHTML = applesConvert + " kg";
                        
                        tree1.style.pointerEvents = "auto";
                        loader1scale.style.width = "100%"
                        Ls1 = 100;
                        collectTree1.style.opacity = "0";
                        setTimeout(() => {
                            collectTree1.style.display = "none";
                        }, 100);
                        collectTree1.removeEventListener("click", collectApples1);
                    }
                }
            }
            
        } );

        tree2.addEventListener("click", () => {
            console.log("Tree 2 was clicked");
            tree2.style.pointerEvents = "none";
            intTree2 = setInterval(tree2production, 100);
            function tree2production() {

                if(Ls2 >= 1){
                    Ls2--;
                    console.log(Ls2);
                    loader2scale.style.width = Ls2 + "%";
                    
                }
                else {
                    clearInterval(intTree2);
                    collectTree2.style.display = "block";
                    setTimeout(() => {
                        collectTree2.style.opacity = "1";
                    }, 100);
                    collectTree2.addEventListener("click", collectApples2)
                    function collectApples2(){
                        barn+= 150;
                        applesConvert = barn*0.15;
                        applesInKg.innerHTML = applesConvert + " kg";
                        tree2.style.pointerEvents = "auto";
                        loader2scale.style.width = "100%"
                        Ls2 = 100;
                        collectTree2.style.opacity = "0";
                        setTimeout(() => {
                            collectTree2.style.display = "none";
                        }, 100);
                        collectTree2.removeEventListener("click", collectApples2);
                    }
                }
            }
            
        } );

        tree3.addEventListener("click", () => {
            console.log("Tree 3 was clicked");
            tree3.style.pointerEvents = "none";
            intTree3 = setInterval(tree3production, 100);
            function tree3production() {

                if(Ls3 >= 1){
                    Ls3--;
                    console.log(Ls3);
                    loader3scale.style.width = Ls3 + "%";
                    
                }
                else {
                    clearInterval(intTree3);
                    collectTree3.style.display = "block";
                    setTimeout(() => {
                        collectTree3.style.opacity = "1";
                    }, 100);
                    collectTree3.addEventListener("click", collectApples3)
                    function collectApples3(){
                        barn+= 150;
                        applesConvert = barn*0.15;
                        applesInKg.innerHTML = applesConvert + " kg";
                        tree3.style.pointerEvents = "auto";
                        loader3scale.style.width = "100%"
                        Ls3 = 100;
                        collectTree3.style.opacity = "0";
                        setTimeout(() => {
                            collectTree3.style.display = "none";
                        }, 100);
                        collectTree3.removeEventListener("click", collectApples3);
                    }
                }
            }
            
        } );

        //Showed the market place


        //Interval for the day
        dayInterval = setInterval(changeDay, 150000);

        //Execute when the date is changed
        function changeDay(){
            if(currentDay === 6){
                
                dayNumber++;
                currentDay = 0;
                week++
                calendar.style.opacity = "0";
                setTimeout(() => {
                    calendarWeekDay.innerHTML = days[currentDay];
                    displayDayNumber.innerHTML = dayNumber;
                    calendar.style.opacity = "1"; 
                }, 1000);
                if(week === 2){
                    gameOver();
                }
                

            }

            else if(currentDay === 5){
                setTimeout(() => {
                    alert("Game end in 1 minute. Last chance to sell your apples!")
                }, 75000);
                dayNumber++;
                currentDay++ ;
                calendar.style.opacity = "0";
                
                setTimeout(() => {
                    calendarWeekDay.innerHTML = days[currentDay];
                    displayDayNumber.innerHTML = dayNumber;
                   calendar.style.opacity = "1"; 
                }, 1000);
            }

            else{
                dayNumber++;
                currentDay++ ;
                calendar.style.opacity = "0";
                
                setTimeout(() => {
                    calendarWeekDay.innerHTML = days[currentDay];
                    displayDayNumber.innerHTML = dayNumber;
                   calendar.style.opacity = "1"; 
                }, 1000);
            }
            
        }

        
        //Count down when market opens
        function clock(){
            i++ ;
            console.log(i); //where your code to display timing out for a deal
        }

        //Execute when market close
        function marketGone(){
            i = 0;
            console.log("market gone") //Write your code what to happpen when market is closed
        }

        

        //Call this function when you want the game to over
        //Game Over
        function gameOver(){
            game = 0;
            if(game == 0){
                fadeIn(looseBrurred);
                console.log("Game Over - you couldn't save enought money to buy a new land. Try agian.")
                clearInterval(timing);
                clearInterval(dayInterval);
                tree1.style.pointerEvents = "none";
                tree2.style.pointerEvents = "none";
                tree3.style.pointerEvents = "none";
            }
            
        }
    }

}
