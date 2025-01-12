const genreSelect = document.getElementById('genre-select');
        const recommendationList = document.getElementById('recommendation-list');

        const songData = {
            pop: [
                "Shape of You - Ed Sheeran",
                "Blinding Lights - The Weeknd",
                "Uptown Funk - Mark Ronson ft. Bruno Mars",
                "As it Was - Harry Styles"
            ],
            rock: [
                "Bohemian Rhapsody - Queen",
                "Stairway to Heaven - Led Zeppelin",
                "Smells Like Teen Spirit - Nirvana",
                "Sweet Child o' Mine - Guns N' Roses"
            ],
            jazz: [
                "Fly Me to the Moon - Frank Sinatra",
                "Take Five - Dave Brubeck",
                "So What - Miles Davis",
                "Autumn Leaves - Eva Cassidy"
            ],
            electronic: [
                "One More Time - Daft Punk",
                "Levels - Avicii",
                "Clarity - Zedd ft. Foxes",
                "Sun & Moon - Above & Beyond"
            ],
            hiphop:[
                "The Message - Grandmaster Flash",
                "Juicy - Notorious B.I.G",
                "Lose Yourself - Eminem",
                "In da Club - 50 Cent"
            ]
        };

        genreSelect.addEventListener('change', () => {
            const selectedGenre = genreSelect.value;
            recommendationList.innerHTML = ""; // Clear previous recommendations

            if (selectedGenre && songData[selectedGenre]) {
                const recommendations = songData[selectedGenre];
                recommendations.forEach(song => {
                    const listItem = document.createElement('li');
                    listItem.textContent = song;
                    recommendationList.appendChild(listItem);
                });
            } else {
                const listItem = document.createElement('li');
                listItem.textContent = "No recommendations available for this genre.";
                recommendationList.appendChild(listItem);
            }
        });