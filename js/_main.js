//クラスを使って書き直し

function Board(){
    this.sente = true;
    this.firstMakeBoard();
}
Board.prototype = {
    ban:            document.getElementById("ban"),
    banInit: function(){
        while(ban.firstChild){
          ban.removeChild(ban.firstChild);
        }
    },
    sente_komadai:  document.getElementById("senteKomadai"),
    gote_komadai:   document.getElementById("goteKomadai"),
    senteText:      document.getElementById("senteText"),
    goteText:       document.getElementById("goteText"),
}
Board.prototype.firstMakeBoard = function(){
    this.init();
    this.lineKoma();
    this.buildBoard();
}
Board.prototype.init = function(){
    //9 * 9マスを作り、変数cellに入れます。
    for(let x = 1; x <= 9 ;x++){
        this.cell[x] = [];
    for(let y = 1; y <= 9 ;y++){
        this.cell[x][y] = Koma.EMPTY;
    }
    }
    return this.cell;
};
Board.prototype.lineKoma = function(){
    for(let i = 1;i <= 9; i++){
      this.cell[i][7] = Koma.FU;
      this.cell[i][3] = Koma.FU_;
    }
    this.cell[1][9] = Koma.KYO;
    this.cell[9][9] = Koma.KYO;
    this.cell[2][9] = Koma.KEI;
    this.cell[8][9] = Koma.KEI;
    this.cell[3][9] = Koma.GIN;
    this.cell[7][9] = Koma.GIN;
    this.cell[6][9] = Koma.KIN;
    this.cell[4][9] = Koma.KIN;
    this.cell[2][8] = Koma.HI;
    this.cell[8][8] = Koma.KAKU;
    this.cell[5][9] = Koma.GYOKU;

    this.cell[1][1] = Koma.KYO_;
    this.cell[9][1] = Koma.KYO_;
    this.cell[2][1] = Koma.KEI_;
    this.cell[8][1] = Koma.KEI_;
    this.cell[3][1] = Koma.GIN_;
    this.cell[7][1] = Koma.GIN_;
    this.cell[6][1] = Koma.KIN_;
    this.cell[4][1] = Koma.KIN_;
    this.cell[2][2] = Koma.KAKU_;
    this.cell[8][2] = Koma.HI_;
    this.cell[5][1] = Koma.GYOKU_;
}
Board.prototype.buildBoard = function(){
    var tmp = document.createDocumentFragment();
    for( let y = 1; y <= 9 ; y++){
    for( let x = 1; x <= 9 ; x++){
      let c;
      c = komaPicture[this.cell[x][y]].cloneNode(true);
      c.style.right = ((x-1) * 36 )+ 'px';
      c.style.top =  ((y-1) * 39 )+ 'px';
      select_or_move_koma(x,y,c);
      tmpDocumentFragment.appendChild(c);
    }
    }
    ban.appendChild(tmpDocumentFragment);
  };
};
Board.prototype.changeSente = function(){
    this.sente = !this.sente;
};





function Koma(){

}
Koma.prototype.name = {
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
};
