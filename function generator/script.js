// function* fetchData() {
//   const data1 = yield fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json());
//   console.log(data1);
//   const data2 = yield fetch('https://jsonplaceholder.typicode.com/posts/2').then(res => res.json());
//   console.log(data2);
// }

// function run(generator) {
//   const iterator = generator();

//   function handle(result) {
//     if (result.done) return;
//     result.value.then(res => handle(iterator.next(res))).catch(err => console.error(err));
//   }

//   handle(iterator.next());
// }

// run(fetchData);

function* run(data) {
  let count = 1; // Use `let` instead of `const`
  while (count <= data) {
    yield count++;
  }
}

const dataGenerator = run(5);

for (let da of dataGenerator) {
  console.log(da); // Outputs: 1, 2, 3, 4, 5
}
