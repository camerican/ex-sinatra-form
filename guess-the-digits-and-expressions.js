const guessExpression = e => replaceNums.apply(null,e.match( /\s*([^\s]+)\s*\*\s*([^\s]+)\s*-+\s*=\s*(\d+)$/ ).slice(1))
const replaceNums = (a,b,c,remaining,used) => {
  let first = false;
  if( typeof remaining === "undefined" ) { 
    remaining = (a+b).split('').filter( (c,i,a) => !a.slice(0,i).includes(c) ).length;
    first = true;
  }
  if( typeof used === "undefined" ) used = [];
  if( !remaining ) return +a * +b === +c ? a + " * " + b + " = " + c : "";
  let s = "", next = (a+b).match(/\D/);
  for( let i=~~first; i<=9 && !s; i++ ) {
    if( used.includes(i) ) continue; // don't repeat numbers
    if( used.length >= a.length && +a * +("9".repeat(b.length)) > +c ) break;
    let r = new RegExp( next[0], "g" );
    s = replaceNums(a.replace( r, i ),b.replace( r, i ),c,remaining-1,used.concat(i));
  }
  return s;
}






const guessExpression = e => replaceNums.apply(null,e.match( /\s*([^\s]+)\s*\*\s*([^\s]+)\s*-+\s*=\s*(\d+)$/ ).slice(1))
const replaceNums = (a,b,c,remaining) => {
  let first = false;
  if( typeof remaining === "undefined" ) { 
    remaining = (a+b).split('').filter( (c,i,a) => !a.slice(0,i).includes(c) ).length;
    first = true;
  }
  if( !remaining ) return +a * +b === +c ? a + " * " + b + " = " + c : "";
  let s = "", next = (a+b).match(/\D/);
  for( let i=~~first; i<=9 && !s; i++ ) {
    let r = new RegExp( next[0], "g" );
    s = replaceNums(a.replace( r, i ),b.replace( r, i ),c,remaining-1);
  }
  return s;
}

"9".repeat(b.length);








const guessExpression = e => {
  let [a,b,c] = e.match( /\s*([^\s]+)\s*\*\s*([^\s]+)\s*-+\s*=\s*(\d+)$/ ).slice(1);
  for( let i=0, ta=a, tb=b; i<a.concat(b).filter( (c,i,a) => !a.slice(0,i).includes(c) ).length; i++ ) {
    let r = new RegExp( a[i], "g" );
    ta.replace( r, i );
    tb.replace( r, i );
    for( let j=0; j<b.length; j++ ) {

    }
  }
}
const replaceNums = (a,b,c,remaining) => {
  console.log( a,b,c,remaining );
  if( !remaining ) return +a * +b === +c ? a + " * " + b + " = " + c : "";
  let s = "", next = (a+b).match(/\D/);
  for( let i=0; i<9 && !s; i++ ) {
    let r = new RegExp( next[0], "g" );
    console.log( r, a.replace( r, i ) );
    s = replaceNums(a.replace( r, i ),b.replace( r, i ),c,remaining-1);
  }
  return s;
}


replaceNums("ABC","CBA",39483,3)


let exp = `    BDAC
*     CC
---------
= 165264`

// expects "7512 * 22 = 165264"

// unique 
[1,2].concat([2,1]).filter( (c,i,a) => !a.slice(0,i).includes(c) )