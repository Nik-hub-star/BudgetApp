!function(e){var t={};function n(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return e[i].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(i,a,function(t){return e[t]}.bind(null,a));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);var i,a,c,r,o,l,u=function(){var e=function(e,t,n){this.id=e,this.description=t,this.value=n,this.percentage=-1};e.prototype.calcPercentage=function(e){this.percentage=e>0?Math.round(this.value/e*100):-1},e.prototype.getPercentage=function(){return this.percentage};var t=function(e,t,n){this.id=e,this.description=t,this.value=n},n=function(e){var t=0;i.allItems[e].forEach((function(e){return t+=e.value})),i.totals[e]=t},i={allItems:{exp:[],inc:[]},totals:{exp:0,inc:0},budget:0,percentage:0};return{addItem:function(n,a,c){var r,o=0;return o=i.allItems[n].length>0?i.allItems[n][i.allItems[n].length-1].id+1:0,"exp"===n?r=new e(o,a,c):"inc"===n&&(r=new t(o,a,c)),i.allItems[n].push(r),r},deleteItem:function(e,t){var n;-1!==(n=i.allItems[e].map((function(e){return e.id})).indexOf(t))&&i.allItems[e].splice(n,1)},calculateBudget:function(){n("exp"),n("inc"),i.budget=i.totals.inc-i.totals.exp,i.totals.inc>0&&(i.percentage=Math.round(i.totals.exp/i.totals.inc*100))},calculatePercentages:function(){i.allItems.exp.forEach((function(e){e.calcPercentage(i.totals.inc)}))},getPercentages:function(){return i.allItems.exp.map((function(e){return e.getPercentage()}))},getBudget:function(){return{budget:i.budget,percentage:i.percentage,expense:i.totals.exp,income:i.totals.inc}},setBudgetLocalStorage:function(){localStorage.setItem("data",JSON.stringify(i))},setData:function(e){Object.assign(i,e)},testing:function(){console.log(i)}}}(),s=(i={inputType:".add__type",inputDescription:".add__description",inputValue:".add__value",inputBtn:".add__btn",incomeContainer:".income__list",expensesContainer:".expenses__list",budgetLabel:".budget__value",incomeLabel:".budget__income--value",expensesLabel:".budget__expenses--value",percentageLabel:".budget__expenses--percentage",container:".container",expensesPercLabel:".item__percentage",dateLabel:".budget__title--month"},{getInput:function(){return{type:document.querySelector(i.inputType).value,description:document.querySelector(i.inputDescription).value,value:parseFloat(document.querySelector(i.inputValue).value)}},getDomStrings:function(){return{DOMstrings:i}},addListItem:function(e,t){var n,a,c;"inc"===t?(c=i.incomeContainer,n=' <div class="item clearfix" id="inc-%ID%">\n      <div class="item__description">%Description%</div>\n      <div class="right clearfix">\n          <div class="item__value">%Value%</div>\n          <div class="item__delete">\n              <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>\n          </div>\n      </div>\n  </div>'):(c=i.expensesContainer,n='<div class="item clearfix" id="exp-%ID%">\n <div class="item__description">%Description%</div>\n <div class="right clearfix">\n     <div class="item__value">%Value%</div>\n     <div class="item__delete">\n         <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>\n     </div>\n </div>\n</div>'),a=(a=(a=n.replace("%ID%",e.id)).replace("%Description%",e.description)).replace("%Value%",e.value),document.querySelector(c).insertAdjacentHTML("beforeend",a)},clearFields:function(){var e=document.querySelectorAll(i.inputDescription+","+i.inputValue);Array.prototype.slice.call(e).forEach((function(e){e.value=""}))},displayBudget:function(e){document.querySelector(i.budgetLabel).textContent=e.budget,document.querySelector(i.incomeLabel).textContent=e.income,document.querySelector(i.expensesLabel).textContent=e.expense,e.percentage>0?document.querySelector(i.percentageLabel).textContent=e.percentage+"%":document.querySelector(i.percentageLabel).textContent="---"},deleteListItem:function(e){var t=document.getElementById(e);t.parentNode.removeChild(t)},displayPercentages:function(e){!function(e,t){for(var n=0;n<e.length;n++)t(e[n],n)}(document.querySelectorAll(i.expensesPercLabel),(function(t,n){e[n]>0?t.textContent=e[n]+"%":t.textContent="---"}))}});(a=u,c=s,r=function(){a.calculateBudget();var e=a.getBudget();console.log(e),c.displayBudget(e),a.setBudgetLocalStorage()},o=function(){var e,t;""!==(e=c.getInput()).description&&!isNaN(e.value)&&e.value>0&&(t=a.addItem(e.type,e.description,e.value),console.log(e),c.addListItem(t,e.type),c.clearFields(),r())},l=function(e){var t,n;t=e.target.parentNode.parentNode.parentNode.parentNode.id,console.log(t),t&&(n=t.split("-"),type=n[0],id=parseInt(n[1]),a.deleteItem(type,id),c.deleteListItem(t),r(),function(){a.calculatePercentages();var e=a.getPercentages();c.displayPercentages(e)}())},{init:function(){!function(){var e=c.getDomStrings();if(document.querySelector(e.DOMstrings.inputBtn).addEventListener("click",o),document.addEventListener("keypress",(function(e){13===e.keyCode&&o()})),document.querySelector(e.DOMstrings.container).addEventListener("click",l),localStorage.getItem("data")){var t=JSON.parse(localStorage.getItem("data"));a.setData(t),c.displayBudget({budget:t.budget||0,percentage:t.percentage||0,expense:t.totals.exp||0,income:t.totals.inc||0}),t.allItems.exp.forEach((function(e){return c.addListItem(e,"exp")})),t.allItems.inc.forEach((function(e){return c.addListItem(e,"inc")}))}else c.displayBudget({budget:0,percentage:0,expense:0,income:0})}()}}).init()},function(e,t,n){}]);