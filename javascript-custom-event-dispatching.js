let event = new Event("ajaxrun");

const e = document.createElement('div');
e.setAttribute("class","sudodom");
const f = document.createElement('div');
f.setAttribute("class","sudodomchild");
e.appendChild(f);

f.addEventListener("ajaxrun",function(e){
  console.log("this is ajax run event");
});

f.dispatchEvent(event);

