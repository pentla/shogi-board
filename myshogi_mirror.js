//実験中なのでまだ使いません。

//banのなかにboard81を形成する関数をすべて入れる。

//komaを大量生産する。
var KomaName = function(){
  this.EMPTY =          0;
  this.senteMin =       1;
  this.senteMax =      14;
  this.goteMin  =      15;
  this.goteMax  =      28;
  this.promote  =       1;   //歩、香、桂、銀、角、飛車 + 1 === 成り駒。

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
}
var koma = new KomaName();

  ban = document.getElementById("ban");
  sente_komadai = document.getElementById("sente_komadai");
  gote_komadai = document.getElementById("gote_komadai");

  class Ban {
    constructor(){
      this.placeImfomation = board81[];
      this.teban = true;
      this.senteKomadai = document.getElementById("senteKomadai")
    }
    //クラス内変数として@@でboard81、sentekomadai,gotekomadaiを管理したい
  }
  class koma {
    constructor(type){
      this.type = type;
      // this.number = number;
      this.selected = false;
      this.picture = document.getElementByid(type);//stringで保持したい。
    }
    get: function(){
      return this.type_;
    }
    set: function(value){
      this.type_ = value;
    }
    

  } //class koma


  let EMPTY = new koma("empty"),
      FU = new koma("fu"),
      KYO = new koma("kyo");

      FU.moving = function(x,y){

      }

  let virtualBan = [];
  function make_virtualBan(){
    for(let x = 1;x > 9; x++){
      virtualban[x] = [];
    for(let y = 1;x > 9; y++){
      virtualBan[x][y] = EMPTY;
    }
    }
  }

//まずは駒を大量生産する。

//９＊９の二重配列を作る。
//出来た配列は、盤の状態をjavascriptの中で管理したい。
//その配列に従ってkoma.picture.cloneNode(true)を入れて行く。(writeboard)

//koma.pictureにはaddeventlistenerでルールを各自設定しておく。
//promote、rule(),motigomaruleなど。
