// Sélectionnez les éléments du DOM
const navLinks = document.querySelector('.nav-links');
const termsButton = document.getElementById('terms-button');
const termsModal = document.getElementById('terms-modal');


// Ajoutez un gestionnaire d'événements pour ouvrir la modale des Termes et Conditions
termsButton.addEventListener('click', () => {
    termsModal.style.display = 'block';
});

// Ajoutez un gestionnaire d'événements pour fermer la modale des Termes et Conditions
termsModal.addEventListener('click', (event) => {
    if (event.target === termsModal) {
        termsModal.style.display = 'none';
    }
});


// Fermez la modale des Termes et Conditions lorsque l'utilisateur appuie sur la touche "Escape"
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        termsModal.style.display = 'none';
    }
});


// Ajout de la classe active à la page actuellement consultée
// Récupérez l'URL de la page actuelle
const currentPage = location.href;

// Sélectionnez toutes les balises <a> dans la liste de navigation
const allAs = document.querySelectorAll('a');
const allAsLength = allAs.length;

// Parcourez toutes les balises <a> pour trouver celle correspondant à la page actuelle
for (let i = 0; i < allAsLength; i++) {
    // Vérifiez si l'attribut href de la balise <a> correspond à la page actuelle
    if (allAs[i].href === currentPage) {
        // Ajoutez la classe "active" à la balise <li> parente de la balise <a>
        const listItem = allAs[i].parentNode; // Sélectionnez le parent <li>
        if (listItem && listItem.tagName === 'LI') {
            listItem.classList.add('active');
        }
    }
}


//Gestion du fade-in
// Fonction pour vérifier si un élément est au moins partiellement dans la fenêtre visible
function isElementPartiallyInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.bottom >= 0 &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    );
}

// Fonction pour activer l'effet de fondu sur les éléments visibles
function activateFadeIn() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach((el) => {
        if (isElementPartiallyInViewport(el)) {
            el.classList.add('active');
        }
    });
}

// Déclenchez l'animation pour tous les éléments visibles au chargement de la page
window.addEventListener('DOMContentLoaded', activateFadeIn);

// Ajoutez un gestionnaire d'événements pour le défilement de la page
window.addEventListener('scroll', activateFadeIn);

