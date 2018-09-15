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

  changeTurn() {
    this.state.turn = 'sente' ? 'gote' : 'sente';
  }

  initPosition(isLineUp) {
    let array = [];
    for(let x=0; x<9; x++) {
        array[x] = [];
        for(let y=0; y<9; y++) {
            array[x][y] = {
                type: 0,            //  どの駒が置かれているか(0は空)
                owner: '',          //  持ち主は'sente', 'gote'のどちらか(手前側が)
                style: '',          //  駒に色など装飾をつけるか
                accesible: false    //  その場所に移動することができるか
            };
        }
    }

    //  初期配置
    if (isLineUp) {
        //  歩
        for (let i=0; i<9; i++) {
            array[i][2] = new Koma('fu', 'sente');
            array[i][6] = new Koma('fu', 'gote');
        }
        // array[0][8] = new Koma('')
        //  1段目、9段目
        for (let i=0; j=3, k=18; i<4; i++) {
            array[i][8].type = j;
            array[8-i][8].type = j;
            j += 2;
            array[i][0].type = k;
            array[8-i][0].type = k;
            k += 2;
        }
        //  飛車・角・玉
        array[7][7].type = new Koma('hisya', 'sente');
        array[1][1].type = new Koma('hisya', 'gote');
        array[1][7].type = new Koma('kaku', 'sente');
        array[7][1].type = new Koma('kaku', 'gote');
        array[4][8].type = new Koma('gyoku', 'sente');
        array[4][0].type = new Koma('gyoku', 'gote');
    }
    return array;
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