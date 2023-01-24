const nevLista = document.querySelector("#nevLista");       // létrehozunk konstans (nem lehet megváltozatni a tartalmát később) ...
const nameElem = document.querySelector("#name");           //... változókat és hozzárendeljük az adott html elemekhez
const addButton = document.querySelector("#addButton    ");     // azért kell hogy nek kelljen mindig beírni hogy pl:document.querySelector("#addButton")...
                                                            //... ha a gombra hivatkozunk
let nevTomb = [                                         // létrehozunk egy tömböt nevekkel
    "Pista",
    "Károly",
    "Mari",
    "Peti",
    "Pali",
    "Gabi",
    "Teri"
    ];

nevTomb.forEach((nev) => {             // a neveket tartalmazó tömbökön végigmegyünk egy foreach ciklussal, ez a tömb minden elemét végigjárja a tömb hosszától függetlenül
    let li = document.createElement("li");  // a 'li' változóban tároljuk a <li> tag létrehozó parancsát /szintén azért mert egyszerűbb leírni hogy "li" mint azt a sok parancsot
    li.textContent = nev;                   // a létrehozott li-nek a tömb aktuális elemét adjuk tartalmul
    li.classList.add("list-group-item");    // adunk neki egy class-t is hogy formázni tudjuk
    nevLista.appendChild(li);               // a 'névLista' elem azaz az 'ul' megkapja gyereknek a létrehozott 'li'-t
});
    
addButton.addEventListener('click', () => { // a gombhoz adunk egy eseményfigyelőt /reagálás a kattintásra/ ami végrehajtja a hozzárendelt függvényt
    if (nameElem.value != ""){              // ha az inpu mező nem üres csak akkor csinálunk bármit a listával
        nevTomb.push(nameElem.value);           // a tömb végéhez adjuk a nameElem /azaz az <input> elem tartalmát -értékét
        addLiElem(nameElem.value);              // meghívjuk a függvényt, ami elhelyi a listában a bevitt adatokat...
        nameElem.value = "";                    // ... és töröljük az input mezőbe bevitt adatokat, azért hogy ne kelljen minden név után nekünk törölni
    }                  
});

let addLiElem = (name) => {                         // létrehozzuk a függvényt                 
        let li = document.createElement("li");      // ezek ugyanazok mint felljebb a ciklusnál 
        li.textContent = name;
        li.classList.add("list-group-item");
        nevLista.appendChild(li);
    
}

/*
Nodejs projekt létrehozása

belépünk a projektünk mappájába -> total commander + code .

nyitunk egy terminált

npm init -y                             
npm install lite-server –save-dev           //feltelepítjük a szervert
package.json fájlba kiegészítjük erre:
 scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx lite-server"
  },                   


.gitignore létrehozása, bele:       //itt zárjuk ki azokat a mappákat, fájlokat amiket nem akarunk verziókövetni
	node_modules/
    dist/

npm install bootstrap@5.3.0-alpha1      //bs telepítése


bs-config.json fájl  létrehozása, ez megy bele
	{
		„server” : [„src”, „node_modules/bootstrap/dist/css”],
		„port”: 3000
	}

index.html létrehozása, a head-be ezt írni, ez hívja be a bs-t
	<link rel=”stylesheet” href=”bootstrap.css”>


Build – weboldal elemeinek gyűjtése egy mappában, ezek mennek a webtárhelyre

A copyfiles telpítése:  /ez rakja át a build elemeit/
npm install --save-dev copyfiles

package.json -ba a script már így kell hogy kinézzen: / a kér perjel persze nem kell elé! :)


// "scripts": {
//    "test": "echo \"Error: no test specified\" && exit 1",
//    "start": "npx lite-server",
//    "build:src": "npx copyfiles -u 1 src/**/*.{html,js} dist",
//    "build:bs": "npx copyfiles -u 4 node_modules/bootstrap/dist/css/bootstrap.css dist",
//    "build": "npm-run-all build:src build:bs"
//  },

// futtatása: npm run build
//*/

// kis git

//új branch létrehozása:
//git branch branc neve

//átlépés az új branchbe:
//git branch branch neve

//két branch összefésülése -> git merge branch neve

//branch törlése: git branch -d branch neve

