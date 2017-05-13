(function(){
    //関数 function  アンダースコア記法
    //変数 let       camelCase記法
    //クラス         最初の文字は大文字
    //定数           全て大文字。

    const KomaName = function(){
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

    }
    let koma = new KomaName();

    let komaPicture = [];
    function put_KomaPicture_to_array(komaPicture){
      let komaPictureList = document.getElementById('komaPictureList');
      let child = komaPictureList.firstChild;
      let i = 0;
      while(child){
        if(child.nodeType === 1){
          komaPicture[i] = child;
          i++;
        }
        child = child.nextSibling;
      }
    }
    put_KomaPicture_to_array(komaPicture);

    /**
    * 9 × 9マスの盤。
    * board81のマスに数値を入れる
    * -> それぞれのマスにkomaPictureの画像を用意する
    * -> 全て揃ったらbanに情報を入れる。 -> 盤の完成
    */

    let board81= [];
    function initialize_board81(board81){
      for(let x = 1; x <= 9 ;x++){
        board81[x] = [];
      for(let y = 1; y <= 9 ;y++){
        board81[x][y] = koma.EMPTY;
      }
      }
    };
    initialize_board81(board81);

    let ban = document.getElementById('ban');
    let goteKomadai = document.getElementById('goteKomadai');
    let senteKomadai = document.getElementById('senteKomadai');
    let senteText = document.getElementById('senteText');
    let goteText = document.getElementById('goteText');
    goteText.classList.add('opacity');

    let selecting = false;
    let motigomaSelecting = false;
    let sente = true;

    //グローバル変数senteのtrue/falseを入れ替える
    function change_sente(){
      if(sente){
        senteText.classList.add('opacity');
        goteText.classList.remove('opacity');
      } else {
        senteText.classList.remove('opacity');
        goteText.classList.add('opacity');
      }
      sente = !sente;
    }

    //9×9の盤を作成、駒の情報を入れ、htmlに挿入する
    function write_board_to_html(){
      let tmpDocumentFragment = document.createDocumentFragment();
      //htmlの初期化
      while(ban.firstChild){
        ban.removeChild(ban.firstChild);
      }
      for( let y = 1; y <= 9 ; y++){
      for( let x = 1; x <= 9 ; x++){
        let c;
        c = komaPicture[board81[x][y]].cloneNode(true);
        c.style.right = ((x-1) * 36 )+ 'px';
        c.style.top =  ((y-1) * 39 )+ 'px';
        select_or_move_koma(x,y,c);
        tmpDocumentFragment.appendChild(c);
      }
      }
      ban.appendChild(tmpDocumentFragment);
    };
    write_board_to_html(line_koma(koma,board81));

    //１度目のクリックで駒の情報を記録する
    let RecordKoma = function(place_x ,place_y ,record_komaType, removeInfo){
      this.x = place_x;
      this.y = place_y;
      this.type = record_komaType;
      this.removeInfo = removeInfo;
    }

    //駒１つ１つにこの情報が渡される。
    function select_or_move_koma(x, y, c){
      c.addEventListener('click' , function(){
        let selectingKomaName = board81[x][y];
        if(!selecting){
         //空白のマスは動かせない。相手の駒も動かせない。
         if(selectingKomaName === koma.EMPTY) return;
         if(sente){
            if(selectingKomaName >= koma.goteMin)
            return;
          }else{
            if(selectingKomaName <= koma.senteMax)
            return;
          }
          c.style.background = 'red';
          recorded = new RecordKoma(x, y, selectingKomaName,undefined);
          selecting = true;
        }else if(!motigomaSelecting){
            //同じ場所をクリックするなら行動キャンセル。
            if(selectingKomaName === board81[recorded.x][recorded.y]){
              selecting = false;
              c.style.background = "none";
              return;
            }
            //ルールに沿っていないなら進めない。
            if(!shogi_rule(koma,board81,x,y)){
              console.log("cant go there");
              return;
            }
            //移動場所に駒がいたら駒台へ。
            if(selectingKomaName !== koma.EMPTY) {
              put_to_komadai(selectingKomaName);
            }
            //先ほど記録した駒を移動
            board81[x][y] = recorded.type;
            board81[recorded.x][recorded.y] = koma.EMPTY;
            selecting = false;
            change_sente();
            write_board_to_html();
        }else if(motigomaSelecting){
            if(!put_motigoma_rule(koma,board81,x,y)){
                console.log("cant put motigoma");
                recordedMotigoma.removeInfo.background = "none";
                motigomaSelecting = false;
                return;
            }
            //駒がある場所に打つことはできない。
            if(selectingKomaName !== koma.EMPTY){return;}
            //持ち駒を打って、駒台から持ち駒を消す。
            board81[x][y] = recordedMotigoma.type;
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
    function put_to_komadai(caughtKoma){
      for(let length = koma.narigoma.length;length >= 0;length--){
        if(koma.narigoma[length] === caughtKoma){
          caughtKoma--;
          break;
        }
      }
      let betrayKoma;//取られた駒は敵に寝返る。
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
      let thenTeban = sente;
      let whoKomadai = (sente)? senteKomadai : goteKomadai;
      while(whoKomadai.firstChild){
        whoKomadai.removeChild(whoKomadai.firstChild);
      }
      for(let length = whoMotigomaArray.length, count = 0;length > 0;length--,count++){
        let c = komaPicture[whoMotigomaArray[count]].cloneNode(true);
        c.style.border = 'none';
        //駒台には3*3個乗るように
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
        c.addEventListener('click',function(){
          if(thenTeban !== sente)return;//相手の駒を使うことはできない
          if(motigomaSelecting){//すでに持ち駒が選択されているなら選択状態を解除
            console.log("cancel motigoma");
            c.style.background = 'none';
            motigomaSelecting = false;
            selecting = false;
            return;
          }
          c.style.background = 'red';
          recordedMotigoma = new RecordKoma(undefined,undefined,whoMotigomaArray[count],c);
          selecting = true;
          motigomaSelecting = true;
        });
        whoKomadai.appendChild(c);
      }
    }
})();