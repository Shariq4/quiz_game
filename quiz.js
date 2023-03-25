function planet(type) {
  if (type === 'venus') {
    document.getElementById('div-1').className = 'hidden';
    document.getElementById('div-2').className = 'show';
  }
  else if (type === 'sun ', 'jupiter', 'mars') {
    document.getElementById('div-1').className = 'hidden';
    document.getElementById('gameOverImg').className = 'show';
  }
}

function company(type) {
  if (type === 'nokia') {
    document.getElementById('div-2').className = 'hidden';
    document.getElementById('div-3').className = 'show';
  }
  else if (type === 'apple', 'samsung', 'oppo') {
    document.getElementById('div-2').className = 'hidden';
    document.getElementById('gameOverImg-1').className = 'show';
  }
}

function days(type) {
  if (type === '365') {
    document.getElementById('div-3').className = 'hidden';
    document.getElementById('div-4').className = 'show';
  }
  else if (type === '377', '345', '634') {
    document.getElementById('div-3').className = 'hidden';
    document.getElementById('gameOverImg-2').className = 'show';
  }
}

function city(type) {
  if (type === 'karachi') {
    document.getElementById('div-4').className = 'hidden';
    document.getElementById('div-5').className = 'show';
  }
  else if (type === 'lahore', 'gilgit', 'quetta') {
    document.getElementById('div-4').className = 'hidden';
    document.getElementById('gameOverImg-3').className = 'show';
  }
}

function animal(type) {
  if (type === 'markhor') {
    document.getElementById('div-5').className = 'hidden';
    document.getElementById('div-6').className = 'show';
  }
  else if (type === 'indusRiverDolphin', 'snowLeopard', 'tiger') {
    document.getElementById('div-5').className = 'hidden';
    document.getElementById('gameOverImg-4').className = 'show';
  }
}