class Cardnews extends HTMLElement{
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build() {
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card_left");

        const autor = document.createElement("span");
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

        const linkTitle = document.createElement("a");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url");

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card-right");

        const newsImage =  document.createElement("img");
        cardRight.appendChild(newsImage);
        newsImage.src = "assets/Darth-Vader.jpg.crdownload";
        newsImage.alt = "foto da noticia";

        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);

        return componentRoot;
    }

    styles() {

        const style = document.createElement("style");
        style.textContent = ` *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }
        
        img {
            width: 200px;
            height: auto;
        }
        
        .card {
            width: 100%;
            /* border: 1px solid gray; */
            box-shadow: 10px 10px 35px 1px rgba(0,0,0,0.66);
        -webkit-box-shadow: 10px 10px 35px 1px rgba(0,0,0,0.66);
        -moz-box-shadow: 10px 10px 35px 1px rgba(0,0,0,0.66);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card_left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card_left > span {
            font-weight: 400;
        }
        
        .card_left > h1 {
            margin-top:15px;
            font-size: 25px;
        }
        
        .card_left > p {
            color: gray;
        }
        `

        return style;
    } 
}

customElements.define("card-news", Cardnews);