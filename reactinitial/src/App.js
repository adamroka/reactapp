import React, { useEffect, useState } from "react"

const App = () => {

  return (
    <div>
      <button type="button" onclick="myFunction(id)"> Show more </button>
    </div>
    <script>
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
