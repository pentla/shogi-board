import { Piece, PieceKind } from "./index";
import fu from "@/assets/img/fu.png";
import To from "@/assets/img/to.png";
import Kei from "@/assets/img/kei.png";
import nKei from "@/assets/img/nkei.png";
import kyo from "@/assets/img/kyo.png";
import nKyo from "@/assets/img/nkyo.png";
import Gin from "@/assets/img/gin.png";
import nGin from "@/assets/img/ngin.png";
import Kin from "@/assets/img/kin.png";
import Hisya from "@/assets/img/hi.png";
import Ryu from "@/assets/img/ryu.png";
import Kaku from "@/assets/img/kaku.png";
import Uma from "@/assets/img/uma.png";
import Gyoku from "@/assets/img/ou.png";

export const getPiece = (kind: PieceKind): Piece => {
  switch (kind) {
    case 'fu':
      return {
        kind: 'fu',
        image: fu,
        promotedImage: To
      }
    case 'kyo':
      return {
        kind: 'kyo',
        image: kyo,
        promotedImage: nKyo
      }
    case 'kei':
      return {
        kind: 'kei',
        image: Kei,
        promotedImage: nKei
      }
    case 'gin':
      return {
        kind: 'gin',
        image: Gin,
        promotedImage: nGin
      }
    case 'kin':
      return {
        kind: 'kin',
        image: Kin,
        promotedImage: Kin
      }
    case 'kaku':
      return {
        kind: 'kaku',
        image: Kaku,
        promotedImage: Uma
      }
    case 'hisha':
      return {
        kind: 'hisha',
        image: Hisya,
        promotedImage: Ryu
      }
    case 'gyoku':
      return {
        kind: 'gyoku',
        image: Gyoku,
        promotedImage: Gyoku
      }
    default:
      throw new Error('invalid piece kind')
  }
}