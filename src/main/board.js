import Rule from './rule';
import Images from './image';
import Constants from './constants'

export default function Board() { this.init() };

//  エラー: 駒を取った際
//  -> accessibleが削除されていないのが原因

//  todo: マジックナンバを減らす
Board.prototype.init = function() {

    //  共通要素
    this.m = {

        //  preloadjs
        loader: null,

        //  駒のサイズ
        PIECE_WIDTH:  36,
        PIECE_HEIGHT: 39
    };

    //  dom要素
    this.dom = {
        board: document.getElementById('ban'),
        piecestand_sente: document.getElementById("komadai-sente"),
        piecestand_gote:  document.getElementById("komadai-gote"),
        txt_sente: document.getElementById("text-sente"),
        txt_gote:  document.getElementById("text-gote")
    };

    //  盤の情報
    this.stat = {

        //  盤の情報
        position: [],                   //  盤のどの位置にどの駒があるか、の情報
        picked: null,                   //  選択した駒の記録用
        turn_list: ['sente', 'gote'],   //  使う？ todo: 消すかどうか決める
        turn: 'sente',                  //  手番
        phase_select: false,            //  駒が選択されたかどうか
        phase_captured: false,         //  持ち駒が選択されたかどうか

        //  駒台
        piecestand_sente: [],           //  先手の持ち駒
        piecestand_gote: [],            //  後手の持ち駒

        //  駒
        pieces: []
    };

    //  駒の配置の初期化
    this.stat.position = this.initPosition(true);

    //  最初の手番は先手なので、後手のテキストを不透明にする
    if (this.stat.turn === 'sente') {
        this.dom.txt_gote.classList.add('half_transparent');
    }
    else {
        this.dom.txt_sente.classList.add('half_transparent');
    }

    //  駒の画像
    this.m.pieces = [
        {"id": "1", src: Images.Fu},
        {"id": "2", src: Images.To},
        {"id": "3", src: Images.Kyo},
        {"id": "4", src: Images.nKyo},
        {"id": "5", src: Images.Kei},
        {"id": "6", src: Images.nKei},
        {"id": "7", src: Images.Gin},
        {"id": "8", src: Images.nGin},
        {"id": "9", src: Images.Kin},
        {"id": "10", src: Images.Hisya},
        {"id": "11", src: Images.Ryu},
        {"id": "12", src: Images.Kaku},
        {"id": "13", src: Images.Uma},
        {"id": "14", src: Images.Gyoku}
    ];

    this.render()
};

//  配列で盤の情報を管理
Board.prototype.initPosition = function(line_up_) {

    let array = [];
    //  すべての盤の場所の初期化
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
    //  todo: array[x][y].ownerを反映させる
    if (line_up_) {
        //  歩
        for (let i=0; i<9;i++) {
            array[i][2].type = 16;
            array[i][6].type = 1;
        }
        //  1段目、9段目
        for (let i=0,j=3,k=18; i<4; i++) {
            array[i][8].type = j;
            array[8-i][8].type = j;
            j += 2;

            array[i][0].type = k;
            array[8-i][0].type = k;
            k += 2;
        }
        //  飛車・角・玉
        array[1][1].type = 25;
        array[7][1].type = 27;
        array[4][0].type = 29;

        array[7][7].type = 10;
        array[1][7].type = 12;
        array[4][8].type = 14;
    }
    return array;
};

