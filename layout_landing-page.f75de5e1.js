/* global IntersectionObserver */ 'use strict';
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) entry.target.classList.add('show');
        else entry.target.classList.remove('show');
    });
}, {});
const categoriesElements = document.querySelectorAll('.categories,.recommended');
categoriesElements.forEach((el)=>observer.observe(el));

//# sourceMappingURL=layout_landing-page.f75de5e1.js.map
