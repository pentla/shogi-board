//選んだ駒を進ませるのはルール上正しいのかを判定する。
//歩なら前にしか進めない。
//ルール違反ならfalseを返す。
function shogi_rule(koma,board81,afterX,afterY){
  'use strict';

  let beforeX = recorded.x;
  let beforeY = recorded.y;

  //9方位に進んでいるかどうかをそれぞれ定義する。
  //真っ直ぐに進んでいるならtrueを返す。
  let straight = function(){
    if(beforeX === afterX && beforeY - 1 === afterY){
      return true;
    } else {return false;}
  }
  //右ならtrueを返す。
  let right = function(){
    if(beforeX - 1 === afterX && beforeY === afterY){
      return true;
    } else {return false;}
  }
  //右上
  let rightup = function(){
    if(beforeX - 1 === afterX && beforeY - 1 === afterY){
      return true;
    } else {return false;}
  }
  //右下
  let rightdown = function(){
    if(beforeX - 1 === afterX && beforeY + 1 === afterY){
      return true;
    } else {return false;}
  }
  let left = function(){
    if(beforeX + 1 === afterX && beforeY === afterY){
      return true;
    } else {return false;}
  }
  let leftup = function(){
    if(beforeX + 1 === afterX && beforeY - 1 === afterY){
      return true;
    } else {return false;}
  }
  let leftdown = function(){
    if(beforeX + 1 === afterX && beforeY + 1 === afterY){
      return true;
    } else {return false;}
  }
  let goback = function(){
    if(beforeX  === afterX && beforeY + 1 === afterY){
      return true;
    } else {return false;}
  }
  //相手の陣地に入れば成り駒になる
  let goteField = 3;
  let senteField = 7;
  let promote = function(){
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
  //横軸の駒を飛び越えることはできない。
  let block_jump_x = function(){
    let count = Math.abs(beforeX - afterX) - 1;
    if(beforeX > afterX){
      for(let i = 1; count > 0; count--,i++){
        if(board81[beforeX - i][beforeY] !== koma.EMPTY){
            console.log("not xjump");
            return false;
        }
      }
    }else{
      for(let i = 1; count > 0; count--,i++){
        if(board81[afterX - i][beforeY] !== koma.EMPTY){
            console.log("not xjump");
            return false;
        }
      }
    }
    return true;
  }//block_jump_x
  //縦軸の駒を飛び越えることはできない。
  let block_jump_y = function(){
    let count = Math.abs(beforeY - afterY) - 1;
    if(beforeY > afterY){
      for(let i = 1; count > 0; count--,i++){
        if(board81[beforeX][beforeY - i] !== koma.EMPTY){
            console.log("not yjump");
            return false;
        }
      }
    }else{
      for(let i = 1; count > 0; count--,i++){
        if(board81[beforeX][afterY - i] !== koma.EMPTY){
            console.log("not yjump");
            return false;
        }
      }
    }
    return true;
  }//block_jump_y

  //これロジックが間違ってるので作り直し
  // let block_jump_xy = function(){
  //   let count = Math.abs(beforeX - afterX) - 1;
  //   if(beforeX > afterX){
  //     for(let i = 1; count > 0; count--,i++){
  //       if(board81[beforeX - i][beforeY - i] !== koma.EMPTY){
  //           console.log("not xyjump");
  //           return false;
  //       }
  //     }
  //   }else{
  //     for(let i = 1; count > 0; count--,i++){
  //       if(board81[afterX - i][afterY - i] !== koma.EMPTY){
  //           console.log("not xyjump");
  //           return false;
  //       }
  //     }
  //     return true;
  //   }
  // }//block_jump_xy
  console.log(recorded.type);

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
    case koma.KAKU:
    case koma.KAKU_:{
      //ロジックが難しい
      let a = beforeX - afterX;
      // if((a === beforeY - afterY) || (a === afterY - beforeY) && (block_jump_xy())){
      if((a === beforeY - afterY) || (a === afterY - beforeY)){
      promote();
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
      error("koma is not resistered");
      break;
    }
  }//switch
  return true;//この文がないとバグ必須。
}
