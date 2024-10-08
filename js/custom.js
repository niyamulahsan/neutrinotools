// window scroll event
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  let nav = document.querySelector("header .navbar");
  if(header.offsetHeight < window.scrollY){
    header.classList.add("scroll");
    nav.classList.replace("py-md-4", "py-md-2");
  }
  else{
    header.classList.remove("scroll");
    nav.classList.replace("py-md-2", "py-md-4");
  }

  // scroll top button
  let topBtn = document.querySelector(".scroll-top");
  let banner = document.querySelector(".banner");
  if(banner.clientHeight < window.scrollY){
    topBtn.classList.add("on");
    topBtn.onclick = () => {
      window.scroll({
        top: window.outerHeight + banner.outerHeight,
        left: 0,
        behavior: 'smooth'
      });
    };
  }
  else{
    topBtn.classList.remove("on");
  }
});

//navbar page scroller
function contentScroll(pageName){
  event.preventDefault();
  let el = document.querySelector(pageName);
  window.scroll({
    top: el.offsetTop,
    left: 0,
    behavior: 'smooth'
  });
}

//login toggle
let login = document.querySelector("#logpop");
login.onclick = () => {
  let eml = document.querySelector(".login-panel #email");
  let pas = document.querySelector(".login-panel #password");
  let forget = document.querySelector(".login-panel .forget");
  let logpanel = document.querySelector(".login-panel");
  
  logpanel.classList.toggle("on");

  window.addEventListener("mouseup", (e) => {
    if(!e.target.matches("#logpop")){
      if(logpanel.classList.contains("on") && e.target != logpanel && e.target != eml && e.target != pas && e.target != forget){
        logpanel.classList.remove("on");
      }
    }
  });
}