//Функция помогает решить квадратное уравнение типа: ax2 + bx + c = 0
// Finding the root of complete quadratic equations
function Discriminant(a,b,c) {
    let D = Math.pow(b,2) - 4*a*c;
    return D;
}
function FindRoots(a,b,c) {
    let x1 = ((-1)*b + Math.sqrt(Discriminant(a, b, c)))/(2*a);
    let x2 = ((-1)*b - Math.sqrt(Discriminant(a, b, c)))/(2*a);
    console.log(`Уравнение ${a}x2 - ${b}x + ${c} = 0 имеет два корня: x1 = ${x1} и x2 = ${x2}`);
}
const a = 5;
const b = 7;
const c = 2;
FindRoots(a, b, c)