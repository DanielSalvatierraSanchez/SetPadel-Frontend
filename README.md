# Proyecto-10-Full-Stack-JavaScript-Frontend

FRONTEND
DONE _ Implementa un formulario de inicio de sesión para que los usuarios ingresen al sistema.
DONE _ Si no existiera, registrar un nuevo usuario.
=> Uso la Home con Login() y Register()
DONE _ El registro, nos hace login después de registrarnos para ahorrar un paso innecesario al usuario.
DONE _ Muestra la lista de eventos disponibles.
=> Se les redirige a la page PadelMatches()
DONE _ Los usuarios autenticados verán opciones adicionales para crear eventos y confirmar asistencia
=> Para crear partidos usan la page CreatePadelMatch() y confirmar asistencia en cada evento
DONE _ Permite a los usuarios explorar detalles de cada evento
DONE \* Permite a los usuarios explorar la lista de asistentes
DONE _ Implementa manejo de errores adecuado en el frontend y el backend.
DONE _ Todos los formularios del frontend tienen control de errores que pase lo que pase se informa al usuario de lo que ha pasado.
DONE \* Todos los procesos asíncronos le muestran un loading de alguna manera al usuario, para que este tenga una respuesta inmediata ante su acción.
DONE \* Mucho cariño a la componentización, no se repite código en ningún momento.
DONE \* Los fetchs están reutilizados a través de una única función que me permita hacer todos mediante el uso de la misma.

FUTURE =>
-   Repasar el manejo de errores, sobre todo darle un setTimeout() a los que no lo tienen (al hacer el PUT del user)
-   Repasar si hay que implementar el Loader() en algún proceso más
-   Al hacer UpdateProfileUser / SetUserData cuando guarda una imagen al actualizar usuario la setea en localstorage como objeto sin ser un string

setTimeout() => Loader.js
mouseleave en ButtonClose.js
setTimeout() => ButtonJoin.js
comentarios Modal.js
API =>
localStorage.clear() => DeleteUser & ConfirmToLogout
ACTIVAR localStorage.clear() EN EL MAIN.js
loader() => deleteUserOfPM & JoinPM

valorar si poner en:
!res ? errorMessage(container, res) : successMessage(container, res);
GetPM
JoinPM
LoginUser
RegisterUser
