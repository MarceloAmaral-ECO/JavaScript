function parimp(n) {
    if (n%2 == 0) {
        return "par"
    } else {
        return "ímpar"
    }
}

let num = 4
let res = parimp(num)
console.log(`O número ${num} é ${res}`)