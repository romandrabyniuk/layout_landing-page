"use strict";var observer=new IntersectionObserver(function(e){e.forEach(function(e){e.isIntersecting?e.target.classList.add("show"):e.target.classList.remove("show")})},{}),categoriesElements=document.querySelectorAll(".categories,.recommended");categoriesElements.forEach(function(e){return observer.observe(e)});
//# sourceMappingURL=layout_landing-page.a8a40800.js.map
