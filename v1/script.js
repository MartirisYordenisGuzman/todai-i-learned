'use strict'

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];



const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3%",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

factsList.innerHTML = "";

// Load data from Supabase
loadFacts();
async function loadFacts() {
    const res = await fetch("https://qrjmjbhexpwuverubzry.supabase.co/rest/v1/facts", {
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyam1qYmhleHB3dXZlcnVienJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3MjU4NzEsImV4cCI6MTk5ODMwMTg3MX0.-fN19za5Ex0lN6a-OMKtQg3ne7WKZqT310bJSEsE4ag",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFyam1qYmhleHB3dXZlcnVienJ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI3MjU4NzEsImV4cCI6MTk5ODMwMTg3MX0.-fN19za5Ex0lN6a-OMKtQg3ne7WKZqT310bJSEsE4ag",

    },
});

const data = await res.json();
//const filteredData = data.filter((fact) => fact.category === "society");
createFactsList(data);
}


//factsList.insertAdjacentElement("afterbegin", "<li>")
function createFactsList (data) {
    const htmlArr = data.map((fact)=> {
    return (`<li class="fact"> <p>${fact.text} <a class="source" href="${fact.source}" target="_blank">(Source)</a></p><span class="tag" style="background-color: ${CATEGORIES.find((cat) => cat.name === fact.category).color}">${fact.category}</span><div class="vote-buttons"><button>👍 ${fact.votesInteresting}</button><button>🤯 ${fact.votesMindblowing}</button><button>⛔️ ${fact.votesFalse}</button></div></li>`)});
const html = htmlArr.join("");
factsList.insertAdjacentHTML("afterbegin", html);

}


btn.addEventListener('click', function(){
    if(form.classList.contains("hidden")) {
        btn.textContent = "Close";
        form.classList.remove("hidden");
    } else {
        form.classList.add("hidden");
        btn.textContent = "Share a fact";
    }
});

async function loadSomethingFromDatabase () {
    const res = await fetch ("url", {
      headers: {
        apikey: "",
        authorization: "",
      }
    });
    const data = await res.json()
}