//Twitter generator

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "https://i.ibb.co/x8zg55J/photo-1-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/9qGkL4c/photo-2-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/nkgDBf8/photo-3-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/3hgjX5D/photo-4-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/y5y7v5k/photo-5-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/G2ny0hT/photo-7-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/Kqkb2rj/photo-6-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/GsgN1Xc/photo-8-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/hyB4Fwk/photo-9-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/9q7SwNd/photo-10-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/09mTbC1/photo-11-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/Vtf0H8f/photo-12-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/WftS8qs/photo-13-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/5sp8BFS/photo-14-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/Bfbwjqc/photo-15-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/K2jRT6D/photo-16-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/DCb5s0x/photo-17-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/B6BvdFs/photo-18-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/gzR1MLX/photo-19-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/r3c6GWd/photo-20-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/WpMbV4p/photo-21-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/xYvnN2x/photo-22-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/h1tLN9P/photo-23-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/cN762Pp/photo-24-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/j6sfXy0/photo-25-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/QHzgVTp/photo-26-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/g3R8cm3/photo-27-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/vZgwcJd/photo-28-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/DCh2zJF/photo-29-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/HPz9xSz/photo-30-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/HnR6w7j/photo-31-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/9p7C6GS/photo-32-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/sVkTb6R/photo-34-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/D9N5fR6/photo-33-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/1vYNCfg/photo-35-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/LzbrzYV/photo-36-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/qkB2gDP/photo-37-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/hyrhcMr/photo-38-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/346z5df/photo-39-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/5j27L4Q/photo-40-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/S60212N/photo-41-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/dtKf3rT/photo-42-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/LhmNCxC/photo-44-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/sRVtrmt/photo-45-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/FB2gL8z/photo-46-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/Wvwf0Rr/photo-47-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/rtj9SY3/photo-48-2024-04-10-00-21-09.jpg",
        "https://i.ibb.co/cyFNdQn/photo-1-2024-04-11-22-59-30.jpg",
        "https://i.ibb.co/Q8K72tJ/photo-2-2024-04-11-22-59-30.jpg",
        "https://i.ibb.co/km38GNH/photo-3-2024-04-11-22-59-30.jpg",
        "https://i.ibb.co/Ypwdq7y/photo-4-2024-04-11-22-59-30.jpg",
        "https://i.ibb.co/qxkSDVL/photo-5-2024-04-11-22-59-30.jpg",
        "https://i.ibb.co/QN30YHV/photo-6-2024-04-11-22-59-30.jpg",
        "https://i.ibb.co/yhmJpXY/photo-7-2024-04-11-22-59-30.jpg"

    ];
    
        const selectedImage = document.getElementById('selected-image');
        const changePictureButton = document.getElementById('change-picture-button');
        const generateTweetButton = document.getElementById('generate-tweet-button');
        const publishTwitterButton = document.getElementById('publish-twitter-button');
        const tweetOutput = document.getElementById('tweet-output');
    
        function selectRandomImage() {
            const randomIndex = Math.floor(Math.random() * images.length);
            selectedImage.src = images[randomIndex];
        }
    
        selectRandomImage();
    
    function generateTweet() {
    const greetings = [
        "Hey, cat crew, check this! 🐾",
        "Miaowww, folks! Ready for something wild? 😼",
        "GM, my furry fam! 🌞",
        "Yo, mouse hunters! Love this. 🐭",
        "Hey, claw lovers! Peek at this. 😻",
        "What's up, furballs? Get ready to be dazzled. ✨",
        "Wassup, wild kittens? Ain't ready for this. 😹",
        "Hello, purrers! Something special for ya. ❤️",
        "Yo, miaowers! Heavy stuff coming. 🎨",
        "GM, couch terrors! Fresh stuff for you. 🛋️",
        "Greetings, night shadow hunters! Waking up yet? 🌙",
        "Hola, apartment lynxes! Miaow with joy. 🏠",
        "Hey, living room beasts, behold this masterpiece. 🖼️",
        "What's up, furballs? Brace for tail-wiggling. 🐈",
        "Hey, litter enthusiasts! Showing you something. 💩",
    ];
    
    const lowMarketCap = [
        "Dive in while the marketcap is a hidden gem. 🌟",
        "With such a low marketcap, the sky's the limit! 🚀",
        "Grab this low marketcap before it explodes! 💥",
        "This project is a rare find with its low marketcap. ✨",
        "Low marketcap means high potential. Don't miss out! 🌈",
    ];
    
    const holders = [
        "Join the club of 500+ holders. 🌱",
        "Over 500 holders can’t be wrong – the next big thing! 🎉",
        "500+ holders and counting. Join now! 🚶‍♂️",
        "The community is growing strong with 500+ holders. 📈",
        "Our community has reached 500+ holders. Join us! 🎊",
    ];
    
    const trendingOnDexScreener = [
        "We’re trending on Dexscreener – see the buzz! 📈",
        "Catch us on Dexscreener's trending list – where we belong. 💫",
        "Dexscreener knows what's up – so do our holders. 💼",
        "Trending on Dexscreener? Just the beginning. Follow our rise. 🌟",
        "See us top the charts on Dexscreener – just getting started. 🚀",
    ];
    
    const amazingArtwork = [
        "Our artwork isn’t just good, it’s amazing. 🖼️",
        "Amazing artwork that captures imaginations. 💖",
        "Each artwork tells a story. Dive into ours. 📘",
        "Our artwork is groundbreaking and captivating. Take a look. 🌍",
        "Amazing artwork as unique as our community. 🌈",
    ];
    
    const hilariousArtwork = [
        "Art that makes you laugh? We’ve got it. 😂",
        "Our artwork is sure to put a smile on your face. 😄",
        "Get ready to LOL with our hilarious art. 🤣",
        "Who said art had to be serious? Ours is hilariously brilliant. 😜",
        "Hilarious artwork as entertaining as it is creative. 🎭",
    ];
    
    const strongCommunity = [
        "Our community isn’t just strong, it’s unstoppable. 💪",
        "Join a community where strength and support go hand in hand. 🤝",
        "With a community this strong, we can conquer. 🌎",
        "Our strength lies in our unity. Be a part. 🛡️",
        "A thriving community built on strength and collaboration. 🌿",
    ];
    
    const connectedWithWhales = [
        "Even the whales are getting in on this. 🐳",
        "Connected with whales, making waves. 🌊",
        "Whales are on board, and for good reason. Dive in. 🏊",
        "Our project caught the eye of some big players. See why. 👀",
        "When whales pay attention, it’s special. 🐋",
    ];
    
    
        const importantInfo = [
            "Token: $Miaow | CA: 0x66fA127C1858D8f7346F79d1958450aCf1469Ddb",
            "Be part of $Miaow! 🐾 CA: 0x66fA127C1858D8f7346F79d1958450aCf1469Ddb",
            "Discover $Miaow's world! CA: 0x66fA127C1858D8f7346F79d1958450aCf1469Ddb",
        ];
    
        // Hashtags
        const hashtags = ['#avax', '#meme'];
    
        const allCategories = [lowMarketCap, holders, trendingOnDexScreener, amazingArtwork, hilariousArtwork, strongCommunity, connectedWithWhales];
        shuffleArray(allCategories);
    
        let tweetText = '';
        let attempts = 0;
    
        while (tweetText.length > 280 || tweetText.length === 0) {
            if (attempts++ > 10) break;
    
            const greeting = getRandomElement(greetings);
            const selectedCategories = allCategories.slice(0, 3).map(cat => getRandomElement(cat));
            const info = getRandomElement(importantInfo);
    
            // Concatenate selected categories and info with line breaks
            tweetText = `${greeting}\n${selectedCategories.join('\n')}\n${info}\n`;
    
            // Append hashtags
            tweetText += hashtags.join(' ');
    
            // Check if tweetText exceeds the character limit, accounting for emoji lengths
            let emojiLength = 0;
            for (const char of tweetText) {
                if (char.length > 1) {
                    emojiLength += 2;
                } else {
                    emojiLength++;
                }
            }
    
            if (emojiLength > 280) {
                tweetText = ''; // Reset tweetText if it exceeds the limit
            }
        }
    
        tweetOutput.innerText = tweetText;
        publishTwitterButton.style.display = "inline";
    }
 
        generateTweet();
    
        changePictureButton.addEventListener('click', selectRandomImage);
    
        generateTweetButton.addEventListener('click', generateTweet);
    
    publishTwitterButton.addEventListener('click', function() {
        const userConfirmed = confirm("Have you saved the picture? Click 'OK' to proceed to Twitter, or 'Cancel' to go back and save the picture.");
        if (userConfirmed) {
            const tweetText = tweetOutput.innerText;
            const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
            window.open(tweetUrl, '_blank').focus();
        }
    });
    
        function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }
    
        function getRandomElement(arr) {
            return arr[Math.floor(Math.random() * arr.length)];
        }
    });
    