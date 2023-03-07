const container_messages = document.querySelector(".container-cta-2-content");


const messages = [
    {
        message: {
            title: "Uma nova versão de si mesmo...",
        }
    },
    {
        message: {
            title: "Somos mais de oitenta mil pessoas",
        },

    },
    {
        message: {
            title: "Sua melhor versão está no RD.",
        }
    }
];

const title = document.querySelector(".title");
title.textContent = messages[0].message.title;
const numberOfLoops = messages.length;
let counter = 1;

setInterval(() => {
    if (counter === numberOfLoops) counter = 0;
    title.textContent = messages[counter].message.title;
    counter++;
}, 3500);
