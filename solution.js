let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let pid = document.getElementById("productID").value;
  let sp = document.getElementById("sp").value;
  let pname = document.getElementById("productName").value;
  let data = {
    productid: pid,
    sellingPrice: sp,
    productName: pname,
  };

  console.log(pid);

  let total = document.getElementById("total");
  total.innerHTML = parseInt(total.innerHTML) + parseInt(sp);
  localStorage.setItem(pid, JSON.stringify(data));

  const node = document.createElement("li");
  node.setAttribute("id", pid);
  const textnode = document.createTextNode(`${pname} - ${sp}`);
  node.appendChild(textnode);

  const but = document.createElement("BUTTON");
  but.setAttribute("onclick", `deleteItem(${pid})`);
  const textnodebut = document.createTextNode("delete");
  but.appendChild(textnodebut);

  node.appendChild(but);
  document.getElementById("myList").appendChild(node);
});

function deleteItem(pid) {
  const element = document.getElementById(pid.id);
  element.remove();
  localStorage.removeItem(pid.id);
  console.log(pid.id);
}
