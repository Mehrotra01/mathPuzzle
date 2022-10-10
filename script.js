class Box{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    getTopBox(){
        if(this.y===0)
            return null;
        return new Box(this.x,this.y-1);
    }
    getRightBox(){
        if(this.x===3){
            return null;
        }
        return new Box(this.x+1,this.y);
    }
    getBottomBox(){
        if(this.y===3){
            return null;

        }
        return new Box(this.x,this.y+1);
    }
    getLeftBox(){
        if(this.x===0){
            return null;

        }
        return new Box(this.x-1,this.y);
    }
    getNextDoorBoxes(){
        return[
            this.getLeftBox()
            ,this.getBottomBox(),
            this.getRightBox(),
            this.getTopBox,
        ].filter((box)=>box!==null)
    }
    getRandomNextDoorBoxes(){
        const nextDoorBox=this.getNextDoorBoxes();
        return nextDoorBox[Math.floor(Math.random() *nextDoorBox.length)]
    }
}
const swapBoxes =(grid, box1,box2)=>{
    const temp = grid[box1.y][box1.x]; //y=rows,x=col
    grid[box1.y][box1.x] =grid[box2.y][box2.x];
    grid[box2.y][box2.x] =temp;

}

const isSolved = (grid)=>{
    return (
        grid[0][0]===1 &&
        grid[0][1]===2 &&
        grid[0][2]===3 &&
        grid[0][3]===4 &&
        grid[1][0]===5 &&
        grid[1][1]===6 &&
        grid[1][2]===7 &&
        grid[1][3]===8 &&
        grid[2][0]===9 &&
        grid[2][1]===10 &&
        grid[2][2]===11 &&
        grid[2][3]===12 &&
        grid[3][0]===13 &&
        grid[3][1]===14 &&
        grid[3][2]===15 &&
        grid[3][3]===0
    )

}

const getRandomGrid=()=>{
    let grid=[
        [1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,0],
    ]

    let blankBox = new Box(3,3);
    for(let i=0;i<1000;i++){
        const randomNextDoorBox = blankBox.getRandomNextDoorBoxes();
        swapBoxes(grid,blankBox,randomNextDoorBox);
        blankBox=randomNextDoorBox;

    }
    if(isSolved(grid)) return getRandomGrid();
    return grid;
}

class State{
    
}