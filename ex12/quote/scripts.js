async function getQuote(){
    const qUrl = "https://api.quotable.io/random";
    const options = {
        method: "GET",
    }
    document.getElementById("new-quote").innerText = "Wait";
    document.getElementById("new-quote").setAttribute("disabled","");
    
    req = await fetch(qUrl,options);
    const qData = await req.json();
    
    document.getElementById("new-quote").innerText = "New Quote";
    document.getElementById("new-quote").removeAttribute("disabled","");

    printQuote(qData)
}

const printQuote = (quote) => {
        document.getElementById("show-quote").innerText = quote.content;
        document.getElementById("author").innerText = `__ ${quote.author}`;
    };

getQuote();