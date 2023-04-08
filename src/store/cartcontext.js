import React from 'react';

const cartcontext = React.createContext ({
    items : [] ,
    totalAmount : 0 ,
    addItem : (item) => {} ,
    removeItem : (id) => {} ,
    clearCart : ()=> {}
})

export default cartcontext 