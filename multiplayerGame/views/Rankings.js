let getUsersList = async () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        return json
    } catch (err) {
        console.log('Error getting documents', err)
    }
};

let Rankings = {
    render: async () => {
        let users = await getUsersList();
        let view =  /*html*/`
            <h1>Rankings!</h1>
            <div class="ranking__list">
                <ul id="rankingList">
                    ${ users.map((user) => { `<li>${user.name}</li>`}).join('\n ')}
                </ul>
            </div>
`;
        return view
    }
    , after_render: async () => {
    }

};

export default Rankings;
