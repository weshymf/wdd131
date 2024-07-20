document.addEventListener("DOMContentLoaded", () => {
    const games = [
        {
            id: "game1",
            name: "THE LEGEND OF ZELDA: TEARS OF THE KINGDOM",
            description: "The Legend of Zelda: Tears of the Kingdom is an unfathomable follow-up to one of the greatest games ever made, somehow improving upon it in nearly every way – be that with simple quality-of-life improvements, a genuinely exciting story, or wildly creative new building mechanics that make you rethink what is possible. It both revamps old ground and introduces vast new areas so immense it somehow makes me wonder if Breath of the Wild was actually all that big, with an almost alarming number of tasks to complete, mysteries to discover, and delightful distractions to keep you from ever reaching that place you naively thought you were headed. Nintendo has followed up a triumph with a triumph, expanding and evolving a world that already felt full beyond expectation and raising the bar ever higher into the clouds.",
            image: "images/zelda.webp",
            metacriticScore: 96,
            userScore: 8.3,
            developer: "Nintendo EPD",
            publisher: "Nintendo",
            director: "Hidemaro Fujibayashi",
            producer: "Eiji Aonuma",
            writer: "Mari Shirakawa, Naoki Mori, Akihito Toda",
            composer: "Manaka Kataoka, Maasa Miyoshi, Masato Ohashi, Tsukasa Usui",
            platforms: "Nintendo Switch",
            release: "May 12, 2023",
            genre: "Action-adventure",
            mode: "Single-player"
        },
        {
            id: "game2",
            name: "BALDUR'S GATE 3",
            description: "I don't want to say every CRPG going forward should aspire to be like Baldur's Gate 3. Not everything needs to be nearly this big and ambitious, or even this dense. But it is a landmark moment in the genre, and if I had to point to one paragon that I would like everyone else making these to take inspiration from, this is absolutely it. We waited 14 years for the stars to align again so that we could get the ideal mix of crunchy, tactical, old-school RPG combat, an epic and well-written story with complex characters and lots of meaningful choices, and a level of polish and cinematic presentation that let me see the sweat and the sorrow on characters' faces in their darkest hours. Plenty of other games have partially completed that list, but the last time they all came together was Dragon Age: Origins in 2009. And I can finally say that game, and its Infinity Engine predecessors, have a worthy successor that's not just matched their RPG greatness, but surpassed it. Baldur's Gate 3 is just about everything I could have asked for.",
            image: "images/bg3.jpeg",
            metacriticScore: 96,
            userScore: 8.9,
            developer: "Larian Studios",
            publisher: "Larian Studios",
            director: "Swen Vincke",
            producer: "David Walgrave",
            writer: "Adam Smith",
            composer: "Borislav Slavov",
            platforms: "Windows, PlayStation 5, macOS, Xbox Series X/S",
            release: "August 3, 2023",
            genre: "Role-playing",
            mode: "Single-player, multiplayer"
        },
        {
            id: "game3",
            name: "ELDEN RING",
            description: "It is no exaggeration to say that Elden Ring is FromSoftware's largest and most ambitious game yet, and that ambition has more than paid off. Even after 87 hours of blood, sweat, and tears that included some of the most challenging fights I've ever fought, and innumerable surprises, there are still bosses that I left on the table, secrets that I've yet to uncover, sidequests that I missed out on, tons of weapons, spells, and skills that I've never used. And this is all on top of PVP and cooperative play that I've barely been able to scratch the surface of. Throughout it all, while the fundamentals of combat haven't changed much from what we've seen before, the enormous variety of viciously designed enemies and the brutal but surmountable bosses have brought its battles to a new level. Even with all the threads I didn't manage to tug on my first playthrough (of what I'm sure will be several), what I was treated to can easily be held amongst the best open-world games I've ever played. Like The Legend of Zelda: Breath of the Wild before it, Elden Ring is one that we'll be looking back on as a game that moved a genre forward.",
            image: "images/eldenring.jpg",
            metacriticScore: 96,
            userScore: 7.9,
            developer: "FromSoftware",
            publisher: "Bandai Namco Entertainment, JP: FromSoftware",
            director: "Hidetaka Miyazaki",
            producer: "Yuzo Kojima",
            writer: "Hidetaka Miyazaki, George R. R. Martin",
            composer: "Tsukasa Saitoh, Shoi Miyazawa, Tai Tomisawa, Yuka Kitamura, Yoshimi Kudo",
            platforms: "PlayStation 4, PlayStation 5, Windows, Xbox One, Xbox Series X/S",
            release: "February 25, 2022",
            genre: "Action role-playing",
            mode: "Single-player, multiplayer"
        }
        // Add more games as needed
    ];

    const gamesList = document.getElementById("games-list");

    games.forEach(game => {
        const gameDiv = document.createElement("div");
        gameDiv.innerHTML = `
            <h3>${game.name}</h3>
            <img src="${game.image}" alt="${game.name} image">
            <p><strong>Description:</strong> ${game.description}</p>
            <p><strong>Metacritic Score:</strong> ${game.metacriticScore}</p>
            <p><strong>User Score:</strong> ${game.userScore}</p>
            <p><strong>Developer(s):</strong> ${game.developer}</p>
            <p><strong>Publisher(s):</strong> ${game.publisher}</p>
            <p><strong>Director(s):</strong> ${game.director}</p>
            <p><strong>Producer(s):</strong> ${game.producer}</p>
            <p><strong>Writer(s):</strong> ${game.writer}</p>
            <p><strong>Composer(s):</strong> ${game.composer}</p>
            <p><strong>Platform(s):</strong> ${game.platforms}</p>
            <p><strong>Release:</strong> ${game.release}</p>
            <p><strong>Genre(s):</strong> ${game.genre}</p>
            <p><strong>Mode(s):</strong> ${game.mode}</p>`;
        gamesList.appendChild(gameDiv);
    });

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        localStorage.setItem("contactFormData", JSON.stringify({ name, email, message }));

        alert("Form submitted successfully!");
        contactForm.reset();
    });
});
