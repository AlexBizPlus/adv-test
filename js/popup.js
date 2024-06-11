const toggleMenu = (e) => {
  const isTooltipVisible =
    !!e.target.parentElement.querySelector(".tooltip__text");

  if (isTooltipVisible) return;

  const template = document.querySelector("#template-tooltip");
  const tooltip = template.content.cloneNode(true);
  const wrapper = tooltip.querySelector(".tooltip__text");
  const button = tooltip.querySelector(".tooltip__button");

  const removeTooltip = () => wrapper?.remove();

  button.addEventListener("click", removeTooltip);
  e.target.after(tooltip);
};

const popup = () => {
  const triggers = document.querySelectorAll(".tooltip__trigger");
  if (!triggers.length) return;

  triggers.forEach((trigger) => trigger.addEventListener("click", toggleMenu));
};

popup();
