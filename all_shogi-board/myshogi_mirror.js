//実験中なのでまだ使いません。

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
      this.picture = document.getElementByid(type);
    }
    get type(){
      return this._type;
    }
    set type(value){
      this._type = value;
    }
  }
  koma.prototype.FU_promote(){
    return TO;
  }
  let EMPTY = new koma("empty"),
      FU = new koma("fu"),
      KYO = new koma("kyo");

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
