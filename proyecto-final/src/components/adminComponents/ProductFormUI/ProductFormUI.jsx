export const ProductFormUI = ({product, errors, loading, onChange, onFileChange, onSubmit}) => {
    return <section>
        <form onSubmit={onSubmit}>
            <h2>{product ? "Edit Product" : "Create Product"}</h2>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={product.name} onChange={onChange} required />
                {errors?.name && <p className="error">{errors.name}</p>}
            </div>
            <div>
                <label>Price:</label>
                <input type="number" name="price" value={product.price} onChange={onChange} required />
                {errors?.price && <p className="error">{errors.price}</p>}
            </div>
            <div>
                <label>Category:</label>
                <input type="text" name="category" value={product.category} onChange={onChange} required />
                {errors?.category && <p className="error">{errors.category}</p>}
            </div>
            <div>
                <label>Description:</label>
                <textarea name="description" value={product.description} onChange={onChange} required></textarea>
                {errors?.description && <p className="error">{errors.description}</p>}
            </div>
            <div>
                <label>Image:</label>
                <input type="file" accept="image/*" name="image" onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} required />
                {errors?.file && <p className="error">{errors.file}</p>}
            </div>
            <button className="btn" type="submit" disabled={loading}>
                {loading ? "Loading..." : "Submit"}
            </button>
        </form>
    </section>
}