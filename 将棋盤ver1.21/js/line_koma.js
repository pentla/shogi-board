
//数値は全てkomaTypeの数字。
//0 何もないマス。 1 ~ 14 先手の駒。  15 ~ 28 後手の駒。
//歩、香、桂、銀、角、飛車 + 1 === 成り駒。

//将棋の最初の配置。
function line_koma(koma,board81){
  for(let i = 1;i <= 9; i++){
    board81[i][7] = koma.FU;
    board81[i][3] = koma.FU_;
  }
  board81[1][9] = koma.KYO;
  board81[9][9] = koma.KYO;
  board81[2][9] = koma.KEI;
  board81[8][9] = koma.KEI;
  board81[3][9] = koma.GIN;
  board81[7][9] = koma.GIN;
  board81[6][9] = koma.KIN;
  board81[4][9] = koma.KIN;
  board81[2][8] = koma.HI;
  board81[8][8] = koma.KAKU;
  board81[5][9] = koma.GYOKU;

  board81[1][1] = koma.KYO_;
  board81[9][1] = koma.KYO_;
  board81[2][1] = koma.KEI_;
  board81[8][1] = koma.KEI_;
  board81[3][1] = koma.GIN_;
  board81[7][1] = koma.GIN_;
  board81[6][1] = koma.KIN_;
  board81[4][1] = koma.KIN_;
  board81[8][2] = koma.KAKU_;
  board81[2][2] = koma.HI_;
  board81[5][1] = koma.GYOKU_;

  //この行なくても動くからいらないのかな？
  return board81;
};
