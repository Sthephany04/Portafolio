import curriculumVitae from './curriculumVitae';

const downloadFunction = () => {

  let a = document.createElement("a");
  document.body.appendChild(a);
  a.style = "display: none";
  a.href =  'data:application/octet-stream;base64,' + curriculumVitae.cv;
  a.download = "CV Sthephany Granados.pdf";
  a.click();
  URL.revokeObjectURL(a.href);
  a.remove();

}

export default downloadFunction;