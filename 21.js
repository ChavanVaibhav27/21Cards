var card=document.getElementById("card")
var total=document.getElementById("total")
var msg=document.getElementById("msg")
var cTotal=document.getElementById("cTotal")
var pcard=[]
var sum=0
var min=false
var game=true
var sgame=false
var sum1=0
var player=prompt("Enter player name")
var amount=prompt("Enter the amout")

function getrandom() {
var random=Math.floor(Math.random()*13+1)

if (random>10) {
    return 10
}
else if(random==1){
    return 11
}
else{
    return random
}
}

function start() {
    sgame=true
    var num1=getrandom()
    var num2=getrandom()
    var num3=getrandom()
    var num4=getrandom()
        sum=num1+num2;
        sum1=num3+num4
        card.innerHTML="Cards:  "
        pcard=[num1,num2]
       render();
}

function render() {
    card.innerHTML="Cards:  "
    
    for (var index = 0; index <pcard.length; index++) {
        card.innerHTML+=`  ${pcard[index]}`
    }
    total.innerHTML =`Total:  ${sum}`
    cTotal.innerHTML=`Computer Total:  ${sum1}`

    if (sum<21) {
        msg.innerHTML="Do you want new Card"
    }
    else if (sum==21) {
        amount *=2
    msg.innerHTML=`congrats ${player} ,you won Rs.${amount}`
        win=true
    } 
    else{
        msg.innerHTML=`sorry ${player}, your Rs.${amount} is govinda`
        game=false
    }

}

function newcard() {
    if (min==false && game==true &&sgame==true) {
        var num=getrandom()
    pcard.push(num)
    sum+=num

    while (sum1<17) {
        var cnum=getrandom()
        sum1+=cnum
    }
    render()
    if (sum1<21) {
        winner()

    }
    }
    
}
function winner() {
    if(sgame==true)
    while (sum1<17 || sum1<sum) {
        var cnum=getrandom()
        sum1 +=cnum
    }
    cTotal.innerHTML=`Computer Total:   ${sum1}`
    if (sum>21||(sum1<=21)&& sum1>sum) {
        
        msg.innerHTML=`sorry ${player}, You Rs.${amount} is Lost game`
    
        
    }
    else if(sum=sum1){
        msg.innerHTML="Tie the game"

    }
    else{
        amount *=2
            msg.innerHTML=`congrats ${player} ,You won Rs.${amount}`
        
    }
    game=false
}