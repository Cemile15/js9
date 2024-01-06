document.getElementById('calculate').addEventListener('click', function() 
{
    let myBill = parseFloat(document.getElementById('bill-amount').value);
    let myNumber = parseInt(document.getElementById('number-of-people').value);
    let tipPercentage = document.querySelector('input[name="tip"]:checked').value;
    let tip = parseFloat(tipPercentage) / 100 * myBill;
    let totalTip = tip.toFixed(2);
    let totalPerPerson = (myBill + tip) / myNumber;
    document.getElementById('tip-amount').textContent = totalTip;
    document.getElementById('total-per-person').textContent = totalPerPerson.toFixed(2);

    
});
