//クラスを使って書き直し

function board(){
    this.sente = true;
    this.cell = [];


    buildBoard(cell);
}
board.prototype.name = {
    this.EMPTY =          0;

    this.FU    =          1;
    this.TO    =          2;
    this.KYO   =          3;
    this.NKYO  =          4;
    this.KEI   =          5;
    this.NKEI  =          6;
    this.GIN   =          7;
    this.NGIN  =          8;
    this.KIN   =          9;
    this.HI    =         10;
    this.RYU   =         11;
    this.KAKU  =         12;
    this.UMA   =         13;
    this.GYOKU =         14;

    this.FU_   =         15;
    this.TO_   =         16;
    this.KYO_  =         17;
    this.NKYO_ =         18;
    this.KEI_  =         19;
    this.NKEI_ =         20;
    this.GIN_  =         21;
    this.NGIN_ =         22;
    this.KIN_  =         23;
    this.HI_   =         24;
    this.RYU_  =         25;
    this.KAKU_ =         26;
    this.UMA_  =         27;
    this.GYOKU_=         28;

    this.senteMin =       1;
    this.senteMax =      14;
    this.goteMin  =      15;
    this.goteMax  =      28;
    this.promote  =       1;   //歩、香、桂、銀、角、飛車 + 1 === 成り駒。
    this.narigoma = [2,4,6,8,11,13,16,18,20,22,25,27];
}
board.prototype.initialize = function(){
    for(let x = 1; x <= 9 ;x++){
      cell[x] = [];
    for(let y = 1; y <= 9 ;y++){
      board81[x][y] = koma.EMPTY;
    }
    }
}
board.prototype.buildBoard = function(){

}
