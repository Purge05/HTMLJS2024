//edit the below statement to select the #enter-button id from the HTML file
document.querySelector('#enter-button').addEventListener(`click`, alertName);

function alertName(e) {
    //get each *value* from the form elements (first name, last name, hours worked, hourly rate) and store them into vars

    /*USE THE FOLLOWING VARIABLE NAMES:
    fname --> first name, #first
    lname --> last name, #last
    hours --> hours worked, #hours
    rate --> hourly rate, #rate */

    var fname = document.getElementById('first').value;
    var lname = document.getElementById('last').value;
    var hours = document.getElementById('hours').value;
    var rate = document.getElementById('rate').value;

    //console.log() all four values
    console.log(fname);
    console.log(lname);
    console.log(hours);
    console.log(rate);

    //add the first and last name values together and store into a new variable called 'full' holding the user's full name
    var full = fname + ' ' + lname;

    //console.log() the full name value
    console.log(full);

    //convert both hours and rate to Number() data types
    hours = Number(hours);
    rate = Number(rate);

    //create gross, taxAmount, net variables and store corresponding data to them
    //use a tax percentage of 20% (.2)
    var gross = hours * rate;
    var taxAmount = gross * 0.2;
    var net = gross - taxAmount;

    //console.log() all three processed values, rounded to the second decimal place
    console.log(gross.toFixed(2));
    console.log(taxAmount.toFixed(2));
    console.log(net.toFixed(2));

    //create a new variable called 'finalMessage' that holds the literal string value of the following, each value on a new line (use <br>): full name, hours worked*, hourly rate*   *--> rounded to the second decimal place 
    var finalMessage = `${full}<br>HOURS: ${hours}<br>RATE: $${rate.toFixed(2)}<br>`;

    //create a new var called 'info' and store the entire #info *HTML element* to it
    var info = document.getElementById('info');

    //create a new var called 'num' and store the entire #check *HTML element* to it
    var num = document.getElementById('check');

    //edit the innerHTML of the #info element (now the 'info' js var) to hold the value of 'finalMessage'
    info.innerHTML = finalMessage;

    //edit the innerHTML of the #check element (now the 'check' js var) to hold a literal string with the following values: gross pay, tax amount, net pay. All three values should be rounded to the second decimal place.  Use <br> to break onto a new line for each value
    num.innerHTML = `GROSS PAY: $${gross.toFixed(2)}<br>TAX AMOUNT: $${taxAmount.toFixed(2)}<br>NET PAY: $${net.toFixed(2)}`;

    //add a 'click' event listener to the #submit HTML element (HINT: this is the first step in the <script> )
    //when the #submit button is clicked, the submitNow function should run
    document.getElementById('submit').addEventListener('click', submitNow);

    function submitNow(e) {
        /*NOTE FOR TESTING:
            *if written correctly, you will see an alert() with all info entered as well as processed!*/
        alert(`${full}\nHOURS: ${hours}\nRATE: $${rate.toFixed(2)}\n\nGROSS PAY: $${gross.toFixed(2)}\nTAX AMOUNT: $${taxAmount.toFixed(2)}\nNET PAY: $${net.toFixed(2)}`);
    }
}
