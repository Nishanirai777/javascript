let hero=[
    ["ironman","spiderman","thor"],
    ["maheshbabu","saru khan","thalapi"]
]
for(let i=0;i<hero.length;i++){
    console.log( i ,hero[i],hero[i].length );
    for(
        let j=0;j<hero[i].length;j++
    ){
        console.log(`j=${j},${hero[i][j]}`)
    }
}