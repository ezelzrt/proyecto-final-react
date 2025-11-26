

export const ProductFormUI = ({product, categories, errors, loading, onChange, onFileChange, onSubmit}) => {
    return (
        <section className="product-form-section">
            <form className="product-form" onSubmit={onSubmit}>
                <h2>Upload Product</h2>
                <div className="form-field">
                    <label>Name:</label>
                    <input className="input" type="text" name="name" value={product.name} onChange={onChange} required />
                    {errors?.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="form-field">
                    <label>Price:</label>
                    <input className="input" type="number" name="price" value={product.price} onChange={onChange} required />
                    {errors?.price && <p className="error">{errors.price}</p>}
                </div>
                <div className="form-field">
                    <label>Category:</label>
                    <select className="select" name="category" value={product.category} onChange={onChange} required>
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    {errors?.category && <p className="error">{errors.category}</p>}
                </div>
                <div className="form-field">
                    <label>Description:</label>
                    <textarea className="textarea" name="description" value={product.description} onChange={onChange} required></textarea>
                    {errors?.description && <p className="error">{errors.description}</p>}
                </div>
                <div className="form-field">
                    <label>Image:</label>
                    <input className="input file-input" type="file" accept="image/*" name="image" onChange={(e) => onFileChange(e.target.files?.[0] ?? null)} required />
                    {errors?.file && <p className="error">{errors.file}</p>}
                </div>
                <div className="form-actions">
                    <button className="btn" type="submit" disabled={loading}>
                        {loading ? "Loading..." : "Submit"}
                    </button>
                </div>
            </form>
        </section>
    );
}