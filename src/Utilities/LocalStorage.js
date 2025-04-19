const getItemFromLocalStorage = ()=>{
    const storedBook = localStorage.getItem('readList');

    if (storedBook) {
        const storedBookData = JSON.parse(storedBook);
        return storedBookData;
    }
    else{
        return [];
    }
};

const addItemToLocalStorage = (id)=>{
    const storedBookData = getItemFromLocalStorage();

    if (storedBookData.includes(id)) {
        alert("bhai ei id already exist ")
    }
    else {
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("readList",data)

    }
}

export {addItemToLocalStorage};