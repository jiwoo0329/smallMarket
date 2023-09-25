/**
 * 숫자의 천단위마다 콤마 추가 함수
 * 로컬의 언어 상태에 따라 자동 폼 변경됨.
 * @param number
 * @param type onChnage(input 에서 onChange 시) || show(리스트 출력 등 시)
 * @returns 3자리마다 ',' 찍힌 숫자
 */
export default function AddCommaToNum(number: any, type: string) {
    if(type === 'onChange'){
        // 숫자 이외의 값이 들어왔을 때, 해당 문자 삭제
        let RegExp = /[^0-9]/g;				// 숫자가 아닌 문자열을 선택하는 정규식
        number = number.replaceAll(RegExp, "");
    }else if(type === 'show'){
        // 숫자 이외의 값이 들어왔을 때, 해당 문자 출력
        let RegExp = /^[0-9]+$/; // 숫자만 있는지 확인하는 정규식
        if (!RegExp.test(number)) { return number }

    }

    let newNumber = Number(number).toLocaleString();
    return newNumber;
}


