const container = document.querySelector("#container");
const baseURL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

//styles
container.style.textAlign = "center";

for (let i = 1; i <= 151; i++) {
  const contentDiv = document.createElement("div");
  const img = document.createElement("img");
  img.src = `${baseURL}${i}.png`;
  const span = document.createElement("span");
  span.innerText = `#${i}`;

  //styles
  contentDiv.style.display = "inline-block";
  img.style.display = "block";
  contentDiv.style.textAlign = "center";

  //append
  contentDiv.append(img, span);
  container.append(contentDiv);
}
