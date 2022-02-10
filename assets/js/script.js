// TODO: Declare any global variables we need


document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools
    console.log('Hi')

    // TODO: Add event listener and handler for flip and clear buttons
    
    let numberHeads = 0
    let numberTails = 0
    let totalFlips = 0

    const pennyButton = document.querySelector('#flip')
    pennyButton.addEventListener('click', function()
    {
        let headsFlip = Math.random() < 0.5
        if (headsFlip)
        {
            document.getElementById('penny-image').src = 'assets/images/penny-heads.jpg'
            document.getElementById('message').textContent = 'You Flipped Heads!'
            numberHeads++
            totalFlips++
            document.getElementById('heads').textContent = numberHeads
        }
        else 
        {
            document.getElementById('penny-image').src = 'assets/images/penny-tails.jpg'
            document.getElementById('message').textContent = 'You Flipped Tails!'
            numberTails++
            totalFlips++
            document.getElementById('tails').textContent = numberTails
        }
        let percentHeads = Math.round(numberHeads/totalFlips*100)
        let percentTails = Math.round(numberTails/totalFlips*100)

    document.getElementById('heads-percent').textContent = `${percentHeads}%`
    document.getElementById('tails-percent').textContent = `${percentTails}%`
    })
    document.getElementById('clear').addEventListener('click', function()
    {
        numberHeads = 0
        numberTails = 0
        totalFlips = 0
        document.getElementById('heads').textContent = numberHeads
        document.getElementById('tails').textContent = numberTails
        document.getElementById('heads-percent').textContent = `0%`
        document.getElementById('tails-percent').textContent = `0%`
        document.getElementById('message').textContent = 'Lets Get Rolling!'
    })
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})