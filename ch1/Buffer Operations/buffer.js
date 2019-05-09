let buff1 = Buffer.alloc(5);
let buff2 = Buffer.alloc(5);
console.log('buff1 - ',buff1);
console.log('buff2 - ',buff2);

let buff3 = Buffer.from([10, 20, 30, 40, 50]);
let buff4 = Buffer.from([10, 20, 30, 40, 50]);
console.log('buff3 - ',buff3);
console.log('buff4 - ',buff4);

let buff5 = Buffer.from("Hi Packt students!", "utf-8");
let buff6 = Buffer.from("Hi Packt students!", "utf-8");
console.log('buff5 - ',buff5);
console.log('buff6 - ',buff6);

len = buff5.write("Packt student", "utf-8");
console.log('buff5 length - ',len);       // THe length becomes 13 after writing into the buffer
console.log('buff5 - ',buff5.toString("utf-8", 0, 13));

let buff7 = Buffer.allocUnsafe(15);
let buff8 = Buffer.alloc(15);
console.log('buff7 - ',buff7);
console.log('buff8 - ',buff8);

