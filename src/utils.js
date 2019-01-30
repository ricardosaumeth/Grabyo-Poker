import poker from 'poker-hands';

export const values = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
export const suits = ["D", "H", "S", "C"];

export const getColourForSuit = suit => suit === "D" || suit === "H" ? "red" : "black";

export const checkWinner = allocatedDeck => {
  if (allocatedDeck && allocatedDeck.length === 2) {
    return check2Players(allocatedDeck);
  } else if (allocatedDeck && allocatedDeck.length === 3) {
    return check3Players(allocatedDeck);
  } else if (allocatedDeck && allocatedDeck.length === 4) {
    return check4Players(allocatedDeck);
  } if (allocatedDeck && allocatedDeck.length === 5) {
    return check5Players(allocatedDeck);
  } if (allocatedDeck && allocatedDeck.length === 6) {
    return check6Players(allocatedDeck);
  }
  
}

function check2Players(allocatedDeck) {
  let temp = [];
  let t1, t2;
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 5; j++) {
      temp.push(allocatedDeck[i][j].value + allocatedDeck[i][j].suit);
    }
  }
  t1 = temp.slice(0,5).join(' ');
  t2 = temp.slice(5,10).join(' ');
  if (poker.judgeWinner([t1, t2])) {
    return 1;
  } else {
    return 2;
  }
}

function check3Players(allocatedDeck) {
  let temp = [];
  let t1, t2, t3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 5; j++) {
      temp.push(allocatedDeck[i][j].value + allocatedDeck[i][j].suit);
    }
  }
  t1 = temp.slice(0,5).join(' ');
  t2 = temp.slice(5,10).join(' ');
  t3 = temp.slice(10,15).join(' ');

  const is_t1_Greater_Than_t2 = poker.judgeWinner([t1, t2]);
  const is_t1_Greater_Than_t3 = poker.judgeWinner([t1, t3]);

  const is_t2_Greater_Than_t1 = poker.judgeWinner([t2, t1]);
  const is_t2_Greater_Than_t3 = poker.judgeWinner([t2, t3]);

  const is_t3_Greater_Than_t1 = poker.judgeWinner([t3, t1]);
  const is_t3_Greater_Than_t2 = poker.judgeWinner([t3, t2]);

  if (is_t1_Greater_Than_t2 === 0 && is_t1_Greater_Than_t3 === 0) {
    return 1;
  } else if (is_t2_Greater_Than_t1 === 0 && is_t2_Greater_Than_t3 === 0) {
    return 2;
  } else if (is_t3_Greater_Than_t1 ===0 && is_t3_Greater_Than_t2 === 0) {
    return 3;
  }
}

function check4Players(allocatedDeck) {
  let temp = [];
  let t1, t2, t3, t4;
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 5; j++) {
      temp.push(allocatedDeck[i][j].value + allocatedDeck[i][j].suit);
    }
  }
  t1 = temp.slice(0,5).join(' ');
  t2 = temp.slice(5,10).join(' ');
  t3 = temp.slice(10,15).join(' ');
  t4 = temp.slice(15,20).join(' ');

  const is_t1_Greater_Than_t2 = poker.judgeWinner([t1, t2]);
  const is_t1_Greater_Than_t3 = poker.judgeWinner([t1, t3]);
  const is_t1_Greater_Than_t4 = poker.judgeWinner([t1, t4]);

  const is_t2_Greater_Than_t1 = poker.judgeWinner([t2, t1]);
  const is_t2_Greater_Than_t3 = poker.judgeWinner([t2, t3]);
  const is_t2_Greater_Than_t4 = poker.judgeWinner([t2, t4]);

  const is_t3_Greater_Than_t1 = poker.judgeWinner([t3, t1]);
  const is_t3_Greater_Than_t2 = poker.judgeWinner([t3, t2]);
  const is_t3_Greater_Than_t4 = poker.judgeWinner([t3, t4]);

  const is_t4_Greater_Than_t1 = poker.judgeWinner([t4, t1]);
  const is_t4_Greater_Than_t2 = poker.judgeWinner([t4, t2]);
  const is_t4_Greater_Than_t3 = poker.judgeWinner([t4, t3]);

  if (is_t1_Greater_Than_t2 === 0 && is_t1_Greater_Than_t3 === 0 && is_t1_Greater_Than_t4 === 0) {
    return 1;
  } else if (is_t2_Greater_Than_t1 === 0 && is_t2_Greater_Than_t3=== 0  && is_t2_Greater_Than_t4 === 0) {
    return 2;
  } else if (is_t3_Greater_Than_t1 === 0 && is_t3_Greater_Than_t2 === 0 && is_t3_Greater_Than_t4 === 0) {
    return 3;
  } else if (is_t4_Greater_Than_t1 === 0 && is_t4_Greater_Than_t2 === 0 && is_t4_Greater_Than_t3 === 0) {
    return 4;
  }
}

