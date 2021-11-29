const iconNames = ["home", "account_circle", "settings", "android", "book", "alarm", "card_travel", "gavel", "face", "favorite",
    "credit_card", "explore", "hourglass_empty", "event", "account_box", "date_range", "camera_enhance", "find_in_page", "code", "delete",
    "description", "help_outline", "feedback", "autorenew", "backup", "copyright", "done"];

const getRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

Array.prototype.swap = function (x, y) {
    var b = this[x];
    this[x] = this[y];
    this[y] = b;
}

const createCards = (icons = iconNames) => {
    let newCardList = [...icons, ...icons];

    for (let i = 0; i < newCardList.length; i++) {
        let ind = getRandom(0, newCardList.length);
        newCardList.swap(i, ind);
    }
    return newCardList.map((item, index) => {
        return {
            id: index + 1,
            iconName: item,
            startClassName: '',
            endClassName: ''
        }
    });
}
export default createCards;
