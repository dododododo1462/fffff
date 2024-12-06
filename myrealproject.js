
function add() {
    const comment = document.getElementById("comment-in").value
    let el= document.querySelector("#comment-section");
    el.innerHTML = comment;
}
function A() {
    let button1 = document.querySelector("#Z1")
    let earth = document.getElementById("first-img");
    if (button1.innerHTML === "show more"){
        earth.src = "https://upload.wikimedia.org/wikipedia/commons/c/cb/The_Blue_Marble_%28remastered%29.jpg"
    earth.style.height = "200px"
    earth.style.width = "200px"
    earth.style.borderColor= 'blue'
    document.getElementById("A1").innerHTML = "Earth is the third planet from the Sun and the only astronomical object known to harbor life. This is enabled by Earth being an ocean world, the only one in the Solar System sustaining liquid surface water. Almost all of Earth's water is contained in its global ocean, covering 70.8% of Earth's crust. The remaining 29.2% of Earth's crust is land, most of which is located in the form of continental landmasses within Earth's land hemisphere. Most of Earth's land is somewhat humid and covered by vegetation, while large sheets of ice at Earth's polar deserts retain more water than Earth's groundwater, lakes, rivers and atmospheric water combined. Earth's crust consists of slowly moving tectonic plates, which interact to produce mountain ranges, volcanoes, and earthquakes. Earth has a liquid outer core that generates a magnetosphere capable of deflecting most of the destructive solar winds and cosmic radiation."
    document.getElementById("A1").style.clear = "none"
    button1.innerHTML = "show less"
    }else if (button1.innerHTML === "show less"){
        earth.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwT_bY1Eoo0V9dUMz83RtZg6x_NMYeXhjTA&s"
        earth.style.height = "120px"
        earth.style.width = "120px"
        earth.style.borderColor= 'red'
        document.getElementById("A1").innerHTML = ""
        document.getElementById("A1").style.clear = "right"
        button1.innerHTML = "show more"

    }
   
}
    

function B() {
    let button2 = document.querySelector("#Z2")
    let earth2 = document.querySelector("#second-img")
   if (button2.innerHTML === "show more"){
    earth2.src = "https://www.niddk.nih.gov/-/media/Images/Health-Information/Digestive-Diseases/The_Digestive_System_450x531.jpg"
    earth2.style.height = "200px"
    earth2.style.width = "200px"
    earth2.style.borderColor= 'blue'
    document.getElementById("B2").innerHTML = "Humans (Homo sapiens, meaning or modern humans are the most common and widespread species of primate, and the last surviving species of the genus Homo. They are great apes characterized by their hairlessness, bipedalism, and high intelligence. Humans have large brains, enabling more advanced cognitive skills that enable them to thrive and adapt in varied environments, develop highly complex tools, and form complex social structures and civilizations. Humans are highly social, with individual humans tending to belong to a multi-layered network of cooperating, distinct, or even competing social groups – from families and peer groups to corporations and political states. As such, social interactions between humans have established a wide variety of values, social norms, languages, and traditions (collectively termed institutions), each of which bolsters human society. Humans are also highly curious, with the desire to understand and influence phenomena having motivated humanity's development of science, technology, philosophy, mythology, religion, and other frameworks of knowledge; humans also study themselves through such domains as anthropology, social science, history, psychology, and medicine. There are estimated to be more than eight billion humans alive"
    document.getElementById("B2").style.clear = "none"
    button2.innerHTML = "show less"
   }else if (button2.innerHTML === "show less"){
    earth2.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Sweet_Baby_Kisses_Family_Love.jpg/1024px-Sweet_Baby_Kisses_Family_Love.jpg"
    earth2.style.height = "120px"
    earth2.style.width = "120px"
    earth2.style.borderColor= 'red'
    document.getElementById("B2").innerHTML = ""
    document.getElementById("B2").style.clear = "right"
    button2.innerHTML = "show more"
}
}

function C() {
    let button2 = document.querySelector("#Z3")
    let earth3 = document.querySelector("#third-img")
    if (button2.innerHTML === "show more"){
        earth3.src = "https://m.media-amazon.com/images/I/71s4BI9EHHL._AC_UF1000,1000_QL80_.jpg"
    earth3.style.height = "200px"
    earth3.style.width = "200px"
    earth3.style.borderColor= 'blue'
    document.getElementById("C3").innerHTML = "In botany, a tree is a perennial plant with an elongated stem, or trunk, usually supporting branches and leaves. In some usages, the definition of a tree may be narrower, including only woody plants with secondary growth, plants that are usable as lumber or plants above a specified height. In wider definitions, the taller palms, tree ferns, bananas, and bamboos are also trees Plants are the eukaryotes that form the kingdom Plantar; they are predominantly photosynthetic. This means that they obtain their energy from sunlight, using chloroplasts derived from endosmosis with cyanobacteria to produce sugars from carbon dioxide and water, using the green pigment chlorophyll. Exceptions are parasitic plants that have lost the genes for chlorophyll and photosynthesis, and obtain their energy from other plants or fungi. Most plants are multicellular, except for some green algae"
    document.getElementById("C3").style.clear = "none"
    button2.innerHTML = "show less"
    }else if (button2.innerHTML === "show less"){
        earth3.src = "https://www.plantsnap.com/wp-content/uploads/2021/02/tree-planting-hand-water-shovel_1medium.jpg"
        earth3.style.height = "120px"
        earth3.style.width = "120px"
        earth3.style.borderColor= 'red'
        document.getElementById("C3").innerHTML = ""
        document.getElementById("C3").style.clear = "right"
        button2.innerHTML = "show more"
    }
    
}
function D(){
    let button4 = document.querySelector("#Z4")
    let earth4 = document.querySelector("#forth-img")
    if (button4.innerHTML === "show more"){
        earth4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3HTgKkm-tBcNbiLG5eCL12nOngY_fEta2BA&s"
        earth4.style.height = "200px"
        earth4.style.width = "200px"
        earth4.style.borderColor= 'blue'
        document.getElementById("D4").innerHTML = "Animals are multicellular, eukaryotic organisms in the biological kingdom Animalia (/ˌænɪˈmeɪliə/[4]). With few exceptions, animals consume organic material, breathe oxygen, have myocytes and are able to move, can reproduce sexually, and grow from a hollow sphere of cells, the blastula, during embryonic development. Animals form a clade, meaning that they arose from a single common ancestor."
        document.getElementById("D4").style.clear = "none"
        button4.innerHTML = "show less"
    }else if ( button4.innerHTML === "show less"){
        earth4.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtg6SNRxoTBGTHMxnV59khl2t1dAS0oynUMg&s"
         earth4.style.height = "120px"
        earth4.style.width = "120px"
        earth4.style.borderColor= 'red'
        document.getElementById("D4").innerHTML = ""
        document.getElementById("D4").style.clear = "right"
        button4.innerHTML = "show more" 
    }

}

function content(){
    const el = document.getElementById("select").value;
    let el2 = document.getElementById("11111")
    el2.innerHTML = el+" YOUR FAVORITE PART OF OUR PLANET"
}
function times(){
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var second = time.getSeconds();
    

    document.getElementById("hrs").innerHTML = hours;
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("secs").innerHTML = second;
}
setInterval(times, 10);


