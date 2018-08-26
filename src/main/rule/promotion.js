export default function promote(type) {
  switch(type) {
    case 'fu': return 'fu';
    case 'kei': return 'nkei';
    case 'kyo': return 'nkyo';
    case 'gin': return 'ngin';
    case 'kaku': return 'uma';
    case 'hisya': return 'ryu';
    default: return '';
  }
}