//  描画全般
//  todo: render.jsを作る
Board.prototype.render = function() {

    //  dom_boardの中身を空にする
    while (this.dom.board.firstChild) {
        this.dom.board.removeChild(this.dom.board.firstChild);
    }

    //  将棋盤の描画
    let tmp_board = new DocumentFragment();
    for(let y=0; y<9; y++) {
    for(let x=0; x<9; x++) {

        let piece;          //  駒のオブジェクト(画像)
        let piece_owner;     //  駒の持ち主
        let piece_type;      //  駒の種類(1から15まで)

        //  スタイルが付与されているかどうか
        const style = this.stat.position[x][y].style ? true : false;

        //  駒の中身がない場合空のdivオブジェクトを作る
        if (!this.stat.position[x][y].type) piece = document.createElement('div');

        //  駒が存在しないとき
        if (!this.stat.position[x][y].type) {
            piece_owner = 'empty';
        }
        //  駒が先手のとき
        else if (this.stat.position[x][y].type < 15) {
            piece_owner = 'sente';
            piece_type = String(this.stat.position[x][y].type);
        }
        //  駒が後手のとき
        else if (this.stat.position[x][y].type > 15) {
            piece_owner = 'gote';
            piece_type = String(this.stat.position[x][y].type - 15);
        }

        //  駒の画像ノードを作成する
        const pieceImage = this.m.pieces.find(piece => piece.id === piece_type)
        if (pieceImage) {
            piece = document.createElement('img')
            piece.src = pieceImage.src
        }
        piece.style.top = (this.m.PIECE_HEIGHT * y) + 'px';
        piece.style.left = (this.m.PIECE_WIDTH * x) + 'px';
        piece.classList.add('koma', piece_owner);
        if (style) {
            piece.classList.add( this.stat.position[x][y].style );
            this.stat.position[x][y].style = '';
        }

        //  クリック時のイベントを設定
        piece.addEventListener('click', (event) => {
            let piece_info = {
                x: x,
                y: y,
                type: this.stat.position[x][y].type,
                owner: piece_owner
            };
            this.run(event, piece_info);
        });

        //  挿入
        tmp_board.appendChild(piece);
    }
    }
    //  全て終わった後に一括で仮domからdomに反映させる
    this.dom.board.appendChild(tmp_board);

    //  駒台の描画

    //  先手の駒台
    while (this.dom.piecestand_sente.firstChild) {
        this.dom.piecestand_sente.removeChild(this.dom.piecestand_sente.firstChild);
    }

    if (this.stat.piecestand_sente.length) {
        let tmp_piecestand_sente = new DocumentFragment();

        for (let index in this.stat.piecestand_sente) {

            //  駒の画像ノードを作成
            const piece_type = String(this.stat.piecestand_sente[index].type);
            let piece = document.createElement('img')
            piece.src = this.m.pieces.find(piece => piece.id === piece_type).src

            piece.classList.add('koma', 'sente');
            if (this.stat.piecestand_sente[index].style)
                piece.classList.add(this.stat.piecestand_sente[index].style);

            //  駒台の乗せる際の位置調整(駒台にちゃんと乗っかるように)
            let left = 0,
                top  = 0;
            if (index < 3) {
                left = this.m.PIECE_WIDTH * index;
            }
            else if (index < 6) {
                left = this.m.PIECE_WIDTH  * (index-3);
                top  = this.m.PIECE_HEIGHT * 1;
            }
            else {
                left = this.m.PIECE_WIDTH  * (index-6);
                top  = this.m.PIECE_HEIGHT * 2;
            }
            piece.style.left = left + 'px';
            piece.style.top  = top + 'px';

            //  クリック時のイベントを作成
            piece.addEventListener('click', () => {
                let piece_info = {
                    type: this.stat.piecestand_sente[index].type,
                    owner: 'sente',
                    index: index
                }
                this.pickFromPieceStand(event, piece_info);
            });
            //  仮domに駒を追加
            tmp_piecestand_sente.appendChild(piece);
        }
        //  全て終わった後に一括で仮domからdomに反映させる
        this.dom.piecestand_sente.appendChild(tmp_piecestand_sente);
    }

    //  後手の駒台
    while (this.dom.piecestand_gote.firstChild) {
        this.dom.piecestand_gote.removeChild(this.dom.piecestand_gote.firstChild);
    }

    if (this.stat.piecestand_gote.length) {
        let tmp_piecestand_gote = new DocumentFragment();

        for(let index in this.stat.piecestand_gote) {
            //  後手なので全ての駒が15されているのを補正
            //  todo: +15されているのは変なので構成を変える

            const piece_type = String(this.stat.piecestand_gote[index].type - 15);
            //  駒の画像のノードを作成
            let piece = document.createElement('img')
            piece.src = this.m.pieces.find(piece => piece.id === piece_type).src
            piece.classList.add('koma', 'gote');
            if (this.stat.piecestand_gote[index].style)
                piece.classList.add(this.stat.piecestand_gote[index].style);

            //  駒台の乗せる際の位置調整(駒台にちゃんと乗っかるように)
            let left = 0,
                top  = 0;
            if (index < 3) {
                left = this.m.PIECE_WIDTH * index;
            }
            else if (index < 6) {
                left = this.m.PIECE_WIDTH  * (index-3);
                top  = this.m.PIECE_HEIGHT;
            }
            else {
                left = this.m.PIECE_WIDTH  * (index-6);
                top  = this.m.PIECE_HEIGHT * 2;
            }
            piece.style.left = left + 'px';
            piece.style.top  = top + 'px';

            //  クリック時のイベントを作成
            piece.addEventListener('click', () => {
                const piece_info = {
                    type: this.stat.piecestand_gote[index].type,
                    owner: 'gote',
                    index: index
                };
                this.pickFromPieceStand(event, piece_info);
            });
            //  仮domに駒を追加
            tmp_piecestand_gote.appendChild(piece);
        }
        //  全て終わった後に一括で仮domからdomに反映させる
        this.dom.piecestand_gote.appendChild(tmp_piecestand_gote);
    }
};