function check5Players(allocatedDeck) {
  let temp = [];
  let t1, t2, t3, t4, t5;
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      temp.push(allocatedDeck[i][j].value + allocatedDeck[i][j].suit);
    }
  }
  t1 = temp.slice(0,5).join(' ');
  t2 = temp.slice(5,10).join(' ');
  t3 = temp.slice(10,15).join(' ');
  t4 = temp.slice(15,20).join(' ');
  t5 = temp.slice(20,25).join(' ');

  const is_t1_Greater_Than_t2 = poker.judgeWinner([t1, t2]);
  const is_t1_Greater_Than_t3 = poker.judgeWinner([t1, t3]);
  const is_t1_Greater_Than_t4 = poker.judgeWinner([t1, t4]);
  const is_t1_Greater_Than_t5 = poker.judgeWinner([t1, t5]);

  const is_t2_Greater_Than_t1 = poker.judgeWinner([t2, t1]);
  const is_t2_Greater_Than_t3 = poker.judgeWinner([t2, t3]);
  const is_t2_Greater_Than_t4 = poker.judgeWinner([t2, t4]);
  const is_t2_Greater_Than_t5 = poker.judgeWinner([t2, t5]);

  const is_t3_Greater_Than_t1 = poker.judgeWinner([t3, t1]);
  const is_t3_Greater_Than_t2 = poker.judgeWinner([t3, t2]);
  const is_t3_Greater_Than_t4 = poker.judgeWinner([t3, t4]);
  const is_t3_Greater_Than_t5 = poker.judgeWinner([t3, t5]);

  const is_t4_Greater_Than_t1 = poker.judgeWinner([t4, t1]);
  const is_t4_Greater_Than_t2 = poker.judgeWinner([t4, t2]);
  const is_t4_Greater_Than_t3 = poker.judgeWinner([t4, t3]);
  const is_t4_Greater_Than_t5 = poker.judgeWinner([t4, t5]);

  const is_t5_Greater_Than_t1 = poker.judgeWinner([t5, t1]);
  const is_t5_Greater_Than_t2 = poker.judgeWinner([t5, t2]);
  const is_t5_Greater_Than_t3 = poker.judgeWinner([t5, t3]);
  const is_t5_Greater_Than_t4 = poker.judgeWinner([t5, t4]);

  if (is_t1_Greater_Than_t2 === 0 && is_t1_Greater_Than_t3 === 0 && is_t1_Greater_Than_t4 === 0 && is_t1_Greater_Than_t5 === 0) {
    return 1;
  } else if (is_t2_Greater_Than_t1 === 0 && is_t2_Greater_Than_t3=== 0  && is_t2_Greater_Than_t4 === 0 && is_t2_Greater_Than_t5 === 0) {
    return 2;
  } else if (is_t3_Greater_Than_t1 === 0 && is_t3_Greater_Than_t2 === 0 && is_t3_Greater_Than_t4 === 0 && is_t3_Greater_Than_t5 === 0) {
    return 3;
  } else if (is_t4_Greater_Than_t1 === 0 && is_t4_Greater_Than_t2 === 0 && is_t4_Greater_Than_t3 === 0 && is_t4_Greater_Than_t5 === 0) {
    return 4;
  } else if (is_t5_Greater_Than_t1 === 0 && is_t5_Greater_Than_t2 === 0 && is_t5_Greater_Than_t3 === 0 && is_t5_Greater_Than_t4 === 0) {
    return 5;
  }
}

