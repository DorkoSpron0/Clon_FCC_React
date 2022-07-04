import React from "react";
import '../stylesheets/Testimonio.css';

function Testimonio(props) {
  return (
    <div className="Testimonio">
      <img src={require(`../assets/image${props.image}.png`)} alt="" />
      <div className="container-textt">
        <p className="nombre">{props.nombre} in {props.country}</p>
        <p className="cargo">{props.cargo} at {props.empresa}</p>
        <p className="testimonio">"{props.test}"</p>
      </div>
    </div>
  );
}

export default Testimonio;