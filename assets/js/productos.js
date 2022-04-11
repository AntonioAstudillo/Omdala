const modalImagen = document.querySelector('#modal-imagen');

modalImagen.addEventListener('show.bs.modal', function(e){
   const attributos = e.relatedTarget;
   const rutaImagen = attributos.getAttribute('data-bs-imagen');
   document.querySelector('#modal-body').innerHTML = `<img class="img-fluid" src="../assets/images/${rutaImagen}" alt="Galeria">`;
});
