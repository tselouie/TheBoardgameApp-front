
function replacer(key,value){
    if(key === "userTradeList" || key === "searchedUserTradeList"){
        let list = [];
        console.log(value);
            for(var i =0; i< value.length;i++){
                let obj = {};
                obj.name=value[i].name;
                obj.condition= value[i].condition;
                obj.id = value[i].id;
                obj.price = value[i].price;
                list.push(obj);
            }
        return list;
    }else{
        return value;
    }

}

export const createTrade = (token,trade) => {

    return fetch(`${process.env.REACT_APP_API_URL}/trade/requestTrade`, {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(trade,replacer)
    })
        .then(response => response.json())
        .then((data) =>{
          return data.tradeId;
        })
        .catch(err =>{
            console.log(err);
        
        })
};

export const deleteTrade = (token, tradeId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/trade/delete/${tradeId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            console.log(response);
            return response.json(); 
        })
        .catch(err => console.log(err));
};

export const getAllTradeRequests = () => {

    return fetch(`${process.env.REACT_APP_API_URL}/trades`, {
        method: "GET",
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then(response => response.json())         
        .catch(err =>{
            console.log(err);
        
        })


;}

export const getAllTradeRequestsById = (userId) => {

    return fetch(`${process.env.REACT_APP_API_URL}/trades/by/${userId}`, {
        method: "GET",
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then(response => response.json())         
        .catch(err =>{
            console.log(err);
        
        })


;}

export const getTradeRequestById = (tradeId) => {

    return fetch(`${process.env.REACT_APP_API_URL}/trade/by/${tradeId}`, {
        method: "GET",
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then(response => response.json())         
        .catch(err =>{
            console.log(err);
        
        })


;}

export const updateTradeStatus = (token, tradeId, status) => {
    return fetch(`${process.env.REACT_APP_API_URL}/trade/update/${tradeId}`, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({"status": status})
    })
        .then(response => {
            console.log(response);
            return response.json(); 
        })
        .catch(err => console.log(err));
};