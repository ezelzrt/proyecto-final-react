const BASE_URL = "https://69090daf2d902d0651b28cea.mockapi.io/products";

export const createProduct = async (product) => {
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });

    if(!res.ok){
        throw new Error("Error creating product");
    }

    return await res.json();
}

export const getProducts = async (category) => {
    let url = BASE_URL;
    if(category){
        url += `?category=${category}`;
    }
    const res = await fetch(url);

    if(!res.ok){
        throw new Error("Error fetching products");
    }

    return await res.json();
}

export const getProductById = async (id) => {
    const res = await fetch(`${BASE_URL}/${id}`);

    if(!res.ok){
        throw new Error("Error fetching product");
    }

    return await res.json();
}