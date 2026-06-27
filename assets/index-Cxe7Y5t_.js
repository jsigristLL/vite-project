(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/assets/FIG-VIG-Table-DVlAJDwC.jpg`;function t(){document.querySelector(`#app`).innerHTML=`
        <h1>Lua</h1>
        <h3>Vigenère Cipher Solver</h3>
        <div id="home-button">Home</div>
        <p>
            This project takes both a sentence and keyword as input and either encrypts or decrypts the sentence using the rules of the Vigenère cipher.
        </p>
        <img src="${e}">
        <p>
            A Vigenère cipher uses a keyword to obfuscate text. To start, an alphabet must be produced for each letter of the keyword that transposes the letter such that the new alphabet begins with that letter. 
            If the keyword is "TESLA", the keyword alphabets will be:
        </p>
        <p>
            <span class="highlight">T</span>UVWXYZABCDEFGHIJKLMNOPQRS </br>
            <span class="highlight">E</span>FGHIJKLMNOPQRSTUVWXYZABCD </br>
            <span class="highlight">S</span>TUVWXYZABCDEFGHIJKLMNOPQR </br>
            <span class="highlight">L</span>MNOPQRSTUVWXYZABCDEFGHIJK </br>
            <span class="highlight">A</span>BCDEFGHIJKLMNOPQRSTUVWXYZ </br>
        </p>
        <p>
            Tables like the one above make this step trivial. </br> </br>
            The first letter of the plaintext is then enciphered by fiding the position of the plaintext letter in the actual alphabet and finding what new letter is at the same index in the first keyword alphabet.
            Each subsequent letter is enciphered in the next keyword alphabet, wrapping back to the beginning of the list once you've reached the end. Decrypting is the same in reverse. </br> </br>
            Using the following code with the input of "hello world" and "TESLA" as a keyword, it will output "aidwo psjwd"; the inverse will be output if decrypting.
        </p>
            
        <pre class="code"><code>
        local alphabet = "abcdefghijklmnopqrstuvwxyz"

        local function generate_keyed_alphabets(keyword)
	        local alphabets = {}
	        for char in keyword:gmatch(".") do
		        local key_index = alphabet:find(char, 1, true)
		        if key_index ~= nil then
			        table.insert(alphabets, alphabet:sub(key_index, #alphabet) .. alphabet:sub(1, key_index - 1))
		        end
	        end
	        return alphabets
        end

        local function isalpha(char)
            if char:match("%a") == nil then
                return false
            end
            return true
        end

        local function encrypt(sentence, keyword)
            local encrypted_sentence = {}
            local offset = 0
            local keyed_alphabets = generate_keyed_alphabets(keyword)
            for i, char in ipairs(sentence) do
                if isalpha(char) then
                    local normal_index = alphabet:find(char, 1, true)
                    local keyed_alphabet = keyed_alphabets[(i - 1 - offset) % #keyword + 1]
                    table.insert(encrypted_sentence, keyed_alphabet:sub(normal_index, normal_index))
                else
                    offset = offset + 1
                    table.insert(encrypted_sentence, char)
                end
            end
            return table.concat(encrypted_sentence, "")
        end

        local function decrypt(sentence, keyword)
            local decrypted_sentence = {}
            local offset = 0
            local keyed_alphabets = generate_keyed_alphabets(keyword)
            for i, char in ipairs(sentence) do
                if char:match("%a") ~= nil then
                    local keyed_alphabet = keyed_alphabets[(i - 1 - offset) % #keyword + 1]
                    local keyed_alphabet_index = keyed_alphabet:find(char, 1, true)
                    table.insert(decrypted_sentence, alphabet:sub(keyed_alphabet_index, keyed_alphabet_index))
                else
                    offset = offset + 1
                    table.insert(decrypted_sentence, char)
                end
            end
            return table.concat(decrypted_sentence, "")
        end

        local function main()
            local choice
            local keyword
            while true do
                io.write("Encrypt or decrypt? (e/d) ")
                choice = string.lower(io.read())
                if choice == "e" or choice == "d" then
                    break
                end
                print("Invalid response")
            end
            io.write("Enter a sentence: ")
            local input = io.read()
            local sentence = {}
            for c in string.gmatch(input, ".") do
                sentence[#sentence + 1] = string.lower(c)
            end
            local again = true
            while again do
                again = false
                io.write("Enter a keyword: ")
                keyword = io.read()
                for char in keyword:gmatch(".") do
                    if isalpha(char) == false then
                        again = true
                        io.write("Keyword must consist exclusively of letters.")
                        break
                    end
                end
            end
            if choice == "e" then
                print(encrypt(sentence, keyword))
            else
                print(decrypt(sentence, keyword))
            end
        end

        main()

        </code></pre>
        <p>
            This is a great beginner project to work on to get a handle on a new language since it forces you to work with 
            input/output, handle user submissions gracefully, parse complex strings, and set up helper functions to supplement Lua's
            lack of built-in functions.
         </p>
        <div id="home-button">Home</div>
    `,document.querySelectorAll(`#home-button`).forEach(e=>{e.addEventListener(`click`,e=>{i()})})}function n(){document.querySelector(`#app`).innerHTML=`
        <h1>JavaScript</h1>
        <h3>What Day of the Week?</h3>
        <div id="home-button">Home</div>
        <p>This project takes any date as input and uses math to determine what day of the week that date falls on.</p>
        <pre class="code"><code>

            const today = new Date();
            const inputs = document.querySelectorAll("input");

            inputs.forEach((input, index) => {
              input.addEventListener("keyup", (e) => {
                if (e.key == "Enter") {
                  if (index < inputs.length - 1) {
                    inputs[index + 1].focus();
                  } else {
                    whatDay();
                  }
                }
              });
            });
 
            function fullInputs(inputs_to_check) {
              for (let input of inputs_to_check) {
                if (isNaN(input.value)) {
                  return false;
                }
              }
              return true;
            }

            function whatDay() {
              if (fullInputs(inputs)) {
                let day = parseInt(document.getElementById("dayInp").value);
                let fullYear = parseInt(document.getElementById("yearInp").value);
                let month = parseInt(document.getElementById("monthInp").value) - 1;

                let century = Math.floor(fullYear / 100);
                let year = fullYear % 100;

                let date = new Date(fullYear, month, day);

                let centuryCode;

                if ([0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44].includes(century)) {
                  centuryCode = 2;
                } else if ([3, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43].includes(century)) {
                  centuryCode = 3;
                } else if ([2, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42].includes(century)) {
                  centuryCode = 5;
                } else {
                  centuryCode = 0;
                }

                let twelves;
                let twelvesRem;
                let leaps;

                twelves = Math.floor(year / 12);
                twelvesRem = year % 12;
                leaps = Math.floor(twelvesRem / 4);

                let doomsdayOfYear = (centuryCode + twelves + twelvesRem + leaps) % 7;

                let monthCode;
                let monthName;

                switch (month) {
                  case 0:
                    monthName = "January";
                    if (isLeap(fullYear)) {
                      monthCode = 4;
                    } else {
                      monthCode = 3;
                    }
                    break;

                  case 1:
                    monthName = "February";
                    if (isLeap(fullYear)) {
                      monthCode = 29;
                    } else {
                      monthCode = 28;
                    }
                    break;
                  case 2:
                    monthName = "March";
                    monthCode = 14;
                    break;
                  case 3:
                    monthName = "April";
                    monthCode = 4;
                    break;
                  case 4:
                    monthName = "May";
                    monthCode = 9;
                    break;
                  case 5:
                    monthName = "June";
                    monthCode = 6;
                    break;
                  case 6:
                    monthName = "July";
                    monthCode = 11;
                    break;
                  case 7:
                    monthName = "August";
                    monthCode = 8;
                    break;
                  case 8:
                    monthName = "September";
                    monthCode = 5;
                    break;
                  case 9:
                    monthName = "October";
                    monthCode = 10;
                    break;
                  case 10:
                    monthName = "November";
                    monthCode = 7;
                    break;
                  case 11:
                    monthName = "December";
                    monthCode = 12;
                    break;
                }

                let dayOfWeek;

                if (day > monthCode) {
                  dayOfWeek = (((day - monthCode + doomsdayOfYear) % 7) + 7) % 7;
                } else if (day < monthCode) {
                  dayOfWeek = (((doomsdayOfYear - (monthCode - day)) % 7) + 7) % 7;
                } else {
                  dayOfWeek = doomsdayOfYear;
                }

                let dayOfWeekName;

                switch (dayOfWeek) {
                  case 0:
                    dayOfWeekName = "Sunday";
                    break;
                  case 1:
                    dayOfWeekName = "Monday";
                    break;
                  case 2:
                    dayOfWeekName = "Tuesday";
                    break;
                  case 3:
                    dayOfWeekName = "Wednesday";
                    break;
                  case 4:
                    dayOfWeekName = "Thursday";
                    break;
                  case 5:
                    dayOfWeekName = "Friday";
                    break;
                  case 6:
                    dayOfWeekName = "Saturday";
                    break;
                }

                let result = document.getElementById("result");
                if (today > date) {
                  result.innerHTML = \`\${monthName} \${day}, \${fullYear} was a \${dayOfWeekName}.\`;
                } else if (today < date) {
                  result.innerHTML = \`\${monthName} \${day}, \${fullYear} will be a \${dayOfWeekName}.\`;
                } else {
                  result.innerHTML = \`\${monthName} \${day}, \${fullYear} is a \${dayOfWeekName}.\`;
                }
              }
            }

            function isLeap(year) {
              let leap = false;

              if (year % 4 == 0) {
                leap = true;
                if (year % 100 == 0) {
                  leap = false;
                  if (year % 400 == 0) {
                    leap = true;
                  }
                }
              }

              return leap;
            }

            function clearField(input) {
              let text = input.value;
              if (text.startsWith("Enter")) {
                input.value = "";
              }
            }

            function clearAllFields() {
              inputs.forEach((input) => {
                input.value = "";
              });
            }
        </code></pre>
        <p>
            This is my favorite beginner project when learning any language. It forces you to handle input/output, format strings,
            juggle some complex arithmetic, and use Date objects.
        </p>
        <div id="home-button">Home</div>
    `,document.querySelectorAll(`#home-button`).forEach(e=>{e.addEventListener(`click`,e=>{i()})})}function r(){document.querySelector(`#app`).innerHTML=`
        <h1>Python</h1>
        <h3>Conway's Game of Life</h3>
        <div id="home-button">Home</div>
        <p>
            This is a recreation of John Conway's cellular automaton, the game of Life. The board is made up of a grid of cells. The "life" mutates each 
            generation according to a set of rules:
        </p>
        <p>
            1. Living cells with 2 or 3 neighbors survive to see the next generation. </br>
            2. Living cells with more than 3 neighbors die of overpopulation. </br> 
            3. Living cells with fewer than 2 neighbors die from isolation. </br>
            4. Empty cells with exactly 3 neighbors are born the next generation.
        </p>
        <p>
            I implemented this version in Pygame, structuring it like a game where you can use the mouse to set initial state and use buttons or hotkeys to affect different aspects of the game. 
        </p>
        <pre class="code"><code>
            # imports #
            from json import dump, load
            from math import sin
            from os.path import isfile
            from random import choice, randint
            from sys import exit

            import pygame as pg
            from scripts.button import Button
            from scripts.effect import Effect

            # init #
            pg.init()

            # constants #
            WIDTH, HEIGHT = 1900, 1000
            ROWS = 75
            COLS = int(ROWS * 1.5)
            PIXEL_SIZE = HEIGHT // ROWS
            # starting ms between life simulation steps
            SIMULATION_SPEED = 100

            # option to disallow console feedback
            CONSOLE_OUTPUT = True

            # custom event for game step
            SIM_LIFE = pg.USEREVENT

            # fonts #
            font = pg.font.SysFont("montserrat", 32)
            font2 = pg.font.SysFont("consolas", 130)

            # colors #
            BLACK = (0, 0, 0)
            WHITE = (255, 255, 255)
            RED = (255, 0, 0)
            GREY = (128, 128, 128)
            GREEN = (0, 255, 0)
            CYAN = (0, 255, 255)
            YELLOW = (255, 255, 0)
            PURPLE = (128, 0, 128)
            ORANGE = (255, 128, 0)
            BLUE = (0, 0, 255)
            MAGENTA = (255, 0, 255)
            PINK = (255, 0, 127)
            TURQUOISE = (0, 204, 102)
            DARK_GREY = (75, 75, 75)

            COLORS = [
                BLACK,
                RED,
                GREEN,
                CYAN,
                YELLOW,
                PURPLE,
                ORANGE,
                BLUE,
                MAGENTA,
                PINK,
                TURQUOISE,
                WHITE,
            ]

            BG_COLOR = DARK_GREY
            CANVAS_COLOR = GREY
            PIXEL_COLOR = BLACK
            GRID_LINE_COLOR = DARK_GREY

            # media #
            ICON = pg.image.load("assets/icon.png")
            SONGS = [
                "assets/smw_cave.mp3",
                "assets/resurrections.mp3",
                "assets/aquatic_ambience.mp3",
                "assets/frankie.mp3",
                "assets/beautiful.mp3",
            ]

            # rendering fonts #
            # render title and its shadow
            title_text = font2.render("li", True, BLACK)
            title_text2 = font2.render("fe", True, BLACK)
            title_text_shadow = font2.render("li", True, WHITE)
            title_text_shadow2 = font2.render("fe", True, WHITE)

            # rendering various control texts
            h_control_text = font.render("Show/Hide Controls", True, BLACK)
            space_control_text = font.render("Start/Stop Simulation", True, BLACK)
            l_control_text = font.render("Load Saved Grid", True, BLACK)
            s_control_text = font.render("Save Current Grid", True, BLACK)
            a_control_text = font.render("Toggle Autostop", True, BLACK)
            m_control_text = font.render("Toggle Multicolor", True, BLACK)
            d_control_text = font.render("Toggle Grid Lines", True, BLACK)
            arrow_control_text = font.render("Adjust Speed", True, BLACK)
            esc_control_text = font.render("Clear Grid", True, BLACK)
            c_control_text = font.render("Checkerboard", True, BLACK)
            r_control_text = font.render("Randomize Grid", True, BLACK)
            zero_control_text = font.render("Mute/Play Music", True, BLACK)
            ctrl_control_text = font.render("Next Track", True, BLACK)
            w_control_text = font.render("Toggle Walls", True, BLACK)


            # Game class #
            class Program:
                def __init__(self):
                    # window setup #
                    self.win = pg.display.set_mode(
                        (WIDTH, HEIGHT), pg.RESIZABLE | pg.HWSURFACE | pg.DOUBLEBUF
                    )
                    pg.display.set_caption("life")
                    pg.display.set_icon(ICON)

                    # attributes #
                    self.living_cells = set()
                    self.cell_colors = {}
                    self.song_number = randint(0, len(SONGS) - 1)
                    self.speed_ratio = 1.0
                    self.equilibrium = False
                    self.save_file = "assets/save.txt"
                    # number to increment for sin calculations
                    self.oscillation = 0
                    self.effects = []

                    # toggleable values
                    self.multicolor = False
                    self.walls = False
                    self.draw_grid_lines = True
                    self.autostop = True
                    self.show_controls = True
                    self.simulate = False
                    self.mute = False
                    self.high_birth_rate = False

                    # dict for handling keyboard presses and their corresponding functions
                    self.controls = {
                        pg.K_x: self.draw_x,
                        pg.K_d: self.toggle_draw_grid_lines,
                        pg.K_SPACE: self.toggle_simulation,
                        pg.K_RIGHT: self.increase_speed,
                        pg.K_LEFT: self.decrease_speed,
                        pg.K_a: self.toggle_autostop,
                        pg.K_m: self.toggle_multicolor,
                        pg.K_r: self.randomize_grid,
                        pg.K_ESCAPE: self.clear_grid,
                        pg.K_c: self.checkered_grid,
                        pg.K_h: self.toggle_show_controls,
                        pg.K_l: self.load_grid,
                        pg.K_s: self.save_grid,
                        pg.K_KP_0: self.toggle_mute,
                        pg.K_0: self.toggle_mute,
                        pg.K_b: self.change_birthrate,
                        pg.K_LCTRL: self.next_track,
                        pg.K_RCTRL: self.next_track,
                        pg.K_f: self.fill_grid,
                        pg.K_t: self.striped_grid,
                        pg.K_w: self.toggle_walls,
                    }

                # methods #

                # toggle multicolor
                def toggle_multicolor(self):
                    self.multicolor = not self.multicolor
                    if CONSOLE_OUTPUT:
                        if self.multicolor:
                            print("Multicolor on")
                        else:
                            print("Multicolor off")

                # toggle autostop
                def toggle_autostop(self):
                    self.autostop = not self.autostop
                    if CONSOLE_OUTPUT:
                        if self.autostop:
                            print("Autostop on")
                        else:
                            print("Autostop off")

                # toggle walls
                def toggle_walls(self):
                    self.walls = not self.walls
                    if CONSOLE_OUTPUT:
                        if self.walls:
                            print("Walls on")
                        else:
                            print("Walls off")

                # toggle birthrate
                def change_birthrate(self):
                    self.high_birth_rate = not self.high_birth_rate
                    if CONSOLE_OUTPUT:
                        if self.high_birth_rate:
                            print("Birthrate increased")
                        else:
                            print("Birthrate decreased")

                # toggle grid lines
                def toggle_draw_grid_lines(self):
                    self.draw_grid_lines = not self.draw_grid_lines
                    if CONSOLE_OUTPUT:
                        if self.draw_grid_lines:
                            print("Grid lines on")
                        else:
                            print("Grid lines off")

                # toggle controls
                def toggle_show_controls(self):
                    self.show_controls = not self.show_controls
                    if CONSOLE_OUTPUT:
                        if self.show_controls:
                            print("Controls visible")
                        else:
                            print("Controls hidden")

                # start/stop simulation
                def toggle_simulation(self):
                    self.simulate = not self.simulate
                    if CONSOLE_OUTPUT:
                        if self.simulate:
                            print("Simulating...")
                        else:
                            print("Simulation ended")

                # toggle mute and start or stop music playback
                def toggle_mute(self):
                    self.mute = not self.mute
                    if self.mute:
                        pg.mixer.music.stop()
                    else:
                        pg.mixer.music.play(-1)
                    if CONSOLE_OUTPUT:
                        if self.mute:
                            print("Music muted")
                        else:
                            print("Unmuted")

                # increase simulation speed
                def increase_speed(self):
                    # increase simulation speed divisor to create briefer wait between SIM_LIFE events
                    if self.speed_ratio < 5:
                        self.speed_ratio = round(self.speed_ratio + 0.1, 1)
                        # reset event timer with new value
                        pg.time.set_timer(SIM_LIFE, int(SIMULATION_SPEED // self.speed_ratio))
                        if CONSOLE_OUTPUT:
                            print(f"Simulation speed increased to {self.speed_ratio}")

                # decrease simulation speed
                def decrease_speed(self):
                    # decrease simulation speed divisor to create longer wait between SIM_LIFE events
                    if self.speed_ratio > 0.19:
                        self.speed_ratio = round(self.speed_ratio - 0.1, 1)
                        # reset event timer with new value
                        pg.time.set_timer(SIM_LIFE, int(SIMULATION_SPEED // self.speed_ratio))
                        if CONSOLE_OUTPUT:
                            print(f"Simulation speed decreased to {self.speed_ratio}")

                # advance song to next track and begin playback
                def next_track(self):
                    self.song_number += 1
                    if self.song_number == len(SONGS):
                        self.song_number = 0
                    pg.mixer.music.load(SONGS[self.song_number])
                    pg.mixer.music.play(-1)
                    if CONSOLE_OUTPUT:
                        print("Next track")

                # randomized grid
                def randomize_grid(self):
                    # reset cell colors to empty
                    self.cell_colors = {}
                    self.living_cells = set()
                    for i in range(ROWS):
                        for j in range(COLS):
                            # 20% chance for any cell to be living
                            if randint(1, 100) <= 20:
                                self.living_cells.add((i, j))
                    if CONSOLE_OUTPUT:
                        print("Grid randomized")

                # checkered grid
                def checkered_grid(self):
                    # reset cell colors to empty
                    self.cell_colors = {}
                    self.living_cells = set()
                    iteration = 0
                    for i in range(ROWS):
                        # adding an extra iteration count for grids with even number of cols to offset and ensure checkers not stripes
                        if COLS % 2 == 0:
                            iteration += 1
                        for j in range(COLS):
                            # adding every other cell in row to living cells
                            iteration += 1
                            if iteration % 2 == 1:
                                self.living_cells.add((i, j))
                    if CONSOLE_OUTPUT:
                        print("Checkered grid")

                # striped grid. unbound due to uninteresting results.
                def striped_grid(self):
                    # reset cell colors to empty
                    self.cell_colors = {}
                    self.living_cells = set()
                    iteration = 0
                    # opposite of checkered grid pattern, offsetting only if odd number of cols
                    for i in range(ROWS):
                        if COLS % 2 == 1:
                            iteration += 1
                        for j in range(COLS):
                            iteration += 1
                            if iteration % 2 == 1:
                                self.living_cells.add((i, j))
                    if CONSOLE_OUTPUT:
                        print("Striped grid")

                # draw an 'X' pattern on the grid. effectively deprecated and no assigned on-screen button. just left it in for fun
                def draw_x(self):
                    # reset cell colors to empty
                    self.cell_colors = {}
                    self.living_cells = set()
                    for i in range(ROWS):
                        for j in range(COLS):
                            # add cell to living if row and col number match or if col number matches total rows minus row number, giving two intersecting diagonals
                            if j == i:
                                self.living_cells.add((i, j))
                            elif j == (ROWS - 1) - i:
                                self.living_cells.add((i, j))
                    if CONSOLE_OUTPUT:
                        print("'X' drawn")

                # fill grid. also unassigned to on-screen button due to lack of interesting results
                def fill_grid(self):
                    # reset cell colors to empty
                    self.cell_colors = {}
                    # add every possible cell to living cells
                    self.living_cells = set([(i, j) for i in range(ROWS) for j in range(COLS)])
                    if CONSOLE_OUTPUT:
                        print("Grid filled")

                # clear grid
                def clear_grid(self):
                    # reset cell colors to empty
                    self.cell_colors = {}
                    # make living_cells an empty set
                    self.living_cells = set()
                    if CONSOLE_OUTPUT:
                        print("Grid cleared")

                # save current grid to save_file path
                def save_grid(self):
                    with open(self.save_file, "w") as file:
                        dump(list(self.living_cells), file)
                    if CONSOLE_OUTPUT:
                        print("Current grid saved")

                # load grid from save_file path
                def load_grid(self):
                    # reset cell colors to empty
                    self.cell_colors = {}
                    # ensure file exists before opening
                    if isfile(self.save_file):
                        with open(self.save_file, "r") as file:
                            json_grid = load(file)

                        # convert list format from json to set of tuples
                        self.living_cells = set([tuple(i) for i in json_grid])
                    if CONSOLE_OUTPUT:
                        print("Loaded saved grid")

                # execute keydown events from those defined in controls dict
                def handle_controls(self, events):
                    for event in events:
                        if event.type == pg.KEYDOWN and event.key in self.controls:
                            self.controls[event.key]()

                # count the number of living neighbors for a given cell
                def count_neighbors(self, cell):
                    i, j = cell
                    neighbors = 0

                    if not self.walls:
                        # top left
                        if ((i - 1) % ROWS, (j - 1) % COLS) in self.living_cells:
                            neighbors += 1
                        # above
                        if ((i - 1) % ROWS, j) in self.living_cells:
                            neighbors += 1
                        # top right
                        if ((i - 1) % ROWS, (j + 1) % COLS) in self.living_cells:
                            neighbors += 1
                        # right
                        if (i, (j + 1) % COLS) in self.living_cells:
                            neighbors += 1
                        # bottom right
                        if ((i + 1) % ROWS, (j + 1) % COLS) in self.living_cells:
                            neighbors += 1
                        # below
                        if ((i + 1) % ROWS, j) in self.living_cells:
                            neighbors += 1
                        # bottom left
                        if ((i + 1) % ROWS, (j - 1) % COLS) in self.living_cells:
                            neighbors += 1
                        # left
                        if (i, (j - 1) % COLS) in self.living_cells:
                            neighbors += 1

                    else:
                        # top left
                        if i > 0 and j > 0 and (i - 1, j - 1) in self.living_cells:
                            neighbors += 1
                        # above
                        if i > 0 and (i - 1, j) in self.living_cells:
                            neighbors += 1
                        # top right
                        if i > 0 and j < COLS and (i - 1, j + 1) in self.living_cells:
                            neighbors += 1
                        # right
                        if j < COLS and (i, j + 1) in self.living_cells:
                            neighbors += 1
                        # bottom right
                        if i < ROWS and j < COLS and (i + 1, j + 1) in self.living_cells:
                            neighbors += 1
                        # below
                        if i < ROWS and (i + 1, j) in self.living_cells:
                            neighbors += 1
                        # bottom left
                        if i < ROWS and j > 0 and (i + 1, j - 1) in self.living_cells:
                            neighbors += 1
                        # left
                        if j > 0 and (i, j - 1) in self.living_cells:
                            neighbors += 1

                    return neighbors

                # advance grid forward one generation
                def sim_life(self):
                    dying_cells = []
                    born_cells = []
                    # resetting any cell_colors such that cells maintain their random color for one generation before returning to PIXEL_COLOR
                    if self.multicolor:
                        self.cell_colors.clear()

                    for i in range(ROWS):
                        for j in range(COLS):
                            # count all living neighbors for each cell
                            neighbors = self.count_neighbors((i, j))

                            if (i, j) in self.living_cells:
                                # continue living if 2 or 3 neighbors
                                if neighbors == 2 or neighbors == 3:
                                    continue
                                # die if more or fewer
                                elif neighbors < 2 or neighbors > 3:
                                    dying_cells.append((i, j))
                            else:
                                if self.high_birth_rate:
                                    neighbors_for_birth = [3, 5]
                                else:
                                    neighbors_for_birth = [3]
                                if neighbors not in neighbors_for_birth:
                                    continue
                                # new cell born if exactly 3 neighbors
                                else:
                                    born_cells.append((i, j))

                    # assign random color to each newly born cell if multicolor enabled
                    if self.multicolor:
                        for cell in dying_cells:
                            if cell in self.cell_colors:
                                del self.cell_colors[cell]
                        for cell in born_cells:
                            self.cell_colors[cell] = choice(COLORS)

                    self.equilibrium = not bool(dying_cells + born_cells)

                    # add newly born cells and remove dead cells from living_cells set
                    self.living_cells.update(born_cells)
                    self.living_cells.difference_update(dying_cells)

                # convert mouse pos to grid coords
                def get_pos_from_mouse(self, pos):
                    x, y = pos
                    # determine what row, col mouse is currently in by dividing by PIXEL_SIZE and offsetting half of the margins
                    row = (y - ((HEIGHT - PIXEL_SIZE * ROWS) // 2)) // PIXEL_SIZE
                    col = (x - ((WIDTH - PIXEL_SIZE * COLS) // 2)) // PIXEL_SIZE

                    return row, col

                # draw to screen
                def draw_window(self, buttons):
                    # fill window background
                    self.win.fill(BG_COLOR)

                    # draw one large canvas for currently dead cells
                    pg.draw.rect(
                        self.win,
                        CANVAS_COLOR,
                        (
                            (WIDTH - COLS * PIXEL_SIZE) / 2,
                            (HEIGHT - ROWS * PIXEL_SIZE) / 2,
                            COLS * PIXEL_SIZE,
                            ROWS * PIXEL_SIZE,
                        ),
                    )

                    # draw all living cells over canvas, according to their color if multicolor is enabled
                    for cell in self.living_cells:
                        if self.multicolor:
                            color = self.cell_colors.get(cell, BLACK)
                        else:
                            color = PIXEL_COLOR
                        pg.draw.rect(
                            self.win,
                            color,
                            (
                                cell[1] * PIXEL_SIZE + (WIDTH - (COLS * PIXEL_SIZE)) / 2,
                                cell[0] * PIXEL_SIZE + (HEIGHT - (ROWS * PIXEL_SIZE)) / 2,
                                PIXEL_SIZE,
                                PIXEL_SIZE,
                            ),
                        )

                    # draw grid lines if enabled
                    if self.draw_grid_lines:
                        # horizontal
                        for i in range(ROWS + 1):
                            pg.draw.line(
                                self.win,
                                GRID_LINE_COLOR,
                                (
                                    (WIDTH - PIXEL_SIZE * COLS) // 2,
                                    (HEIGHT - PIXEL_SIZE * ROWS) // 2 + i * PIXEL_SIZE,
                                ),
                                (
                                    ((WIDTH - (WIDTH - PIXEL_SIZE * COLS) // 2)),
                                    (HEIGHT - PIXEL_SIZE * ROWS) // 2 + i * PIXEL_SIZE,
                                ),
                            )
                        # vertical
                        for j in range(COLS + 1):
                            pg.draw.line(
                                self.win,
                                GRID_LINE_COLOR,
                                ((WIDTH - PIXEL_SIZE * COLS) // 2 + j * PIXEL_SIZE, 0),
                                (((WIDTH - PIXEL_SIZE * COLS) // 2 + j * PIXEL_SIZE, HEIGHT)),
                            )

                    # display title shadow and title
                    self.win.blit(
                        title_text_shadow,
                        (
                            WIDTH
                            - ((WIDTH - (PIXEL_SIZE * COLS)) // 4)
                            - title_text.get_width() // 2
                            + 2,
                            # y value assigned to sin of oscillation variable to cause title to oscillate up and down
                            27 + 20 * sin(self.oscillation / (7 / (ROWS / 100))),
                        ),
                    )
                    self.win.blit(
                        title_text_shadow2,
                        (
                            WIDTH
                            - ((WIDTH - (PIXEL_SIZE * COLS)) // 4)
                            - title_text.get_width() // 2
                            + 2,
                            # sin oscillation
                            127 + 20 * sin(self.oscillation / (7 / (ROWS / 100))),
                        ),
                    )
                    self.win.blit(
                        title_text,
                        (
                            WIDTH
                            - ((WIDTH - (PIXEL_SIZE * COLS)) // 4)
                            - title_text.get_width() // 2,
                            # sin oscillation
                            25 + 15 * sin(self.oscillation / (7 / (ROWS / 100))),
                        ),
                    )
                    self.win.blit(
                        title_text2,
                        (
                            WIDTH
                            - ((WIDTH - (PIXEL_SIZE * COLS)) // 4)
                            - title_text.get_width() // 2,
                            # sin oscillation
                            125 + 15 * sin(self.oscillation / (7 / (ROWS / 100))),
                        ),
                    )

                    # display buttons and control texts if controls enabled
                    if self.show_controls:
                        # draw each button object
                        for button in buttons:
                            button.draw()

                        self.win.blit(
                            space_control_text,
                            (
                                (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - space_control_text.get_width() // 2,
                                102,
                            ),
                        )
                        self.win.blit(
                            arrow_control_text,
                            (
                                (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - arrow_control_text.get_width() // 2,
                                211,
                            ),
                        )
                        self.win.blit(
                            d_control_text,
                            (
                                (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - d_control_text.get_width() // 2,
                                317,
                            ),
                        )
                        self.win.blit(
                            m_control_text,
                            (
                                (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - m_control_text.get_width() // 2,
                                423,
                            ),
                        )
                        self.win.blit(
                            a_control_text,
                            (
                                (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - a_control_text.get_width() // 2,
                                529,
                            ),
                        )
                        self.win.blit(
                            esc_control_text,
                            (
                                (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - esc_control_text.get_width() // 2,
                                634,
                            ),
                        )
                        self.win.blit(
                            r_control_text,
                            (
                                (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - r_control_text.get_width() // 2,
                                740,
                            ),
                        )
                        self.win.blit(
                            c_control_text,
                            (
                                (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - c_control_text.get_width() // 2,
                                846,
                            ),
                        )
                        self.win.blit(
                            h_control_text,
                            (
                                (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - h_control_text.get_width() // 2,
                                952,
                            ),
                        )
                        self.win.blit(
                            l_control_text,
                            (
                                WIDTH
                                - (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - l_control_text.get_width() // 2,
                                846,
                            ),
                        )
                        self.win.blit(
                            s_control_text,
                            (
                                WIDTH
                                - (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - s_control_text.get_width() // 2,
                                952,
                            ),
                        )
                        self.win.blit(
                            zero_control_text,
                            (
                                WIDTH
                                - (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - zero_control_text.get_width() // 2,
                                634,
                            ),
                        )
                        self.win.blit(
                            w_control_text,
                            (
                                WIDTH
                                - (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - w_control_text.get_width() // 2,
                                528,
                            ),
                        )
                        self.win.blit(
                            ctrl_control_text,
                            (
                                WIDTH
                                - (WIDTH - (PIXEL_SIZE * COLS)) // 4
                                - ctrl_control_text.get_width() // 2,
                                740,
                            ),
                        )
                    # draw any current ripple effects
                    if self.effects:
                        for effect in self.effects:
                            effect.draw()

                    # update display
                    pg.display.flip()

                # main
                def main(self):
                    # local variables
                    run = True
                    clock = pg.time.Clock()

                    # load and play first song
                    pg.mixer.music.load(SONGS[self.song_number])
                    pg.mixer.music.play(-1)

                    # creating button objects and assigning them their respective texts and functions
                    buttons = [
                        Button(
                            self,
                            (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15,
                            "␣",
                            self.toggle_simulation,
                        ),
                        Button(
                            self,
                            ((WIDTH - PIXEL_SIZE * COLS) / 2) // 3 - 15,
                            HEIGHT // 15 * 2.6,
                            "<",
                            self.decrease_speed,
                        ),
                        Button(
                            self,
                            (((WIDTH - PIXEL_SIZE * COLS) / 2) // 3) * 2 + 15,
                            HEIGHT // 15 * 2.6,
                            ">",
                            self.increase_speed,
                        ),
                        Button(
                            self,
                            (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15 * 4.2,
                            "D",
                            self.toggle_draw_grid_lines,
                        ),
                        Button(
                            self,
                            (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15 * 5.8,
                            "M",
                            self.toggle_multicolor,
                        ),
                        Button(
                            self,
                            (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15 * 7.4,
                            "A",
                            self.toggle_autostop,
                        ),
                        Button(
                            self,
                            (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15 * 9,
                            "Esc",
                            self.clear_grid,
                        ),
                        Button(
                            self,
                            (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15 * 10.6,
                            "R",
                            self.randomize_grid,
                        ),
                        Button(
                            self,
                            (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15 * 12.2,
                            "C",
                            self.checkered_grid,
                        ),
                        Button(
                            self,
                            (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15 * 13.8,
                            "H",
                            self.toggle_show_controls,
                        ),
                        Button(
                            self,
                            WIDTH - (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15 * 13.8,
                            "S",
                            self.save_grid,
                        ),
                        Button(
                            self,
                            WIDTH - (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15 * 12.2,
                            "L",
                            self.load_grid,
                        ),
                        Button(
                            self,
                            WIDTH - (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15 * 10.6,
                            "CTRL",
                            self.next_track,
                        ),
                        Button(
                            self,
                            WIDTH - (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15 * 9,
                            "0",
                            self.toggle_mute,
                        ),
                        Button(
                            self,
                            WIDTH - (WIDTH - PIXEL_SIZE * COLS) / 4,
                            HEIGHT // 15 * 7.4,
                            "W",
                            self.toggle_walls,
                        ),
                    ]

                    # start sim event
                    pg.time.set_timer(SIM_LIFE, SIMULATION_SPEED)

                    # main loop
                    while run:
                        # 120 fps
                        clock.tick(120)
                        # resetting mouse to regular arrow
                        pg.mouse.set_cursor(pg.SYSTEM_CURSOR_ARROW)

                        # increment oscillation variable for sin oscillation
                        if self.simulate:
                            self.oscillation += 0.75
                            # reset to 0 after full oscillation
                            if self.oscillation > 58:
                                self.oscillation = 0

                        # get events
                        events = pg.event.get()
                        # mouse position on screen
                        pos = pg.mouse.get_pos()
                        # get mouse location on grid
                        row, col = self.get_pos_from_mouse(pos)

                        # drawing with mouse, left click
                        if pg.mouse.get_pressed()[0]:
                            # check to make sure mouse is on grid
                            if COLS > col >= 0 and ROWS > row >= 0:
                                if (row, col) not in self.living_cells:
                                    # draw cell
                                    self.living_cells.add((row, col))
                                    # add effect if cell drawn
                                    self.effects.append(Effect(self, pos[0], pos[1]))

                        # erasing with mouse, right click
                        if pg.mouse.get_pressed()[2]:
                            # check to make sure mouse is on grid
                            if COLS > col >= 0 and ROWS > row >= 0:
                                # remove from living_cells if cell is currently in set
                                if (row, col) in self.living_cells:
                                    self.living_cells.remove((row, col))

                        if self.show_controls:
                            for button in buttons:
                                # check if mouse is currently hovering over button
                                if not button.hovered(pos):
                                    button.is_hovered = False
                                    continue
                                # set button's state to is_hovered
                                button.is_hovered = True
                                # change cursor to click hand
                                pg.mouse.set_cursor(pg.SYSTEM_CURSOR_HAND)

                        # events
                        for event in events:
                            # allow exit
                            if event.type == pg.QUIT:
                                run = False
                                break

                            # execute keydown events
                            if event.type == pg.KEYDOWN:
                                self.handle_controls(events)

                            # mouse click events
                            if event.type == pg.MOUSEBUTTONDOWN:
                                # left click
                                if pg.mouse.get_pressed()[0]:
                                    if self.show_controls:
                                        for button in buttons:
                                            # check if a button is hovered when left click occurs
                                            if not button.hovered(pos):
                                                continue

                                            # change button state to is_clicked
                                            button.is_clicked = True
                                            # execute button's callback function
                                            button.click()

                                # middle click to start simulation
                                if pg.mouse.get_pressed()[1]:
                                    self.toggle_simulation()

                            # revert button clicked state if left mouse button is unclicked
                            if event.type == pg.MOUSEBUTTONUP:
                                if not pg.mouse.get_pressed()[0]:
                                    for button in buttons:
                                        if button.is_clicked:
                                            button.is_clicked = False

                            # simulate next generation on SIM_LIFE event if currently in simulation state
                            if event.type == SIM_LIFE:
                                if self.simulate:
                                    if self.living_cells:
                                        self.sim_life()
                                    else:
                                        # stop simulating when no living cells remain
                                        if self.autostop:
                                            self.simulate = False
                                            if CONSOLE_OUTPUT:
                                                print("Empty")
                                    # check if grid is in state of equilibrium and stop if autostop enabled
                                    if self.equilibrium:
                                        if self.autostop:
                                            self.simulate = False
                                            if CONSOLE_OUTPUT:
                                                print("Equilibrium")

                        # draw window
                        self.draw_window(buttons)

                        effects_to_remove = []
                        if self.effects:
                            for effect in self.effects:
                                # update any effects
                                effect.update()
                                # slate for removal if completed
                                if len(effect.circles) == 0:
                                    effects_to_remove.append(effect)

                        # remove effects slated for removal
                        if effects_to_remove:
                            for item in effects_to_remove:
                                self.effects.remove(item)

                    # quit and exit if loop is exited
                    pg.quit()
                    exit()


            # run main function
            if __name__ == "__main__":
                Program().main()
        </code></pre>
        <p>
            Not as much a true beginner project, but one of my favorite projects to tackle in one of my favorite languages. The Game of Life,
            at least as I've implemented here, is great to learn and/or practice object-oriented programming, handling states, imports, mouse control,
            drawing to the screen, Pygame in general, and loading and using images and audio. 
        </p>
        <div id="home-button">Home</div>
    `,document.querySelectorAll(`#home-button`).forEach(e=>{e.addEventListener(`click`,e=>{i()})})}function i(){document.querySelector(`#app`).innerHTML=`
        <h1>Project Sampler</h1>
        <h3>Select a language:</h3>
        <div id="card-container">
            <div class="card" id="python-card">
                <p class="card-title">Python</p>
                <p class="card-description">Some brief Python project description</p>
            </div>
            <div class="card" id="js-card">
                <p class="card-title">JavaScript</p>
                <p class="card-description">What Day of the Week Is That?</p>
            </div>
            <div class="card" id="lua-card">
                <p class="card-title">Lua</p>
                <p class="card-description">Vigènere Cipher Solver</p>
            </div>
        </div>
        `,document.querySelector(`#js-card`).addEventListener(`click`,e=>{n()}),document.querySelector(`#python-card`).addEventListener(`click`,e=>{r()}),document.querySelector(`#lua-card`).addEventListener(`click`,e=>{t()})}i();