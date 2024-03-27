const faqItems = document.querySelectorAll("main ul li");

faqItems.forEach((faqItem) => {
  faqItem.addEventListener("click", (e) => {
    const isExpanded = faqItem.ariaExpanded === "true";
    faqItem.setAttribute("aria-expanded", !isExpanded);
  });
});
