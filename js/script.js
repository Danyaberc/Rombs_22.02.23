const wrapperEL = document.querySelector('.wrapper');

const infobox = document.querySelector('.infobox');

const inputNumber = document.querySelector('.input_number')

const btnRun = document.querySelector('.buttonRun')

btnRun.addEventListener('click', (ev) => {
   PL()
})

const PL = function (placeEL) {
   let myhtml = "";

   let numbernow = "";

   numbernow = Number(inputNumber.value);

   changenewnumber = numbernow;

   const renderEl = (placeEL) => {

      for (let i = 1; i <= changenewnumber; i += 1) {
         myhtml += `
         <div class = "paralel">${i}</div>
      `
      }
      infobox.innerHTML = myhtml;

   }
   const init = (placeEL) => {
      renderEl(placeEL);
   }
   init(wrapperEL);

   const showMeBox = () => {
      let callmeurnumber = document.querySelectorAll('.paralel')
      for (let numb = 0; numb < callmeurnumber.length; numb++) {
         callmeurnumber[numb].addEventListener('click', () => {
            callmeurnumber[numb].classList.toggle('show');
         })
      }
   }
   showMeBox();
}


























// let html = "";

// let newNumber = "";

// btnRun.addEventListener('click', (ev) => {
//    newNumber = Number(inputNumber.value);
//    numberChange = newNumber
//    const renderTL = (placeEL) => {

//       for (let i = 1; i <= numberChange; i += 1) {
//          html += `<div class="paralel">${i}</div>`
//       }

//       placeEL.innerHTML = html;
//    }
//    const init = (placeEL) => {
//       renderTL(placeEL);
//    }

//    init(wrapperEL);

//    const newChangeNumber = () => {
//       let callMeNumber = document.querySelectorAll('.paralel')
//       for (let numb = 0; numb < callMeNumber.length; numb += 1) {
//          callMeNumber[numb].addEventListener('click', () => {
//             callMeNumber[numb].classList.add('show')
//          })
//       }

//    }
//    newChangeNumber();
// })





