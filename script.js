//your JS code here. If required.
function getNumbers() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

function filterEvenNumbers(numbers) {
    return new Promise(resolve => {
        setTimeout(() => {
            const evens = numbers.filter(num => num % 2 === 0);
            document.getElementById("output").innerText = `Filtered Evens: ${evens}`;
            resolve(evens);
        }, 1000);
    });
}

function multiplyByTwo(numbers) {
    return new Promise(resolve => {
        setTimeout(() => {
            const doubled = numbers.map(num => num * 2);
            document.getElementById("output").innerText = `Doubled Evens: ${doubled}`;
            resolve(doubled);
        }, 2000);
    });
}

getNumbers()
    .then(filterEvenNumbers)
    .then(multiplyByTwo)
    .catch(error => console.error("Error:", error));
