document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll("nav a");
  const sections = document.querySelectorAll(".tab");

  tabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      e.preventDefault();
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const target = tab.getAttribute("href");
      sections.forEach(sec => sec.classList.remove("active"));
      document.querySelector(target).classList.add("active");
    });
  });

  const products = [
    {id:1, name:"Tomatoes", location:"Biskra", price:"2000 DZD", photo:"https://via.placeholder.com/150"},
    {id:2, name:"Olive Oil", location:"Kabylie", price:"1500 DZD", photo:"https://via.placeholder.com/150"},
    {id:3, name:"Dates", location:"Ghardaia", price:"3000 DZD", photo:"https://via.placeholder.com/150"}
  ];

  const productGrid = document.getElementById("productGrid");
  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `<img src="${p.photo}" alt="${p.name}"/>
      <h4>${p.name}</h4>
      <p>${p.location}</p>
      <p><strong>${p.price}</strong></p>`;
    productGrid.appendChild(card);
  });

  const slots = ["10AM","12PM","2PM","4PM"];
  const calendar = document.getElementById("calendarSlots");
  slots.forEach((s,i) => {
    const div = document.createElement("div");
    div.className = "slot" + (i===1 ? " booked" : "");
    div.innerText = s;
    calendar.appendChild(div);
  });

  const trainings = [
    {title:"Solar Drying Basics", desc:"Learn how to use solar dryers effectively."},
    {title:"Value-added Products", desc:"Transform surplus into new products."}
  ];
  const trainingList = document.getElementById("trainingList");
  trainings.forEach(t => {
    const div = document.createElement("div");
    div.className = "training-card";
    div.innerHTML = `<h4>${t.title}</h4><p>${t.desc}</p>`;
    trainingList.appendChild(div);
  });

  const transactions = [
    "Purchased Tomatoes - 2000 DZD",
    "Earned 10 Solar Credits",
    "Booked Dryer - 5 Credits"
  ];
  const transactionList = document.getElementById("transactionList");
  transactions.forEach(tr => {
    const li = document.createElement("li");
    li.textContent = tr;
    transactionList.appendChild(li);
  });
});
