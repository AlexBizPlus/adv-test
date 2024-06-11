function slider() {
  const list = document.querySelectorAll(".list");
  const firstItem = document.querySelector(".item:first-child");
  const lastItem = document.querySelector(".item:last-child");

  if (!list?.length || !firstItem || !lastItem) return;

  console.log(firstItem);
  console.log(lastItem);
}

slider();

// const firstItem = items
// const lastItem = items[items.length - 1]; // items.at(-1)
