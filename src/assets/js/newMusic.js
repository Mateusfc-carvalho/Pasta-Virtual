export function musicUi() {
  const listMusic = localStorage.getItem("music");
  const obj = JSON.parse(listMusic);

  console.log(obj);


}


