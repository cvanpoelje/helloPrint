let Home = {
    render: async () => {
        let view =  /*html*/`
            <div class="game__container">
                <div class="playerCard__container">
                    <div class="playerCard__UI">
                        <p>
                            Enter a number <br>
                            between 0 and 100 <br>
                            <input class="playerCard__input" data-player=1 type="text">
                            <button class="playerCard__submit" data-player=1>Submit</button>
                            <span class="playerCard__message" data-player=1>
                               Take a guess
                            </span>
                        </p>
                    </div>
                </div>
                <div class="playerCard__container">
                    <div class="playerCard__UI">
                        <p>
                            Enter a number <br>
                            between 0 and 100 <br>
                            <input class="playerCard__input" data-player=2 type="text">
                            <button class="playerCard__submit" data-player=2>Submit</button>
                            <span class="playerCard__message" data-player=2>Take a guess</span>
                        </p>
                    </div>
                </div>
                <div class="playerCard__container">
                    <div class="playerCard__UI">
                        <p>
                            Enter a number <br>
                            between 0 and 100 <br>
                            <input class="playerCard__input" data-player=3 type="text">
                            <button class="playerCard__submit" data-player=3>Submit</button>
                            <span class="playerCard__message" data-player=3>
                                Take a guess
                            </span>
                        </p>
                    </div>
                </div>
            </div>
<script src="./js/game.js"></script>
`
        return view
    }
    , after_render: async () => {
    }

};

export default Home;
