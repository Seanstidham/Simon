# Simon
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <!-- Tell browsers not to scale the viewport automatically -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Simon</title>
    <link rel="icon" href="favicon.ico" />
  </head>
  <body>
    <!-- Use header, main, and footer elements to give semantic structure -->
    <header>
      <h1>Simon<sup>&reg;</sup></h1>

      <!-- Navigation elements -->
      <nav>
        <!-- Menu is a semantic alternative to <ul> that represents an interaction -->
        <menu>
          <li><a href="index.html">Home</a></li>
          <li><a href="play.html">Play</a></li>
          <li><a href="scores.html">Scores</a></li>
          <li><a href="about.html">About</a></li>
        </menu>
      </nav>

      <!-- Since we don't have the ability to style we use old style HTML to give some visual formatting -->
      <hr />
    </header>

    <main>
      <h1>Welcome</h1>
      <p>Login to play</p>
      <form method="get" action="play.html">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Your name here" />
        <button type="submit">Login</button>
      </form>
    </main>

    <footer>
      <hr />
      <span class="text-reset">Author Name(s)</span>
      <br />
      <a href="https://github.com/seanstidham/simon">GitHub</a>
    </footer>
  </body>
</html>
