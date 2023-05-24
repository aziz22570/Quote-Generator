

let apiQuotes = [];
let quoteContainer = document.querySelector("#quote-container")
let authorDocument = document.querySelector("#author")
let quoteDocument = document.querySelector("#quote")
let buttonDocument = document.querySelector("#new-quote")
let twitterDocument = document.querySelector("#twitter")
let load = document.querySelector("#lds-spinner")






// load
function loadOn(){
    quoteContainer.classList.add("hidden")
    load.classList.remove("hidden")
    loadOf()
    
}
function loadOf(){
    setTimeout(()=>{
        quoteContainer.classList.remove("hidden")
        load.classList.add("hidden")
    }
    ,'300')}


// show new Quotes
function newQuotes(){
    // pick random quote from apiQuotes
    let quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
    quoteDocument.innerText = quote.text
    authorDocument.innerText = quote.author

    // next quotes
    buttonDocument.addEventListener("click",e=>{
        loadOn()

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
