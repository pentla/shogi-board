//クラスを使って書き直し

function Board(){
    this.sente = true;
    this.cell = [];

    this.init();
    this.buildBoard();
}
Board.prototype.firstProcedure = function(){

};
Board.prototype = {
    banInit: function(){
        while(ban.firstChild){
          ban.removeChild(ban.firstChild);
        }
    },
    ban:            document.getElementById("ban"),
    sente_komadai:  document.getElementById("senteKomadai"),
    gote_komadai:   document.getElementById("goteKomadai"),
    senteText:      document.getElementById("senteText"),
    goteText:       document.getElementById("goteText"),
    EMPTY:          0,
};

Board.prototype.init = function(){
    //9 * 9マスを作り、変数cellに入れる。
    for(let x = 1; x <= 9 ;x++){
        this.cell[x] = [];
    for(let y = 1; y <= 9 ;y++){
        this.cell[x][y] = this.EMPTY;
    }
    }
    return this.cell;
};
Board.prototype.buildBoard = function(){
    this.banInit();
    //cellの情報をコピーして、それに応じた盤を生成する。
    var empty = document.getElementById("square");
    var tmp = document.createDocumentFragment();
    for( let y = 1; y <= 9 ; y++){
    for( let x = 1; x <= 9 ; x++){
        var c = empty.cloneNode(true);
        c.style.right = ((x-1) * 36 )+ 'px';
        c.style.top =   ((y-1) * 39 )+ 'px';
        tmp.appendChild(c);
    }
    }
    ban.appendChild(tmp);
  };

Board.prototype.changeSente = function(){
    this.sente = !this.sente;
};
var board = new Board();




function Koma(name, member, position_x, position_y){
    this.name = name;
    this.picture;
    this.member;
    this.position;

    this.getPicture();
}
Koma.prototype.getPicture = function(){
    var id = this.member === "sente" ? this.name : "_" + this.name;
    this.picture = document.getElementById(id);
};
Koma.prototype.append = function(){

};
var Fu1 = new Koma("koma","sente",3,3);
// Koma.prototype.name = {
//     this.EMPTY =          0;
//
//     this.FU    =          1;
//     this.TO    =          2;
//     this.KYO   =          3;
//     this.NKYO  =          4;
//     this.KEI   =          5;
//     this.NKEI  =          6;
//     this.GIN   =          7;
//     this.NGIN  =          8;
//     this.KIN   =          9;
//     this.HI    =         10;
//     this.RYU   =         11;
//     this.KAKU  =         12;
//     this.UMA   =         13;
//     this.GYOKU =         14;
//
//     this.FU_   =         15;
//     this.TO_   =         16;
//     this.KYO_  =         17;
//     this.NKYO_ =         18;
//     this.KEI_  =         19;
//     this.NKEI_ =         20;
//     this.GIN_  =         21;
//     this.NGIN_ =         22;
//     this.KIN_  =         23;
//     this.HI_   =         24;
//     this.RYU_  =         25;
//     this.KAKU_ =         26;
//     this.UMA_  =         27;
//     this.GYOKU_=         28;
//
//     this.senteMin =       1;
//     this.senteMax =      14;
//     this.goteMin  =      15;
//     this.goteMax  =      28;
//     this.promote  =       1;   //歩、香、桂、銀、角、飛車 + 1 === 成り駒。
//     this.narigoma = [2,4,6,8,11,13,16,18,20,22,25,27];
// };
