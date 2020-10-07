import React from "react";
import styled from "@emotion/styled";


const Resultado = ({ resumen }) => {
  return (
    <h2>
      <center>
       
              El total es: ${resumen.cotizacion}
         
      </center>
    </h2>
  );
};

export default Resultado;
