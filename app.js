var human = 0
var computer = 0
var c = 0
var h = 0

alert ("The game is called 20. You and the computer will be drawing numbers. If the computer pulls and they go over 16 or exactly 16, the computer stops. If the user or computer goes over 20 then the other automatically wins. There will be a counter at the end showing the score if you choose not to play again")
alert ("Computer's Turn. The computer will stop pulling cards at or over 16")
        
        do {
            var num1 = Math.floor(Math.random() * 10 ) + 1
            var c = c + num1
            alert(`A ${num1} was pulled. The computer total is ${c}`)
        } while (c < 16)

        alert("The computer is now done pulling cards")
        alert("Your turn")

        do {
            var num2 = Math.floor(Math.random() * 10 ) + 1
            var h = h + num2
            var again = prompt(`A ${num2} was pulled. Your total is ${h}. Do you want to draw another. Type 'y' if you do.`)
        } while ((h < 20) && (again == "y"))

        if (h < 20) {
            alert("You lost the game")
            computer++
        }

        if (c < 20) {
            alert("You lost the game")
            computer++
        }
       
    
        
    
    

    
    




    
    


