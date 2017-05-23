//クラスを使って書き直し

function Record(){
    for(let x = 1; x <= 9 ;x++){
        this.cell[x] = [];
    for(let y = 1; y <= 9 ;y++){
        this.cell[x][y] = 0;
    }
    }
}

function Board(){

    this.init();
    this.buildBoard();
}

Board.prototype.init = function(){
    this.sente = true;
    this.cell = [];
    //9 * 9マスを作り、変数cellに入れる。
    ban:            document.getElementById("ban"),
    sente_komadai:  document.getElementById("senteKomadai"),
    gote_komadai:   document.getElementById("goteKomadai"),
    senteText:      document.getElementById("senteText"),
    goteText:       document.getElementById("goteText"),
    EMPTY:          0,
};
Board.prototype.buildBoard = function(){
    while(ban.firstChild){
      ban.removeChild(ban.firstChild);
    }
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
Board.prototype.generateKoma = function(){
    var
}
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
Koma.prototype.appendChild = function(){

};
for(){
    var "fu" + i = new Koma();
}
var Fu = new Koma();
Fu.prototype.move (){

}
var Fu2;
var Fu3;
var Fu4;
var Fu5;

var game = new Shogi_game();
