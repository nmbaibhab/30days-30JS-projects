let filterinput = document.getElementById('filterinput');

filterinput.addEventListener("keyup", fun1);

function fun1() {
    let filtervalue =document.getElementById('filterinput').value.toUpperCase();

    let ul = document.getElementById('names');
    let li = document.querySelectorAll('li.collection-item');

    for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];
        
        if (a.innerHTML.toUpperCase().indexOf(filtervalue) > -1) {
            li[i].style.display = '';
        } else {
            li[i].style.display = 'none';

        }
    }

}