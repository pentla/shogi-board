import Koma from './img.js';

class Board {
  constructor() {
    this.dom = {
      board: document.getElementById('ban'),
      piecestand_sente: document.getElementById("komadai-sente"),
      piecestand_gote:  document.getElementById("komadai-gote"),
      txt_sente: document.getElementById("text-sente"),
      txt_gote:  document.getElementById("text-gote")
    };
    this.state = {
      this.position: [];
      selected: false,
      captureSelected: false,
      turn: 'sente'
      pieceStand: {
        sente: [],
        gote: []
      }
    }
    this.koma = Koma;
  }
}

class Koma {
  constructor() {
    this.img = img;
    this.position = {
      x: 0,
      y: 0
    };
    this.type = 'fu';
    this.owner = 'sente'; 
    this.isPromoted = false;
  }
}

//  位置変更時に毎回呼ぶ関数
this.render();

//  位置を変更するための変数
this.setPosition();


//  in eventlistener

//  駒をセットする
this.selectPiece();

//  駒を動かす
this.movePiece();

//  駒をとる
this.capturePiece()

//  駒を置く
this.releasePeace();

//  移動した際のルール
this.rule();

//  駒を億歳のルール
this.captureRule();