document.addEventListener('DOMContentLoaded', () => {
  const orderModal = document.getElementById('orderModal');
  if (orderModal) {
    orderModal.addEventListener('show.bs.modal', (event) => {
      const trigger = event.relatedTarget;
      const product = trigger?.getAttribute('data-product') || '';
      const field = document.getElementById('modal-product');
      if (field) field.value = product;
    });
  }

  document.querySelectorAll('.demo-form').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }
      const message = document.getElementById('formMessage');
      if (message) message.classList.remove('d-none');
      const modal = form.closest('.modal');
      if (modal && window.bootstrap) {
        window.bootstrap.Modal.getOrCreateInstance(modal).hide();
      }
      form.reset();
      form.classList.remove('was-validated');
    });
  });
});
