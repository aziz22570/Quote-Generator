

let apiQuotes = [];
let authorDocument = document.querySelector("#author")
let quoteDocument = document.querySelector("#quote")
let buttonDocument = document.querySelector("#new-quote")
let twitterDocument = document.querySelector("#twitter")


// show new Quotes
function newQuotes(){
    // pick random quote from apiQuotes
    let quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
    quoteDocument.innerText = quote.text
    authorDocument.innerText = quote.author

    // next quotes
    buttonDocument.addEventListener("click",e=>{
        quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
        quoteDocument.innerText = quote.text
        authorDocument.innerText = quote.author
        // author = NULL
        if (!quote.author){
        authorDocument.innerText = "unknow"
        }
    })
}

// get quotes from API
async function getQuotes(){
    const apiUrl = "https://type.fit/api/quotes"
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuotes()
    } catch (error) {
        // catch error hire
        console.log(error);
    }
}

// on load
getQuotes()


// twitter Button
function tweet(){

            twitterDocument.addEventListener("click",()=>{
                const tweetUrl =`https://twitter.com/intent/tweet?text=${quoteDocument.innerText} - ${authorDocument.innerText }`
                window.open(tweetUrl,'_blank')
            })
}
twitterDocument.addEventListener("click",tweet())
