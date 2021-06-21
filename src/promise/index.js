const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey!!!');
        } else {
            reject('Algo salió mal :(');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.log(err));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Holis');
            }, 2000)
        } else {
            const error = new Error('Algo salió mal :(');
            reject(error);
        }
    });
}

somethingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err));

const somethingWillHappen3 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Vamos aprender Nodejs :)');
        } else {
            const error = new Error('Voy a seguir peleando');
            reject(error);
        }
    });
}

somethingWillHappen3()
    .then(response => console.log(response))
    .catch(err => console.log(err));

Promise.all([somethingWillHappen(),somethingWillHappen2(),somethingWillHappen3()])
    .then(response => {
        console.log('Array of results', response);
    })
    .catch(err => {
        console.error(err);
    })
