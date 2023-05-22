// LCM(Least Common Multiple)
// Resource PepCoding (YouTube)


function lcm(n1, n2) {
    const on1 = n1;
    const on2 = n2;
    while (n1 % n2 != 0) {
        const remainder = n1 % n2;
        n1 = n2;
        n2 = remainder;
    }
    // return n2;
    // n2 is gcd
    return (on1 * on2) / n2;
}

const result = lcm(15, 5);
console.log(result);

