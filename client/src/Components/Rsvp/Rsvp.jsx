import "./Rsvp.scss";
import { useState } from "react";

export function Rsvp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [attendance, setAttendance] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        console.log("Name: ", name);
        console.log("Email: ", email);
        console.log("Attendance: ", attendance);

        //logic here to call on api to add to guestlist

    }


    return (
        <section className="rsvp">
            <h1>RSVP</h1>
            <form onSubmit={handleSubmit}>
                <div className="rsvp__name">
                    <label htmlFor="name">Name: </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="rsvp__email">
                    <label htmlFor="email">Email: </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <h2>Will you be attending?</h2>
                <div className="rsvp__radio">
                    <ul className="rsvp__options">
                        <li>
                            <input
                                type="radio"
                                id="yes"
                                name="attendance"
                                value="yes"
                                checked={attendance === "yes"}
                                onChange={(e) => setAttendance(e.target.value)}
                            />
                            <label htmlFor="yes">Yes, I will be there</label>
                        </li>
                        <li>
                            <input
                                type="radio"
                                id="no"
                                name="attendance"
                                value="no"
                                checked={attendance === "no"}
                                onChange={(e) => setAttendance(e.target.value)}
                            />
                            <label htmlFor="no">No, I'm too in love with the groom</label>
                        </li>
                    </ul>
                </div>

                <input type="submit" value="Submit" />
            </form>
        </section>
    );
}
