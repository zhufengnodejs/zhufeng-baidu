import * as actionTypes from '../action-types';
import $ from 'jquery';
export default  {
    fetchSuggest(wd){
        return function (dispatch) {
            $.ajax({
                url: 'http://www.baidu.com/su',
                type: 'GET',
                jsonp: 'cb',
                data:{wd},
                dataType: 'jsonp',
                success(result){
                    console.log(result);
                    dispatch({type: actionTypes.FETCH_SUGGEST_SUCCESS, words: result.s})
                }
            })
        }
    },
    fetchSuggestSuccess(words){
        return {
            type: actionTypes.FETCH_SUGGEST_SUCCESS,
            words
        }
    }
}