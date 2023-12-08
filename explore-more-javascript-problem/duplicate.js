const names = ['shah israil', 'said', 'abul', 'rifat', 'shah israil', 'said', 'rifat', 'said'];

function remoteDuplicate(names) {
    const uniqe = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (uniqe.includes(name) === false){
            uniqe.push(name)
        }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
    }
    return uniqe
}
const uniqNames = remoteDuplicate(names);
console.log(uniqNames);



