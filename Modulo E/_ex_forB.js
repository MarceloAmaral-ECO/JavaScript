console.log("Vai começar...")
let i = 1
let parar = 5

for (i=1; i <= 10; i++) {
    if (i%2 != 0) {
        continue
    } else {
        console.log(`Passo nº ${i}`)
    }
}

console.log(`o último passo foi nº ${i}`)