class Game{
    constructor(){
        this.speed=2
        this.lastPaintTime = 0
        this.snakeArr =[{x:15,y:14}]
        this.inputDir ={x:0,y:0}
        this.food  = {x:8,y:9}
        this.score = 0
        
      
    }
    init(){
         const show =(ctime)=>{
             //console.log(ctime)
             window.requestAnimationFrame(show)

             if((ctime-this.lastPaintTime)/1000 < 1/this.speed){
                 return;
             }
             this.lastPaintTime = ctime
             //console.log(ctime)
             gameEngine()
             
             
             
        }
        
        const gameEngine =() =>{
            //console.log(highScore)

            let board = document.querySelector(".board")
            //console.log(board)
            board.innerHTML=""
            this.snakeArr.forEach((e,i)=>{
                let snakeElement = document.createElement("div")
                snakeElement.style.gridRowStart =e.x
                snakeElement.style.gridColumnStart=e.y
                if(i==0){
                    snakeElement.setAttribute("class","head")
 
                }else{
                    snakeElement.setAttribute("class","snake")
                }
                
                board.appendChild(snakeElement)
            })
            let foodElement = document.createElement("div")
            foodElement.style.gridRowStart = this.food.x
            foodElement.style.gridColumnStart = this.food.y
            foodElement.setAttribute("class","food")
            board.appendChild(foodElement)

            if(isCollide(this.snakeArr)){
                this.inputDir={x:0,y:0}
                alert("Game Over.Press any key to play")
                this.snakeArr =[{x:13,y:15}]
                 
                this.score=0
                let score = document.querySelector(".scoreNum")
                score.innerHTML = "Score:"+0

                
        

            }
            if(this.snakeArr[0].x==this.food.x && this.snakeArr[0].y==this.food.y){
                this.score = this.score +1
                let score = document.querySelector(".scoreNum")
                score.innerHTML = "Score:"+this.score
                
               
                
                this.snakeArr.unshift({x:this.snakeArr[0].x+this.inputDir.x,y:this.snakeArr[0].y+this.inputDir.y})
                let min =2
                let max=16
                this.food ={x:Math.floor(Math.random() * (max - min + 1) + min), y:Math.floor(Math.random() * (max - min + 1) + min)}

            }
            for (let i = this.snakeArr.length-2; i>=0; i--) {
    
                this.snakeArr[i+1]={...this.snakeArr[i]}
                    
                    
            }
            this.snakeArr[0].x += this.inputDir.x
            this.snakeArr[0].y +=  this.inputDir.y

            

           // console.log(highScore)
            
               

        
           
           let highScore = document.querySelector(".highScore")
           let hiScore = localStorage.getItem("highScore")
           
           if(hiScore===null){
               let highScoreVal=0
                localStorage.setItem("highScore",JSON.stringify(highScoreVal))
           }else{
               let higScore = JSON.parse(hiScore)
               highScore.innerHTML="HighScore:" + higScore
           }
           if(this.score>hiScore){
            localStorage.setItem("highScore",JSON.stringify(this.score))
            highScore.innerHTML="HighScore:" + hiScore

            

        }

        


        }
        
           
            

        
        
            
                    
       //let highscore = document.querySelector(".highScore")
      
       window.requestAnimationFrame(show)
       window.addEventListener("keydown",e=>{
        this.inputDir={x:0,y:1}
        // switch(e.key){
        //     case "ArrowUp":
        //         console.log("ArrowUp")
        //         break
        // }
        if(e.key=="ArrowUp"){
            console.log("ArrowUp")
            this.inputDir.x =-1
            this.inputDir.y = 0

           
        }else if(e.key=="ArrowDown"){
            console.log("ArrowDown")
            this.inputDir.x = 1 
            this.inputDir.y = 0

                
        }else if (e.key=="ArrowLeft"){
            console.log("ArrowLeft")
             this.inputDir.x = 0
            this.inputDir.y =  -1
    
                
        }else if(e.key=="ArrowRight"){
            console.log("ArrowRight")
            this.inputDir.x = 0
            this.inputDir.y = 1

           
        }
        
    })

    }
   
}
 let snake = new Game()
//  snake.show()
snake.init()

