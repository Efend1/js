var sum=0;

for(i=4; i<8; i++) {
  if (i == 6) {
    continue;
  }
  sum += i;
}

console.log(sum);