function check6Players(allocatedDeck) {
  let temp = [];
  let t1, t2, t3, t4, t5, t6;
  for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 5; j++) {
      temp.push(allocatedDeck[i][j].value + allocatedDeck[i][j].suit);
    }
  }
  t1 = temp.slice(0,5).join(' ');
  t2 = temp.slice(5,10).join(' ');
  t3 = temp.slice(10,15).join(' ');
  t4 = temp.slice(15,20).join(' ');
  t5 = temp.slice(20,25).join(' ');
  t6 = temp.slice(25,30).join(' ');

  const is_t1_Greater_Than_t2 = poker.judgeWinner([t1, t2]);
  const is_t1_Greater_Than_t3 = poker.judgeWinner([t1, t3]);
  const is_t1_Greater_Than_t4 = poker.judgeWinner([t1, t4]);
  const is_t1_Greater_Than_t5 = poker.judgeWinner([t1, t5]);
  const is_t1_Greater_Than_t6 = poker.judgeWinner([t1, t6]);

  const is_t2_Greater_Than_t1 = poker.judgeWinner([t2, t1]);
  const is_t2_Greater_Than_t3 = poker.judgeWinner([t2, t3]);
  const is_t2_Greater_Than_t4 = poker.judgeWinner([t2, t4]);
  const is_t2_Greater_Than_t5 = poker.judgeWinner([t2, t5]);
  const is_t2_Greater_Than_t6 = poker.judgeWinner([t2, t6]);

  const is_t3_Greater_Than_t1 = poker.judgeWinner([t3, t1]);
  const is_t3_Greater_Than_t2 = poker.judgeWinner([t3, t2]);
  const is_t3_Greater_Than_t4 = poker.judgeWinner([t3, t4]);
  const is_t3_Greater_Than_t5 = poker.judgeWinner([t3, t5]);
  const is_t3_Greater_Than_t6 = poker.judgeWinner([t3, t6]);

  const is_t4_Greater_Than_t1 = poker.judgeWinner([t4, t1]);
  const is_t4_Greater_Than_t2 = poker.judgeWinner([t4, t2]);
  const is_t4_Greater_Than_t3 = poker.judgeWinner([t4, t3]);
  const is_t4_Greater_Than_t5 = poker.judgeWinner([t4, t5]);
  const is_t4_Greater_Than_t6 = poker.judgeWinner([t4, t6]);

  const is_t5_Greater_Than_t1 = poker.judgeWinner([t5, t1]);
  const is_t5_Greater_Than_t2 = poker.judgeWinner([t5, t2]);
  const is_t5_Greater_Than_t3 = poker.judgeWinner([t5, t3]);
  const is_t5_Greater_Than_t4 = poker.judgeWinner([t5, t4]);
  const is_t5_Greater_Than_t6 = poker.judgeWinner([t5, t6]);

  const is_t6_Greater_Than_t1 = poker.judgeWinner([t6, t1]);
  const is_t6_Greater_Than_t2 = poker.judgeWinner([t6, t2]);
  const is_t6_Greater_Than_t3 = poker.judgeWinner([t6, t3]);
  const is_t6_Greater_Than_t4 = poker.judgeWinner([t6, t4]);
  const is_t6_Greater_Than_t5 = poker.judgeWinner([t6, t5]);

  if (is_t1_Greater_Than_t2 === 0 && is_t1_Greater_Than_t3 === 0 && is_t1_Greater_Than_t4 === 0 && is_t1_Greater_Than_t5 === 0 && is_t1_Greater_Than_t6 === 0) {
    return 1;
  } else if (is_t2_Greater_Than_t1 === 0 && is_t2_Greater_Than_t3=== 0  && is_t2_Greater_Than_t4 === 0 && is_t2_Greater_Than_t5 === 0 && is_t2_Greater_Than_t6 === 0) {
    return 2;
  } else if (is_t3_Greater_Than_t1 === 0 && is_t3_Greater_Than_t2 === 0 && is_t3_Greater_Than_t4 === 0 && is_t3_Greater_Than_t5 === 0 && is_t3_Greater_Than_t6 === 0) {
    return 3;
  } else if (is_t4_Greater_Than_t1 === 0 && is_t4_Greater_Than_t2 === 0 && is_t4_Greater_Than_t3 === 0 && is_t4_Greater_Than_t5 === 0 && is_t4_Greater_Than_t6 === 0) {
    return 4;
  } else if (is_t5_Greater_Than_t1 === 0 && is_t5_Greater_Than_t2 === 0 && is_t5_Greater_Than_t3 === 0 && is_t5_Greater_Than_t4 === 0 && is_t5_Greater_Than_t6 === 0) {
    return 5;
  } else if (is_t6_Greater_Than_t1 === 0 && is_t6_Greater_Than_t2 === 0 && is_t6_Greater_Than_t3 === 0 && is_t6_Greater_Than_t4 === 0 && is_t6_Greater_Than_t5 === 0) {
    return 6;
  }
}
