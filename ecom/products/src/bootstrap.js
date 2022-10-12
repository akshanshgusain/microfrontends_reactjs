import faker from "faker";

const mount = (ele) => {
  let products = "";

  for (let i = 0; i < 10; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }

  ele.innerHTML = products;
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// Which DEFNITELY has an element with an id of 'dev-products
// We want to immediately render our app into that element
if (process.env.NODE_ENV === "development") {
  const ele = document.querySelector("#dev-products");

  // Assuming our container does'nt have an element with id 'dev-products' ...
  if (ele) {
    mount(ele);
  }
}

// Context/Situation #2
// We are running this file in develpment or production
// through the CONTAINER app
// NO GUARANTEE that an element with an id of 'dev-products' exists
// WE DO NOT WANT try to immediately render the app
export { mount };
