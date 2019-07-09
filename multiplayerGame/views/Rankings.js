let getUsersList = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, options);
        const json = await response.json();
        console.log(json);
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
};

let Rankings = {
    render: async () => {
        getUsersList();
        let view =  /*html*/`
            <h1>Rankings!</h1>
            <div class="ranking__list">
                list
            </div>
`;
        return view
    }
    , after_render: async () => {
    }

};

export default Rankings;
