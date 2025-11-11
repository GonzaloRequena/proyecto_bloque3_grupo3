(() => {
    'use strict'

    // Busca todos los formularios a los que queremos aplicar los estilos de validación de Bootstrap
    const forms = document.querySelectorAll('.needs-validation')

    // Itera sobre ellos y previene el envío si no son válidos
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()