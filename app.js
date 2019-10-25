var express=require("express"),
    app=express(),
    bronvermelding = '<p style="text-align: center; margin: 25px; padding: 0;"> <span style="border: solid 1px; margin: 0; padding: 0 5px;">Based on course "The Web Developer Bootcamp | Udemy" from Colt Steele</span></p>'

app.get("/",(req,res) => {
    res.send("Hi there, welcome to my assignment!" +bronvermelding);
});

app.get("/speak/:animal",(req,res) => {
    var animal = req.params.animal.toLowerCase();
    var geluid="";

    switch (animal) {
        case "pig":
            geluid="Oink";
            break;
        case "cow":
            geluid="Moo";
            break;
        case "dog":
            geluid="Woof Woof";
            break;
        default:
                res.send("Sorry, page not found... What are you doing with your life?"  +bronvermelding);
            break;
    }
    if(geluid.length!=0){res.send("The " + animal + " says " + geluid  +bronvermelding)};
});

app.get("/repeat/:repeater/:count",(req,res) => {
    var repeat=req.params.repeater.toLowerCase();
    var desire = repeatFunction(req.params.repeater.toLowerCase(),req.params.count);
    
    if(repeat=="hello"){
        res.send(desire  +bronvermelding);
    } else if(repeat=="blah"){
        res.send(desire  +bronvermelding);
    } else {
        res.send("Sorry, page not found... What are you doing with your life?"  +bronvermelding);
    };
});

app.get("*",(req,res) => {
    res.send("Sorry, page not found... What are you doing with your life?"  +bronvermelding);
});

function repeatFunction(str,num){
    var result="";
    for(i=0;i<num;i++){
        result+= str +" ";
    };
    return result;
};

app.listen(3000, () => console.log("Express Applicatie gestart op poort 3000"));

//
// Based on course "The Web Developer Bootcamp | Udemy" from Colt Steele