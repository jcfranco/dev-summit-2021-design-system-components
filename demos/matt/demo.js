const coffeeDrinks = [
  "Americano",
  "Caffè Latte",
  "Caffè Mocha",
  "Cafè Au Lait",
  "Cappuccino",
  "Cold Brew Coffee",
  "Double Espresso (Doppio)",
  "Espresso",
  "Espresso Con Panna",
  "Espresso Macchiato",
  "Flat White",
  "Frappé",
  "Freakshake",
  "Iced Latte",
  "Iced Mocha",
  "Irish Coffee",
  "Latte Macchiato",
  "Lungo (Or Espresso Lungo)",
  " Ristretto (Or Espresso Ristretto)",
  "Affogato",
];

window.onload = () => {
  const themeSwitch = document.getElementById("theme-switch");
  themeSwitch.addEventListener("calciteSwitchChange", () => {
    const currentTheme = document.body.getAttribute("theme");
    document.body.setAttribute("theme", currentTheme === "dark" ? "light" : "dark")
  });

  const combobox = document.getElementById("combobox");
  coffeeDrinks.forEach((drink, index) => {
    const comboboxItem = document.createElement("calcite-combobox-item");
    comboboxItem.textLabel = drink;
    comboboxItem.value = index;
    combobox.appendChild(comboboxItem);
  });

  const otherAspectCheckbox = document.getElementById("other-aspect-checkbox");
  const otherAspectLabel = document.getElementById("other-aspect-label");
  otherAspectCheckbox.addEventListener("calciteCheckboxChange", () => {
    otherAspectLabel.toggleAttribute("disabled");
  });

  const form = document.getElementById("form");
  const submit = document.getElementById("submit");
  const progress = document.getElementById("progress");
  const alert = document.getElementById("alert");

  form.onsubmit = () => {
    submit.loading = true;
    progress.removeAttribute("hidden");

    setTimeout(() => {
      submit.loading = false;
      progress.setAttribute("hidden", "");
      form.reset();
      alert.active = true;

    }, 2000);
  };

};
