export default function getNumberofEachKind(data, first, second, third){
    let easy = 0;
    let medium = 0;
    let hard = 0;
    data.forEach((item) =>{
        switch(item.difficulty){
            case 'easy':
                ++easy;
                break;
            case 'medium':
                ++medium;
                break;
            case 'hard':
                ++hard;
                break;
            default:
                break;
      }
    });
  
    first(easy);
    second(medium);
    third(hard);
}