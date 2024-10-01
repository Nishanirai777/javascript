let number =20 ;
if(number%10 == 0){
    console.log("good");
   

}else {
    console.log("bad");
}
let user= prompt("write a user name");
let age= prompt("enter your age");
let  msg = user +  " " +  age ;
alert(msg);
let quarter =1;
switch(quarter){
    case 1:
        console.log("january ,february,march");
        break;
        case 2:
            console.log("april, may,june");
            break;
            case 3:
                console.log("july ,august ,september");
                break;
                case 4:
                    console.log("november ,october ,december");
                    break;
                    default:
                        console.log("wrong");
}