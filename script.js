function loveCalculator(){
    const Yourname=document.getElementById('Yourname').value.trim();
    const Partnername= document.getElementById('Partnername').value.trim();
     
    if (Yourname === ''  || Partnername === ''){
        alert('pls enter both names');
        return;
    }

    const lovePercentage = generateRandomPercentage();
    const result = document.getElementById('result');
    result.innerHTML = `
    <h2>Result for ${Yourname} and ${Partnername}:</h2;>
    <p>Your love percentage is..${lovePercentage}%</p>
    `;
}

function generateRandomPercentage()
{
    return Math.floor(Math.random() *103);
}
 
