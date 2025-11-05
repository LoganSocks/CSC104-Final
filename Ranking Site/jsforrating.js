//Array for superheros
            let arrRating = [
                {Animation: "Out of 20", Characters: "Out of 20", Story: "Out of 10"},
             
            ];

            // Shortcut to the table
            let tblRatings = document.getElementById("tblRatings");
            //loop through the array of objects--Arrays start at 0
            for (let i=0; i<arrRating.length; i++){
                //build a table row
                let row = document.createElement("tr");
                //setup a td for each column of data
                let tdAnimation = document.createElement("td");
                let tdCharacters = document.createElement("td");
                let tdStory = document.createElement("td");
                //add data to each td
                tdName.textContent = arrRating[i].name;
                tdPower.textContent = arrRating[i].power;
                tdTeam.textContent = arrRating[i].team;
                //add the columns to the row
                row.appendChild(tdAnimation);
                row.appendChild(tdCharacters);
                row.appendChild(tdStory);

            //append the new row with data to the table
                tblRatings.appendChild(row)

                

            }