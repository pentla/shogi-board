
//指定された駒の移動がルール上正しいのかを判定する。
function shogi_rule(koma,board,afterX,afterY){

  //移動前の駒のx座標、y座標
  var beforeX = recorded.x;
  var beforeY = recorded.y;

  //真っ直ぐに進んでいる場合trueを返す
  var straight = function(){
    if(beforeX === afterX && beforeY - 1 === afterY){
      return true;
    } else {return false;}
  }
  //右に進んでいる場合trueを返す
  var right = function(){
    if(beforeX - 1 === afterX && beforeY === afterY){
      return true;
    } else {return false;}
  }
  //右上に進んでいる場合trueを返す
  var rightup = function(){
    if(beforeX - 1 === afterX && beforeY - 1 === afterY){
      return true;
    } else {return false;}
  }
  //右下に進んでいる場合trueを返す
  var rightdown = function(){
    if(beforeX - 1 === afterX && beforeY + 1 === afterY){
      return true;
    } else {return false;}
  }
  //左に進んでいる場合trueを返す
  var left = function(){
    if(beforeX + 1 === afterX && beforeY === afterY){
      return true;
    } else {return false;}
  }
  //左上に進んでいる場合trueを返す
  var leftup = function(){
    if(beforeX + 1 === afterX && beforeY - 1 === afterY){
      return true;
    } else {return false;}
  }
  //左下に進んでいる場合trueを返す
  var leftdown = function(){
    if(beforeX + 1 === afterX && beforeY + 1 === afterY){
      return true;
    } else {return false;}
  }
  //後ろに進んでいる場合trueを返す
  var goback = function(){
    if(beforeX  === afterX && beforeY + 1 === afterY){
      return true;
    } else {return false;}
  }

  //相手の陣地にとなるy座標
  var goteField = 3;
  var senteField = 7;

  //相手の陣地に進んだ場合、駒が成ることができる
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

  //駒がなるか成らないかを選択できる(未実装)

  // function choose_promote_koma(){
  //   var modal = document.getElementById('modal');
  //   var yes = document.getElementById('yes');
  //   var no = document.getElementById('no');
  //   //もーダルを出す、yesかnoを受け取る、その値がyesなら駒がなる、noなら成らない。
  //   modal.classList.add('hidden');
  //   yes.addEventListener('click' , function(){
  //     recorded.type++;
  //     write_koma();
  //   });
  //   no.addEventListener('click' , function(){
  //     return;
  //   })
  // }
  // function modal(){
  //   var modal  = document.getElementById('modal');
  //   var yes = document.getElementById('yes');
  //   var no = document.getElementById('no');
  //
  //   modal.classList.remove('hidden');
  //
  // }

  //敵の駒を飛び越えて進むのを防ぐための関数

  //x軸の飛び越えがあればfalseを返す
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
  }

  //y軸の飛び越えがあればfalseを返す
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
  }

  //斜めに飛び越えがあればfalseを返す。
  function block_jump_xy(){
    var count = Math.abs(beforeX - afterX) - 1;

    //左側に進んでいる際
    if(afterX - beforeX > 0){

        //下側に進んでいる場合
        if(afterY - beforeY > 0){

            //移動した間に駒があればfalseを返す
            for(var i = 1;count > 0;count--,i++){
                if(board[beforeX + i][beforeY + i] !== koma.EMPTY){
                    return false;
                }
            }
        }else{
        //上側に進んでいる場合

            //移動する間に駒があればfalseを返す
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

  //駒ごとに進むことのできる場所を設定する
  switch(recorded.type){

    //歩の場合
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

    //と金、成香、成桂、金は同じ
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
      console.log("koma is not resistered");
      break;
    }
  }
  return true;
}

  function put_motigoma_rule(koma,board,afterX,afterY){
    var holdingKoma = recordedMotigoma.type;
    function nifu_check(anyoneFu){
      for(var i = 1;i <= 9;i++){
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
