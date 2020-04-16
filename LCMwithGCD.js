function findLcm(n) {
  n.sort(function(a, b) {
    return a - b;
  });

  let min = n[0];
  let max = n[1];
  let range = [];
    
  for (let i = min; i <= max; i++) {
    range.push(i);
  }

  let lcm = range[0];
  
  for (i = 1; i < range.length; i++) {
    let GCD = gcd(lcm, range[i]);
    lcm = (lcm * range[i]) / GCD;
  }
  return lcm;
}

function gcd(x,y) {
  if (y == 0) {
    return x;
  } else {
    return gcd(y, x%y);
  }
}
