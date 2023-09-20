export function NowTime() {
    let today = new Date();
    let hours = String(today.getHours()).padStart(2, '0'); // 시
    let minutes = String(today.getMinutes()).padStart(2, '0'); // 분
    let seconds = String(today.getSeconds()).padStart(2, '0'); // 초

    return hours + ':' + minutes + ':' + seconds;
}
