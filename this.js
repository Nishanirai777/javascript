const students= {
    name: "nisha",
    age:21,
    eng:56,
    math:90,
    phy:89,
    getAvg(){
        console.log(this);
        let avg= (this.eng+ this.math + this.phy)/3;
        console.log(`${this.name}got avg marks= ${avg}`);
    }
}