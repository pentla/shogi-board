<?php
boardの機能
盤の作成、先手・後手の管理buildboard,sente
住所としての情報cell[]

komadaiの機能
先手・後手のふたつある

recordの機能
どこの駒がどこに移動したかの情報を持つ。
いずれは寄付に対応できるようにしたい。

komaの機能
どこにいるか把握する
画像を持つ
だれが所持しているか(駒台に移動した時点で変化する)
移動する(盤上で)
移動する(駒台に)

駒ごとの情報
-- 画像をもつ --
どこに移動できるか、の情報をもつ
誰が所持しているか
移動
position-x,yの更新 + cellにもその情報を送る。
現在地position-x,position-y,


完成系
btn.onclick = new ShogiGame(board,koma,record);で全てが完了する。
部品
boardとkoma,あとはrecord。

先手・後手の管理
駒を動かす(盤上・駒台の上)
記録

imformation:盤上の情報管理sente,gote,どこになんの駒がいるか
Board:htmlへの代入
koma:senteの駒か、goteの駒か、


// var game =  new shogiGame("imfo", "board", "koma");
shogiGame = function(){

    imfo : 
    board: html描画・管理sente gote
    koma:
}
game
sente gote
現在どうなってる
記録
ルール？
