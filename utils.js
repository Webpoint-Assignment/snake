const isCollide=(snake)=>{
    for (let i = 1; i < snake.length; i++) {
        if(snake[i].x===snake[0].x && snake[i].y===snake[0].y){
            return true
        }

        
        
    }
    if(snake[0].x > 18 || snake[0].y > 18 || snake[0].x <= 0 || snake[0].y <= 0){
        return true
    }
}