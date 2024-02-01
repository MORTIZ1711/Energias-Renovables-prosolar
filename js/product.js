/*GUARDANDO LAS VARIABLES */
const container__products = document.querySelector(".productos__center");
const select = document.querySelector(".select");
const search = document.querySelector(".search");

/*ARREGLO DE PRODUCTOS */
const products = [
  /*OTROS PRODUCTOS */
  {
    id: 1,
    title: "KIT DE BICICLETA 2010-N",
    image: "../assets/img/others/others2.png",
    price: "70.000",
    category: "others",
  },

  {
    id: 2,
    title: "CABLE AUXILIAR 1 EN 1  TM",
    image: "../assets/img/others/others1.png",
    price: "10.000",
    category: "others",
  },

  {
    id: 2,
    title: "TECLADO GAMER K-358",
    image: "../assets/img/others/others8.png",
    price: "34.000",
    category: "others",
  },

  {
    id: 2,
    title: "CABLE IMPRESORA 3M-IMP-TM",
    image: "../assets/img/others/others9.png",
    price: "34.000",
    category: "others",
  },

  {
    id: 2,
    title: "CABLE GVA",
    image: "../assets/img/others/others10.png",
    price: "34.000",
    category: "others",
  },

  {
    id: 2,
    title: "MEMORIA MICRO SD 32GB",
    image: "../assets/img/others/others4.png",
    price: "30.000",
    category: "others",
  },

  {
    id: 2,
    title: "MEMORIA MICRO SD 64GB",
    image: "../assets/img/others/others3.png",
    price: "34.000",
    category: "others",
  },

  {
    id: 2,
    title: "MEMORIA MICRO SD 128GB",
    image: "../assets/img/others/others7.png",
    price: "60.000",
    category: "others",
  },

  {
    id: 2,
    title: "MEMORIA USB 32GB",
    image: "../assets/img/others/others5.png",
    price: "30.000",
    category: "others",
  },

  {
    id: 2,
    title: "MEMORIA USB 64GB",
    image: "../assets/img/others/others6.png",
    price: "34.000",
    category: "others",
  },

  /*CAMARAS */
  {
    id: 3,
    title: "CAMARA TY288-5G",
    image: "../assets/img/camera/camera1.png",
    price: "165.000",
    category: "camara",
  },

  {
    id: 4,
    title: "CAMARA  WIFI IP KJB-T11",
    image: "../assets/img/camera/camera2.png",
    price: "175.000",
    category: "camara",
  },

  {
    id: 5,
    title: "CAMARA  WIFI IP KJB-F1",
    image: "../assets/img/camera/camera3.png",
    price: "150.000",
    category: "camara",
  },

  /*CARGADORES */
  {
    id: 6,
    title: "POWER BANK TM-A73",
    image: "../assets/img/charger/charger1.png",
    price: "100.000",
    category: "cargador",
  },

  {
    id: 7,
    title: "CARGADOR TIPO C P-34",
    image: "../assets/img/charger/charger3.png",
    price: "25.000",
    category: "cargador",
  },

  {
    id: 8,
    title: "CABLE DE DATOS V-141",
    image: "../assets/img/charger/charger5.png",
    price: "10.000",
    category: "cargador",
  },

  {
    id: 9,
    title: "CABLE DE DATOS  V-179P",
    image: "../assets/img/charger/charger4.png",
    price: "130.000",
    category: "cargadores",
  },

  {
    id: 9,
    title: "CABLE DE DATOS  V-185",
    image: "../assets/img/charger/charger7.png",
    price: "22.000",
    category: "cargadores",
  },

  {
    id: 9,
    title: "CABLE DE DATOS  C17-TIPO C",
    image: "../assets/img/charger/charger8.png",
    price: "12.000",
    category: "cargadores",
  },

  {
    id: 9,
    title: "CARGADOR DE AUTO C-909",
    image: "../assets/img/charger/charger9.png",
    price: "12.000",
    category: "cargadores",
  },

  {
    id: 10,
    title: "POWER BANK TM- A138",
    image: "../assets/img/charger/charger2.png",
    price: "130.000",
    category: "cargador",
  },

  {
    id: 17,
    title: "CABLE DE DATOS V-137",
    image: "../assets/img/charger/charger6.png",
    price: "24.000",
    category: "lamparas",
  },

  /* LAMPARAS Y BOMBILLOS */
  {
    id: 11,
    title: "LUZ LED RECARGABLE CL-111",
    image: "../assets/img/light/light1.png",
    price: "120.000",
    category: "lamparas",
  },

  {
    id: 12,
    title: "LUZ LED RECARGABLE CL-115",
    image: "../assets/img/light/light2.png",
    price: "120.000",
    category: "lamparas",
  },

  {
    id: 13,
    title: "LUZ LED RECARGABLE CL-115",
    image: "../assets/img/light/light3.png",
    price: "165.000",
    category: "lamparas",
  },

  {
    id: 14,
    title: "LUZ LED RECARGABLE CL-730S",
    image: "../assets/img/light/light4.png",
    price: "113.000",
    category: "lamparas",
  },

  {
    id: 15,
    title: "LAMPARA SOLAR CL-021",
    image: "../assets/img/light/light5.png",
    price: "40.000",
    category: "lamparas",
  },

  /*AUDIFONOS */
  {
    id: 16,
    title: "AUDIFONOS 1550",
    image: "../assets/img/headphones/headphone1.png",
    price: "11.000",
    category: "headphone",
  },

  {
    id: 16,
    title: "AUDIFONOS TM-K98",
    image: "../assets/img/headphones/headphone2.png",
    price: "16.000",
    category: "headphone",
  },

  {
    id: 16,
    title: "AUDIFONOS GAMER 1590",
    image: "../assets/img/headphones/headphone3.png",
    price: "33.000",
    category: "headphone",
  },


];

/*METODO PARA ORDENAR EL AREGLO */
products.sort((o1, o2) => {
  if (o1.title <= o2.title) {
    return -1;
  } else {
    return 0;
  }
});

/*FUNCION PARA AGREGAR LOS PRODUCTOS DINAMICAMENTE */

function ShowProduct() {
  products.forEach((product) => {
    const article = document.createElement("article");
    article.classList.add("producto");
    article.innerHTML = `
      <figure class="figure__producto">
          <img src="${product.image}" alt="camara de seguridad" class="img__producto" />
      </figure>
      <article class="producto__footer">
          <h1 class="producto__title">${product.title}</h1>
          <article class="rating">
              <span>
                  <i class="fa-solid fa-star"></i>
              </span>
              <span>
                  <i class="fa-solid fa-star"></i>
              </span>
              <span>
                  <i class="fa-solid fa-star"></i>
              </span>
              <span>
                  <i class="fa-solid fa-star"></i>
              </span>
              <span>
                  <i class="fa-solid fa-star"></i>
              </span>
          </article>
          <p class="price">$${product.price}</p>
      </article>

        
      <div class="bottom">
          <div class="btn__group">
              <a href="https://api.whatsapp.com/send?phone=+573156628048&text=Estoy,%20interasado%20en%20el%20producto%20${product.title}" target="_blank" class="btn addToCart"">cotizar producto</a>
          </div>
      </div>
    `;
    container__products.append(article);
  });
}
ShowProduct();

search.addEventListener("keyup", (e) => {
  if (e.target.matches(".search")) {
    document.querySelectorAll(".producto").forEach((product) => {
      product.textContent.toLowerCase().includes(e.target.value)
        ? product.classList.remove("filtro")
        : product.classList.add("filtro");
    });
  }
});
