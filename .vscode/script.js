function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pega a tag image
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, add a img light
    img.setAttribute("src", "./assets/assets/avatar.png")
  } else {
    //se tiver sem o modo light, manter img normal
    img.setAttribute("src", "./assets/assets/avatar-light.png")
  }
}
