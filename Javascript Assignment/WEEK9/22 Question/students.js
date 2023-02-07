const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort()
console.log(ages);
// const math=new Math();

console.log(Math.max.apply(Math,ages));
console.log(Math.min.apply(Math,ages));
console.log(Math.median.apply(Math,ages));

