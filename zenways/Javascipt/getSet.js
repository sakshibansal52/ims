var o={
    a:7,
    get b(){
        return this.a + 1
    },
    set c(x){
        this.a = x/2
    }
};


console.log(o.a)
console.log(o.b)
o.c = 50
console.log(o.a); // 25