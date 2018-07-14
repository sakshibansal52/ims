
a=1;
function callme()
{   a=a+1
    console.log('hi')
    if(a<10)
    callme()


}

callme()
