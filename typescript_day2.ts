function detec(union : (string | number) []) {
    let merge : string
    merge = union.join(" ")
    console.log(merge)
    return merge
}

detec([1, 'data', '3', 'result'])
detec(['Bejo', 'has', '4', 'sport', 'car'])

type Programmer = (string | number)[]

function detach(pg: Programmer) {
    return console.log(pg)
}

detach(["MaN", 9])