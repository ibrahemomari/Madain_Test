"use strict";
const apiCall = async () => {
  let post;
  try {
    let res = await fetch(
      "https://filltext.com/?rows=10&fname={firstName}&lname={lastName}&category=[%22category1%22,%22category2%22,%22category3%22]&pretty=true"
    );
    post = await res.json();
  } catch (error) {
    console.log(error);
  }

  // git buttons
  let catBtns = document.querySelectorAll(".catBtn");

  for (let i = 0; i < catBtns.length; i++) {
    catBtns[i].addEventListener("click", (e) => {
      if (e.target.id === "catBtn1") {
        let f = post.filter((el) => {
          return el.category === "category1";
        });
        render(f);
      } else if (e.target.id === "catBtn2") {
        let f = post.filter((el) => {
          return el.category === "category2";
        });
        render(f);
      } else if (e.target.id === "catBtn3") {
        let f = post.filter((el) => {
          return el.category === "category3";
        });
        render(f);
      }
    });
  }
};

apiCall();

const render = (value) => {
  let parent = document.getElementById("list");
  reRenderContents();

  value.forEach((element, idx) => {
    let item = document.createElement("div");
    item.classList.add("card");
    parent.appendChild(item);
    item.innerHTML = `
    <div class="card-avatar">
        ${element.fname[0]}${element.lname[0]} 
    </div>
    <div class="card-title"><h4>${element.fname} ${element.lname}</h4></div>
    <div class="card-cat">${element.category}</div>
    `;
  });
};

const reRenderContents = () => {
  let parent = document.getElementById("list");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};
