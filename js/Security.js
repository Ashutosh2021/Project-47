class Security {

    constructor(){

        this.access1 = createInput("Code1")
       
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
       
        this.button1.style('background', 'lightgrey');    

        this.access2 = createInput("Code1")
       
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
       
        this.button2.style('background', 'lightgrey');
        //add code for creating and positioning the third input box and button
        this.access3 = createInput("Code1")
        
        this.access3.style('background', 'white'); 

        this.button3 = createButton('Check');
       
        this.button3.style('background', 'lightgrey');

        this.element1=createElement("h3");

        this.element2=createElement("h3");

        this.element3=createElement("h3");
        
    }

    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
               
                this.element1.html("CORRECT");
                this.element1.position(700,190);
                this.element1.style("color","green");
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
                
                this.element2.html("CORRECT");
                this.element2.position(190,295);
                this.element2.style("color","green");
            }
        });
//add code for what happens when the third button is pressed
        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
               
                this.element3.html("CORRECT");
                this.element3.position(700,450);
                this.element3.style("color","green");
                }
        });

    }
}