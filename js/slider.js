const slider = () => {
  const list = document.querySelector(".list");
  const items = document.querySelectorAll(".item");
  const firstItem = items[0];
  const lastItem = items[items.length - 1];
  const before = list.querySelector(".before");
  const after = list.querySelector(".after");
  const rightButton = list.querySelector(".slider__button--right");
  const leftButton = list.querySelector(".slider__button--left");

  const width = parseInt(getComputedStyle(firstItem).width);

  if (
    !list ||
    !firstItem ||
    !lastItem ||
    !before ||
    !after ||
    !rightButton ||
    !leftButton
  )
    return;

  const mouseOverLeft = () => {
    leftButton.classList.remove("hidden");
  };

  const mouseLeaveLeft = () => {
    !leftButton.matches(":hover") && leftButton.classList.add("hidden");
  };

  const mouseOverRight = () => {
    rightButton.classList.remove("hidden");
  };

  const mouseLeaveRight = () => {
    !rightButton.matches(":hover") && rightButton.classList.add("hidden");
  };

  const scroll = (direction) => {
    list.style["scroll-snap-type"] = "none";

    let scrollAmount = 0;
    let slideTimer = setInterval(() => {
      list.scrollLeft =
        direction === "left" ? list.scrollLeft - 20 : list.scrollLeft + 20;
      scrollAmount += 10;
      if (scrollAmount >= width) {
        window.clearInterval(slideTimer);
        list.style["scroll-snap-type"] = "x mandatory";
      }
    }, 25);
  };

  const scrollLeft = () => scroll("left");
  const scrollRight = () => scroll("right");

  before.addEventListener("mouseover", mouseOverLeft);
  before.addEventListener("mouseleave", mouseLeaveLeft);

  after.addEventListener("mouseover", mouseOverRight);
  after.addEventListener("mouseleave", mouseLeaveRight);

  leftButton.addEventListener("click", scrollLeft);
  rightButton.addEventListener("click", scrollRight);

  const firstItemObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry.target) return;
      if (!entry.isIntersecting || entry.intersectionRatio <= 0.2) {
        before.classList.remove("hidden");
      } else {
        before.classList.add("hidden");
        leftButton.classList.add("hidden");
      }
    },
    {
      // Тригер сработает при выходе как верхней, так и нижней границы
      threshold: [0.2, 0.8],
    }
  );

  const lastItemObserver = new IntersectionObserver(
    ([entry]) => {
      if (!entry.target) return;

      if (!entry.isIntersecting || entry.intersectionRatio <= 0.1) {
        after.classList.remove("hidden");
      } else {
        after.classList.add("hidden");
        rightButton.classList.add("hidden");
        // scrollRight();
      }
    },
    {
      // Тригер сработает при выходе как верхней, так и нижней границы
      threshold: [0.4],
    }
  );

  firstItemObserver.observe(firstItem);
  lastItemObserver.observe(lastItem);
};

slider();
