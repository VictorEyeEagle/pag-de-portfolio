import './App.css';
import React from "react";

function App() {
  return (
    <body>
      <header>
        <navbar id="navbar">
          <p><a href="#welcome-section">About</a> <a href="#projects">Work</a> <a href="#contact">Contact</a></p>
        </navbar>
      </header>
      <main>
        <section id="welcome-section">
          <h1><span class="s1">Hey I am Victor</span><br /> <span class="s2">a web\/mobile developer</span></h1>
        </section>
        <section id="projects">
          <h1>Look at some of my stuffs</h1>
          <hr />
          <div class="prflex">
            <div class="pr1">
              <a target="_blank" href="https://github.com/VictorEyeEagle/projeto4.git">
                <img
                  src="https://previews.dropbox.com/p/thumb/ACASuYFEtFmXOKUzJ0D9JJSTCdnerHBHeBnEMR_lE9zj6FM6TVwm-vuj_EeInBA335nI8whK-1izpeWwS551RjO-GeMsKwsntEXYYk7IKeAo59IYUsPHsVlSSBvd1nIbrJjmqa_Y3lBCH2onNmvjXQwGOT_IY3ldU4hX_dKNhi4DbzU5j5U8muA-FulCni6FSgifMFVyDGFXm8CD-xiVhqbFVLS7ttK4fHAkbz6U_4gMNzdK6GVxgjKTDP4T8WUROhZv4t4WmVcsjsKEvS68ATN_q-ZqpSiAnizCJ_QAHKbQ4YVPrgjXBIgCU6vTnRHtZeBZkuUu6t3fhwOOD4_t1HsY/p.png"
                  width="100" height="100" />
                <p class="project-tile">Commercial Page</p>
              </a>
            </div>
            <div class="pr2">
              <a target="_blank" href="https://github.com/VictorEyeEagle/projeto3.git">
                <img
                  src="https://previews.dropbox.com/p/thumb/ACAcJDhT4HbLhpikCXvJURqO4rAyAuF7fpDoWX4y26thHuCe-wI6vzzX2bUaqp30FdlYUuzwX2JvVyWcXJdKxtELaPCnT9yDAv2QevDUjtL8snAmiATnLz8P8LBxEgekeGBBFkNoQeJftv67HeSaS8OO3OamAgq7v4swzu6JyPFo7wTKvIu-zUA71a38_DzspjR1bEdqlVtfIhoAIrKdpFc0tzHhd8p8ZUjlNElTmfwOyHAMsEX0nbEPMIO5siWFCNH9_A4j1bWKTYycu-vh88iDP8ShSHst4xthcXyPErg6sMjNZmgrwePslGXDY2pBG7mPhoGSAor9GW0X1syeUr7n/p.png"
                  width="100" height="100" />
                <p class="project-tile">Tribute Page</p>
              </a>
            </div>
          </div>
        </section>
        <section id="contact">
          <div>
            <h2>
              Let´s work together
            </h2>
            <span id="profile"><img src="https://cdn-icons-png.flaticon.com/128/2504/2504911.png" width="40" /><a
              target="_blank" href="https://github.com/VictorEyeEagle" id="profile-link">
              GitHub</a>
            </span>
            <span id="profile"><img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" width="40" /><a
              target="_blank" href="https://www.linkedin.com/in/victor-rick/" id="profile-link">
              Linkedin</a>
            </span><br />
            <span class="copyright">©Created By Victor</span>
          </div>
        </section>
      </main>
    </body>
  );
}

export default App;
