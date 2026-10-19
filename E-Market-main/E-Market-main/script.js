const url = "https://tinkr.tech/sdb/magiceshop";

// LOAD PRODUCTS
async function loadProducts() {
    const res = await fetch(url);
    const data = await res.json();

    const list = document.getElementById("productList");
    const emptyMsg = document.getElementById("emptyMessage");

    list.innerHTML = "";

    if (data.length === 0) {
        emptyMsg.style.display = "block";
        return;
    } else {
        emptyMsg.style.display = "none";
    }

    data.forEach(product => {
        const li = document.createElement("li");

        li.innerHTML = `
            <span><strong>${product.name}</strong> - ${Number(product.price).toFixed(2)}€</span>
        `;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.classList.add("delete-btn");

        deleteBtn.onclick = () => deleteProduct(product.id);

        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
}

// ADD PRODUCT
async function addProduct() {
    const nameInput = document.getElementById("name");
    const priceInput = document.getElementById("price");

    const name = nameInput.value.trim();
    const price = priceInput.value.trim();

    if (!name || !price) {
        alert("Palun täida kõik väljad!");
        return;
    }

    const product = {
        name: name,
        price: price
    };

    await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    nameInput.value = "";
    priceInput.value = "";

    loadProducts();
}

// DELETE PRODUCT
async function deleteProduct(id) {
    const confirmDelete = confirm("Kas oled kindel, et tahad kustutada?");
    if (!confirmDelete) return;

    await fetch(url + "/" + id, {
        method: "DELETE"
    });

    loadProducts();
}

// INIT
loadProducts();
