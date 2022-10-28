function detec(str : string, numA : number, numB : number): string {
    let case1:string = str.slice(numB, numA);
        console.log(case1);
        return case1;
    }
    detec('Learning Typescript is different than Javascript', 19, 9);
    
    console.log('it shows results as you type')