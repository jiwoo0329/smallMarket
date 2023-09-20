export function TodayDate() {
    let today = new Date();
    let year = String(today.getFullYear()); // 년도
    let month = String(today.getMonth() + 1).padStart(2, '0'); // 월
    let date = String(today.getDate()).padStart(2, '0'); // 날짜
    let day = today.getDay(); // 요일

    return [year, month, date, day];
}
