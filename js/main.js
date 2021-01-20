//================================ Проект "Список желаний" ========================

// let dream = {
//    id: "self invoke",
//    title: "",
//    quantity: 10,
//    image: "https://...",
//    price: 123, //?
//    status: false,
// };

let dreams = [];

// let myListDreams = JSON.parse(localStorage.getItem("myListDreams")) || [];

function renderDreamList(list) {
   let main = document.getElementById("main");
   main.innerHTML = "";
   for (let i = 0; i < list.length; i++) {
      const dream = list[i];
      let dreamItem = document.createElement("div");
      dreamItem.classList.add("dream-item");

      let title = document.createElement("div");
      title.classList.add("title");
      title.innerHTML = dream.title;
      dreamItem.appendChild(title);

      let quantity = document.createElement("div");
      quantity.classList.add("quantity");
      quantity.innerHTML = dream.quantity;
      dreamItem.appendChild(quantity);

      let image = document.createElement("img");
      image.classList.add("image");
      image.src = dream.image;
      dreamItem.appendChild(image);

      let deleteBtn = document.createElement("div");
      deleteBtn.classList.add("delete");
      deleteBtn.innerHTML = "Delete";
      dreamItem.appendChild(deleteBtn);

      deleteBtn.onclick = function () {
         let thisTimeMyListDreams = JSON.parse(localStorage.getItem("myListDreams"));
         let filterMyListDreams = thisTimeMyListDreams.filter(function (d) {
            return d.id !== dream.id;
         });

         localStorage.setItem("myListDreams", JSON.stringify(filterMyListDreams));
         renderDreamList(filterMyListDreams);
      };

      main.appendChild(dreamItem);
   }
}

window.onload = function () {
   renderDreamList(JSON.parse(localStorage.getItem("myListDreams")) || []);
};

let title = document.getElementById("title");
let quantity = document.getElementById("quantity");
let image = document.getElementById("image");
// let status = document.getElementById("status");
let save = document.getElementById("save");

document.addEventListener("keydown", function (e) {
   let key = e.keyCode || e.which;
   if (key === 13) {
      if (title.value === "") {
         alert("Поделитесь о чем Вы мечтаете!");
      } else if (quantity.value === "") {
         alert("На сколько Вы оцениваете Вашу мечту?");
      } else if (image.value === "") {
         alert("Как выглядит Ваша мечта?");
      } else {
         let myListDreams = JSON.parse(localStorage.getItem("myListDreams")) || [];
         myListDreams.push({
            id: new Date().getTime(),
            title: title.value,
            quantity: +quantity.value + "$",
            image: image.value,
         });

         myListDreams.innerHTML = "";
         title.value = "";
         quantity.value = "";
         image.value = "";

         let readyToSaveList = JSON.stringify(myListDreams);
         localStorage.setItem("myListDreams", readyToSaveList);

         renderDreamList(myListDreams);
      }
   }
});

save.addEventListener("click", function () {
   if (title.value === "") {
      alert("Поделитесь о чем Вы мечтаете!");
   } else if (quantity.value === "") {
      alert("На сколько Вы оцениваете Вашу мечту?");
   } else if (image.value === "") {
      alert("Как выглядит Ваша мечта?");
   } else {
      let myListDreams = JSON.parse(localStorage.getItem("myListDreams")) || [];
      myListDreams.push({
         id: new Date().getTime(),
         title: title.value,
         quantity: +quantity.value + "$",
         image: image.value,
      });

      myListDreams.innerHTML = "";
      title.value = "";
      quantity.value = "";
      image.value = "";
      // let titleValue = title.value;
      // let quantityValue = quantity.value;
      // let imageValue = image.value;
      // let statusValue = status.checked;

      // let date = new Date();

      //============ Способ 1 ================
      // let dream = {
      //    id: date.getTime(),
      //    title: title.value,
      //    quantity: +quantity.value,
      //    image: image.value,
      //    status: status.checked,
      // };
      // dreams.push(dream);

      //============= Способ 2 ================
      // dreams.push({
      //    id: date.getTime(),
      //    title: title.value,
      //    quantity: +quantity.value,
      //    image: image.value,
      //    // status: status.checked,
      // });
      // console.log(dreams);

      // myListDreams.push(dreams);

      let readyToSaveList = JSON.stringify(myListDreams);
      localStorage.setItem("myListDreams", readyToSaveList);

      renderDreamList(myListDreams);
   }
});
