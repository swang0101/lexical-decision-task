/****************************** 
 * Lexical_Decision_Task Test *
 ******************************/

import { PsychoJS } from './lib/core-3.0.0b11.js';
import * as core from './lib/core-3.0.0b11.js';
import { TrialHandler } from './lib/data-3.0.0b11.js';
import { Scheduler } from './lib/util-3.0.0b11.js';
import * as util from './lib/util-3.0.0b11.js';
import * as visual from './lib/visual-3.0.0b11.js';
import { Sound } from './lib/sound-3.0.0b11.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'use prefs'
});

// store info about the experiment session:
let expName = 'lexical_decision_task';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(InstructionsRoutineBegin);
flowScheduler.add(InstructionsRoutineEachFrame);
flowScheduler.add(InstructionsRoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(EndRoutineBegin);
flowScheduler.add(EndRoutineEachFrame);
flowScheduler.add(EndRoutineEnd);
flowScheduler.add(quitPsychoJS, true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, false);

psychoJS.start({configURL: 'config.json', expInfo: expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.0.0b12';

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var InstructionsClock;
var instructions;
var TrialClock;
var fixation;
var text;
var arrow_keys;
var EndClock;
var thank_you;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "Instructions"
  InstructionsClock = new util.Clock();
  instructions = new visual.TextStim({
    win : psychoJS.window,
    name : 'instructions',
    text : 'In this task you will be required to judge whether a string of letters is a word or a non-word. Press left arrow key for non-words and right arrow key for words. Please respond as quickly as possible. Press space to continue.',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  // Initialize components for Routine "Trial"
  TrialClock = new util.Clock();
  fixation = new visual.TextStim({
    win : psychoJS.window,
    name : 'fixation',
    text : '+',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  text = new visual.TextStim({
    win : psychoJS.window,
    name : 'text',
    text : 'default text',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -1.0 
  });
  
  arrow_keys = new visual.TextStim({
    win : psychoJS.window,
    name : 'arrow_keys',
    text : '<- non-words        words ->',
    font : 'Arial',
    pos : [0, (- 0.75)], height : 0.05,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : -3.0 
  });
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  thank_you = new visual.TextStim({
    win : psychoJS.window,
    name : 'thank_you',
    text : 'This is the end of the experiment.\n\nThank you for your time.',
    font : 'Arial',
    pos : [0, 0], height : 0.1,  wrapWidth : undefined, ori: 0,
    color : new util.Color('white'),  opacity : 1,
    depth : 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var key_resp_1;
var InstructionsComponents;
function InstructionsRoutineBegin() {
  //------Prepare to start Routine 'Instructions'-------
  t = 0;
  InstructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  key_resp_1 = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  InstructionsComponents = [];
  InstructionsComponents.push(instructions);
  InstructionsComponents.push(key_resp_1);
  
  for (const thisComponent of InstructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var continueRoutine;
function InstructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'Instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = InstructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *instructions* updates
  if (t >= 0.0 && instructions.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    instructions.tStart = t;  // (not accounting for frame time here)
    instructions.frameNStart = frameN;  // exact frame index
    instructions.setAutoDraw(true);
  }
  
  // *key_resp_1* updates
  if (t >= 0.0 && key_resp_1.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    key_resp_1.tStart = t;  // (not accounting for frame time here)
    key_resp_1.frameNStart = frameN;  // exact frame index
    key_resp_1.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(key_resp_1.clock.reset) // t = 0 on screen flip
    psychoJS.eventManager.clearEvents({eventType:'keyboard'});
  }
  if (key_resp_1.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['space']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      key_resp_1.keys = theseKeys[theseKeys.length-1]  // just the last key pressed
      key_resp_1.rt = key_resp_1.clock.getTime();
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of InstructionsComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function InstructionsRoutineEnd() {
  //------Ending Routine 'Instructions'-------
  for (const thisComponent of InstructionsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // check responses
  if (['', [], undefined].indexOf(key_resp_1.keys) >= 0) {    // No response was made
      key_resp_1.keys = undefined;
  }
  psychoJS.experiment.addData('key_resp_1.keys', key_resp_1.keys);
  if (key_resp_1.keys != undefined) {  // we had a response
      psychoJS.experiment.addData('key_resp_1.rt', key_resp_1.rt);
      routineTimer.reset();
      }
  // the Routine "Instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS,
    nReps: 1, method: TrialHandler.Method.RANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'experimental_trials.xlsx',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(TrialRoutineBegin);
    thisScheduler.add(TrialRoutineEachFrame);
    thisScheduler.add(TrialRoutineEnd);
    thisScheduler.add(endLoopIteration(thisTrial));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var response;
var TrialComponents;
function TrialRoutineBegin() {
  //------Prepare to start Routine 'Trial'-------
  t = 0;
  TrialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  text.setText(words);
  response = new core.BuilderKeyResponse(psychoJS);
  // keep track of which components have finished
  TrialComponents = [];
  TrialComponents.push(fixation);
  TrialComponents.push(text);
  TrialComponents.push(response);
  TrialComponents.push(arrow_keys);
  
  for (const thisComponent of TrialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var frameRemains;
function TrialRoutineEachFrame() {
  //------Loop for each frame of Routine 'Trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = TrialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *fixation* updates
  if (t >= 0.0 && fixation.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    fixation.tStart = t;  // (not accounting for frame time here)
    fixation.frameNStart = frameN;  // exact frame index
    fixation.setAutoDraw(true);
  }
  frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (fixation.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    fixation.setAutoDraw(false);
  }
  
  // *text* updates
  if (t >= 1 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }
  
  // *response* updates
  if (t >= 1 && response.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    response.tStart = t;  // (not accounting for frame time here)
    response.frameNStart = frameN;  // exact frame index
    response.status = PsychoJS.Status.STARTED;
    // keyboard checking is just starting
    psychoJS.window.callOnFlip(response.clock.reset) // t = 0 on screen flip
  }
  if (response.status === PsychoJS.Status.STARTED) {
    let theseKeys = psychoJS.eventManager.getKeys({keyList:['right', 'left']});
    
    // check for quit:
    if ("escape" in theseKeys) {
        psychoJS.experiment.experimentEnded = true;
    }
    if (theseKeys.length > 0) {  // at least one key was pressed
      response.keys = theseKeys[theseKeys.length-1]  // just the last key pressed
      response.rt = response.clock.getTime();
      // was this 'correct'?
      if (response.keys == corrAns) {
          response.corr = 1;
      } else {
          response.corr = 0;
      }
      // a response ends the routine
      continueRoutine = false;
    }
  }
  
  // *arrow_keys* updates
  if (t >= 0.0 && arrow_keys.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    arrow_keys.tStart = t;  // (not accounting for frame time here)
    arrow_keys.frameNStart = frameN;  // exact frame index
    arrow_keys.setAutoDraw(true);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of TrialComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function TrialRoutineEnd() {
  //------Ending Routine 'Trial'-------
  for (const thisComponent of TrialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // check responses
  if (['', [], undefined].indexOf(response.keys) >= 0) {    // No response was made
      response.keys = undefined;
  }
  // was no response the correct answer?!
  if (response.keys == undefined) {
    if (psychoJS.str(corrAns).toLowerCase() == 'none') {
       response.corr = 1  // correct non-response
    } else {
       response.corr = 0  // failed to respond (incorrectly)
    }
  }
  // store data for thisExp (ExperimentHandler)
  psychoJS.experiment.addData('response.keys', response.keys);
  psychoJS.experiment.addData('response.corr', response.corr);
  if (response.keys != undefined) {  // we had a response
      psychoJS.experiment.addData('response.rt', response.rt);
      routineTimer.reset();
      }
  // the Routine "Trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var EndComponents;
function EndRoutineBegin() {
  //------Prepare to start Routine 'End'-------
  t = 0;
  EndClock.reset(); // clock
  frameN = -1;
  routineTimer.add(3.000000);
  // update component parameters for each repeat
  // keep track of which components have finished
  EndComponents = [];
  EndComponents.push(thank_you);
  
  for (const thisComponent of EndComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function EndRoutineEachFrame() {
  //------Loop for each frame of Routine 'End'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = EndClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *thank_you* updates
  if (t >= 0.0 && thank_you.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    thank_you.tStart = t;  // (not accounting for frame time here)
    thank_you.frameNStart = frameN;  // exact frame index
    thank_you.setAutoDraw(true);
  }
  frameRemains = 0.0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
  if (thank_you.status === PsychoJS.Status.STARTED && t >= frameRemains) {
    thank_you.setAutoDraw(false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  continueRoutine = false;// reverts to True if at least one component still running
  for (const thisComponent of EndComponents)
    if ('status' in thisComponent && thisComponent.status != PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  // check for quit (the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    psychoJS.quit('The [Escape] key was pressed. Goodbye!');
  }
  
  // refresh the screen if continuing
  if (continueRoutine && routineTimer.getTime() > 0) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEnd() {
  //------Ending Routine 'End'-------
  for (const thisComponent of EndComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  return Scheduler.Event.NEXT;
}


function endLoopIteration(thisTrial) {
  // ------Prepare for next entry------
  return function () {
    if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(isCompleted) {
  psychoJS.window.close();
  psychoJS.quit({isCompleted});

  return Scheduler.Event.QUIT;
}
