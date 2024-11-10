const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;
const feetResult = document.getElementById('feetResult');
const gallonResult = document.getElementById('gallonResult');
const poundResult = document.getElementById('poundResult');
const unitDescription = document.getElementById('unitDescription');

function updateUnitDescription() {
    const unitType = document.getElementById('unitSelect').value;

    if (unitType === 'meter') {
        unitDescription.textContent = "Convert to Feet (ft)";
    } else if (unitType === 'liter') {
        unitDescription.textContent = "Convert to Gallons (gal)";
    } else if (unitType === 'kilogram') {
        unitDescription.textContent = "Convert to Pounds (lbs)";
    }
}

document.getElementById('convertButton').addEventListener('click', function() {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const unitType = document.getElementById('unitSelect').value;

    if (isNaN(inputValue) || inputValue < 0) {
        alert("Please enter a valid number.");
        return;
    }

    feetResult.style.display = 'none';
    gallonResult.style.display = 'none';
    poundResult.style.display = 'none';

    let unitLabelText = "Unit: ";
    let feet, gallon, pound;

    if (unitType === 'meter') {
        feet = (inputValue * meterToFeet).toFixed(3);
        feetResult.textContent = `Feet: ${feet} ft`;
        feetResult.style.display = 'block';
        unitLabelText += 'Meter (m)';
    } else if (unitType === 'liter') {
        gallon = (inputValue * literToGallon).toFixed(3);
        gallonResult.textContent = `Gallons: ${gallon} gal`;
        gallonResult.style.display = 'block';
        unitLabelText += 'Liter (L)';
    } else if (unitType === 'kilogram') {
        pound = (inputValue * kilogramToPound).toFixed(3);
        poundResult.textContent = `Pounds: ${pound} lbs`;
        poundResult.style.display = 'block';
        unitLabelText += 'Kilogram (kg)';
    }

    document.getElementById('unitLabel').textContent = unitLabelText;
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('inputValue').value = '';
    document.getElementById('unitSelect').value = 'meter';
    feetResult.style.display = 'none';
    gallonResult.style.display = 'none';
    poundResult.style.display = 'none';

    document.getElementById('unitLabel').textContent = "Unit: ";
    unitDescription.textContent = "Convert to Feet (ft)";
});

updateUnitDescription();
document.getElementById('unitSelect').addEventListener('change', updateUnitDescription);
