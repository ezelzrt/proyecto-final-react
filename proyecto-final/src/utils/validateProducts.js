export const validateProducts = (products, fileRequired=true) => {
    const errors = {};

    if(!products.name.trim()){
        errors.name = "The product name is required";
    }

    if(!products.price || products.price <= 0){
        errors.price = "The product price must be greater than zero";
    }

    if(!products.description.trim()){
        errors.description = "The product description is required";
    }

    if(!products.category.trim()){
        errors.category = "The product category is required";
    }

    if(fileRequired && !products.file){
        errors.file = "The product image is required";
    }

    return errors;

}