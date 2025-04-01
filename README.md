# Proyecto-10-Full-Stack-JavaScript-Frontend

FRONTEND
DONE _ Implementa un formulario de inicio de sesión para que los usuarios ingresen al sistema.
DONE _ Si no existiera, registrar un nuevo usuario.
DONE _ El registro, nos hace login después de registrarnos para ahorrar un paso innecesario al usuario.
DONE _ Muestra la lista de eventos disponibles.
DONE _ Los usuarios autenticados verán opciones adicionales para crear eventos y confirmar asistencia
DONE _ Permite a los usuarios explorar detalles de cada evento
DONE _ Permite a los usuarios explorar la lista de asistentes
DONE _ Implementa manejo de errores adecuado en el frontend y el backend.
DONE _ Todos los formularios del frontend tienen control de errores que pase lo que pase se informa al usuario de lo que ha pasado.
DONE _ Todos los procesos asíncronos le muestran un loading de alguna manera al usuario, para que este tenga una respuesta inmediata ante su acción.
DONE _ Mucho cariño a la componentización, no se repite código en ningún momento.
DONE _ Los fetchs están reutilizados a través de una única función que me permita hacer todos mediante el uso de la misma.

EXTRAS:
DONE - Eliminar el evento mouseleave del modal.
DONE - Cuando elimino un partido, el modal que me pide confirmación se queda en pantalla después de confirmar, y se mantiene durante la carga y el mensaje de confirmación de que ha sido borrado correctamente. Una vez confirmada la acción, deberías quitar el modal para evitar ese pequeño error en el diseño.
DONE - Por último, no veo mi foto de perfil en ningún sitio, cuál es la utilidad de tenerla? Mi recomendación es que en el header, te deshagas del texto "perfil/cerrar sesión" y pongas la imagen de perfil. Creo que el diseño mejoraría y así le damos un uso a esa imagen.
DONE - Aparte de comprobar que el token está en el local, estaría bien hacer una petición al back para comprobar que es válido y que es de un usuario con una cuenta.
    Te recomiendo implementar esta funcionalidad, podrías hacerlo en la misma función "isAuth" que tienes en el front. En caso de que el Token no sea válido, elimínalo del local y llévalo a la sección de registro/login.

EXTRAS PTES:

-   Manejo del isAuth en el resto de paginas ya que funciona en PM pero en el resto no, puedo usar todas las demas paginas

-   Otra opción es mostrarla también en pequeño en la lista de participantes de los partidos.
-   createPM revisar lo del getToken()
