import fs from 'fs';
import update from 'react-addons-update';


let state = {
    order:JSON.parse(fs.readFileSync('../json/data.json').toString())
}

let updateOrder = update(state.order, {
    receive: {
        $set: '부산시 해운대구 우동'
    },
    payment: {
        method: {
            $set: 'Mobile'
        }
    },
    products: {
        // 배열 요소 변경(인덱스로 찾아서)
        0: {
            amount: {
                $set: 5
            }
        }
    }
});


console.log(
    state.order,
    updateOrder,
    state.order === updateOrder,
    state.order.receive === updateOrder.receive,
    state.order.payment === updateOrder.payment,
    state.order.products === updateOrder.products);
