const KomaName = function () {

	this.EMPTY = 0;

	this.FU = 1;
	this.TO = 2;
	this.KYO = 3;
	this.NKYO = 4;
	this.KEI = 5;
	this.NKEI = 6;
	this.GIN = 7;
	this.NGIN = 8;
	this.KIN = 9;
	this.HI = 10;
	this.RYU = 11;
	this.KAKU = 12;
	this.UMA = 13;
	this.GYOKU = 14;

	this.FU_ = 15;
	this.TO_ = 16;
	this.KYO_ = 17;
	this.NKYO_ = 18;
	this.KEI_ = 19;
	this.NKEI_ = 20;
	this.GIN_ = 21;
	this.NGIN_ = 22;
	this.KIN_ = 23;
	this.HI_ = 24;
	this.RYU_ = 25;
	this.KAKU_ = 26;
	this.UMA_ = 27;
	this.GYOKU_ = 28;

	this.senteMin = 1;
	this.senteMax = 14;
	this.goteMin = 15;
	this.goteMax = 28;
	this.promote = 1; //歩、香、桂、銀、角、飛車 + 1 === 成り駒。
	this.narigoma = [2, 4, 6, 8, 11, 13, 16, 18, 20, 22, 25, 27];

}
var koma = new KomaName();

var komaPicture = [];

function put_KomaPicture_to_array(komaPicture) {
	var komaPictureList = document.getElementById('komaPictureList');
	var child = komaPictureList.firstChild;
	var i = 0;
	while (child) {
		if (child.nodeType === 1) {
			komaPicture[i] = child;
			i++;
		}
		child = child.nextSibling;
	}
}
put_KomaPicture_to_array(komaPicture);


var board = [];

function initialize_board81(board) {
	for (var x = 1; x <= 9; x++) {
		board[x] = [];
		for (var y = 1; y <= 9; y++) {
			board[x][y] = koma.EMPTY;
		}
	}
};
initialize_board81(board);

var ban = document.getElementById('ban');
var goteKomadai = document.getElementById('goteKomadai');
var senteKomadai = document.getElementById('senteKomadai');
var senteText = document.getElementById('senteText');
var goteText = document.getElementById('goteText');
goteText.classList.add('opacity');

var selecting = false;
var motigomaSelecting = false;
var sente = true;

//グローバル変数senteのtrue/falseを入れ替える
function change_sente() {
	if (sente) {
		senteText.classList.add('opacity');
		goteText.classList.remove('opacity');
	} else {
		senteText.classList.remove('opacity');
		goteText.classList.add('opacity');
	}
	sente = !sente;
}

//9×9の盤を作成、駒の情報を入れ、htmlに挿入する
function write_board_to_html() {
	let tmpDocumentFragment = document.createDocumentFragment();
	while (ban.firstChild) {
		ban.removeChild(ban.firstChild);
	}
	for (let y = 1; y <= 9; y++) {
		for (let x = 1; x <= 9; x++) {
			let c;
			c = komaPicture[board[x][y]].cloneNode(true);
			c.style.right = ((x - 1) * 36) + 'px';
			c.style.top = ((y - 1) * 39) + 'px';
			select_or_move_koma(x, y, c);
			tmpDocumentFragment.appendChild(c);
		}
	}
	ban.appendChild(tmpDocumentFragment);
};
write_board_to_html(line_koma(koma, board));

//１度目のクリックで駒の情報を記録する
let RecordKoma = function(place_x, place_y, record_komaType, removeInfo) {
	this.x = place_x;
	this.y = place_y;
	this.type = record_komaType;
	this.removeInfo = removeInfo;
}
var recorded, recordedMotigoma;

