//  dont touch this file!!!!!!!!!!!!
//  if you want to write js, create a js file 
class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header">
                    <img src="../images/logo/logo1.png" alt="EDSU Logo" width="50.91px">
                    <p>Edo State <br> Univeristy Uzairue</p>
                </div>
                <nav class="navbar">
                    <ul>
                        <li><a href="./login.html">Login</a></li>
                        <li><a href="./signup.html">Sign Up</a></li>
                        <li><a href="./details.html">Students Details</a></li>
                        <li><a href="./Adashboard.html">Activity Dashboard</a></li>
                        <li><a href="./Edashboard.html">Empty dashboard</a></li>
                        <li><a href="./Stimetable.html">Student Timetable</a></li>
                        <li><a href="./Ftimetable.html">Faculty Timetable</a></li>
                        <li><a href="./courses.html">Courses</a></li>
                        <li><a href="./profile.html">Profile</a></li>
                        <li><a href="./logout.html">Logout</a></li>
                        <li><a href="./navbar.html">Navbar</a></li>
                        <li><a href="./topbar.html">TopBar</a></li>
                    </ul>
                </nav>
            </header>
        `
    }
}


customElements.define('app-navbar', Navbar)