////////////////////////////////Code Started/////////////////////////////

//Created a class name: Paper inside paper.js file
class Paper {

    //Used a constructor to construct the object
    constructor(x, y) {

        //Created variable options and set some properties of object inside it
        var options = {

            //Made the object  not static (so it will fall and stop on touching the ground)
            isStatic: false,

            //Set restitution(bounciness) of object as 0.3
            restitution: 0.3,

            //Set density(heaviness) of object as 1.2
            density: 1.2,

            //Set restitution(slippriness) of object as 0
            friction: 0

        }

        //Set Y position (default) as this.y = y;
        this.y = y

        //Set radius (default) as this.radius = 70;
        this.radius = 70

        //Set this.body as the circular physics objects of Bodies with (x,y,radius,additional properties)	
        this.body = Bodies.circle(x, y, (this.radius - 20) / 2, options)

        //Loaded an image inside this.image as ("paper.png")
        this.image = loadImage("paper.png")

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

        ////Rotating the angle of this.body
        rotate(this.body.angle)

        //Set imageMode as CENTER
        imageMode(CENTER)

        // Wrote the image here to display it with some coordinates inside it
        image(this.image, 0, 0, this.radius, this.radius)

        //Ended implementation of some properties so used : pop()
        pop()

    }

}

////////////////////////////////Code Ended/////////////////////////////