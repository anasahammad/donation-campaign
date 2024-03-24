
export const getDonate = ()=>{
    let donation = [];
    const storeDonation = localStorage.getItem('donation');
    if(storeDonation){
        donation = JSON.parse(storeDonation)
    }
    return donation;
}

export const saveItem = donate =>{
    let donation = getDonate();

    const isExist = donation.find(item=> item.id === donate.id)
    if(!isExist){
        donation.push(donate)
        localStorage.setItem('donation', JSON.stringify(donation));
    }
    else{
        alert("Already exist")
    }
}

export const deleteItem = id=>{
    let  donation = getDonate()
    const remainig = donation.filter(item=> item.id !== id)
    localStorage.removeItem("donation", JSON.stringify(remainig));
}