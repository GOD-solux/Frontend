import resultImageA from "../../assets/myresultA.png";
import resultImageB from "../../assets/myresultB.png";
import resultImageC from "../../assets/myresultC.png";

export const types={
    A:"사색가형",
    B:"참여자형",
    C:"활동가형"
};

export const descriptions={
    A:"&nbsp;정적인 활동과 감상을 좋아하는 사색가. <br/>&nbsp;실내에서의 문화생활이 잘 어울립니다.",
    B:"&nbsp;다양한 경험을 중요시하고 주변에 관심이 많은 참여자형. <br/>&nbsp;자신만의 생각이 뚜렷하군요",
    C:"&nbsp;어디론가 떠나는 걸 좋아하는 활동가형. <br/>&nbsp;시간에 구애받지 않고 몸을 움직이는 활동과 잘 어울립니다"
};

export const activity = {
    A: [
        "전시",//0
        "도서"//1
    ],

    B:[
        "전시",
        "공연"
    ],

    C:[
        "스포츠",
        "공연"
    ],

};

export const images={
    A:resultImageA,
    B:resultImageB,
    C:resultImageC

};
