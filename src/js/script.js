// variáveis
let slices = 0;
let pizzas = Math.floor(slices / 8);
let rest = pizzas < 1 ? Math.ceil(slices % 8) : Math.floor(slices % 8);
const sliceCounter = document.getElementById("sliceCounter");
const visualOption = document.getElementById("visualization");
const quantity = document.getElementById("quantity");
const incrementBtn = document.getElementById("incrementBtn");
const pizzasContainer = document.getElementById("pizzasContainer");

// funções 
function setVisualOption () {
    if (visualOption.value == "fat") {
        sliceCounter.innerHTML = slices;
        quantity.innerHTML = "fatias";
    } else {
        sliceCounter.innerHTML = pizzas;
        quantity.innerHTML = `pizzas <span class="p-2 not-italic font-bold text-4xl text-center bg-gold text-black mx-3 rounded-2xl">${rest}</span>fatias`;
    }
}

function incrementSlice() {
    slices++;
    updateVariables();
}

function updateVariables() {
    pizzas = Math.floor(slices / 8);
    rest = pizzas < 1 ? Math.ceil(slices % 8) : Math.floor(slices % 8);
}

// eventListeners
document.addEventListener("DOMContentLoaded", () => {
    setVisualOption();
})
visualOption.addEventListener("change", () => {
    setVisualOption();
})
incrementBtn.addEventListener("click", (e) => {
    incrementSlice();
    setVisualOption();
    confetti({
        particleCount: 40,
        spread: 60,
        shapes: ['circle', 'star', 'square'],
        text: '🍕',
        scalar: 1.0
    });
});

// IDEIA DO SILAS: Sistema de demanda de pizzas em rodizio
