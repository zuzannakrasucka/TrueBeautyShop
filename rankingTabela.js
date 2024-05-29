function generujTabele() {
    const kosmetyki = [
        { rank: 1, name: "Podkład Maybelline Fit Me", category: "Podkład" },
        { rank: 2, name: "Tusz do rzęs L'Oreal Voluminous", category: "Tusz do rzęs" },
        { rank: 3, name: "Korektor NYX HD", category: "Korektor" },
        { rank: 4, name: "Cień do powiek Urban Decay Naked", category: "Cień do powiek" },
        { rank: 5, name: "Róż do policzków NARS Rose", category: "Róż do policzków" },
        { rank: 6, name: "Szminka MAC Ruby Woo", category: "Szminka" },
        { rank: 7, name: "Puder Rimmel Stay Matte", category: "Puder" },
        { rank: 8, name: "Bronzer Benefit Hoola", category: "Bronzer" },
        { rank: 9, name: "Eyeliner Kat Von D Tattoo", category: "Eyeliner" },
        { rank: 10, name: "Błyszczyk Fenty Beauty Gloss Bomb", category: "Błyszczyk" },
        { rank: 11, name: "Cień do brwi Anastasia Beverly Hills", category: "Cień do brwi" },
        { rank: 12, name: "Rozświetlacz BECCA Shimmering Skin Perfector", category: "Rozświetlacz" },
        { rank: 13, name: "Konturówka do ust NYX", category: "Konturówka do ust" },
        { rank: 14, name: "Baza pod cienie Urban Decay Primer Potion", category: "Baza pod cienie" },
        { rank: 15, name: "Korektor Tarte Shape Tape", category: "Korektor" },
        { rank: 16, name: "Podkład Estee Lauder Double Wear", category: "Podkład" },
        { rank: 17, name: "Tusz do rzęs Too Faced Better Than Me", category: "Tusz do rzęs" },
        { rank: 18, name: "Róż do policzków Milani Baked Blush", category: "Róż do policzków" },
        { rank: 19, name: "Cień do powiek ColourPop Super Shock Shadow", category: "Cień do powiek" },
        { rank: 20, name: "Pomadka L'Oreal Colour Riche", category: "Pomadka" },
        { rank: 21, name: "Puder Maybelline SuperStay", category: "Puder" },
        { rank: 22, name: "Korektor Maybelline Instant Age Rewind", category: "Korektor" },
        { rank: 23, name: "Podkład Fenty Beauty Pro Filt'r", category: "Podkład" },
        { rank: 24, name: "Szminka Revlon Super Lustrous", category: "Szminka" },
        { rank: 25, name: "Tusz do rzęs L'Oreal Lash Paradise", category: "Tusz do rzęs" },
        { rank: 26, name: "Bronzer Physicians Formula Butter Bronzer", category: "Bronzer" },
        { rank: 27, name: "Róż do policzków Tarte Amazonian Clay", category: "Róż do policzków" },
        { rank: 28, name: "Cień do powiek Morphe Jaclyn Hill", category: "Cień do powiek" },
        { rank: 29, name: "Korektor LA Girl Pro Conceal", category: "Korektor" },
        { rank: 30, name: "Pomadka NYX Soft Matte Lip Cream", category: "Pomadka" },
    ];

    const table = document.getElementById("rankingTable");

    const thead = document.createElement("thead");

  
    const titleRow = document.createElement("tr");
    const titleCell = document.createElement("th");
    titleCell.colSpan = 3;
    titleCell.innerHTML = "TOP 30 produktów do makijażu w Polsce";
    titleRow.appendChild(titleCell);
    thead.appendChild(titleRow);

    
    const headerRow = document.createElement("tr");

    const thRank = document.createElement("th");
    thRank.innerHTML = "Miejsce";
    headerRow.appendChild(thRank);

    const thProduct = document.createElement("th");
    thProduct.innerHTML = "Produkt";
    thProduct.rowSpan = 2;
    headerRow.appendChild(thProduct);

    const thCategory = document.createElement("th");
    thCategory.innerHTML = "Kategoria";
    headerRow.appendChild(thCategory);

    thead.appendChild(headerRow);

    table.appendChild(thead);

    
    const tbody = document.createElement("tbody");

    kosmetyki.forEach((produkt) => {
        const row = document.createElement("tr");

        const tdRank = document.createElement("td");
        tdRank.innerHTML = produkt.rank;
        row.appendChild(tdRank);

        const tdProduct = document.createElement("td");
        tdProduct.innerHTML = produkt.name;
        row.appendChild(tdProduct);

        const tdCategory = document.createElement("td");
        tdCategory.innerHTML = produkt.category;
        row.appendChild(tdCategory);

        tbody.appendChild(row);
    });

    table.appendChild(tbody);
}