// console.log("adding sorting .js in sorting visualizer")
container = document.getElementById("bars-container")
range  = document.getElementById('range');

// range.addEventListener('click', ()=>{
//     container.innerHTML = null;
//     generateBars(range.value)
// })

generateBars(range.value*3)
const dynamicBars = (n)=>{
    container.innerHTML = null;
    generateBars(n*3);
}

function generateBars(n=6*3) {
    container.innerHTML = null;
    for (let i = 0; i < n; i++) {
        // to generate random values...
        const value = Math.floor(Math.random() * 100) + 1;

        // to create element
        const bar = document.createElement("div");
        
        // adding id
        bar.id = 'allbar';
        
        // adding class
        bar.classList.add("bar");

        // managing height of bars
        bar.style.height = `${value * 4}px`;

        // setting bars location
        bar.style.transform = `translateX(${i * 30}px)`;

        // creating label element to show the element of array
        const barLabel = document.createElement("label");

        // adding class to label
        barLabel.classList.add("bar_class");

        // value assigning of label
        barLabel.innerHTML = value;

        // appending label to each bar
        bar.appendChild(barLabel);

        // populating bars to DOM
        container.appendChild(bar);
    }
}
// activation of key
function disable(){
    document.getElementById('new_array').disabled = true;
    document.getElementById('speed-range').disabled = true;
    document.getElementById('range').disabled = true;
    document.getElementById('sortBubble').disabled = true;
    document.getElementById('sortInertion').disabled = true;
    document.getElementById('sortSelection').disabled = true;
    document.getElementById('sortQuick').disabled = true;
}

// disable()

function generate() {
    // window.location.reload();
    generateBars(range.value*3)
    range.value = 6
}