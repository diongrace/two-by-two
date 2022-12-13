 var a = [11,2,11,2,5,6,7,8,12,10,8,12]
    //   .map(p => [P,Math.random()])
    //   .sort((a,b) => a[1-b[1]])
    //   .map( p => p[0])

 var assets = document.getElementsByTagName('img');

for(let i=0; i<assets.length; i++){

     assets[i].src = 'assets/pet' + a[i] + '.jpg';

 }