//  盤上のマスのタッチイベント
//  todo: switchで分岐させて別のjsファイルに飛ばしたい
//  todo: piece_obj -> piece
Board.prototype.run = function(e_, piece_) {

    // argument
    // let piece_obj = {
    //     x: x,
    //     y: y,
    //     type: this.stat.position[x][y],
    //     owner: piece_owner
    // };

    //  移動先
    const destination = this.stat.position[piece_.x][piece_.y];

    //  駒が選択されていない状態なら
    if (!this.stat.phase_select) {

        //  自分の駒のみ選択可
        if (piece_.owner !== this.stat.turn) return;

        //  駒の状態を記録
        this.stat.picked = piece_;

        //  選択された駒のスタイルを変更
        destination.style = 'red';

        //  進むことのできる場所のスタイルを変更する(rule.js)
        const accesible = Rule(this.stat.position, piece_);
        accesible.forEach( value_ => {
            this.stat.position[value_[0]][value_[1]].style = 'orange';
            this.stat.position[value_[0]][value_[1]].accesible = true;
        });
    }
    //  駒が選択された状態
    else {

        //  持ち駒を利用しない場合は進める場所のみ進める
        if (!this.stat.phase_captured) {

            //  移動可能な場所のみ選択可
            if (!destination.accesible) {
                this.stat.phase_select = false;
                this.render();
                return;
            }

            //  進んだ先に駒がある場合は駒台へ
            if (destination.type) this.bringPieceStand(piece_);

            //  駒がもともといた場所を初期化
            const departure = this.stat.position[this.stat.picked.x][this.stat.picked.y];
            departure.type = 0;
            departure.style = "";
            departure.accesible = false;
        }

        //  持ち駒を利用しているなら
        if (this.stat.phase_captured) {

            //  置くところに駒があるなら拒否
            if (destination.type) return;

            //  持ち駒から駒を削除する
            const piece_stand = (this.stat.turn === 'sente') ? this.stat.piecestand_sente : this.stat.piecestand_gote;
            for (let index in piece_stand) {
                if (piece_stand[index].type === this.stat.picked.type) {
                    piece_stand.splice(index, 1);
                    break;
                }
            }
            this.stat.phase_captured = false;
        }

        //  駒を移動
        destination.type = this.stat.picked.type;

        //  すべての場所のaccesibleを無効にする
        this.stat.position = this.stat.position.map(row => {
            return row.map(piece => {
                if (piece) piece.accesible = false
                return piece
            })
        })

        //  先手・後手の入れ替え
        this.dom.txt_gote.classList.toggle('half_transparent');
        this.dom.txt_sente.classList.toggle('half_transparent');
        this.stat.turn = (this.stat.turn === 'sente') ? 'gote' : 'sente';
    }

    //  盤の状態の更新
    this.render();

    this.stat.phase_select = !this.stat.phase_select;
};

//  取った駒を駒台に乗せる
Board.prototype.bringPieceStand = function(piece_) {

    //  argument
    // let piece_ = {
    //     x: x,
    //     y: y,
    //     type: [x][y],
    //     owner: piece_owner
    // };

    //  成り駒であれば戻す
    const promotion_list = Constants.promotionedList;
    for (let a in promotion_list) {
        if (piece_.type === promotion_list[a]) {
            piece_type--;
            break;
        }
    }

    //  駒台に追加、整理
    if (piece_.owner === 'sente') {
        this.stat.piecestand_gote.push({
            type: piece_.type + 15,
            style: ''
        });
        this.stat.piecestand_gote.sort((x, y) => {
            return x - y;
        });
    }
    else {
        this.stat.piecestand_sente.push({
            type: piece_.type - 15,
            style: ''
        });
        this.stat.piecestand_sente.sort((x, y) => {
            return x - y;
        });
    }
};

//  持ち駒を盤に打つ時
//  todo: 駒台の駒をクリックしたあとのキャンセルが難しい
Board.prototype.pickFromPieceStand = function(e_, piece_) {

    /*
    let piece_args = {
        type: this.stat.piecestand_sente[index],
        owner: 'sente',
        index: index
    };
    */

    //  すでに選択状態なら選択不可
    if (this.stat.phase_select) return;

    //  todo: すでに持ち駒を選択しているなら選択解除
    // if (this.stat.phase_captured) {
    //     this.stat.phase_captured = false;
    //     return;
    // }

    //  自分の持ち駒のみ選択可
    if (piece_.owner !== this.stat.turn) return;

    //  持ち駒の種類を記録
    this.stat.picked = piece_;

    //  piecestandをオブジェクト形式で
    let piecestand = (piece_.owner === 'sente') ? this.stat.piecestand_sente : this.stat.piecestand_gote;
    piecestand[piecestand.length-1] = {
        type: piece_.type,
        style: 'red'
    };

    //  選択状態へ移行
    this.stat.phase_select = true;
    //  持ち駒の選択状態に移行
    this.stat.phase_captured = true;

    this.render()
};
