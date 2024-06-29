function tree(h){
  for (let i = 0; i <= h; i++) {
    let star = '';
    for (let k = 0; k <= h - 1; k++) {
      star += " ";
    }
    for (let j = 0; j <= i; j++) {
      star += " *";
    }
    console.log(star);
  }
}

tree(5);

function drawTree(h) {
  for (var i = 0; i < h; i++) {
    var star = '';
    var space = (h - i);
    if (i == 0) {
      star += ' '.repeat(space + 1) + '\n';
    }
    star += ' '.repeat(space + 1);
    var zero = 2 * i + 1;
    star += '*'.repeat(zero);
    console.log(star);
  }
}
drawTree(5);