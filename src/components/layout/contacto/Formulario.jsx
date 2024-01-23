import { TextField, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const Formulario = () => {

 
  const { handleSubmit, handleChange, errors, isSubmitting } = useFormik({
    initialValues: {
      Nombre: "",
      Telefono: "",
      Email: "",
      Mensaje: "",
    },
    onSubmit: async (formData, { setSubmitting, resetForm }) => {
      try {
        const response = await fetch('https://formsubmit.co/rameh13251@wentcity.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          Swal.fire({
            icon: 'success',
            text: 'Formulario enviado exitosamente',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#db0809'
          }).then((result) => {
            if (result.isConfirmed) {
              window.location.reload();
            }
          });
          setSubmitting(false);
        } else {
          Swal.fire({
            icon: 'error',
            text: 'Error al enviar el formulario',
            confirmButtonText: 'Ok',
            confirmButtonColor: '#db0809'
          })
        }
      } catch (error) {
        Swal.fire({
          icon: 'error',
          text: 'Error en la solicitud de envio', error,
          confirmButtonText: 'Ok',
          confirmButtonColor: '#db0809'
        })
      }
    },
    validationSchema: Yup.object({
      Nombre: Yup.string().required("Este campo es obligatorio"),
      Telefono: Yup.number("Debe contener solo numeros").typeError('Debe contener solo números').required("Este campo es obligatorio"),
      Email: Yup.string().email("Debe contener un email valido").required("Este campo es obligatorio"),
      Mensaje: Yup.string().required("Este campo es obligatorio").min(5, 'Debe tener al menos 5 caracteres').max(200, 'No puede tener más de 200 caracteres'),
    }),
    validateOnChange: false
  });

  return (
    <form
      className="contactoFormulario"
      onSubmit={handleSubmit}
      method="POST"
      action="https://formsubmit.co/rameh13251@wentcity.com"
    >
      <TextField
        fullWidth
        label="Nombre"
        name="Nombre"
        variant="outlined"
        size="small"
        sx={{ marginBottom: "1rem" }}
        onChange={handleChange}
        error={errors.Nombre ? true : false}
        helperText={errors.Nombre}
      />

      <TextField
        className="TelefonoSm"
        label="Telefono"
        name="Telefono"
        variant="outlined"
        size="small"
        sx={{ width: "100%", marginBottom: "1rem" }}
        onChange={handleChange}
        error={errors.Telefono ? true : false}
        helperText={errors.Telefono}
      />

      <TextField
        className="MailSm"
        label="Correo Electronico"
        name="Email"
        variant="outlined"
        size="small"
        sx={{ width: "100%", marginBottom: "1rem" }}
        onChange={handleChange}
        error={errors.Email ? true : false}
        helperText={errors.Email}
      />

      <TextField
        fullWidth
        label="Mensaje"
        name="Mensaje"
        variant="outlined"
        multiline
        rows={4}
        size="small"
        sx={{ marginBottom: "1rem" }}
        onChange={handleChange}
        error={errors.Mensaje ? true : false}
        helperText={errors.Mensaje}
      />

      <div className="contactoBotonContainer">
        <Button
          className="Boton"
          type="submit"
          variant="contained"
          value="enviar"
          disabled={isSubmitting}
        >
          Enviar Mensaje
        </Button>
      </div>
    </form>
  );
};

export default Formulario;
