const valuesVerification = (array) => array.filter(element => (typeof element) === "number" && !(Number.isNaN(element)));
const validNumberOfValues = 2;

const calculationHandler = (array) => {
    let copiedArray = valuesVerification(array);
    if (copiedArray.length >= validNumberOfValues) {
        let firstMinValue = Math.min.apply(Math, copiedArray);
        let index = copiedArray.findIndex(value => (Number(value) === firstMinValue));
        copiedArray.splice(index, 1);
        let secondMinValue = Math.min.apply(Math, copiedArray);
        return (Number(firstMinValue)) + (Number(secondMinValue));
    }
    if(!copiedArray.length) {
        return 'elements are nor valid'
    }
}

const showResultHandler = () => {
    let data = document.querySelector("#values").value;
    data = data.split(",").map(Number);
    if (valuesVerification(data).length >= validNumberOfValues) {
        alert(calculationHandler(data));
    } else {
        alert("enter at least 2 correct values, only numbers are valid");
    }
}

document.addEventListener('DOMContentLoaded',  () => {
    document.getElementById("form").addEventListener('submit', (event) => event.preventDefault());
    document.getElementById("values").addEventListener('keydown', (event) => event.key === "Enter" && showResultHandler());
    document.getElementById("calculation-btn").addEventListener('click', () => showResultHandler());
    document.getElementById("calculation-btn").addEventListener('keydown', (event) => event.key === "Enter" && showResultHandler());
});


module.exports = {
    calculationHandler,
    showResultHandler
};