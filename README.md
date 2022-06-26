<p align="center">
  <h1 align="center">🎩 Company Wallpaper 🎩</h1>
</p>

<p align="center">
  <a href="https://github.com/meese-enterprises/desktop-background/search?l=javascript">
    <img src="https://img.shields.io/badge/language-JavaScript-yellow" alt="JavaScript" />
  </a>
  <a href="https://github.com/meese-enterprises/desktop-background/blob/master/LICENSE.md">
    <img src="https://img.shields.io/github/license/meese-enterprises/desktop-background" alt="License" />
  </a>
  <a href="https://github.com/meese-enterprises/desktop-background/stargazers">
    <img src="https://img.shields.io/github/stars/meese-enterprises/desktop-background" alt="Stars" />
  </a>
  <a href="https://github.com/meese-enterprises/desktop-background/network/members">
    <img src="https://img.shields.io/github/forks/meese-enterprises/desktop-background" alt="Forks" />
  </a>
  <a href="https://github.com/meese-enterprises/desktop-background/stargazers">
    <img src="https://img.shields.io/static/v1?label=%F0%9F%8C%9F&message=If%20Useful&style=style=flat&color=BC4E99" alt="Leave a Star!"/>
  </a>
</p>

<p align="center">
	<img src="preview.jpg" alt="Company splash wallpaper" title="Company splash wallpaper" />
</p>

This simple wallpaper features the company splash screen with customizable settings.
The project is available on Steam [here](https://steamcommunity.com/sharedfiles/filedetails/?id=2784916467).
For Linux support, follow the directions in [this repository](https://github.com/catsout/wallpaper-engine-kde-plugin).

## Problems
Currently this experiences the same problem as my previous [Matrix Wallpaper](https://github.com/ajmeese7/matrix-wallpaper)
project, which is that the animation refuses to initialize until you change a setting on the wallpaper. To start
the animation, just select the scheme color setting and change the color to something random before changing it
back to black, and you should get the full beauty of the animation.

The animation will work perfectly if the `wallpaper-engine.js` file is commented out in `index.html`, so something
about that file is causing the issues. I've spent countless hours trying to debug this issue on both wallpapers and
can't afford to spend any more time on it, so if you have any suggestions for how to fix this, please let me know!
