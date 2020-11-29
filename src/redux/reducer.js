import { DISHES } from '../Shared/Dishes';
import { Comments } from '../Shared/comments';
import { PROMOTIONS } from '../Shared/promotions';
import { LEADERS } from '../Shared/leaders';

export const initialState = {
    dishes: DISHES,
    comments: Comments,
    promotions: PROMOTIONS,
    leaders: LEADERS
};

export const Reducer = (state = initialState, action) => {
    return state;
};