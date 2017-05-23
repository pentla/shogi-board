<?php
game オブジェクト
    - board
    - koma
という構成になる。

board
1. DOM操作で盤を表示
2. 現在、どの駒がどこにいるのかの情報を持つ。
3. sente,goteを管理する。
4. koma以外の、細かいルールを把握する(王手、駒を取る、など)
ここまで作ってみる(1時間)

作り方は、本読むか聞くしかない

koma
1. 管理：json？
1.5 まとめてaddEventlistenerで上書き追加。
2. addEventListenerで選択・動かすことができる。
3. それぞれ動くことのできる場所の情報を持つ。

record
棋譜の記録、待った、投了など


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
