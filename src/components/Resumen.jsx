import React from "react";
import styled from '@emotion/styled';
import {primerMayuscula} from '../helper';

const ContenedorResumen =styled.div`
padding: 1rem;
text-align: center;
background-color: #00838f;
color: #FFF;
margin-top: 1rem;
`;

const Resumen = ({ resumen }) => {
  return (
    <ContenedorResumen>
      <h2>Resumen de cotizacion</h2>
      <ul>
        <li>Marca: {primerMayuscula(resumen.datos.marca)}</li>
        <li>Año: {resumen.datos.year}</li>
        <li>Plan: {primerMayuscula(resumen.datos.plan)}</li>
        

      </ul>
    </ContenedorResumen>
  );
};

export default Resumen;
