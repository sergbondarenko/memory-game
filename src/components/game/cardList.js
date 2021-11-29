import _ from 'lodash';
const iconNames = ["home", "account_circle", "settings", "android", "book", "alarm", "card_travel", "gavel", "face", "favorite",
    "credit_card", "explore", "hourglass_empty", "event", "account_box", "date_range", "camera_enhance", "find_in_page", "code", "delete",
    "description", "help_outline", "feedback", "autorenew", "backup", "copyright", "done"];

const maxPairs = 1; // reduce the number of cards for debugging

const createCards = (icons = iconNames) => {

    /**
     * Lodash is an awesome library for working with arrays and collections
     * https://lodash.com/docs/4.17.15#shuffle
     */
    const randomIconsList = _.sampleSize(icons, maxPairs ?? iconNames.length);
    const newCardList = [..._.shuffle(randomIconsList),..._.shuffle(randomIconsList)];

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
