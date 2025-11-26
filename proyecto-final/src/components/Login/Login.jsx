import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

export const Login = () => {
  const [userForm, setUserForm] = useState({ username: "", password: "" });
  const { user, login } = useAuthContext();

  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/admin/alta-productos" />;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserForm({ ...userForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(userForm.username, userForm.password);
    if (success) {
      navigate("/admin/alta-productos");
    } else {
      alert("Credenciales inválidas");
      setUserForm({ username: "", password: "" });
    }
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit} className="login-card">
        <h2>Iniciar Sesión</h2>
        <div className="login-field">
          <label>Usuario</label>
          <input
            type="text"
            name="username"
            value={userForm.username}
            onChange={handleChange}
          />
        </div>
        <div className="login-field">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            value={userForm.password}
            onChange={handleChange}
          />
        </div>
        <div className="login-actions">
          <button className="btn" type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};
