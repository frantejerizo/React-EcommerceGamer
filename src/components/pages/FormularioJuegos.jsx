import { useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { crearJuegoAPI, editarJuegoAPI, obtenerUnSoloJuegoAPI } from "../helpers/queries";
import { useNavigate, useParams } from "react-router";
import "./FormularioJuegos.css";

const FormularioJuegos = ({ crearJuego }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const { id } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    if (crearJuego === false) {
      cargarDatosJuego();
    }
  }, []);

  const cargarDatosJuego = async () => {
    const respuesta = await obtenerUnSoloJuegoAPI(id);
    if (respuesta.status === 200) {
      const datos = await respuesta.json();
      setValue("nombre", datos.nombre);
      setValue("precio", datos.precio);
      setValue("categoria", datos.categoria);
      setValue("imagen", datos.imagen);
      setValue("descripcion", datos.descripcion);
      setValue("requisitosMinimos", datos.requisitosMinimos);
      setValue("requisitosRecomendados", datos.requisitosRecomendados);
      setValue("desarrollador", datos.desarrollador);
    }
  };

  const onSubmit = async (juego) => {
    if (crearJuego === true) {
      const respuesta = await crearJuegoAPI(juego);
      if (respuesta.status === 201) {
        alert("El juego fue creado correctamente");
        navegacion("/administrador");
      } else {
        alert("Ha ocurrido un error, vuelve a intentar esta operación en unos momentos");
      }
    } else {
      const respuesta = await editarJuegoAPI(juego, id);
      if (respuesta.status === 200) {
        alert("El juego fue actualizado");
        navegacion("/administrador");
      } else {
        alert("Ha ocurrido un error, vuelve a intentar esta operación en unos momentos");
      }
    }
  };

  return (
    <section className="container mainSection">
      <h1 className="display-4 mt-5">{crearJuego ? "Agregar Juego" : "Editar Juego"}</h1>
      <hr />
      <Form className="my-4" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: Dark Souls III"
            {...register("nombre", {
              required: "El nombre es un dato obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como mínimo 2 caracteres",
              },
              maxLength: {
                value: 70,
                message: "Debe ingresar como máximo 70 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.nombre?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPrecio">
          <Form.Label>Precio (En pesos argentinos)*</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ej: $15000"
            {...register("precio", {
              required: "El precio es un valor obligatorio",
              min: {
                value: 0,
                message: "El precio mínimo es de 0 pesos",
              },
              max: {
                value: 100000,
                message: "El precio máximo es de 100000 pesos",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.precio?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCategoria">
          <Form.Label>Categoría*</Form.Label>
          <Form.Select
            {...register("categoria", {
              required: "Debe seleccionar una categoría",
            })}
          >
            <option value="">Seleccione una opción</option>
            <option value="Sandbox">Sandbox</option>
            <option value="Simulacion">Simulación</option>
            <option value="Fabricacion">Fabricación</option>
            <option value="SoulsLike">SoulsLike</option>
            <option value="Construccion">Construcción</option>
            <option value="Aventura">Aventura</option>
            <option value="Horror">Horror</option>
            <option value="Shooter">Shooter</option>
          </Form.Select>
          <Form.Text className="text-danger">{errors.categoria?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formImagen">
          <Form.Label>Imagen URL*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: https://store-images.s-microsoft.com/image/apps.61214.71827372323164480.6e97c7d2-899a-404f-8660-d622a7fc9162.740b1351-e659-486b-9d1c-948e0d928ead?q=90&w=480&h=270"
            {...register("imagen", {
              required: "La URL de la imagen es obligatoria",
              pattern: {
                value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/,
                message: "Debe ingresar una URL de imagen válida (jpg, jpeg, gif, png)",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.imagen?.message}</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formDescripcion">
          <Form.Label>Descripción*</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ej: Dark Souls III es un juego de rol de acción..."
            style={{ resize: "none", height: "100px" }}
            {...register("descripcion", {
              required: "La descripción es obligatoria",
              minLength: {
                value: 5,
                message: "Debe ingresar como mínimo 5 caracteres",
              },
              maxLength: {
                value: 1000,
                message: "Debe ingresar como máximo 1000 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.descripcion?.message}</Form.Text>
        </Form.Group>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formRequisitosMinimos">
              <Form.Label>Requisitos Mínimos del Sistema*</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ej: SO: Windows 7 SP1 64bit..."
                style={{ resize: "none", height: "150px" }}
                {...register("requisitosMinimos", {
                  required: "Los requisitos mínimos son obligatorios",
                  minLength: {
                    value: 5,
                    message: "Debe ingresar como mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Debe ingresar como máximo 1000 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.requisitosMinimos?.message}</Form.Text>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formRequisitosRecomendados">
              <Form.Label>Requisitos Recomendados del Sistema*</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Ej: SO: Windows 10 64bit..."
                style={{ resize: "none", height: "150px" }}
                {...register("requisitosRecomendados", {
                  required: "Los requisitos recomendados son obligatorios",
                  minLength: {
                    value: 5,
                    message: "Debe ingresar como mínimo 5 caracteres",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Debe ingresar como máximo 1000 caracteres",
                  },
                })}
              />
              <Form.Text className="text-danger">{errors.requisitosRecomendados?.message}</Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="formDesarrollador">
          <Form.Label>Desarrollador*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ej: From Software"
            {...register("desarrollador", {
              required: "El desarrollador es un dato obligatorio",
              minLength: {
                value: 2,
                message: "Debe ingresar como mínimo 2 caracteres",
              },
              maxLength: {
                value: 70,
                message: "Debe ingresar como máximo 70 caracteres",
              },
            })}
          />
          <Form.Text className="text-danger">{errors.desarrollador?.message}</Form.Text>
        </Form.Group>

        <Button type="submit" variant="success" className="btn-guardar">
          Guardar
        </Button>
      </Form>
    </section>
  );
};

export default FormularioJuegos;