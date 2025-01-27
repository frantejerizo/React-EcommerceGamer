import React from 'react';
import error from "../../assets/error404.png";
import { Link } from "react-router";

const Error404 = () => {
    return (
        <section className="mainSection text-center">
        <img src={error} alt="error 404" />
        <div>
          <Link className="btn btn-success mt-3" to={'/'} >Volver al inicio</Link>
        </div>
      </section>
    );
};

export default Error404;