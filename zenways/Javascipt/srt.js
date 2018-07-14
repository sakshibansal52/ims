function strjoin(a,b){
    return a+b;
}

console.log(strjoin('abc','def'))


function joinstr(para1, para2){
    if((typeof para1 == typeof para2)  &&  (typeof para1 == 'string'))
    return para1+ para2

    else 
    return false
}

console.log(joinstr('sakshi','bansal'))

console.log(joinstr('sakshi',22))


function namesplit(name){
    let splitname = name.split('@')
    console.log(splitname)

    console.log(splitname[0][0].toUpperCase())
}

   

namesplit('sakshibansal.52@gmail.com')




