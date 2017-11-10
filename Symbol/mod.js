function A() {
    this.foo = 'hello';
}
if(!global._foo) {
    global._foo = new A()
}
module.exports = global._foo