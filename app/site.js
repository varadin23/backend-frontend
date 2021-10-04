const zero = document.getElementById("btn-0");
const one = document.getElementById("btn-1");
const two = document.getElementById("btn-2");
const three = document.getElementById("btn-3");
const four = document.getElementById("btn-4");
const five = document.getElementById("btn-5");
const six = document.getElementById("btn-6");
const seven = document.getElementById("btn-7");
const eight = document.getElementById("btn-8");
const nine = document.getElementById("btn-9");
const addition = document.getElementById("btn-ad");
const substraction = document.getElementById("btn-sb");
const multiplictaion = document.getElementById("btn-ml");
const divison = document.getElementById("btn-di");
const equal = document.getElementById("btn-eq");
const clear = document.getElementById("btn-ce");
const ceil = document.getElementById("btn-ceil");
const floor = document.getElementById("btn-floor");

const input = document.getElementById("input");

const nums = [];
const artim = [];

zero.addEventListener("click", () => eventHandler(0));
one.addEventListener("click", () => eventHandler(1));
two.addEventListener("click", () => eventHandler(2));
three.addEventListener("click", () => eventHandler(3));
four.addEventListener("click", () => eventHandler(4));
five.addEventListener("click", () => eventHandler(5));
six.addEventListener("click", () => eventHandler(6));
seven.addEventListener("click", () => eventHandler(7));
eight.addEventListener("click", () => eventHandler(8));
nine.addEventListener("click", () => eventHandler(9));
addition.addEventListener("click", () => eventHandler("+"));
substraction.addEventListener("click", () => eventHandler("-"));
multiplictaion.addEventListener("click", () => eventHandler("*"));
divison.addEventListener("click", () => eventHandler("/"));
Math.ceil();
Math.floor();


clear.addEventListener("click", () => {
  nums.length = 0;
  artim.length = 0;
  input.value = "";
});

// 1 + 2 * 3 - 4 / 5
equal.addEventListener("click", () => {
  //   let tempA = []; //+, -, undef
  //   let tempN = []; //6.2, 6, 0.8,
  //   for (let i = 0; i < artim.length; i++) {
  //     if (artim[i] === "*") {
  //       tempN.push(nums[i] * nums[i + 1]);
  //       tempA.push(artim[++i]);
  //     } else if (artim[i] === "/") {
  //       tempN.push(nums[i] / nums[i + 1]);
  //       tempA.push(artim[++i]);
  //     } else {
  //       tempA.push(artim[i]);
  //       tempN.push(nums[i]);
  //     }

  //     if (i >= artim.length) {
  //       break;
  //     }
  //   }

  //   for (let i = 0; i < tempA.length + 1; i++) {
  //     if (tempA[i] === "+") {
  //       tempN[0] = tempN[i] + tempN[i + 1];
  //     } else if (tempA[i] === "-") {
  //       tempN[0] = tempN[0] - tempN[i + 1];
  //     }
  //   }

  //   console.log("asd", tempN[0]);

  let acc = nums[0];
  for (let index = 0; index < artim.length; index++) {
    const element = artim[index];
    if (element === "+") {
      acc += nums[index + 1];
    } else if (element === "-") {
      acc -= nums[index + 1];
    } else if (element === "*") {
      acc *= nums[index + 1];
    } else if (element === "/") {
      acc /= nums[index + 1];
    }
  }
  console.log(acc)
  ceil.addEventListener("click", ()=> ceiling(acc));

  function ceiling(haha) {
    console.log(Math.ceil(haha));
    
  }

  floor.addEventListener("click", ()=> floorol(acc));

  function floorol(ehe) {
    console.log(Math.ceil(ehe));
    
  }

});

function eventHandler(value) {
  input.value += ` ${value}`;
  if (typeof value === "string") {
    artim.push(value);
  } else {
    nums.push(value);
  }
}
