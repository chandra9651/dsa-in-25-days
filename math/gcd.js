// GCD(Greatest common division) AND HCF(Highest common factor) are same 

// REsource PepCoding (YouTube)

function gcd(n1, n2) {
    while (n1 % n2 != 0) {
        const remainder = n1 % n2;
        n1 = n2;
        n2 = remainder;
    }
    return n2;
}


const result = gcd(12, 8);

console.log(result);