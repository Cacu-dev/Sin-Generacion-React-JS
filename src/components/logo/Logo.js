import NavBar from "../navBar/NavBar";
import "./cssLogo/logo.css";

const Logo = () => {
  return (
    <div>
      {/* *** Falta colocar zocalo negro con css y reducir tamaño de imagen *** */}
      <div className="zocalo-superior">
        <div>
          ✰ LIQUIDACIóN EN PRODUCTOS SELECCIONADOS - ENVÍOS A TODOS EL PAÍS ✰
        </div>
      </div>
      <div className="contenedor-logo">
        <img
          src="https://res.cloudinary.com/ddlokqonz/image/upload/v1622737870/sin-generacion/Logo/IMG_012000bbbbbbb_yk4ma3.jpg"
          alt=""
        />
        <NavBar />
      </div>
    </div>
  );
};
export default Logo;
