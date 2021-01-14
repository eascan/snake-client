/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function(key) {
      if (key === '\u0003') {
        process.exit();
      }
    }
  
  stdin.on('data', (info) => handleUserInput(info))

  return stdin;

}

module.exports = {
  setupInput
}