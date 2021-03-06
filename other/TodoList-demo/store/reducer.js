import { ADD_ITEM, DEL_ITEM, INIT_LIST, UPDATE_VALUE} from './actionTypes';

const defaultState = {
  inputValue: '',
  list: ['a', 'b', 'c']
}

// 可以接受 state，但不能修改 state
export default (state = defaultState, action) => {

  // 添加项
  if (action.type === ADD_ITEM) {
    const newState = {
      inputValue: '',
      list: [...state.list, state.inputValue]
    };
    
    return newState;
  }

  // 删除项
  if (action.type === DEL_ITEM) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index, 1);

    return newState;
  }

  // 初始化列表
  if (action.type === INIT_LIST) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = action.list;

    return newState;
  }

  // 更新 inputValue
  if (action.type === UPDATE_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;

    return newState;
  }

  return state;
}