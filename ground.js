////////////////////////////////Code Started/////////////////////////////

//Created a class name: Ground inside ground.js file
class Ground {

    //Used a constructor to construct the object
    constructor(x, y, width, height) {

        //Created variable options and set some properties of object inside it 
        var options = {

            //Made the object static (to prevent falling down from it's own) 
            isStatic: true

        }

        //Set width (default) as this.width = width; 
        this.width = width

        //Set height (default) as this.height = height+5; 
        this.height = height + 5

        //Set this.body as the rectangular physics objects of Bodies with (x,y,width,height,additional properties)
        this.body = Bodies.rectangle(x, y, width, height, options)

        //Added this.body to World
        World.add(world, this.body)

    }

    //Started with display function( based on the setup of displaying an object)
    display() {

        //Created a variable pos where set the position of this.body : this.body.position;	 
        var pos = this.body.position

        //Started implementation of some properties so used : push()
        push()

        //Translate the position X and position Y of this.body 	
        translate(pos.x, pos.y)

        //Set rectMode as CENTER
        rectMode(CENTER)

        //Fill the rect shape with "brown" color
        fill("brown")

        //Wrote rect to display the rect shape wth some coordinates inside it
        rect(0, 0, this.width, this.height)

        //Ended implementation of some properties so used : pop()
        pop()

    }

}

////////////////////////////////Code Ended/////////////////////////////