function select_or_move_koma(x, y, c) {
	c.addEventListener('click', function() {
		let selectingKomaName = board[x][y];
		if (!selecting) {
			//空白のマスは動かせない。
			if (selectingKomaName === koma.EMPTY) return;
			//相手の駒は動かせない。
			if (sente) {
				if (selectingKomaName >= koma.goteMin)
					return;
			} else {
				if (selectingKomaName <= koma.senteMax)
					return;
			}
			c.style.background = 'red';
			recorded = new RecordKoma(x, y, selectingKomaName, undefined);
			selecting = true;
		} else if (!motigomaSelecting) {
			//同じ場所をクリックするなら行動キャンセル。
			if (selectingKomaName === board[recorded.x][recorded.y]) {
				selecting = false;
				c.style.background = "none";
				return;
			}
			//自分の駒の場所に移動することはできない。
			if (sente) {
				if ((1 <= selectingKomaName) && (selectingKomaName <= 14)) {
					return;
				}
			} else {
				if ((15 <= selectingKomaName) && (selectingKomaName <= 28)) {
					return;
				}
			}
			//ルールに沿っていないなら進めない。
			if (!shogi_rule(koma, board, x, y)) {
				return;
			}
			//移動場所に駒がいたら駒台へ。
			if (selectingKomaName !== koma.EMPTY) {
				put_to_komadai(selectingKomaName);
			}
			//先ほど記録した駒を移動
			board[x][y] = recorded.type;
			board[recorded.x][recorded.y] = koma.EMPTY;
			selecting = false;
			change_sente();
			write_board_to_html();
		} else if (motigomaSelecting) {
			if (!put_motigoma_rule(koma, board, x, y)) {
				recordedMotigoma.removeInfo.background = "none";
				motigomaSelecting = false;
				return;
			}
			//駒がある場所に打つことはできない。
			if (selectingKomaName !== koma.EMPTY) {
				return;
			}
			//持ち駒を打って、駒台から持ち駒を消す。
			board[x][y] = recordedMotigoma.type;
			if (sente) {
				senteMotigomaArray.some(function(value, index) {
					if (value === recordedMotigoma.type) {
						senteMotigomaArray.splice(index, 1);
					}
				});
				komadai_appendChild(senteMotigomaArray);
			} else {
				goteMotigomaArray.some(function(value, index) {
					if (value === recordedMotigoma.type) {
						goteMotigomaArray.splice(index, 1);
					}
				});
				komadai_appendChild(goteMotigomaArray);
			}
			motigomaSelecting = false;
			selecting = false;
			change_sente();
			write_board_to_html();
			//打った持ち駒を盤に表示させるためもう一度表示。
		}
	});
}

let senteMotigomaArray = [];
let goteMotigomaArray = [];

//駒台に取られた駒を送る
function put_to_komadai(caughtKoma) {
	for (let length = koma.narigoma.length; length >= 0; length--) {
		if (koma.narigoma[length] === caughtKoma) {
			caughtKoma--;
			break;
		}
	}
	let betrayKoma; //取られた駒は敵に寝返る。
	if (sente) {
		betrayKoma = caughtKoma - 14;
		senteMotigomaArray.push(betrayKoma);
		senteMotigomaArray.sort(function(x, y) {
			return x - y;
		});
		komadai_appendChild(senteMotigomaArray);
	} else {
		betrayKoma = caughtKoma + 14;
		goteMotigomaArray.push(betrayKoma);
		goteMotigomaArray.sort(function(x, y) {
			return x - y;
		});
		komadai_appendChild(goteMotigomaArray);
	}
}

function komadai_appendChild(whoMotigomaArray) {
	let thenTeban = sente;
	let whoKomadai = (sente) ? senteKomadai : goteKomadai;
	while (whoKomadai.firstChild) {
		whoKomadai.removeChild(whoKomadai.firstChild);
	}
	for (let length = whoMotigomaArray.length, count = 0; length > 0; length--, count++) {
		let c = komaPicture[whoMotigomaArray[count]].cloneNode(true);
		c.style.border = 'none';
		//駒台には3*3個乗るように
		if (count < 3) {
			c.style.left = (count * 36) + 'px';
		} else if (count < 6) {
			c.style.left = ((count - 3) * 36) + 'px';
			c.style.top = '39px';
		} else {
			c.style.left = ((count - 6) * 36) + 'px';
			c.style.top = '78px';
		}
		c.addEventListener('click', function() {
			//相手の駒を使うことはできない
			if (thenTeban !== sente) return;
			//すでに持ち駒が選択されているなら選択状態を解除
			if (motigomaSelecting) {
				c.style.background = 'none';
				motigomaSelecting = false;
				selecting = false;
				return;
			}
			c.style.background = 'red';
			recordedMotigoma = new RecordKoma(undefined, undefined, whoMotigomaArray[count], c);
			selecting = true;
			motigomaSelecting = true;
		});
		whoKomadai.appendChild(c);
	}
}

//数値は全てkomaTypeの数字。
//0 何もないマス。 1 ~ 14 先手の駒。  15 ~ 28 後手の駒。
//歩、香、桂、銀、角、飛車 + 1 === 成り駒。

