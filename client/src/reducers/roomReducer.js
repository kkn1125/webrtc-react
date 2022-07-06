const JOIN = "room/JOIN";
const LOAD = "room/LOAD";
const SAVE = "room/SAVE";

const initialState = {
  room: [],
};

export const join = (room) => ({ type: JOIN, room: room });
export const load = (room) => ({ type: LOAD });
export const save = () => ({ type: SAVE });

export default function rooms(state = initialState, action) {
  switch (action.type) {
    case JOIN:
      if (Boolean(state.room.find((room) => action.room === room))) {
        return state;
      } else {
        return {
          ...state,
          room: state.room.concat(action.room),
        };
      }
    case LOAD:
      return localStorage.getItem("webrtc")
        ? JSON.parse(localStorage.getItem("webrtc"))
        : state;
    case SAVE:
      localStorage.setItem("webrtc", JSON.stringify(state));
      return state;
    default:
      return state;
  }
}
