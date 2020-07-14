console.log('js');

const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const check = document.getElementById('check');
const infoSecondInput = document.querySelector('.info');
const infoFirstInput = document.querySelector('.number');

function createArrayNumber({ target: { value } }) {
  const reg = /(\b\d+[^\w])/gm;
  const arr = [];
  const match = value.trim().match(reg);
  if (match) {
    match.forEach((element) => {
      arr.push(Number(element.trim()));
      //   infoFirstInput.textContent += element.trim() + ' ';
    });
  }
  infoFirstInput.textContent = arr.join('_');
  console.log(arr);
  return arr;
}

function checkApiAdress() {
  let value = input2.value;
  const regApi = /^(25[0-5]|2[0-4][0-9]|[01]?[1-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
  const match = value.match(regApi);
  //   console.log(match);
  if (match) {
    check.className = 'access';
    infoSecondInput.textContent = 'Коректные значения';
  } else {
    check.className = 'disable';
    infoSecondInput.textContent = 'Не коректное значение';
  }
  //   input2.value = '';
}

input1.addEventListener('input', createArrayNumber);
check.addEventListener('click', checkApiAdress);
