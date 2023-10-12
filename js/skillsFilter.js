function filterItems(category) {
  // Hide all items
  let items = document.querySelectorAll(".grid-item");
  items.forEach((item) => (item.style.display = "none"));

  // Show items of the selected category
  let selectedItems = document.querySelectorAll(".grid-item." + category);
  selectedItems.forEach((item) => (item.style.display = "block"));

  // Update active tab
  let tabs = document.querySelectorAll(".tab-button");
  tabs.forEach((tab) => tab.classList.remove("active"));

  // Get the clicked tab using the event object and add the "active" class
  event.target.classList.add("active");
}
