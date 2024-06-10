const triggers = document.querySelectorAll(".tooltip__trigger");

const toggleMenu = (e) => {
  console.log(e.target.parentElement);

  const isTooltopVisible =
    !!e.target.parentElement.querySelector(".tooltip__text");

  if (isTooltopVisible) return;

  const template = document.querySelector("#template-tooltip");
  const tooltip = template.content.cloneNode(true);
  const wrapper = tooltip.querySelector(".tooltip__text");
  const button = tooltip.querySelector(".tooltip__button");

  const removeTooltip = () => wrapper?.remove();

  button.addEventListener("click", removeTooltip);
  e.target.after(tooltip);
};

triggers.forEach((trigger) => trigger.addEventListener("click", toggleMenu));
