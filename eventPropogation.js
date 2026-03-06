// Event Propagation is how events travel through the DOM tree when an event occurs (like a click).

document
  .getElementById("grandparent")
  .addEventListener("click", function (event) {
    event.stopPropagation(); //to stop the propogation
    alert(`current target is ${event.currentTarget.tagName} `);
  });

document.getElementById("parent").addEventListener("click", function (event) {
  event.stopPropagation();
  alert(`current target is ${event.currentTarget.tagName} `);
});
document
  .getElementById("button-click")
  .addEventListener("click", function (event) {
    event.stopPropagation();
    alert(`current target is ${event.currentTarget.tagName} `);
  });

// //mkaing common function for all the elements
function commonFunction(event) {
  alert(
    `current target is ${event.currentTarget.tagName} and ${event.target.targetName}`,
  );
}
commonFunction(event);
//Events bubble up from the target element to its ancestors.
//Button → Parent → Grandparent → Document

//Event capturing is the opposite of bubbling, where events are first captured by the outermost element and then propagated down to the target element.
//Grandparent → Parent → Button

//By default, event listeners are set to bubble. To set an event listener to capture, you can pass a third argument as true in the addEventListener method.

//Q3. difference between event.target vs. this.target vs. event.currentTarget
//Q4. event capturing / trickling
//Q5. how to stop event bubbling
//Q6. event delegation
//Q7. crate a model which will capture event delegation and outside click to close the model

const button = document.querySelector(".modal-button");
const container = document.querySelector(".modal-container");

button.addEventListener("click", () => {
  toggleModal(true);
});

function toggleModal(toggle) {
  container.style.display = toggle ? "flex" : "none";
}

container.addEventListener("click", (event) => {
  console.log(event.target.className);

  if (event.target.className === "modal-container") {
    toggleModal(false);
  }
});
