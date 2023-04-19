fetch("https://fakestoreapi.com/products")
  .then((data) => {
    // console.log(data);

    return data.json(); // convart in json format. object;
  })
  .then((completedata) => {
    // console.log(completedata);

    let data1 = "";
    completedata.map((values) => {
      data1 += `
 
     <div class="card">
        <h1 class="titel">${values.title}</h1>
        <img src=${values.image} class="img" alt="img" />

        <p class="descptinon">${values.description}</p>
        <p class="category">${values.category}</p>
        <p class="price">${values.price}</p>
       </div>
 
 `;
    });
    document.getElementById("cards").innerHTML = data1;
  }).catch((err)=>{
    console.log(err);
  });