//将棋の初期配置。
function line_koma(koma, board81) {
	for (let i = 1; i <= 9; i++) {
		board81[i][7] = koma.FU;
		board81[i][3] = koma.FU_;
	}
	board81[1][9] = koma.KYO;
	board81[9][9] = koma.KYO;
	board81[2][9] = koma.KEI;
	board81[8][9] = koma.KEI;
	board81[3][9] = koma.GIN;
	board81[7][9] = koma.GIN;
	board81[6][9] = koma.KIN;
	board81[4][9] = koma.KIN;
	board81[2][8] = koma.HI;
	board81[8][8] = koma.KAKU;
	board81[5][9] = koma.GYOKU;

	board81[1][1] = koma.KYO_;
	board81[9][1] = koma.KYO_;
	board81[2][1] = koma.KEI_;
	board81[8][1] = koma.KEI_;
	board81[3][1] = koma.GIN_;
	board81[7][1] = koma.GIN_;
	board81[6][1] = koma.KIN_;
	board81[4][1] = koma.KIN_;
	board81[2][2] = koma.KAKU_;
	board81[8][2] = koma.HI_;
	board81[5][1] = koma.GYOKU_;

};
//選んだ駒を進ませるのはルール上正しいのかを判定する。
//歩なら前にしか進めない。
//ルール違反ならfalseを返す。
function shogi_rule(koma,board,afterX,afterY){

  var beforeX = recorded.x;
  var beforeY = recorded.y;

  //真っ直ぐに進んでいるならtrueを返す。
  var straight = function(){
    if(beforeX === afterX && beforeY - 1 === afterY){
      return true;
    } else {return false;}
  }
  //右ならtrueを返す。
  var right = function(){
    if(beforeX - 1 === afterX && beforeY === afterY){
      return true;
    } else {return false;}
  }
  //右上
  var rightup = function(){
    if(beforeX - 1 === afterX && beforeY - 1 === afterY){
      return true;
    } else {return false;}
  }
  //右下
  var rightdown = function(){
    if(beforeX - 1 === afterX && beforeY + 1 === afterY){
      return true;
    } else {return false;}
  }
  var left = function(){
    if(beforeX + 1 === afterX && beforeY === afterY){
      return true;
    } else {return false;}
  }
  var leftup = function(){
    if(beforeX + 1 === afterX && beforeY - 1 === afterY){
      return true;
    } else {return false;}
  }
  var leftdown = function(){
    if(beforeX + 1 === afterX && beforeY + 1 === afterY){
      return true;
    } else {return false;}
  }
  var goback = function(){
    if(beforeX  === afterX && beforeY + 1 === afterY){
      return true;
    } else {return false;}
  }
  //相手の陣地に入れば成り駒になる
  var goteField = 3;
  var senteField = 7;
  var promote = function(){
    if(recorded.type <= 14){
      if(afterY <= goteField){
        return recorded.type++;
      }
    } else {
      if(afterY >= senteField){
        return recorded.type++;
      }
    }
  }
  function choose_promote_koma(){
    var modal = document.getElementById('modal');
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');
    //もーダルを出す、yesかnoを受け取る、その値がyesなら駒がなる、noなら成らない。
    modal.classList.add('hidden');
    yes.addEventListener('click' , function(){
      recorded.type++;

      write_koma();
    });
    no.addEventListener('click' , function(){
      return;
    })
  }
  function modal(){
    var modal  = document.getElementById('modal');
    var yes = document.getElementById('yes');
    var no = document.getElementById('no');

    modal.classList.remove('hidden');

  }
  //横軸の駒を飛び越えることはできない。
  function block_jump_x(){
    var count = Math.abs(beforeX - afterX) - 1;
    if(beforeX > afterX){
      for(var i = 1; count > 0; count--,i++){
        if(board[beforeX - i][beforeY] !== koma.EMPTY){
            return false;
        }
      }
    }else{
      for(var i = 1; count > 0; count--,i++){
        if(board[afterX - i][beforeY] !== koma.EMPTY){
            return false;
        }
      }
    }
    return true;
  }//block_jump_x

  //縦軸の駒を飛び越えることはできない。
  function block_jump_y(){
    var count = Math.abs(beforeY - afterY) - 1;
    if(beforeY > afterY){
      for(var i = 1; count > 0; count--,i++){
        if(board[beforeX][beforeY - i] !== koma.EMPTY){
            return false;
        }
      }
    }else{
      for(var i = 1; count > 0; count--,i++){
        if(board[beforeX][afterY - i] !== koma.EMPTY){
            return false;
        }
      }
    }
    return true;
  }//block_jump_y

  //斜めに進む時も飛び越え不可。
  function block_jump_xy(){
    var count = Math.abs(beforeX - afterX) - 1;
    if(afterX - beforeX > 0){ //左側に進んでいる場合
      if(afterY - beforeY > 0){ //下側に進んでいる場合
       for(var i = 1;count > 0;count--,i++){
         if(board[beforeX + i][beforeY + i] !== koma.EMPTY){
           return false;
         }
       }
     }else{//if(afterY - beforeY > 0)上側に進んでいる場合
       for(var i = 1;count > 0;count--,i++){
         if(board[beforeX + i][beforeY - i] !== koma.EMPTY){
           return false;
         }
       }
     }
   }
     if(afterX - beforeX < 0){   //右側に進んでいる場合
       if(afterY - beforeY > 0){ //下側に進んでいる場合
         for(var i = 1;count > 0;count--,i++){
           if(board[beforeX - i][beforeY + i] !== koma.EMPTY){
             return false;
           }
         }
       }else{//上側に進んでいる場合
         for(var i = 1;count > 0;count--,i++){
           if(board[beforeX - i][beforeY - i] !== koma.EMPTY){
             return false;
           }
         }
       }
     }
    return true;
  }
  switch(recorded.type){
    case koma.FU:{
      if(straight()){
        promote();
        break;
      } else {return false;}
    }
    case koma.KYO:{
      if((beforeX === afterX && beforeY > afterY) && (block_jump_y())){
        promote();
        break;
      } else {return false;}
    }
    case koma.KEI:{
      if((beforeX + 1 === afterX && beforeY - 2 === afterY)||
         (beforeX - 1 === afterX && beforeY - 2 === afterY)){
           promote();
           break;
      } else {return false;}
    }
    case koma.GIN:{
      if(straight() || leftup() || leftdown() || rightup() || rightdown()){
        promote();
        break;
      } else {return false;}
    }
    case koma.TO:
    case koma.NKYO:
    case koma.NKEI:
    case koma.KIN:{
      if(straight() || leftup() || left() || rightup() || right() || goback()){
        break;
      }else{return false;}
    }
    case koma.HI:
    case koma.HI_:{
      if((beforeX === afterX || beforeY === afterY) && (block_jump_x()) && (block_jump_y())){
        promote();
        break;
      } else {return false;}
    }
    case koma.RYU:
    case koma.RYU_:{
      if( leftup() ||  leftdown() || rightup() || rightdown() || ((beforeX === afterX || beforeY === afterY) && (block_jump_x()) && (block_jump_y()))){
        break;
      } else{ return false;}
    }
    case koma.KAKU:
    case koma.KAKU_:{
      var a = beforeX - afterX;
      if(((a === beforeY - afterY) || (a === afterY - beforeY)) && (block_jump_xy())){
        promote();
        break;
      } else {return false;}
    }
    case koma.UMA:
    case koma.UMA_:{
      var a = beforeX - afterX;
      if(straight() || right() || left() || goback() || ((a === beforeY - afterY) || (a === afterY - beforeY)) && (block_jump_xy())){
        break;
      } else {return false;}
    }
    case koma.GYOKU:
    case koma.GYOKU_:{
      if(straight() || leftup() || left() || leftdown() || rightup() || right() || rightdown() || goback()){
        break;
      } else {return false;}
    }
    case koma.FU_:{
      if(goback()){
        promote();
        break;
      } else {return false;}
    }
    case koma.KYO_:{
      if((beforeX === afterX && beforeY < afterY) && (block_jump_y())){
        promote();
        break;
      } else {return false;}
    }
    case koma.KEI_:{
      if((beforeX + 1 === afterX && beforeY + 2 === afterY)
       ||(beforeX - 1 === afterX && beforeY + 2 === afterY)){
           promote();
           break;
      } else {return false;}
    }
    case koma.GIN_:{
      if(goback() || leftup() || leftdown() || rightup() || rightdown()){
        promote();
        break;
      } else {return false;}
    }
    case koma.TO_:
    case koma.NKEI_:
    case koma.NKYO_:
    case koma.KIN_:{
      if(straight() || leftdown() || left() || rightdown() || right() || goback()){
        break;
      } else {return false;}
    }
    default:{
      break;
    }
  }
  return true;
}//shogi_rule()

  function put_motigoma_rule(koma,board,afterX,afterY){
    var holdingKoma = recordedMotigoma.type;
    function nifu_check(anyoneFu){
      for(i = 1;i <= 9;i++){
        if(board[afterX][i] === anyoneFu){
          return false;
        }
      }
      return true;
    }
    //歩や香車は１段目、桂馬は１、２段目に置くことができない。
    switch(holdingKoma){
      case koma.FU:{
        if((afterY !== 1) && nifu_check(koma.FU)) {
          return true;
        }else {return false;}
      }
      case koma.KYO:{
        if(afterY !== 1) {
          return true;
        } else {return false;}
      }
      case koma.KEI:{
        if((afterY !== 1) && (afterY !== 2)){
          return true;
        } else {return false;}
      }
      case koma.FU_:{
        if((afterY !== 9) && nifu_check(koma.FU_)){
          return true;
        } else {return false;}
      }
      case koma.KYO_:{
        if((afterY !== 9) && (afterY !== 8)){
          return true;
        } else {return false;}
      }
      case koma.KEI_:{
        if((afterY !== 9) && (afterY !== 8)){
          return true;
        } else {return false;}
      }
  }
  return true;
}
