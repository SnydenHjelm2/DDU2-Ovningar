const authors = [
    {
      name: "J. Winterstorm",
      language: "English",
      book: "The Cherry"
    },
    {
      name: "A. Ljuskrona",
      language: "Swedish",
      book: "November Är Här",
      city: "Malmö"
    },
    {
      name: "A. Dumas",
      language: "French",
      books: "The Empire Strikes the Mosqueteers",
      age: 34,
    },
  ];
  
  const main = document.querySelector("main");

  for (const authorInfo of authors) {
    var authorDiv = document.createElement("div");
    authorDiv.className = "author";
    main.appendChild(authorDiv);

    for (const authorInfoKey in authorInfo) {
        var p = document.createElement("p");
        p.className = "infoLine";
        p.innerHTML = `${authorInfoKey}: <span class="value">${authorInfo[authorInfoKey]}</span>`;
        authorDiv.appendChild(p);
    }
  }