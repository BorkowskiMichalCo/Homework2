function starTree(height) {
    for(let i = 0; i <height; i++){
        let star = '*'
        const space = ' ';

        for(let j = 1; j<=i; j++){
            star = star + '**';
        }
        let spacesBefore = space.repeat(height - i - 1);
        star = spacesBefore + star;
        console.log(star);
    }
}

let stars = parseInt(prompt("Podaj wysokość choinki"),10);
starTree(stars)