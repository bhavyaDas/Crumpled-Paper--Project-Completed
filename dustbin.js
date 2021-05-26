////////////////////////////////Code Started/////////////////////////////

//Created a class name: Dustbin inside dustbin.js file
class Dustbin {

    //Used a constructor to construct the object 
    constructor(x, y) {

        //Created variable option and set some properties of object inside it   
        var option = {

            //Made the object static (to prevent falling down from it's own)    
            isStatic: true

        }

        //Set width (default) as this.width = 200;
        this.width = 200

        //Set height (default) as this.height = 220;
        this.height = 220

        //Set thickness (default) as this.thickness = 20;
        this.thickness = 20

        //Set this.body as the rectangular physics objects of Bodies with (x,y,width,height,additional properties)
        this.body = Bodies.rectangle(x, y, this.width, 20, option)

        //Set this.leftBody as the rectangular physics objects of Bodies with (x,y,width,height,additional properties) on the left side
        this.leftBody = Bodies.rectangle(x - this.width / 2, y - this.height / 2, this.thickness, this.height, option)

        //Set this.rightBody as the rectangular physics objects of Bodies with (x,y,width,height,additional properties) on the right side
        this.rightBody = Bodies.rectangle(x + this.width / 2, y - this.height / 2, this.thickness, this.height, option)

        //Loaded an image inside this.image as ("dustbingreen.png")
        this.image = loadImage("dustbingreen.png")

        //Added this.body to World
        World.add(world, this.body)

        //Added this.leftBody to World
        World.add(world, this.leftBody)

        //Added this.rightBody to World
        World.add(world, this.rightBody)

    }

    //Started with display function( based on the setup of displaying an object)
    display() {

        //Created a variable pos where set the position of this.body : this.body.position;  
        var pos = this.body.position

        //Started implementation of some properties so used : push()
        push()

        //Translate the position X and position Y of this.body 	
        translate(pos.x, pos.y)

        //Set imageMode as CENTER
        imageMode(CENTER)

        // Wrote the image here to display it with some coordinates inside it
        image(this.image, 0, -(this.height) / 2, this.width, this.height)

        //Ended implementation of some properties so used : pop()
        pop()

    }

}

////////////////////////////////Code Ended/////////////////////////////