const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector('.gallery');

const pictures = images.map((image) => `<li><img class="img" src=${image.url} alt=${image.alt}></li>`).join("");

gallery.insertAdjacentHTML("beforeend", pictures);

// const imgHtml = images.map(image => {
//   // console.log(image);
//   const el = document.createElement('li');
//   const el1 = document.createElement('img');
//   el1.src = image.url;
//   el1.alt = image.alt;
//   el1.classList.add('img');
//   el.append(el1);
//   return el;
// });

// // const newImg = imgHtml.join("");

// const gallery = document.querySelector('.gallery');
// gallery.append(...imgHtml);
// console.log(gallery);

