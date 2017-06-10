

/**
* 9 × 9マスの盤。
* boardのマスに数値を入れる
* -> それぞれのマスにkomaPictureの画像を用意する
* -> 全て揃ったらbanに情報を入れる。 -> 盤の完成
*/


var KomaName = function(){

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
var koma = new KomaName();

var komaPicture = [];
function put_KomaPicture_to_array(komaPicture){
    var komaPictureList = document.getElementById('komaPictureList');
    var child = komaPictureList.firstChild;
    var i = 0;
    while(child){
        if(child.nodeType === 1){
            komaPicture[i] = child;
            i++;
        }
        child = child.nextSibling;
    }
}
put_KomaPicture_to_array(komaPicture);



var board= [];
function init(board){
    for(var x = 1; x <= 9 ;x++){
        board[x] = [];
    for(var y = 1; y <= 9 ;y++){
        board[x][y] = koma.EMPTY;
    }
    }
}
init(board);

//将棋盤、駒台、テキストをhtmlから回収
var ban             = document.getElementById('ban');
var goteKomadai     = document.getElementById('goteKomadai');
var senteKomadai    = document.getElementById('senteKomadai');
var senteText       = document.getElementById('senteText');
var goteText        = document.getElementById('goteText');
goteText.classList.add('opacity');

//駒をつかんでいるかどうか
var selecting         = false;
//持ち駒をつかんでいるかどうか
var motigomaSelecting = false;
//先手(true)か後手(false)か
var sente             = true;

//手番の入れ替え
function change_teban(){
    if(sente){
        senteText.classList.add('opacity');
        goteText.classList.remove('opacity');
    } else {
        senteText.classList.remove('opacity');
        goteText.classList.add('opacity');
    }
    sente = !sente;
}

//boardの情報をhtmlに挿入
function write_board_to_html(){

    //一度にまとめたほうが描画の回数を減らせる
    var tmpDocumentFragment = document.createDocumentFragment();

    while(ban.firstChild){
        ban.removeChild(ban.firstChild);
    }
    for( var y = 1; y <= 9 ; y++){
        for( var x = 1; x <= 9 ; x++){
            var c;
            c = komaPicture[board[x][y]].cloneNode(true);
            c.style.right = ((x-1) * 36 )+ 'px';
            c.style.top =  ((y-1) * 39 )+ 'px';
            select_or_move_koma(x,y,c);
            tmpDocumentFragment.appendChild(c);
        }
    }
    ban.appendChild(tmpDocumentFragment);
}
write_board_to_html(line_koma(koma,board));

//駒の情報を記録する
var RecordKoma = function(place_x ,place_y ,record_komaType, removeInfo){
    this.x = place_x;
    this.y = place_y;
    this.type = record_komaType;
    this.removeInfo = removeInfo;
}

//駒１つ１つに対するイベント設定
function select_or_move_koma(x, y, c){
    c.addEventListener('click' , function(){

        var selectingKomaName = board[x][y];

        if(!selecting){
        //盤上の駒をクリックした場合

            //空白のマス、相手のマスに打つ場合は却下
            if(selectingKomaName === koma.EMPTY) return;
            if(sente){
                if(selectingKomaName >= koma.goteMin)
                return;
            }else{
                if(selectingKomaName <= koma.senteMax)
                return;
            }

            //選択する場合、駒の背景を赤に変え、記録する
            c.style.background = 'red';
            recorded = new RecordKoma(x, y, selectingKomaName,undefined);
            selecting = true;

        }else if(!motigomaSelecting){
        //駒を置く場所を指定するとき

            //同じ場所をクリック、ルールに反している場合、却下
            if(selectingKomaName === board[recorded.x][recorded.y]){
                selecting = false;
                c.style.background = "none";
                return;
            }
            if(!shogi_rule(koma,board,x,y)){
                return;
            }

            //移動先に駒がある場合、駒台へ
            if(selectingKomaName !== koma.EMPTY) {
                put_to_komadai(selectingKomaName);
            }

            //1度目に記録した駒を移動
            board[x][y] = recorded.type;
            board[recorded.x][recorded.y] = koma.EMPTY;

            //選択状態の解除、手番の変更、再描画
            selecting = false;
            change_teban();
            write_board_to_html();

        }else if(motigomaSelecting){
            //持ち駒をつかんだ場合

            //持ち駒を置くルールに反している場合は却下
            if(!put_motigoma_rule(koma,board,x,y)){
                recordedMotigoma.removeInfo.background = "none";
                motigomaSelecting = false;
                return;
            }
            //駒がある場所に打っている場合は却下
            if(selectingKomaName !== koma.EMPTY){return;}


            //持ち駒を打って、駒台から持ち駒を消す。
            //先手なら先手の駒台、後手なら後手の駒台へ
            board[x][y] = recordedMotigoma.type
            if(sente){
                senteMotigomaArray.some(function(value,index){
                    if(value === recordedMotigoma.type){
                        senteMotigomaArray.splice(index,1);
                    }
                });
                komadai_appendChild(senteMotigomaArray);
            }else{
                goteMotigomaArray.some(function(value,index){
                    if(value === recordedMotigoma.type){
                        goteMotigomaArray.splice(index,1);
                    }
                });
                komadai_appendChild(goteMotigomaArray);
            }

            //持ち駒の選択状態の解除
            motigomaSelecting = false;

            selecting = false;
            change_teban();
            write_board_to_html();
        }
    });
}

//駒台に入っている駒の情報の管理
var senteMotigomaArray = [];
var goteMotigomaArray = [];

function put_to_komadai(caughtKoma){

    //取った駒が成り駒の場合、成っていない状態に戻す
    for(var length = koma.narigoma.length;length >= 0;length--){
        if(koma.narigoma[length] === caughtKoma){
            caughtKoma--;
            break;
        }
    }

    //取られた駒は敵のものになる
    var betrayKoma;
    if(sente){
        betrayKoma = caughtKoma - 14;
        senteMotigomaArray.push(betrayKoma);
        senteMotigomaArray.sort(function(x,y){
            return x - y;
        });
        komadai_appendChild(senteMotigomaArray);
    } else {
        betrayKoma = caughtKoma + 14;
        goteMotigomaArray.push(betrayKoma);
        goteMotigomaArray.sort(function(x,y){
            return x - y;
        });
        komadai_appendChild(goteMotigomaArray);
    }
}

function komadai_appendChild(whoMotigomaArray){

    //駒台に表示させる
    var thenTeban = sente;
    var whoKomadai = (sente)? senteKomadai : goteKomadai;

    while(whoKomadai.firstChild){
        whoKomadai.removeChild(whoKomadai.firstChild);
    }

    //駒台には縦３つ、横に３つ並べることができる
    for(var length = whoMotigomaArray.length, count = 0;length > 0;length--,count++){
        var c = komaPicture[whoMotigomaArray[count]].cloneNode(true);
        c.style.border = 'none';
        if(count < 3){
            c.style.left = (count * 36)     +'px';
        }
        else if(count < 6){
            c.style.left = ((count - 3)*36) +'px';
            c.style.top  = '39px';
        }
        else {
            c.style.left = ((count - 6)*36) +'px';
            c.style.top  = '78px';
        }

        //持ち駒となった際のイベントリスナの設定
        c.addEventListener('click',function(){

            //敵の駒台を使っているなら却下
            if(thenTeban !== sente)return;

            //すでに選択されている場合はもう一度クリックで解除
            if(motigomaSelecting){
                c.style.background = 'none';
                motigomaSelecting = false;
                selecting = false;
                return;
            }

            //背景を赤く換え、選択状態に移行
            c.style.background = 'red';
            recordedMotigoma = new RecordKoma(undefined,undefined,whoMotigomaArray[count],c);
            selecting = true;
            motigomaSelecting = true;

        });
        whoKomadai.appendChild(c);
    }
}
