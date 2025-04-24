
const jsPsych = initJsPsych();

var hello_trial = {
  type: 'html-keyboard-response',
  stimulus: '<h2>Hello! jsPsych is working 🎉<br><br>Press any key to finish.</h2>'
};

jsPsych.run([hello_trial]);
