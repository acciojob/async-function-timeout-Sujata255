document.getElementById('btn').addEventListener('click', async function () {
    const textInput = document.getElementById('text').value;
    const delayInput = document.getElementById('delay').value;
    const outputDiv = document.getElementById('output');

    const delay = parseInt(delayInput, 10);

    // Async function to handle the delay
    function wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Await for the specified delay and then display the text
    await wait(delay);
    outputDiv.innerHTML = textInput;
});

