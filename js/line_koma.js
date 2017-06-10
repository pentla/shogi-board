
//将棋の最初の配置。
function line_koma(koma,board){
  for(var i = 1;i <= 9; i++){
    board[i][7] = koma.FU;
    board[i][3] = koma.FU_;
  }
  board[1][9] = koma.KYO;
  board[9][9] = koma.KYO;
  board[2][9] = koma.KEI;
  board[8][9] = koma.KEI;
  board[3][9] = koma.GIN;
  board[7][9] = koma.GIN;
  board[6][9] = koma.KIN;
  board[4][9] = koma.KIN;
  board[2][8] = koma.HI;
  board[8][8] = koma.KAKU;
  board[5][9] = koma.GYOKU;

  board[1][1] = koma.KYO_;
  board[9][1] = koma.KYO_;
  board[2][1] = koma.KEI_;
  board[8][1] = koma.KEI_;
  board[3][1] = koma.GIN_;
  board[7][1] = koma.GIN_;
  board[6][1] = koma.KIN_;
  board[4][1] = koma.KIN_;
  board[2][2] = koma.KAKU_;
  board[8][2] = koma.HI_;
  board[5][1] = koma.GYOKU_;

}
