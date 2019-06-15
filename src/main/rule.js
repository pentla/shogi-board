
//  指定された駒の情報、全体の駒の位置をもとに進める場所を配列として返す。
export default function(pos_, piece_obj_) {

    /*
    argument
    let piece_obj = {
        x: x,
        y: y,
        type: pos_[x][y],
        owner: koma_owner
    };
    */

    /*
     return
     let result = [
        [2,3],
        [3,4]
    ];
     */

     // 歩なら一つ前の場所
    let result = [];

    //  簡略化
    const x = piece_obj_.x;
    const y = piece_obj_.y;

    //  駒の種類を取得
    const sente = (piece_obj_.owner === 'sente');
    const type = sente ? piece_obj_.type : piece_obj_.type - 15;

    //  向き
    let stright =     sente ? [x, y-1] : [x, y+1];
    let back =        sente ? [x, y+1] : [x, y-1];
    let right =       sente ? [x+1, y] : [x-1, y];
    let left =        sente ? [x-1, y] : [x+1, y];
    let upper_right = sente ? [x+1, y-1] : [x-1, y+1];
    let upper_left =  sente ? [x-1, y-1] : [x+1, y+1];
    let down_right =  sente ? [x+1, y+1] : [x-1, y-1];
    let down_left =   sente ? [x-1, y+1] : [x+1, y+1];
    //  桂馬
    let kei_right =   sente ? [x+1, y-2] : [x-1, y+2];
    let kei_left =    sente ? [x-1, y-2] : [x+1, y+2];

    //  前と縦
    let forward = [];
    let vertical = [];
    for (let i=y-1; i>=0; i--) {
        if (sente) forward.push([x, i]);
        vertical.push([x, i]);
        if (pos_[x][i].type !== 0) break;
    }
    for (let i=y+1; i<9; i++) {
        if (!sente) forward.push([x, i]);
        vertical.push([x, i]);
        if (pos_[x][i].type !== 0) break;
    }

    //  横
    let horizonal = [];
    for (let i=x+1; i<9; i++) {
        horizonal.push([i, y]);
        if (pos_[i][y].type !== 0) break;
    }
    for (let i=x-1; i>=0; i--) {
        horizonal.push([i, y]);
        if (pos_[i][y].type !== 0) break;
    }

    //  斜め
    let slant = [];
     // 右下
    for (let i=x, a=1; i<8; i++) {
        slant.push([x+a, y+a]);
        if (pos_[x+a][y+a] === undefined || pos_[x+a][y+a].type !== 0) break;
        a++;
    }
     // 左上
    for (let i=x, a=1; i>0; i--) {
        if ((x-a) < 0) break;
        slant.push([x-a, y-a]);
        if (pos_[x-a][y-a] === undefined || pos_[x-a][y-a].type !== 0) {
            break;
        }
        a++;
    }
     // 右上
    for (let i=x, a=1; i<8; i++) {
        slant.push([x+a, y-a]);
        if (pos_[x+a][y-a] === undefined || pos_[x+a][y-a].type !== 0) break;
        a++;
    }
     // 右下
    for (let i=x, a=1; i>0; i--) {
        if ((x-a) < 0) break;
        slant.push([x-a, y+a]);
        if (pos_[x-a][y+a] === undefined || pos_[x-a][y+a].type !== 0) break;
        a++;
    }

    /*
    {"id": "1", src: "fu.png"},
    {"id": "2", src: "to.png"},
    {"id": "3", src: "kyo.png"},
    {"id": "4", src: "nkyo.png"},
    {"id": "5", src: "kei.png"},
    {"id": "6", src: "nkei.png"},
    {"id": "7", src: "gin.png"},
    {"id": "8", src: "ngin.png"},
    {"id": "9", src: "kin.png"},
    {"id": "10", src: "hi.png"},
    {"id": "11", src: "ryu.png"},
    {"id": "12", src: "kaku.png"},
    {"id": "13", src: "uma.png"},
    {"id": "14", src: "ou.png"}
    */

    //  todo: 角・馬追加
    switch (type) {
        //  歩
        case 1:
            result.push(stright);
            break;
        //  金、金と同じ動きの成り駒
        case 2:
        case 4:
        case 6:
        case 8:
        case 9:
            result.push(stright);
            result.push(right);
            result.push(left);
            result.push(upper_right);
            result.push(upper_left);
            result.push(back);
            break;
        //  香車
        case 3:
            forward.forEach(function(value_) {
                result.push(value_);
            });
            break;
        //  桂馬
        case 5:
            result.push(kei_right);
            result.push(kei_left);
            break;
        //  銀
        case 7:
            result.push(stright);
            result.push(upper_right);
            result.push(upper_left);
            result.push(down_right);
            result.push(down_left);
            break;
        //  飛車
        case 10:
            vertical.forEach( value_ => {
                result.push(value_);
            });
            horizonal.forEach( value_ => {
                result.push(value_);
            });
            break;
        //  龍
        case 11:
            vertical.forEach( value_ => {
                result.push(value_);
            });
            horizonal.forEach( value_ => {
                result.push(value_);
            });
            result.push(upper_right);
            result.push(upper_left);
            result.push(down_right);
            result.push(down_left);
            break;
        //  角
        case 12:
            slant.forEach( value_ => {
                result.push(value_);
            });
            break;
        //  馬
        case 13:
            slant.forEach( value_ => {
                result.push(value_);
            });
            result.push(stright);
            result.push(right);
            result.push(left);
            result.push(back);
            break;
        //  玉
        case 14:
            result.push(stright);
            result.push(right);
            result.push(left);
            result.push(upper_right);
            result.push(upper_left);
            result.push(down_right);
            result.push(down_left);
            result.push(back);
            break;
    }

    //  盤上でない場所、味方の駒がいる場所は除外
    result = result.filter( elm_ => {
        const is_undefined = (pos_[elm_[0]][elm_[1]] === undefined);
        if (is_undefined) return false;

        const empty = pos_[elm_[0]][elm_[1]].type === 0;
        const enemy = sente ? (14 < pos_[elm_[0]][elm_[1]].type) : (pos_[elm_[0]][elm_[1]].type <= 14);
        if (!(empty || enemy)) return false;

        return true;
    });

    return result;
};

//  todo: 完成させる
const forPieceStand = function(pos_, picked_obj_) {

    /*
    argument
    let piece_obj = {
        type: pos_[x][y],
        owner: koma_owner
    };
    */

    console.log("this is rule for piecestand");

}
