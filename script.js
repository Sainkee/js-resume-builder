
function addnewaqfield() {
    let newaq = document.createElement('textarea');
    newaq.classList.add('form-control', 'mt-5');
    newaq.setAttribute('rows', 5)
    newaq.setAttribute('placeholder', 'Enter Here');

    let weob = document.getElementById('we');
    let addaqob = document.getElementById('addaq');
    weob.insertBefore(newaq, addaqob);

}



function addnewfield() {
    let newnode = document.createElement('textarea');
    newnode.classList.add('form-control', 'mt-3');
    newnode.classList.add('we-field');
    newnode.setAttribute('rows', 5);
    newnode.setAttribute('placeholder', 'Enter Here')

    let weob = document.getElementById('we');
    let addbtnob = document.getElementById('addbtn');

    weob.insertBefore(newnode, addbtnob);
}


function generatecv() {

    let namef = document.getElementById('namefield').value;
    let namest = document.getElementById('names');
    namest.innerHTML = namef;

}


