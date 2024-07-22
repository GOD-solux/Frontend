import resultImageA from "../../assets/myresultA.png";
import resultImageB from "../../assets/myresultB.png";
import resultImageC from "../../assets/myresultC.png";

export const types={
    1:"사색가형",
    2:"참여자형",
    3:"활동가형"
};

export const descriptions={
    1:"정적인 활동과 감상을 좋아하는 사색가. 실내에서의 문화생활이 잘 어울립니다.",
    2:"다양한 경험을 중요시하고 주변에 관심이 많은 참여자형. 자신만의 생각이 뚜렷하군요",
    3:"어디론가 떠나는 걸 좋아하는 활동가형. 시간에 구애받지 않고 몸을 움직이는 활동과 잘 어울립니다"
};

export const activity = {
    1: [
        "전시",
        "도서"
    ],

    2:[
        "전시",
        "공연"
    ],

    3:[
        "스포츠",
        "공연"
    ],

};

export const images={
    1:[
        {resultImageA}
    ],

    2:[
        {resultImageB}
    ],
    3:[
        {resultImageC}
    ]

};
