const container=document.querySelector(".start"),elemList=container.querySelectorAll("[data-speed]");function parallax(e){elemList.forEach(t=>{t.style.transform=`translate(${e.clientX*t.dataset.speed/3e3}px, ${e.clientY*t.dataset.speed/3e3}px)`})}container.addEventListener("mousemove",parallax);const burger=document.querySelector(".burger__icon");burger.addEventListener("click",()=>{burger.classList.contains("burger__icon_active")?(document.querySelector(".header__wrapper").classList.toggle("header__open-burger_close"),burger.classList.toggle("burger__icon_active"),setTimeout(()=>{document.querySelector(".header__wrapper").classList.toggle("header__open-burger_close"),document.querySelector(".login__modal").classList.toggle("login__modal_active"),document.querySelector(".header__nav").classList.toggle("header__nav_active"),document.querySelector(".header-nav__items").classList.toggle("header-nav__items_active"),document.querySelector(".header__wrapper").classList.toggle("header__open-burger"),document.querySelector(".header__wrapper").classList.toggle("wrapper")},300)):(burger.classList.toggle("burger__icon_active"),document.querySelector(".login__modal").classList.toggle("login__modal_active"),document.querySelector(".header__nav").classList.toggle("header__nav_active"),document.querySelector(".header-nav__items").classList.toggle("header-nav__items_active"),document.querySelector(".header__wrapper").classList.toggle("header__open-burger"),document.querySelector(".header__wrapper").classList.toggle("wrapper"))});const btnModal=document.querySelector(".login__modal");function showModal(){btnModal.classList.toggle("hidde"),document.querySelector(".login").classList.toggle("login_active"),document.querySelector(".login__window").classList.toggle("hidde")}btnModal.addEventListener("click",(function(e){showModal(),e.stopPropagation()})),document.querySelector(".login__btn-close").addEventListener("click",(function(e){e.stopPropagation(),showModal()})),document.querySelector(".login").addEventListener("click",(function(e){e.stopPropagation(),e.target.classList.contains("login_active")&&showModal()}));const btnNavigation=document.querySelectorAll(".site-nav__item");let prevElem=document.getElementById("0");const animationDuration=300;function removActive(){btnNavigation.forEach(e=>{e.classList.remove("site-nav__item_active"),e.querySelector(".site-nav__link").style.pointerEvents="auto"})}function changeSections(e){const t=document.getElementById(e.href.match(/(?<=#)\S+/)[0]);t.id>prevElem.id?(t.style.position="fixed",t.classList.remove("hidde"),t.style.top="100vh",animate({duration:300,timing:square,draw(e){prevElem.style.transform="translateY("+-100*e+"vh)"}}),animate({duration:300,timing:square,draw(e){t.style.transform="translateY("+-100*e+"vh)"}}),setTimeout(()=>{prevElem.classList.add("hidde"),t.style.transform="translateY(0px)",t.style.top="0px",prevElem=t},340)):(t.style.position="fixed",t.classList.remove("hidde"),t.style.top="-100vh",animate({duration:300,timing:square,draw(e){prevElem.style.transform="translateY("+100*e+"vh)"}}),animate({duration:300,timing:square,draw(e){t.style.transform="translateY("+100*e+"vh)"}}),setTimeout(()=>{prevElem.classList.add("hidde"),t.style.transform="translateY(0)",t.style.top="0px",prevElem=t},340)),checkEvent(t,prevElem)}function checkEvent(e,t){"0"!==e.id&&"infinity"!==e.id&&(t.removeEventListener("mousemove",parallaxSection),e.addEventListener("mousemove",parallaxSection))}function parallaxSection(e){e.target.closest("SECTION").querySelector(".item__number-bcg").style.transform=`translate(${e.clientX/150}px, ${-e.clientY/100}px)`,e.target.closest("SECTION").querySelector(".item__illustration").style.boxShadow=`${(e.clientX-90)/130}px ${-e.clientY/100}px 25px 4px #ffffff85`}function animate({timing:e,draw:t,duration:a}){const r=performance.now();requestAnimationFrame((function o(n){let s=(n-r)/a;s>1&&(s=1);const i=e(s);t(i),s<1&&requestAnimationFrame(o)}))}function square(e){return Math.pow(e,2)}document.querySelector(".site-nav__items").addEventListener("click",(function(e){"A"===e.target.tagName&&(removActive(),e.target.style.pointerEvents="none",e.target.closest("LI").classList.toggle("site-nav__item_active"),changeSections(e.target))}));