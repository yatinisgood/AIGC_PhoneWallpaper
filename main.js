document.addEventListener('DOMContentLoaded', function() {

    // ▼▼▼ 您需要編輯的區域從這裡開始 ▼▼▼

    const portfolioItems = [
        {
            file: 'images/001.jpg',
            prompt: 'Masterpiece, 8K, hyperrealistic, orthogonal top-down aerial photograph of a breathtakingly rugged coastline. A powerful, deep teal ocean with dynamic, churning waves is captured in motion, creating intricate, lace-like patterns of white seafoam as they wash over the wet, sandy shore. The beach is littered with numerous weathered boulders and rocks of various sizes. The scene is captured during the golden hour, with a low sun casting long, soft shadows that accentuate the texture of the rocks and the sand. The shore is dramatically flanked by steep cliffs displaying a dense forest in peak autumn foliage, with vibrant fiery orange and red leaves. The image must have a stark contrast between the warm tones of the sunlit cliffs and the cool tones of the ocean. Cinematic quality, tack sharp detail.'
        },
        {
            file: 'images/002.jpg',
            prompt: 'Masterpiece, 8K, hyperrealistic, orthogonal top-down aerial photograph of a breathtakingly rugged coastline. A powerful, deep teal ocean with dynamic, churning waves is captured in motion, creating intricate, lace-like patterns of white seafoam as they wash over the wet, sandy shore. The beach is littered with numerous weathered boulders and rocks of various sizes. The scene is captured during the golden hour, with a low sun casting long, soft shadows that accentuate the texture of the rocks and the sand. The shore is dramatically flanked by steep cliffs displaying a dense forest in peak autumn foliage, with vibrant fiery orange and red leaves. The image must have a stark contrast between the warm tones of the sunlit cliffs and the cool tones of the ocean. Cinematic quality, tack sharp detail.'
        },
        {
            file: 'images/003.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic photograph, in the style of National Geographic. A breathtaking, very high-altitude aerial view looking out over a vast and intricate coastline where a continent of reddish-brown, eroded canyonlands meets a deep, dark teal ocean. The scene is captured during a magnificent sunset; the sun is just below the horizon, causing the sky to explode in a brilliant gradient of fiery orange and red. This intense, natural light catches the highest clouds and reflects on the water's surface, creating a stark contrast with the deep shadows in the canyons. The image must feel like a real, awe-inspiring moment on Earth. AVOID any sci-fi, fantasy, or digital painting aesthetics. Focus on natural, plausible geology and atmospheric lighting effects."
        },
        {
            file: 'images/004.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic photograph, in the style of National Geographic. A breathtaking, very high-altitude aerial view looking out over a vast and intricate coastline where a continent of reddish-brown, eroded canyonlands meets a deep, dark teal ocean. The scene is captured during a magnificent sunset; the sun is just below the horizon, causing the sky to explode in a brilliant gradient of fiery orange and red. This intense, natural light catches the highest clouds and reflects on the water's surface, creating a stark contrast with the deep shadows in the canyons. The image must feel like a real, awe-inspiring moment on Earth. AVOID any sci-fi, fantasy, or digital painting aesthetics. Focus on natural, plausible geology and atmospheric lighting effects."
        
        },
        {
            file: 'images/005.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic. A cinematic high-angle shot looking down into a hidden, enchanted valley. The central subject is a single, majestic ancient tree with a thick, gnarled, twisting trunk and prominent roots, crowned with a massive, textured canopy of fiery orange leaves. It is rooted in a narrow, winding path covered with a carpet of vibrant, multi-colored mosses. The valley walls are steep and lined with two contrasting types of dense forest: on one side, a forest of trees with unique, fluffy, muted teal-blue foliage, and on the other, lush orange groves with visible, bright oranges hanging from the branches. The lighting is soft and magical, highlighting the incredible textures of the bark, leaves, and moss. The scene has the tangible, detailed quality of a realistic, meticulously crafted diorama."
        
        },
        {
            file: 'images/006.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic. A cinematic high-angle shot looking down into a hidden, enchanted valley. The central subject is a single, majestic ancient tree with a thick, gnarled, twisting trunk and prominent roots, crowned with a massive, textured canopy of fiery orange leaves. It is rooted in a narrow, winding path covered with a carpet of vibrant, multi-colored mosses. The valley walls are steep and lined with two contrasting types of dense forest: on one side, a forest of trees with unique, fluffy, muted teal-blue foliage, and on the other, lush orange groves with visible, bright oranges hanging from the branches. The lighting is soft and magical, highlighting the incredible textures of the bark, leaves, and moss. The scene has the tangible, detailed quality of a realistic, meticulously crafted diorama."
        
        },
        {
            file: 'images/007.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic, orthogonal top-down aerial photograph. A serene, deep emerald-green river that carves a gentle, sweeping curve through the landscape. Avoid straight, canal-like lines; the river should have natural, organic meanders. A single, minimalist orange boat travels along the river, creating a beautiful focal point. The river is sharply defined by dark, rocky shorelines. Beyond the banks, the land is covered by incredibly dense forests of trees with thick, rounded canopies, all in a uniform and vibrant burnt-orange hue. The lighting is soft and even, emphasizing the stark, beautiful contrast. The overall composition is harmonious and balanced, evoking a profound sense of tranquility."
        },
        {
            file: 'images/008.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic, orthogonal top-down aerial photograph. A serene, deep emerald-green river that carves a gentle, sweeping curve through the landscape. Avoid straight, canal-like lines; the river should have natural, organic meanders. A single, minimalist orange boat travels along the river, creating a beautiful focal point. The river is sharply defined by dark, rocky shorelines. Beyond the banks, the land is covered by incredibly dense forests of trees with thick, rounded canopies, all in a uniform and vibrant burnt-orange hue. The lighting is soft and even, emphasizing the stark, beautiful contrast. The overall composition is harmonious and balanced, evoking a profound sense of tranquility."
        },
        {
            file: 'images/009.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic, orthogonal top-down aerial photograph. A single, minimalist orange boat is perfectly centered in a long, straight, narrow canal of calm, dark emerald-green water. The canal is sharply defined by dark, rocky shorelines. Beyond these banks, the landscape is consumed by incredibly dense forests of trees with thick, rounded canopies, all in a uniform and vibrant burnt-orange hue. The composition is perfectly linear, minimalist, and symmetrical, creating a powerful sense of tranquility and order. The lighting is soft and even, emphasizing the stark, beautiful contrast between the fiery orange foliage and the deep green water. Cinematic quality, pristine, and serene."
        }
        ,
        {
            file: 'images/010.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic, orthogonal top-down aerial photograph. A single, minimalist orange boat is perfectly centered in a long, straight, narrow canal of calm, dark emerald-green water. The canal is sharply defined by dark, rocky shorelines. Beyond these banks, the landscape is consumed by incredibly dense forests of trees with thick, rounded canopies, all in a uniform and vibrant burnt-orange hue. The composition is perfectly linear, minimalist, and symmetrical, creating a powerful sense of tranquility and order. The lighting is soft and even, emphasizing the stark, beautiful contrast between the fiery orange foliage and the deep green water. Cinematic quality, pristine, and serene."
        }
        ,
        {
            file: 'images/011.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic, orthogonal top-down aerial photograph of a stunning river valley. The landscape is uniquely characterized by rolling hills made of visible, stacked layers of earth, creating a natural topographic and contoured effect, similar to terraced rice paddies. A shallow, winding river with a visible rocky bed carves a path through the center. The terrain is dotted with dense clusters of autumn trees with rounded canopies, in a rich palette of fiery orange, rust, and muted teal-green. The lighting is moody and cinematic, as if from a slightly overcast sky, highlighting the intricate textures of the land. Rendered in Unreal Engine 5, with the tangible, physical quality of a meticulously crafted, realistic diorama."
        },
        {
            file: 'images/012.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic, orthogonal top-down aerial photograph of a stunning river valley. The landscape is uniquely characterized by rolling hills made of visible, stacked layers of earth, creating a natural topographic and contoured effect, similar to terraced rice paddies. A shallow, winding river with a visible rocky bed carves a path through the center. The terrain is dotted with dense clusters of autumn trees with rounded canopies, in a rich palette of fiery orange, rust, and muted teal-green. The lighting is moody and cinematic, as if from a slightly overcast sky, highlighting the intricate textures of the land. Rendered in Unreal Engine 5, with the tangible, physical quality of a meticulously crafted, realistic diorama."
        }
        ,
        {
            file: 'images/013.jpg',
            prompt: "A masterpiece, 8K, epic concept art from a high-angle perspective. A tiny, solitary figure in silhouette stands at the precipice of a vast, surreal mountain peak. The landscape is a breathtaking, abstract panorama of flowing, eroded rock formations, painted in vibrant, fiery orange and burnt sienna tones. This massive, warm-colored terrain merges dramatically with a deep, turbulent teal ocean, with white seafoam swirling at the chaotic shoreline. The sky is filled with heavy, dramatic clouds. The entire scene evokes a profound sense of scale, solitude, and majestic, awe-inspiring beauty. Highly detailed, painterly style, epic lighting."
        },
        {
            file: 'images/014.jpg',
            prompt: "A masterpiece, 8K, epic concept art from a high-angle perspective. A tiny, solitary figure in silhouette stands at the precipice of a vast, surreal mountain peak. The landscape is a breathtaking, abstract panorama of flowing, eroded rock formations, painted in vibrant, fiery orange and burnt sienna tones. This massive, warm-colored terrain merges dramatically with a deep, turbulent teal ocean, with white seafoam swirling at the chaotic shoreline. The sky is filled with heavy, dramatic clouds. The entire scene evokes a profound sense of scale, solitude, and majestic, awe-inspiring beauty. Highly detailed, painterly style, epic lighting."
        },
        {
            file: 'images/015.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic. A cinematic drone photograph taken from a high angle, looking down on a solitary wooden A-frame cabin in a pristine, dense forest. The forest is composed of trees with unusually thick, rounded, textured canopies, almost like cauliflower heads, displaying a rich and earthy autumn color spectrum: muted teal, forest green, vibrant ochre, and burnt orange. A well-worn dirt trail meanders through the dense undergrowth, leading to the cabin. The scene is illuminated by soft, natural, directional light that casts gentle shadows, emphasizing the incredible detail and texture of the foliage and the wooden roof. The image should have the tangible quality of a real, undiscovered location, with incredible depth and clarity. Shot with a tilt-shift lens to give a slight miniature effect, enhancing the cozy, contained feeling."
        },
        {
            file: 'images/016.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic. A cinematic drone photograph taken from a high angle, looking down on a solitary wooden A-frame cabin in a pristine, dense forest. The forest is composed of trees with unusually thick, rounded, textured canopies, almost like cauliflower heads, displaying a rich and earthy autumn color spectrum: muted teal, forest green, vibrant ochre, and burnt orange. A well-worn dirt trail meanders through the dense undergrowth, leading to the cabin. The scene is illuminated by soft, natural, directional light that casts gentle shadows, emphasizing the incredible detail and texture of the foliage and the wooden roof. The image should have the tangible quality of a real, undiscovered location, with incredible depth and clarity. Shot with a tilt-shift lens to give a slight miniature effect, enhancing the cozy, contained feeling."
        }
        ,
        {
            file: 'images/017.jpg',
            prompt: "An ultra-realistic, 8K drone photograph of a secluded, organically shaped island. The landscape is dominated by a lush forest of trees in peak autumn foliage, with intense shades of orange and saffron. The island's coast is a mix of rocky outcrops and small, hidden coves, meeting the exceptionally clear, cyan-colored water. The scene is serene and untouched, with soft, natural sunlight highlighting the incredible color contrast between the orange foliage and the turquoise sea."
        }
        ,
        {
            file: 'images/018.jpg',
            prompt: "An ultra-realistic, 8K drone photograph of a secluded, organically shaped island. The landscape is dominated by a lush forest of trees in peak autumn foliage, with intense shades of orange and saffron. The island's coast is a mix of rocky outcrops and small, hidden coves, meeting the exceptionally clear, cyan-colored water. The scene is serene and untouched, with soft, natural sunlight highlighting the incredible color contrast between the orange foliage and the turquoise sea."
        }
        ,
        {
            file: 'images/019.jpg',
            prompt: "Masterpiece, 8K, ultra-photorealistic aerial photography from a directly overhead perspective. A solitary, small wooden boat is skillfully navigating the turbulent, churning turquoise ocean. A massive, powerful ocean wave with frothy white seafoam is captured in motion, about to crash near a surreal coastline. The shore is a stark and beautiful contrast, featuring a sandy beach meeting rugged, fiery orange and reddish-brown cliffs. The lighting is dramatic, highlighting the awe-inspiring power of nature and the stark color palette. Epic, cinematic, high-energy, high-contrast."
        }
        ,
        {
            file: 'images/020.jpg',
            prompt: "Masterpiece, 8K, ultra-photorealistic aerial photography from a directly overhead perspective. A solitary, small wooden boat is skillfully navigating the turbulent, churning turquoise ocean. A massive, powerful ocean wave with frothy white seafoam is captured in motion, about to crash near a surreal coastline. The shore is a stark and beautiful contrast, featuring a sandy beach meeting rugged, fiery orange and reddish-brown cliffs. The lighting is dramatic, highlighting the awe-inspiring power of nature and the stark color palette. Epic, cinematic, high-energy, high-contrast."
        }
        ,
        {
            file: 'images/021.jpg',
            prompt: "Masterpiece, 8K resolution, photorealistic aerial photography from a drone, top-down perspective. The subject is a stunningly beautiful, small island shaped like the number 8, adrift in a vast, crystal-clear turquoise sea. The island is entirely covered by a dense, magical forest of vibrant, fiery orange pine trees. In a small, hidden cove in the center of the island, there's a lush green clearing with a single orange kayak resting on the shore. The image captures a serene, untouched, and surreal natural wonder with incredibly vibrant and saturated colors."
        }
        ,
        {
            file: 'images/022.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic, orthogonal top-down aerial photograph of a stunning river valley. The landscape is uniquely characterized by rolling hills made of visible, stacked layers of earth, creating a natural topographic and contoured effect, similar to terraced rice paddies. A shallow, winding river with a visible rocky bed carves a path through the center. The terrain is dotted with dense clusters of autumn trees with rounded canopies, in a rich palette of fiery orange, rust, and muted teal-green. The lighting is moody and cinematic, as if from a slightly overcast sky, highlighting the intricate textures of the land. Rendered in Unreal Engine 5, with the tangible, physical quality of a meticulously crafted, realistic diorama."
        },
        {
            file: 'images/023.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic, orthogonal top-down aerial photograph of a stunning river valley. The landscape is uniquely characterized by rolling hills made of visible, stacked layers of earth, creating a natural topographic and contoured effect, similar to terraced rice paddies. A shallow, winding river with a visible rocky bed carves a path through the center. The terrain is dotted with dense clusters of autumn trees with rounded canopies, in a rich palette of fiery orange, rust, and muted teal-green. The lighting is moody and cinematic, as if from a slightly overcast sky, highlighting the intricate textures of the land. Rendered in Unreal Engine 5, with the tangible, physical quality of a meticulously crafted, realistic diorama."
        },
        {
            file: 'images/024.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic. A cinematic high-angle shot looking down into a hidden, enchanted valley. The central subject is a single, majestic ancient tree with a thick, gnarled, twisting trunk and prominent roots, crowned with a massive, textured canopy of fiery orange leaves. It is rooted in a narrow, winding path covered with a carpet of vibrant, multi-colored mosses. The valley walls are steep and lined with two contrasting types of dense forest: on one side, a forest of trees with unique, fluffy, muted teal-blue foliage, and on the other, lush orange groves with visible, bright oranges hanging from the branches. The lighting is soft and magical, highlighting the incredible textures of the bark, leaves, and moss. The scene has the tangible, detailed quality of a realistic, meticulously crafted diorama."
        },
        {
            file: 'images/025.jpg',
            prompt: "Masterpiece, 8K, hyperrealistic. A cinematic high-angle shot looking down into a hidden, enchanted valley. The central subject is a single, majestic ancient tree with a thick, gnarled, twisting trunk and prominent roots, crowned with a massive, textured canopy of fiery orange leaves. It is rooted in a narrow, winding path covered with a carpet of vibrant, multi-colored mosses. The valley walls are steep and lined with two contrasting types of dense forest: on one side, a forest of trees with unique, fluffy, muted teal-blue foliage, and on the other, lush orange groves with visible, bright oranges hanging from the branches. The lighting is soft and magical, highlighting the incredible textures of the bark, leaves, and moss. The scene has the tangible, detailed quality of a realistic, meticulously crafted diorama."
        },

        // ... 在此繼續為您的每一張圖片新增一個區塊
        // 格式: { file: '圖片路徑', prompt: '您的提示詞' },
    ];

    // ▲▲▲ 您需要編輯的區域到這裡結束 ▲▲▲


    // --- 以下的程式碼您不需要修改 ---

    const grid = document.querySelector('.grid');

    const msnry = new Masonry(grid, {
        itemSelector: '.grid-item',
        columnWidth: 300,
        gutter: 20,
        fitWidth: true // <--- 就是新增這一行來啟用置中！
    });

    // 迴圈處理每一張圖片和它的提示詞
    portfolioItems.forEach(item => {
        // 1. 建立整個卡片容器
        const gridItem = document.createElement('div');
        gridItem.className = 'grid-item';

        // 2. 建立圖片的連結 (用於點擊放大)
        const link = document.createElement('a');
        link.href = item.file;
        link.dataset.fancybox = "gallery";
        link.dataset.caption = item.prompt; // 提示詞依然會顯示在放大的燈箱中

        const img = document.createElement('img');
        img.src = item.file;
        link.appendChild(img);

        // 3. 【新增】建立顯示提示詞的區塊
        const promptContainer = document.createElement('div');
        promptContainer.className = 'prompt-container';

        const promptText = document.createElement('p');
        promptText.className = 'prompt-text';
        promptText.textContent = item.prompt; // 將提示詞放入 <p> 標籤
        promptContainer.appendChild(promptText);

        // 4. 將圖片連結和提示詞區塊都放入卡片容器中
        gridItem.appendChild(link);
        gridItem.appendChild(promptContainer);
        
        // 5. 將完整的卡片放入瀑布流網格中
        grid.appendChild(gridItem);

        // 當圖片載入後，重新計算瀑布流佈局
        img.onload = () => {
            msnry.appended(gridItem);
            msnry.layout();
        };
    });

    // 初始化 Fancybox 燈箱效果
    Fancybox.bind("[data-fancybox='gallery']", {
        Thumbs: { showOnStart: false },
        Caption: { type: "html" }
    });
});