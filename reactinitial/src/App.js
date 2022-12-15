import React, { useEffect, useState } from "react"

const App = () => {

  return (
    <div>
      <button type="button" onclick="myFunction(id)"> Show more </button>
    </div>
    
    <script>
      async function getTeams() {
            let url = 'https://demoapi.com/api/teams';
            try {
                let res = await fetch(url);
                return await res.json();
            } catch (error) {
                console.log(error);
            }
      }
  
       async function renderTeams() {
            let users = await getTeams();
            let html = '';
            teams.forEach(team => {
                let htmlSegment = `<div class="team">
                                    <button type="button" onclick="myFunction(this.id)"> Show more </button>
                                    <div class="info">
                                        <br> Name: ${team.name}
                                        <br> Stadium: ${team.stadium}
                                    </div>
                                </div>`;

                html += htmlSegment;
            });

            let container = document.querySelector('.container');
            container.innerHTML = html;
        }

        renderTeams();
  
  
      function myFunction(clicked_id) {
            var moreText = document.getElementById("more"+clicked_id);
            var btnText = document.getElementById(clicked_id);

            if (moreText.style.display === "inline") {
                btnText.innerHTML = "Show more";
                moreText.style.display = "none";
            }
            else {
                btnText.innerHTML = "Show less";
                moreText.style.display = "inline";
      }
    </script>
  )
}

export default App
