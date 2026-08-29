const bulb = document.querySelector('.bulb');
const btn = document.querySelector("#a1");

const form = document.querySelector('input')
const btn2 = document.querySelector('#a2')

/* let flag= true;

btn.addEventListener("click",function(){
    if(flag)
    {
        bulb.style.backgroundColor="yellow";
        btn.innerText="OFF";
        flag=false;
    } else {
        bulb.style.backgroundColor="transparent";
        btn.innerText="ON";
        flag=true;
    }
}); */

btn.addEventListener("click", function(){
    if(bulb.classList.toggle("lightup"))
    {
        btn.innerText="Off"
    }
    else{
        btn.innerText="On"
    }
});

btn2.addEventListener('click', () => {
    console.log(form.value)
});