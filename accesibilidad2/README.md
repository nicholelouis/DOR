# Mejora de Accesibilidad en Elementos de Bootstrap con Atributos WAI-ARIA

El objetivo de la actividad es mejorar la accesibilidad de diferentes elementos de Bootstrap mediante la implementación de los principios de accesibilidad WAI-ARIA. Usarás los siguientes pasos para cada elemento seleccionado: Role, Property, State, y Tabindex Attributes.

1. Seleccionar cinco elementos de Bootstrap

- Navbar
- Alerts   
- Forms
- Breadcrumbs
- Buttons

### Navbar

- role="navigation": Indica que el elemento es una barra de navegación ayudando a personas que usen los lectores de pantalla.

- aria-label="Barra de navegación principal": Propósito de la barra de navegación.

- aria-controls, aria-expanded, y aria-label: Decribimos el estado actual del menú desplegable.

### Breadcrumbs

- aria-label="Breadcrumb": Indica que el elemento es un breadcrumsbs.

- aria-current="page": Marca el ítem de la página actual.

### Alert

- role="alert": Indica que el elemento es una alerta (requiere atención).

- tabindex="0": El mensaje se puede navegar con el teclado.

### Form

- role="form": Indica que el elemento es un formulario.

- aria-labelledby="formTitle": Indica la relación del formulario con su título para mayor comprensión.

- aria-required="true": Indica los campos obligatorios en el formulario.

### Buttons (form)

- aria-pressed="false": Describe el estado del botón.

- tabindex="0": Se puede acceder al boton a través del teclado.