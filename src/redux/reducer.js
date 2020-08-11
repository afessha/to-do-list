import { TO_DO_LOAD, TO_DO_ADD, TO_DO_DELETE } from "./actions";

const INITAL_TODOS = [];

function bookingReducer(state = INITAL_TODOS, action) {
    switch (action.type) {
        case TO_DO_LOAD:
            return [...state, action.initalToDos];
        case TO_DO_ADD:
            return [...state, action.toDo];
        case TO_DO_DELETE:
            return state.map((booking) => {
                if (booking.id === action.bookingId) {
                    return {
                        ...booking,
                        status: action.value,
                    };
                } else return booking;
            });
        default:
            return state;
    }
}

export default bookingReducer;
